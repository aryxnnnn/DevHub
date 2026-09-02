 const mongoose = require("mongoose") ; 

 const connectionRequestSchema = new mongoose.Schema({
      fromUserId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User"  , 
        required : true , 
        
      },
      toUserId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User"  , 
        required : true , 
      },
      status : {
        type : String , 
        enum : {
          values : ["ignore" , "interested" , "accepted" , "rejected" , "disconnected"] , 
          message : `status {value} is not supported`
        }
      }
 } , {
  timestamps : true
 }) ; 

connectionRequestSchema.pre ("save" , function(){
    const connectionRequest = this ; 

    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
      throw new Error("can't send request to yourself") ; 
    }

})  


// compound indexing 
connectionRequestSchema.index({fromUserId: 1 , toUserId : 1}) ; 


const ConnectionRequest = new mongoose.model("ConnectionRequest" , connectionRequestSchema) ; 

module.exports = { 
  ConnectionRequest
}

