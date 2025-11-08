const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("../config/passport")
const authMiddleware = require("../middlewares/auth.middleware");
const { signup, login, logout, getuser, alluser, updateprofile } = require("../controllers/auth.controller");

router.post("/signup", signup);           
router.post("/login", login);             
router.get("/logout", authMiddleware, logout);    
router.put("/upload-profile", authMiddleware, updateprofile);    
router.get("/getuser", authMiddleware, getuser); 
router.get("/allusers", alluser);    

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.CLIENT_URL + "/login",
    session: false,
  }),
  (req, res) => { 
    const token = jwt.sign({ userid: req.user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });

    res.redirect(process.env.CLIENT_URL + "/");
  }
);

module.exports = router;
