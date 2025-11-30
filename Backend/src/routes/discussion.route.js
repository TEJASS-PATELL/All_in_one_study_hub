const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/auth.middleware");
const {
  getDiscussions,
  createDiscussion,
  deleteDiscussion,
  likeDiscussion,
} = require("../controllers/discussion.controller");

router.get("/getdiscussion", authentication, getDiscussions);
router.post("/creatediscussion", authentication, createDiscussion);
router.delete("/:id/delete", authentication, deleteDiscussion);
router.post("/:id/like", authentication, likeDiscussion);

module.exports = router;
