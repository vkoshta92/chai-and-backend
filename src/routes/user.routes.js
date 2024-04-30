import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

// middleware- jatae jate hmse mil ke jana  means resister se phle middleware lga diya
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
// router.route("/login").post(login)

// agar {} me import ho to export e default nhi ayrga ase hi aeyga

export default router;
