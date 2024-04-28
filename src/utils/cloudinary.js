import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
          
// https://console.cloudinary.com/pm/c-d14bf95ee4696ddf5b603b2b14f864/getting-started
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUNDINARY_API_SECRET 
});

// after upload unlink

const uploadOnCloudinary= async(localFilePath)=>{


try{
if(!localFilePath) return null;

//  upload file to cludnary
const response= await cloudinary.uploader.upload(localFilePath,{
    resource_type:"auto"
})
console.log("file is uploaded on cloudinary",response.url);
return response
}
//file  succeful upload

catch(error){
fs.unlinkSync(localFilePath) // reove the localy saved temp saved file as  the upload got faild
}

}


export  {uploadOnCloudinary}

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });