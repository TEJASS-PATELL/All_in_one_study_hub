import jwt from "jsonwebtoken";
import NodeCache from "node-cache";
import cacheClient from "../services/cacheClient.js";

const tokenCache = new NodeCache({ stdTTL: 1200 }); 
const REDIS_TTL = 1200; 

const authentication = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Authentication token missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded?.demo === true && decoded.userid === -1) {
      req.user = {
        userid: 0,
        name: decoded.name,
        email: decoded.email,
        isDemo: true,
      };
      return next();
    }

    if (!decoded?.userid) {
      return res.status(401).json({ success: false, message: "Invalid token payload." });
    }

    const memoryUser = tokenCache.get(token);
    if (memoryUser) {
      req.user = memoryUser;
      return next();
    }

    const redisUser = await cacheClient.get(`auth:${token}`);
    if (redisUser) {
      const parsed = JSON.parse(redisUser);
      tokenCache.set(token, parsed);
      req.user = parsed;
      return next();
    }

    const userPayload = { userid: decoded.userid, isDemo: false };

    tokenCache.set(token, userPayload);
    await cacheClient.set( `auth:${token}`, JSON.stringify(userPayload), "EX", REDIS_TTL);

    req.user = userPayload;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);

    tokenCache.del(token);
    await cacheClient.del(`auth:${token}`);

    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

export default authentication;
