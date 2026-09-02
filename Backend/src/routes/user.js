const express = require("express") ; 
const userRouter = express.Router() ; 
const {userAuth} = require("../middleware/auth.js") ;
const {User} = require("../models/user.js")
const {ConnectionRequest} = require("../models/connectionRequest.js")

userRouter.get("/user/requests" , userAuth , async(req,res)=>{
  try {
     // geting all the user requests ; 
     const loggedInUser = req.user ; 
   
    // return an array
     const userRequests = await ConnectionRequest.find({
       toUserId : loggedInUser._id , 
       status : "interested", 
     }).populate("fromUserId" , ["firstName" , "lastName" , "age" , "photoUrl"]) ; 

     res.json({ 
      message : "here are the connection requests for " + loggedInUser.firstName , 
      userRequests 
     })
  } catch (error) {
    res.status(400).send(error.message)  ; 
  }
} ); 

userRouter.get("/user/connections" , userAuth , async(req , res)=>{
  try {
    const loggedInUser = req.user ; 

    const userConnections = await ConnectionRequest.find({
      $or : [
        { fromUserId : loggedInUser._id , status : "accepted" } , 
        { toUserId : loggedInUser._id , status : "accepted" }
      ]
    })
    .populate("fromUserId", ["firstName","lastName","age","photoUrl"])
    .populate("toUserId", ["firstName","lastName","age","photoUrl"])

    const connections = userConnections.map((connection)=>{
      if(connection.toUserId._id.equals(loggedInUser._id)){
        return connection.fromUserId ;
      }
      return connection.toUserId ; 
    })

    res.json({
      message: "Here are your connections",
      connections
    })

  } catch (error) {
    res.status(400).send(error.message)  ; 
  }
}) ; 

userRouter.get("/user/feed" , userAuth , async(req , res )=>{
  try {
    const loggedInUser = req.user ; 

    const page = parseInt(req.query.page)  || 1 ; 
    let limit = parseInt(req.query.limit) || 10 ; 
    limit = limit > 50 ? 50 : limit ; 

    const skip = (page-1)*limit ; 

    //finding all the CR i recieved or sent , basically interacted with  ; 
    const myRequests = await ConnectionRequest.find({
      $or : [
        {fromUserId : loggedInUser._id} , 
        {toUserId : loggedInUser._id}
      ]
    })

    let myInteractions = myRequests.map((request)=>{
      if(request.toUserId.equals(loggedInUser._id)){
        return request.fromUserId ; 
      }
      return request.toUserId; 
    })
    
    myInteractions.push(loggedInUser._id) ; 

    const Feed = await User.find({
       _id : {$nin : myInteractions}
    }) .select(["firstName" , "skills" , "age" , "gender" , "photoUrl" , "bio" ])
      .skip(skip)
      .limit(limit) ; 

    res.json({
      message : "here's your feed " , 
      Feed
    })

  } catch (error) {
    res.status(400).send(error.message) ;
  }
}) ; 



module.exports = userRouter ; 

