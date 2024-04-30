import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from  "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser= asyncHandler(async(req,res)=>{
    // res.status(200).json({
    //     message:"success"
    // })

// get ue details from  frontend
//validation- not empty
//check if user already exist: username,email
//check for images, check for avatar
//upload them to cloudanary, avatar  add hua h ya nhi 
//create user object - create entry in db
//remove password and refesh token feed from response
//check for user creation 
// return response

// user deatais...........................
const {fullName,email,username,password}=req.body
// console.log('body',body);
console.log(fullName,email,username,password);

// validation
// if(fullName===""){
//     throw new ApiError(400,"full name is required")
// }
// ak ak alag alg check krne ki bjar some lga ke chck kr liya ak bhi true return hua to true ho jega
if(
    [fullName,email,username,password].some((field)=> field?.trim()==="")
)
{
throw new ApiError(400,"All fields are requred")
}

//check if user already exist: username,email................................

const existedUser=User.findOne({ // model se user nikla and or ke syntex se multiple check kr  skte hai
    $or:[{username}, {email}]
})

if(existedUser){
    throw new ApiError(409,"user with email or username already exists")
}

//check for images, check for avatar.................
const avatarLocalPath=req.files?.avatar[0]?.path;
const coverImagaeLocalPath= req.files?.coverImage[0]?.path;

if(!avatarLocalPath){
    throw new ApiError(400,"Avatar is required");
}

//upload them to cloudanary, avatar  add hua h ya nhi ..................

const avatar=await uploadOnCloudinary(avatarLocalPath);
const coverImage= await uploadOnCloudinary(coverImagaeLocalPath);



if(!avatar){
    throw new ApiError(400,"Avatar is required");

}

//create user object - create entry in db......................
 const user= await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",           // hm logo ne cover image ka validatin nhi lgya h agar h to rl nikl lo nhi to empty rkho
    email,
    password,
    username:username.toLowerCase()
 })


 //remove password and refesh token feed from response....................
 // ahr schema ke  pas ak id geertae hota h _id hota h agar ye mil gya to user sch me create hua nhi to nhi hua tha
//  select se password refresh tken kocheck kr skte and remove kar skte hai ye do file ab select nhi hgi is syntex se createdUser me
 const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
 )      

//check for user creation .........s
 if(!createdUser){
    throw new ApiError(500,"Something went wrong while registring the user")
 }

 //return response.....
// ise createdUser direct bhej skte h par organise bhenege class bni h airesponse ki
 return res.status(201).json(
    new ApiResponse(
        200,
        createdUser,
        "User Resistered Suucessfully"
    )

 )



})

// export { registerUser };

export {
    registerUser,
}