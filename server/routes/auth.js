import express from "express";
const router = express.Router();

import { generateToken } from "../controllers/auth.js";

router.post("/login", generateToken)

export default router