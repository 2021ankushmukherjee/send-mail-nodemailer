const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {
        user : "example@gmail.com",
        pass : "password"
    }

});

const mailOptions = {

    from : "example@gmail.com",
    to : "receiver1@gmail.com, receiver2@gmail.com",
    subject : "mail test by node",
    text : `body message`,
    
   // html : "<h1> This is a heading <h1/><p> this is a body <p/>"
}

transporter.sendMail(mailOptions, (err,info)=>{

    if (err){
        console.log(err);
    }
    else{
        console.log("Email send: " + info.response);
    }

});



app.listen(5000, ()=>{

    console.log("server is connected successfully");
});

