 const cron = require("node-cron") ; 
 console.log("Cron job file loaded");
 const sendEmail = require("../utils/sendEmail.js")

 const {ConnectionRequest} = require("../models/connectionRequest.js");

 cron.schedule("0 8 * * *" , async()=>{
    console.log("hello world" + new Date()) ;
    
    const pendingRequest = await ConnectionRequest.find({
      status:"interested" , 
      createdAt : {
        $gte : new Date(Date.now() - 24*60*60*1000) , 
        $lt : new Date(Date.now()) ,
      } , 
    }).populate("fromUserId toUserId") ; 

    const listofEmails = [...new Set(pendingRequest.map(req => req.toUserId.emailID))]

    for(const mail of listofEmails){
      try {
        const res = await sendEmail.run(`New Connection Requests for ${mail}` ,
          `please login to devhub4u.dpdns.org for reviewing your connection requests`
         ) ; 
      } catch (error) {
        console.error("Cron job error:", err);
      }
    }
 }) 