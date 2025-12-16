import jwt from "jsonwebtoken";
import NodeCache from "node-cache";
import redis from "../services/cacheClient";

const tokenCache = new NodeCache({ stdTTL: 1200 }); 
const REDIS_TTL = 1200; 

const authentication = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Authentication token missing." });
  }

  const memoryUser = tokenCache.get(token);
  if (memoryUser) {
    req.user = memoryUser;
    return next();
  }

  try {
    const redisUser = await redis.get(`auth:${token}`);
    if (redisUser) {
      const parsed = JSON.parse(redisUser);
      tokenCache.set(token, parsed);
      req.user = parsed;
      return next();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.userid) {
      return res.status(401).json({ success: false, message: "Invalid token payload." });
    }

    const userPayload = { userid: decoded.userid };

    tokenCache.set(token, userPayload);
    await redis.set( `auth:${token}`, JSON.stringify(userPayload), "EX", REDIS_TTL);

    req.user = userPayload;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);

    tokenCache.del(token);
    await redis.del(`auth:${token}`);

    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

export default authentication;
