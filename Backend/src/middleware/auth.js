 const jwt = require("jsonwebtoken") ; 
 const {User} = require("../models/user") ;
 
 

const userAuth = async(req , res , next) =>{

  try {
    
    
    const {token} = req.cookies ;
    if(!token){
      throw new Error("invalid token") ; 
    } 
    
    let decoded = jwt.verify(token, "DevHub@6969") ; 
    
    const user = await User.findOne({_id : decoded._id}).exec() ; 
    if(!user){
      throw new Error("user not found !") ; 
    }
    else{
      req.user = user ; 
      next() ; 
    }

  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  userAuth , 
}
