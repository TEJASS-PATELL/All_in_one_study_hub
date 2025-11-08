const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("../config/cloudinary");

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (userid) =>
  jwt.sign({ userid }, JWT_SECRET, { expiresIn: "7d" });

const cookieOptions = {
  httpOnly: true,
  secure: false,
  sameSite: "Lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ msg: "All fields are required" });

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() }
    });
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        name,
        email: email.trim().toLowerCase(),
        password: hashedPassword,
        lastLogin: new Date(),
        isLogin: true,
        lastLogout: null,
      },
    });

    const token = generateToken(newUser.id);

    res
      .status(201)
      .cookie("token", token, { ...cookieOptions, secure: false })
      .json({
        msg: "Signup successful",
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      });
  } catch (err) {
    res.status(500).json({ msg: "Signup failed", error: err.message });
  }
};

exports.login = async (req, res) => {
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

exports.logout = async (req, res) => {
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

exports.getuser = async (req, res) => {
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

exports.alluser = async (req, res) => {
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

exports.updateprofile = async (req, res) => {
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