const express = require("express") ; 
const cookieParser = require("cookie-parser") ; 
require("dotenv").config();
const cors = require("cors")
const app = express() ; 

const initialiseSocket = require("./utils/Socket.js") 
const http = require("http") ; 
const server = http.createServer(app) ;
initialiseSocket(server)

// require("./utils/cronjob.js") ; 

const {connectDB} =require("./config/db.js") ;

app.use(cors({
  origin : "http://localhost:5173" , 
  credentials : true 
} )) ;
app.use(express.json()) ;
app.use(cookieParser()) ; 

const authRouter = require("./routes/auth.js")
const profileRouter = require("./routes/profile.js") 
const requestRouter = require("./routes/request.js")
const userRouter = require("./routes/user.js")
const chatRouter = require("./routes/chat.js")

app.use("/" , authRouter) ; 
app.use("/" , profileRouter) ; 
app.use("/" , requestRouter) ; 
app.use("/" , userRouter) ; 
app.use("/" , chatRouter) ; 

connectDB()
  .then( ()=>{
    console.log("DB connected Successfully") 
    server.listen(7777 , ()=>{
      console.log("server is successfully running on port 7777") ; 
    }) ;  
  })
  .catch( (err) =>{
    console.log("DB cannot be connected , please try after sometime !")
  });

app.get("/" ,(req,res)=>{
  res.send("Hello , Welcome to the server!") ;
}) ;
app.get("/test",(req,res)=>{
  res.send("what exactly you waana test!") ;
}) ;
app.get("/about" ,(req,res)=>{
  res.send("nothing about us.....") ;
}) ;

app.get("/user" , (req , res) =>{
  res.send({ username : "Aryan" , Branch : "Mechanical"})
})

app.post("/user" , (req , res) =>{
  res.send("Added user successfully")
})

