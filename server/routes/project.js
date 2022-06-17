import express from "express";
const router = express.Router();

import { createProject, getProjects } from "../controllers/projects.js";

router.get("/", getProjects);
router.post("/", createProject);

export default router;
