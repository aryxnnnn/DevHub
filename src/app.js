const express = require("express") ; 

const cookieParser = require("cookie-parser") ; 

const app = express() ; 

const {connectDB} =require("./config/db.js") ;

app.use(express.json()) ;
app.use(cookieParser()) ; 

const authRouter = require("./routes/auth.js")
const profileRouter = require("./routes/profile.js") 
const requestRouter = require("./routes/request.js")
const userRouter = require("./routes/user.js")

app.use("/" , authRouter) ; 
app.use("/" , profileRouter) ; 
app.use("/" , requestRouter) ; 
app.use("/" , userRouter) ; 

connectDB()
  .then( ()=>{
    console.log("DB connected Successfully") 
    app.listen(7777 , ()=>{
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

