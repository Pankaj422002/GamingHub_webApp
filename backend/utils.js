import Mailgen from "mailgen";
import nodemailer from 'nodemailer';
import config from "./config";
import jwt from "jsonwebtoken";

export const sendmail = (userEmail,otp,userName)=>{


    let configuration = {
        service: 'gmail',
        auth: {
            user: config.EMAIL,
            pass: config.PASSWORD
        }
    }
    let transporter = nodemailer.createTransport(configuration);

    let MailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'mailgen',
            link: 'https://mailgen.js/'
        }
    })

    // let response = {
    //     body: {
    //         name:userName,
    //         intro:"your OTP is: ",
    //         table:{
    //             data:[{
    //                 item: "Nodemailer Stack Book",
    //                 description: "A Backend Application",
    //                 price: "$10.99",
    //             }]
    //         },
    //         outro: "Looking forward to do more business"
    //     }
    // }

    let response = {
        body: {
            name:userName,
            intro:"your OTP is: ",
            outro:otp
        }
    }

    let mail = MailGenerator.generate(response);
    
    let message = {
        from: config.EMAIL,
        to: userEmail,
        subject: "Verification Mail",
        html: mail
    }

    return transporter.sendMail(message);
}

export const generateOTP = ()=>{
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

export const generateToken = (user)=>{
    return jwt.sign(
    {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    },
    config.JWT_SECRET
    );
};