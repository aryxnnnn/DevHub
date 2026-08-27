const validator = require("validator") ; 

const validateSignup = (req)=>{
    const {firstName , lastName , emailID, password} = req.body ; 

    if (!firstName || !lastName || !emailID || !password) {

        throw new Error("Please provide all required fields");
    }
    else if ( typeof firstName !== "string" || !firstName.trim() ||
              typeof lastName !== "string" ||!lastName.trim()) {

        throw new Error("Please enter a valid name");
    }
    else if(!validator.isEmail(emailID)){

      throw new Error("invalid email format , please use a valid mail")
    }
    else if(!validator.isStrongPassword(password)){

      throw new Error("please use this format for password -> { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 } ")
    }
};

module.exports = {
  validateSignup , 
}