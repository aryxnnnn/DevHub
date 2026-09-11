const socket = require("socket.io") ; 
const {Chat} = require("../models/Chats") ; 
const {ConnectionRequest} = require("../models/connectionRequest.js")

const initialiseSocket = (server)=>{
  const io = socket(server , {
    cors :{
      origin : "http://localhost:5173"
    }
  })

  io.on("connection" , (socket)=>{
    //handle event
    // console.log("NEW SOCKET CONNECTED:", socket.id);

    socket.on("joinchat" , ({name ,myId , targetId})=>{
      const roomId = [myId, targetId].sort().join("_");
      // console.log(name + " has joined room => " + roomId)
      // console.log(roomId) ; cat .gitignore
      socket.join(roomId) ;  
      
    })
    socket.on("sendMessage" , async({myId, targetId, name, message , time })=>{
      try {
        
        const canSend = await ConnectionRequest.findOne({
          $or: [
            { fromUserId: myId,toUserId: targetId },
            { fromUserId: targetId,toUserId: myId }
          ], 
          status : "accepted" 
        }) ; 
        
        if(!canSend){
          throw new Error("Please Connect first to send a message") ; 
        }
        
        // find a chat  
        let chat = await Chat.findOne({
          participants : {$all : [myId , targetId]}
        })
        
        if(!chat){
          chat = new Chat({
            participants : [myId , targetId] , 
            messages : []
          })
        }
        
        chat.messages.push({
          senderId : myId , 
          message : message
        })
        
        await chat.save() ; 

        const roomId = [myId, targetId].sort().join("_");
        io.to(roomId).emit("messageRecieved" , {senderId: myId, name , message , time})
        
      } catch (error) {
        
      }
    })
    socket.on("disconnect" , ()=>{
    })
  })
}
module.exports = initialiseSocket ;