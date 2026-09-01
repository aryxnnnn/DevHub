const express = require("express") ; 
const mongoose = require("mongoose")

const {userAuth} = require("../middleware/auth.js") ;
const {ConnectionRequest} = require("../models/connectionRequest.js")
const {User} = require("../models/user.js") ;

const requestRouter = express.Router() ; 

requestRouter.post("/request/send/:status/:toUserId" ,userAuth , async(req,res)=>{
  try {
    const fromUserId = req.user._id ; 
    const toUserId = req.params.toUserId ; 
    const status = req.params.status ;

    // sanitize the data 
    const allowedstatus = ["ignore" , "interested"] ; 

    if(!allowedstatus.includes(status)){
      return res.status(400).json({messgae : "invalid status type :" + status})
    }

    
    if (!mongoose.Types.ObjectId.isValid(toUserId)) {
      return res.status(400).send("Invalid user ID");
    }

    const userexists = await User.findById(toUserId) ;  
    if(!userexists){
      return res.status(400).send("User doesnot exist") ; 
    }

    // what if there is an existing connection request 

    const existingConnectionRequest =await ConnectionRequest.findOne({
      $or : [
        {fromUserId , toUserId},
        {fromUserId :toUserId ,toUserId : fromUserId}
      ]
    }) 

    if(existingConnectionRequest){
      return res.status(400).send("connection Request already exists") ; 
    }
    
    const connectionRequest = new ConnectionRequest({
      fromUserId , 
      toUserId , 
      status 
    })

    const data = await connectionRequest.save() ; 

    res.json({
      message : "connection req sent successfully" , 
      data 
    })
    
  } catch (error) {
    res.status(400).send(error.message) ; 
  }
} )

requestRouter.post("/review/:status/:requestId" , userAuth ,async(req,res)=>{
  try {
    const loggedInUser = req.user ; 

    const {status , requestId} = req.params; 
    const allowedstatus = ["accepted" , "rejected"] ; 

    if(!allowedstatus.includes(status)){
      return res.status(400).json({messgae : "invalid status type :" + status})
    }

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
      return res.status(400).send("Invalid requestId");
    }

    const requestDoc = await ConnectionRequest.findById(requestId) ; 

    if(requestDoc === null){
      return res.status(400).send("request does not exist") ; 
    }

    if (!requestDoc.toUserId.equals(loggedInUser._id)) {
      return res.status(400).send("You are not authorized to review this request");
    }

    if (requestDoc.status !== "interested") {
      return res.status(400).send("Request has already been handled");
    }

    requestDoc.status = status ; 

    const data = await requestDoc.save() ; 

    res.json({
      message : "connection request " + status , 
      data
    })

  } catch (error) {
    res.status(400).send(error.message) ;
  }
} )

module.exports = requestRouter   ; 
