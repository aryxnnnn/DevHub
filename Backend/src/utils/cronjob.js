 const cron = require("node-cron") ; 
 console.log("Cron job file loaded");
 cron.schedule("* * * * *" , ()=>{
    console.log("hello world" + new Date()) ; 
 })