import express from 'express';
import { generateOTP, sendmail } from "../utils";

const mailRouter = express.Router();

mailRouter.post('/sendmail',(req,res)=>{

    const OTP = generateOTP();
    // console.log('otp is: ',OTP);
    sendmail(req.body.email,OTP,req.body.name)
        .then(r=>{
            // console.log(r);
            res.status(200).json({msg: OTP})
        })
        .catch(e=>{
            // console.log(e);
            res.status(500).json({error:e})
        });
})

export default mailRouter;