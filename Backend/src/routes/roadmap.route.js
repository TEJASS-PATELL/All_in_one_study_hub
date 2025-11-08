const express = require("express");
const router = express.Router();
const { getRoadmap, createorupdateRoadmap, removeroadmap } = require("../controllers/rodamap.controller");
const authentication = require("../middlewares/auth.middleware");

router.get("/", authentication, getRoadmap);
router.post("/", authentication, createorupdateRoadmap);
router.delete("/remove", authentication, removeroadmap);

module.exports = router;
