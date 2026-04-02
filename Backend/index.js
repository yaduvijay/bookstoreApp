import express from 'express';

import  'dotenv/config';
import connectDB from './database/db.js';
import bookRoute from './route/bookroute.js';
import userRoute from './route/userRoute.js'
import cors from "cors";


const app=express();
app.use(cors());
app.use(express.json());



const PORT=process.env.PORT || 3000;

app.use('/book',bookRoute)
app.use('/user',userRoute)



connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
    })

});

