// npm i mongoose express dotenv
// database ke case me try catch async await hmesa use karenge
// require('dotebv').config({path:'./env'})
import dotenv from "dotenv" // agar requre ki jgh ye use krenge to   hme package json me  hme dev me change krna hoga
// import { mongoose } from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port :  ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log('mongo db connection failed',err);
})




// import { mongoose } from "mongoose";
// import {DB_NAME} from "./constants";
// import express from "express"
// const app=express()
// ;(async()=>{
//     try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error",(error)=>{
//     console.log('err',error);
//     throw error;
// })
// app.listen(process.env.PORT,()=>{
//     console.log(`app is listing on port ${process.env.PORT}`);
// })
//     }
//     catch(error){
//         console.error("Error",error);
//         throw err
//     }
// })()