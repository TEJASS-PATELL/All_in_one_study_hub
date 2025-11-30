import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinary.js";
import sendOtp from "../lib/helper.js";
import sendMailersendEmail from "../config/nodemailer.js";
import crypto from "crypto";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
const isProduction = process.env.NODE_ENV === "production";

const generateToken = (userid) =>
  jwt.sign({ userid }, JWT_SECRET, { expiresIn: "7d" });

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "None" : "Lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "All fields are required" });

  try {
    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = generateToken(user.id);

    await prisma.user.update({
      where: { email: normalizedEmail },
      data: { lastLogin: new Date(), isLogin: true },
    });

    res.cookie("token", token, { ...cookieOptions, secure: false }).json({
      msg: "Login successful",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ msg: "Login failed", error: err.message });
  }
};

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: "All fields required" });

    const cleanEmail = email.trim().toLowerCase();

    const exist = await prisma.user.findUnique({ where: { email: cleanEmail } });

    if (exist) {
      if (exist.isAccountVerified) {
        return res.status(400).json({ success: false, message: "User already exists" });
      }

      try {
        await sendOtp(exist.id, exist.email);
        return res.json({
          success: true,
          redirectToVerify: true,
          message: "Account exists but not verified. OTP resent.",
        });
      } catch (otpError) {
        console.error("❌ Resend OTP failed for existing user:", otpError.message);
        return res.status(500).json({ success: false, message: "User exists, but failed to send verification OTP. Try again later." });
      }
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email: cleanEmail,
        password: hashed,
        isAccountVerified: false,
        lastLogin: new Date(),
        isLogin: true,
        lastLogout: null,
      },
    });

    try {
      await sendOtp(user.id, user.email);

      return res.status(201).json({
        success: true,
        redirectToVerify: true,
        message: "Verification OTP sent!",
      });

    } catch (otpError) {
      console.error("❌ Initial OTP send failed for new user:", otpError.message);
      await prisma.user.delete({ where: { id: user.id } });
      return res.status(500).json({
        success: false,
        message: "Signup successful, but failed to send verification email. Please register again later."
      });
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const logout = async (req, res) => {
  try {
    const userId = req.user.userid;

    await prisma.user.update({
      where: { id: userId },
      data: {
        lastLogout: new Date(),
        isLogin: false,
      },
    });

    res.clearCookie("token", { ...cookieOptions, maxAge: 0 }).json({ msg: "Logged out successfully" });
  } catch (err) {
    console.error("Logout Error:", err);
    res.status(500).json({ msg: "Logout failed", error: err.message });
  }
};

export const getuser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userid },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        profilepic: true,
        lastLogin: true,
        lastLogout: true,
      },
    });

    if (!user) return res.status(404).json({ msg: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch user", error: err.message });
  }
};

export const alluser = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        profilepic: true,
        lastLogin: true,
        lastLogout: true,
        isLogin: true,
      },
    });

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch users", error: err.message });
  }
};

export const updateprofile = async (req, res) => {
  try {
    const { image } = req.body;
    const userId = req.user.userid;

    if (!userId) return res.status(401).json({ message: "User ID is missing" });
    if (!image) return res.status(400).json({ message: "Profile picture is required" });

    const uploadProfilePic = await cloudinary.uploader.upload(image, { folder: "users_profile" });

    await prisma.user.update({ where: { id: userId }, data: { profilepic: uploadProfilePic.secure_url } });

    return res.status(200).json({ success: true, message: "User Profile updated succesfully", image: uploadProfilePic.secure_url });

  } catch (error) {
    console.error("Error in updateProfile:", error.stack);
    res.status(500).json({ success: false, message: "Error while uploading profile" });
  }
}

export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.userid;

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized – user ID not found" });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ msg: "User not found" });

    if (user.profilepic) {
      try {
        const publicId = user.profilepic.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`users_profile/${publicId}`);
      } catch (err) {
        console.warn("Cloudinary image delete failed:", err.message);
      }
    }
    await prisma.roadmap.deleteMany({ where: { userId } });
    await prisma.discussion.deleteMany({ where: { userId } });
    await prisma.like.deleteMany({ where: { userId } });

    await prisma.user.delete({ where: { id: userId } });

    res.clearCookie("token", { ...cookieOptions, maxAge: 0 });

    return res.status(200).json({ msg: "Account deleted successfully" });
  } catch (err) {
    console.error("Delete Account Error:", err);
    return res.status(500).json({ msg: "Error while deleting account" });
  }
};

export const sendPasswordResetLink = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required", success: false });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      return res.json({ success: false, message: "User not found with this Email" });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const resetTokenExpireAt = Math.floor(Date.now() / 1000) + 60 * 60;

    await prisma.user.update({
      where: { email: email },
      data: {
        resetLink: token,
        resetLinkExpireAt: resetTokenExpireAt,
      }
    })

    const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

    const subject = "Password Reset Link";
    const htmlContent = `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                  <h2>Password Reset Request</h2>
                  <p>Hello ${user.name || "User"},</p>
                  <p>You requested to reset your password. Click the button below to reset it:</p>
                  <a href="${resetLink}" style="background:#007bff;color:#fff;padding:10px 20px;text-decoration:none;border-radius:5px;display: inline-block;">Reset Password</a>
                  <p>This link will expire in <b>1 hour</b>.</p>
                  <p>If you didn’t request this, you can safely ignore this email.</p>
                </div>`;

    await sendMailersendEmail(user.email, subject, htmlContent);

    return res.status(200).json({ success: true, message: "Password reset link sent to your email." });

  } catch (err) {
    console.log("SEND RESET ERROR:", err);
    res.status(500).json({ success: false, message: "Server error while sending reset link" });
  }
}

export const resetPassword = async (req, res) => {
  const { newPassword } = req.body;
  const { token } = req.params;

  if (!token || !newPassword) {
    return res.status(400).json({ success: false, message: "Token and new password are required" });
  }

  try {
    const user = await prisma.user.findFirst({ where: { resetLink: token } });

    if (!user) {
      return res.json({ success: false, message: "Invalid or expired reset link" });
    }

    if (user.resetLinkExpireAt < Math.floor(Date.now() / 1000)) {
      return res.status(400).json({ success: false, message: "Reset link expired" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetLink: "",
        resetLinkExpireAt: 0,
      }
    })

    return res.status(200).json({ message: "Password has been reset succesfully", success: true });
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, message: err.message });
  }
}

export const sendVerifyOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email required" });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({ where: { email: cleanEmail } });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.isAccountVerified) {
      return res.status(400).json({ success: false, message: "Account already verified" });
    }

    try {
      await sendOtp(user.id, user.email);
      return res.json({ success: true, message: "OTP sent to your email" });
    } catch (otpError) {
      console.error("❌ Send Verify OTP failed:", otpError.message);
      return res.status(500).json({ success: false, message: "Failed to send OTP. Try again later." });
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;

    if (!otp || !email) {
      return res.status(400).json({ success: false, message: "OTP and email required" });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({ where: { email: cleanEmail } });

    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    if (user.verifyOtp !== otp || user.verifyOtpExpireAt < Math.floor(Date.now() / 1000)) {
      return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        isAccountVerified: true,
        verifyOtp: "",
        verifyOtpExpireAt: 0,
      },
    });

    const token = generateToken(user.id);

    res.cookie("token", token, cookieOptions);

    return res.json({ success: true, message: "Email verified" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


