import express from "express";
import { signupUser, signupDeveloper, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup/user", signupUser);
router.post("/signup/developer", signupDeveloper);
router.post("/login", login);

export default router

