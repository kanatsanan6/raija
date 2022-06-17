import express from "express";
const router = express.Router();

import { createProject, deleteProject, getProjects } from "../controllers/projects.js";

router.get("/", getProjects);
router.post("/", createProject);
router.delete("/:id", deleteProject);

export default router;
