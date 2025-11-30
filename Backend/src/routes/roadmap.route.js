import express from "express";
import { getRoadmap, createorupdateRoadmap, removeroadmap } from "../controllers/rodamap.controller.js";
import authentication from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authentication, getRoadmap);
router.post("/modify", authentication, createorupdateRoadmap);
router.delete("/remove", authentication, removeroadmap);

export default router;
