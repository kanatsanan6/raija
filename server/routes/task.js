import express from "express";
const router = express.Router();

import { createTask, getTaskById } from "../controllers/task.js";

router.get("/:projectId", getTaskById);
router.post("/", createTask)

export default router;
