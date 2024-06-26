import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

// phle body parser use krna hota tha ab express khud kar deta h
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter from './routes/user.routes.js'


//routes decleration
app.use("/api/v1/users",userRouter)
// console.log('server is running');
//http://localhost:8000/api/v1/users/login

export { app } 