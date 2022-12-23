import User from "../model/userModel";
import express from 'express';
import { generateToken } from "../utils";


const userRouter = express.Router();

userRouter.post('/register',async (req,res)=>{
    try{

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        const createdUser = await user.save();
        if(!createdUser){
            res.status(401).send({
                message: 'Invalid user Data',
            });
        }else{
            res.send({
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
                isAdmin: createdUser.isAdmin,
                snakeScore: createdUser.snakeScore,
                token: generateToken(createdUser),
            });
        }
   
    }catch(err){
        res.status(500).send({message: err.message});
    }

})

userRouter.post('/signin', async (req,res)=>{
    
    const email = req.body.email;
    const password = req.body.password;

    const signinUser = await User.findOne({email:email});

    // res.send(signinUser);


    if(!signinUser){
        res.status(401).send({
            message: 'Invalid Email or Password',
        });
    }else{
        if(signinUser.password == password){
            res.send({
                _id: signinUser._id,
                name: signinUser.name,
                email: signinUser.email,
                isAdmin: signinUser.isAdmin,
                snakeScore: signinUser.snakeScore,
                token: generateToken(signinUser),
            });
        }else{
            res.status(401).send({
                message: 'Invalid Email or Password',
            });
        }      
    }
    
});

userRouter.put('/:id', async (req,res)=>{

    const user = await User.findById(req.params.id);
    
    if(!user){
        res.status(401).send({
            message: 'User Not Found',
        });
    }else{
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        user.snakeScore = req.body.snakeScore || user.snakeScore;

        const updatedUser = await user.save();

        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            snakeScore: updatedUser.snakeScore,
            token: generateToken(updatedUser),
        });
    }
});


export default userRouter;