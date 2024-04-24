import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // for searching enable krne ke liye
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,

      trim: true,
      index: true, // for searching enable krne ke liye
    },

    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    coverImage: {
      type: String, // cloudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],

    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
// hook save ke  just phle encrypt kar dega.
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
this.password= bcrypt.hash(this.password,10)  // agar kuch paassword me hange h tbhi ye chle  vrna nhi isiliye condition gai hai
next()
})

userSchema.methods.isPasswordCorrect= async function(password){
   return await bcrypt.compare(password,this.password)  // ye true fasle me btega  ki  match hua ya nhi
}

// jwt ak bearer token  hai jo uskobear krta h usko hsi  n lete h jiske pas hoga hm use data bhej denge


// access token generate
userSchema.methods.generateAcessToken= function(){
   return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id:this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);
