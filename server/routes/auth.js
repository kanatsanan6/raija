import express from "express";
import verifiyToken from "./privateRoute.js"
const router = express.Router();

import { authLogin, authRegister } from "../controllers/auth.js";

router.post("/register", authRegister)
router.post("/login", authLogin)

export default router