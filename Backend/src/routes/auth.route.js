import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import passport from "../config/passport.js";
import cacheClient from "../services/cacheClient.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { signup, login, logout, getuser, alluser, updateprofile, deleteAccount, sendPasswordResetLink, resetPassword, verifyOtp, sendVerifyOtp } from "../controllers/auth.controller.js";
const prisma = new PrismaClient();
const router = express.Router();

router.post("/signup", signup);           
router.post("/login", login);             
router.get("/logout", authMiddleware, logout);    
router.put("/upload-profile", authMiddleware, updateprofile); 
router.delete("/delete-account", authMiddleware, deleteAccount); 
router.get("/getuser", authMiddleware, getuser); 
router.get("/allusers", alluser);  
router.post("/send-reset-link", sendPasswordResetLink);
router.patch("/reset-password/:token", resetPassword);
router.post("/send-verify-otp", sendVerifyOtp);
router.post("/verify-account", verifyOtp);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get("/google/callback", passport.authenticate("google", {
    failureRedirect: process.env.CLIENT_URL + "/login",
    session: false,
  }),
  async (req, res) => { 
    try {
      const userId = req.user.id;

      const token = jwt.sign({ userid: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

      await prisma.user.update({
        where: { id: userId },
        data: { lastLogin: new Date(), isLogin: true, isAccountVerified: true },
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
      });

      res.redirect(process.env.CLIENT_URL + "/");
    } catch (err) {
      console.error("Google login callback error:", err);
      res.redirect(process.env.CLIENT_URL + "/login");
    }
  }
);

export default router;
