const express = require("express") ; 
const userRouter = express.Router() ; 
const {userAuth} = require("../middleware/auth.js") ;
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



module.exports = userRouter ; 

