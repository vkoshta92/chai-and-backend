import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async ()=>{
    try{
const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n MongoDb Connected !! db host: ${connectionInstance.connection.host}`); // tki pta chle kha connect ho rhe ho production  testing
    }
    catch(error){
        console.log('mongodb connection failed',error);
        process.exit(1);
    }
}

export default connectDB;