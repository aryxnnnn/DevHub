const express = require("express") ; 

const authRouter = express.Router() ; 

const {User} = require("../models/user.js") ; 
const bcrypt = require ("bcrypt") ;
const {validateSignup} = require("../utils/validation.js") ;

authRouter.post("/signup" , async(req , res) =>{
  
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

authRouter.post("/login" , async(req, res)=>{
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

authRouter.post("/logout" , async(req , res) =>{
    res.cookie("token" , null , {
      expires : new Date(Date.now()) 
    })
    res.send("user logged out") ; 
}) ; 

module.exports = authRouter ;
