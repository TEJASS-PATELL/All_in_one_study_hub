import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Authentication token missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.userid) {
      return res.status(401).json({ success: false, message: "Invalid token payload." });
    }

    req.user = { userid: decoded.userid };
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

module.exports = authentication;
