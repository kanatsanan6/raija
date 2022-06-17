import express from "express";
const router = express.Router();

import { createTask, deleteTask, getTaskById, updateTask } from "../controllers/task.js";

router.get("/:projectId", getTaskById);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

export default router;
