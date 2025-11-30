import express from "express";
import authentication from "../middlewares/auth.middleware.js";
import { getDiscussions, createDiscussion, deleteDiscussion, likeDiscussion} from "../controllers/discussion.controller.js";

const router = express.Router();

router.get("/getdiscussion", authentication, getDiscussions);
router.post("/creatediscussion", authentication, createDiscussion);
router.delete("/:id/delete", authentication, deleteDiscussion);
router.post("/:id/like", authentication, likeDiscussion);

export default router;
