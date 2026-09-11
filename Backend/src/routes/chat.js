const express = require("express") ; 
const chatRouter = express.Router() ; 

const {User} = require("../models/user.js") ; 
const {Chat} = require("../models/Chats.js") ; 
const { userAuth } = require("../middleware/auth.js");

chatRouter.post("/chat" ,userAuth ,  async(req,res)=>{
  try {
    const loggedUser = req.user ; 
    const {targetId} = req.body ; 
    // console.log(targetId)
    
    let chat = await Chat.findOne({
      participants : {$all : [loggedUser._id , targetId]}
    }).populate("participants", "firstName")
    .populate({
      path : "messages.senderId" ,  
      select : "firstName lastName"
    })

    if(!chat){
      chat = new Chat({
        participants : [loggedUser._id, targetId] , 
        messages : []
      })
      await chat.save() ; 
    }    

    const targetUser = chat.participants.find(
      (participant) => participant._id.toString() === targetId );
    
    console.log(chat)

    res.json({
      message : ` here are you chats with ${targetUser.firstName} ` , 
      chat
    })
    
  } catch (error) {
    res.status(400).send(error.message) ; 
  }
})

module.exports = chatRouter ; 