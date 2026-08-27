
const mongoose = require("mongoose") ; 


const connectDB = async() =>{
  await mongoose.connect(
    "mongodb+srv://aryankaushik38108_db_user:Joker6969@clusternode.zwg4hew.mongodb.net/DevHub"
  ) ;
} ; 

module.exports ={
  connectDB ,
}
