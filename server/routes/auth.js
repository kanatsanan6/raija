import express from "express";
const router = express.Router();

import { generateToken, getUsers } from "../controllers/auth.js";

router.get("/", getUsers)
router.post("/login", generateToken)

export default router