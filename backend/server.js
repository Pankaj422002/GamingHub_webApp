import express from 'express';
import config from './config';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './Routers/UserRouter';
import mailRouter from './Routers/MailsendingRouter';
import path from 'path';

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 9000;

mongoose.connect(config.MONGODB_URL).then(()=>{
    console.log("connected to mongodb.");
  }).catch((error)=>{
    console.log(error.reason);
  });

app.use(cors());
app.use('/api/users',userRouter);
app.use('/api/users',mailRouter);

// also have to make the upload as static file: 
app.use('/images',express.static(path.join(__dirname,'../images')));

/// make frontend folder to static :
app.use(express.static(path.join(__dirname,'/../frontend')));
// also make the index.html as starting file: 
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'/../frontend/index.html'));
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})