import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router= Router()


router.route("/register").post(registerUser)
router.route("/login").post(login)

// agar {} me import ho to export e default nhi ayrga ase hi aeyga

export {
    registerUser,
}