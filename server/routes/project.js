import express from "express";
const router = express.Router();

import { createProject, deleteProject, getProjects, updateProject } from "../controllers/projects.js";

router.get("/", getProjects);
router.post("/", createProject);
router.delete("/:id", deleteProject);
router.patch("/:id", updateProject);

export default router;
