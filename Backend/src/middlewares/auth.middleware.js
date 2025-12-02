import jwt from "jsonwebtoken";
import NodeCache from "node-cache"; 
const tokenCache = new NodeCache({ stdTTL: 1200 }); 

const authentication = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Authentication token missing." });
  }

  const cachedUser = tokenCache.get(token);
  if (cachedUser) {
    req.user = cachedUser;
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.userid) {
      return res.status(401).json({ success: false, message: "Invalid token payload." });
    }

    const userPayload = { userid: decoded.userid };
    tokenCache.set(token, userPayload);

    req.user = userPayload;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    tokenCache.del(token);
    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

export default authentication;