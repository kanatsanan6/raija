import express from "express";
const router = express.Router();

import { createComment, deleteComment, getCommentById, updateComment } from "../controllers/comment.js";

router.get("/:taskId", getCommentById);
router.post("/", createComment);
router.delete("/:id", deleteComment);
router.patch("/:id", updateComment);

export default router;
