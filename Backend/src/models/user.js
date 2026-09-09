const mongoose = require("mongoose") ; 
const validator = require("validator") ; 
const bcrypt = require("bcrypt") ;  
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
   firstName : {
    type : String , 
    required : true  , 
    maxLength : 50  , 
  } ,
  lastName : {
    type : String
  } ,
  emailID : {
    type : String ,
    required : true , 
    unique : true  , 
    lowercase : true  , 
    trim : true  , 
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("invalid email address")
      }
    }
  } ,
  password : {
    type : String ,
    required : true  , 
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("password too weak , try a stronger password , it must be in format => { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }")
      }
    }
  } , 
  age : {
    type : Number , 
    min : 18 , 
  } , 
  gender : {
    type : String ,
    // validate func only run on new user , to run it on updates 
    validate(value){
      if( !["male" , "female" , "other"].includes(value)){
        throw new Error("Invalid Gender");
      }
    }
  } , 
  photoUrl : {
    type : String , 
    default : "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80" ,
    
    validate(value){
      if(!validator.isURL(value)){
        throw new Error("invalid url ")
      }
    }
    
   } , 
   bio : {
    type : String , 
    default : "I am the new user" , 
    maxLength : 200
   } , 
   skills :{
    type : [String] , 
    validate: {
      validator: function (skills) {
          return skills.length <= 10;
      },
      message: "You can have at most 10 skills"
    }
   }
  } 
 , {
  timestamps : true
}) ;

userSchema.methods.getJWT = async function () {
  const user = this ; 

  const token =  jwt.sign({_id : user._id} , process.env.JWT_SECRET , {
    expiresIn : "30d" ,
  }) ; 

  return token ;
}

userSchema.methods.validatePassword = async function (password) {
  const user = this ; 

  const ispasswordValid = await bcrypt.compare(password , user.password ) ;

  return ispasswordValid ;
}

const User =  mongoose.model("User" , userSchema) ; 

module.exports = {
  User , 
}