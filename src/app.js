const express = require("express") ; 
const bcrypt = require ("bcrypt") ;
const validator = require("validator") ; 
const cookieParser = require("cookie-parser") ; 
const jwt = require("jsonwebtoken") ; 

const app = express() ; 

const {connectDB} =require("./config/db.js") ;
const {User} = require("./models/user.js") ; 
const {userAuth} = require("./middleware/auth.js") ;

const {validateSignup} = require("./utils/validation.js") ;

app.use(express.json()) ;
app.use(cookieParser()) ; 


app.post("/signup" , async(req , res) =>{
  
  try {
      // validatiing the data 
      validateSignup(req) ; 

      //encryting the password 
      req.body.password = await bcrypt.hash(req.body.password , 10) ; 

      // creating new instance for a user using User model 
      const user = new User(req.body) ;
      await user.save() 
      res.send("user added successfully") ;
     
  } catch (error) {
    res.status(400).send("error saving the user coz : " + error.message)
  }

}) ;

app.post("/login" , async(req, res)=>{
  try {
    const {emailID , password} = req.body ; 

    const user = await User.findOne({emailID : emailID}).exec() ;
    if(!user){
      throw new Error("Bad Credentials")
    }
    const ispasswordValid = await user.validatePassword(password) ;  

    if(ispasswordValid){ 
      // authenicated user to be rerouted to home page 

      // generate a JWT 
      var token = await user.getJWT() ;


      // send back a cookie 
      res.cookie("token" ,token)  ;
      res.send("user logged in")
    }
    else{
      throw new Error("Bad Credentials") ;
    }

  } catch (error) {
    res.status(404).send(error.message)
  }
})

app.get("/profile" , userAuth, async(req, res)=>{
  try {
      const user = req.user ; 
      res.send(user) ; 
  } catch (error) {
    res.status(400).send(error.message)
  }
})


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

// const {userAuth} = require("./middleware/auth.js")

// app.get(
//   "/user" , userAuth  , 
//   (req , res , next) =>{
//     next() ; 
//     console.log("req 1 made by user") ; 
//     // res.send("first response") ; 
//   } , 
//   (req , res)=>{
//     console.log("req 2 made by user")
//     res.send("second response") ; 
//   }
// )

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

