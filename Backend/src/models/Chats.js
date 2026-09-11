const mongoose = require("mongoose") ; 

const messagesSchema = new mongoose.Schema({
  senderId :{
    type : mongoose.Schema.Types.ObjectId , 
    ref : "User" , 
    required : true 
  } , 
  message : {
    type : String , 
    required : true , 
  }, 
  status : {
    type: String,
    enum: ["sent", "delivered", "seen"],
    default: "sent",
  }

} , {timestamps : true }) ; 


const chatSchema = new mongoose.Schema({
  participants : [{type : mongoose.Schema.Types.ObjectId , ref : "User" , required : true}] , 
  messages : [messagesSchema] , 
} , {
  timestamps : true
})

const Chat = new mongoose.model("Chat" , chatSchema) ; 

module.exports = { 
  Chat
}
