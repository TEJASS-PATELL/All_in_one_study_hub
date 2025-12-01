import express from "express";
import { getRoadmap, createorupdateRoadmap, removeroadmap } from "../controllers/rodamap.controller.js";
import authentication from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/getroadmap", authentication, getRoadmap);
router.post("/generateroadmap", authentication, createorupdateRoadmap);
router.delete("/removeroadmap", authentication, removeroadmap);

export default router;
