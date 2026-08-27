const express = require("express") ; 

const profileRouter = express.Router() ; 
const {userAuth} = require("../middleware/auth.js") ;
const {User} = require("../models/user.js") ;
const bcrypt = require ("bcrypt") ;
const {validateEditProfileData , validateChangePassword} = require("../utils/validation.js") ;

profileRouter.get("/profile/view" , userAuth, async(req, res)=>{
  try {
      const user = req.user ; 
      res.send(user) ; 
  } catch (error) {
    res.status(400).send(error.message)
  }
})

profileRouter.patch("/profile/edit" , userAuth , async(req , res)=>{
  try {
      const notAllowedFields =  validateEditProfileData(req) ;  

      if (notAllowedFields.length > 0) {
        throw new Error(`These fields cannot be edited: ${notAllowedFields.join(", ")}`)
      }

      const loggedInUser = req.user ;
      console.log(loggedInUser) ; 
      
      Object.keys(req.body).forEach((key)=> loggedInUser[key] = req.body[key])
      await loggedInUser.save() ; 
      console.log(loggedInUser) ; 
      
      res.json({message :"profile updated successfully" , data : loggedInUser})
      
    } catch (error) {
      res.status(400).send(error.message);
    }
  } ) ;
  
  profileRouter.patch("/profile/password" , userAuth , async(req, res)=>{
    try {
      // userAuth already confirm user is logged in 
      //sanitize the data 
      if(!validateChangePassword(req)){
        throw new Error("please enter your current password and new password only !")
      }
      
      //  validating the current password 
      const loggedInUser = req.user ; 
      const isPasscorrect = await loggedInUser.validatePassword(req.body.password) ; 
      
      if(!isPasscorrect) throw new Error("Wrong password") ; 
      
      console.log("old password " ,loggedInUser.password ) ;
      loggedInUser.password = await bcrypt.hash(req.body.newPassword , 10) ;
      console.log("new password " ,loggedInUser.password ) ;

      await loggedInUser.save() ; 

      res.send("password updated successfully !") ; 
    
  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = profileRouter;