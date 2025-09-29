import express from "express";
import { signupUser, signupDeveloper, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup/user", signupUser);
router.post("/signup/developer", signupDeveloper);
router.post("/login", login);

export default router

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTkxNDM2NDEsImV4cCI6MTc1OTIzMDA0MX0.LWEnuZiL1xa1lw2br8qj827NaPX_4TIFswlgZ99bmG4