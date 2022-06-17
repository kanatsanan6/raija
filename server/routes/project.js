import express from "express";
const router = express.Router();

import { getProjects } from "../controllers/projects.js";

router.get("/", getProjects);

export default router;
