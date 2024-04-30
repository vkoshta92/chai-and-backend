// https://app.eraser.io/dashboard/all
// https://www.datensen.com/download.html
// https://mongoosejs.com/
// https://github.com/codespaces/new
// https://stackblitz.com/edit/stackblitz-starters-fer6gp?description=&file=README.md&title=Express%20Starter
// https://stackblitz.com/edit/stackblitz-starters-fer6gp?file=models%2Fecommerce%2Forder.models.js

// user
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema(

//   {
//   // username:String,
//   // email:String,
//   // isActive:Boolean
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//   },
//   password: {
//     type: String,
//     // required:[true,"password is required"]
//     required: true,
//   },
// },

// {timestamps:true}



// );

// export const User = mongoose.model('User', userSchema);

// // small letter plural database me
// // users.




// // todos
// import mongoose from "mongoose";

// const todoSchema= new mongoose.Schema(
//   {
// content:{
//   type:String,
//   requred:true,
// },
// complete:{
//   type:Boolean,
//   defaultfalse
// },
// createdBy:{
//   type:mongoose.Schema.Types.ObjectId,
//   ref:"User"
// },
// // array of sub todos
// subTodos:[
//   {
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"SubTodos"
//   }
// ]
//   }
//   ,{timestamps:true})

// export const Todo=mongoose.model("Todo",todoSchema)
// // todos in lower case in plural in data base


// sub todos

// import mongoose from "mongoose";

// const subTodos=new mongoose.Schema({

//   content:{
//     type:String,
//     required:true
//   },
//   complete:{
//     type:Boolean,
//     default:false
//   },
//   createdBy:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User",
//   }


// },{timestamps:true})


// export const SubTodos=mongoose.model("SubTodos",subTodos)





// https://mrkandreev.name/snippets/gitignore-generator/#Node

//node --watch

//dev dependency  ony fr dovelpmnnt not in production
// npm i -D nodemon
//dotenv
//prettier
//npm i -D prettier


// https://cloud.mongodb.com/v2/660ed6783ba2241318412371#/clusters/connect?clusterId=Cluster0


//npm i cookie-parser
//npm i cors  
// next ak flag hota h bs jse(err,req,res,next)

// npm i mongoose-aggregate-paginate-v2

//npm i bcrypt   // hash password
//jwt- json web token(cryptography) - jwt ak bearer token  hai jo uskobear krta h usko hsi  n lete h jiske pas hoga hm use data bhej denge
//npm i bcrypt jsonwebtoken

//multer  and express fike upload
// npm install cloudinary


//http
// acept application /json
// user -agent
// authrization
// content-type
// cookie
// cahe-control

// export default me {} nhi lgta h jab import karo
// normal export me { } lgta h jab import karo