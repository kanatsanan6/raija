import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

import authRoute from "./routes/auth.js"

const PORT = process.env.PORT || 8080;
const DB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

// general setting
app.use(cors());
app.use(express.json());

// Route middleware
app.use("/api/user", authRoute);

// connect with database
mongoose
  .connect(DB_CONNECTION_URL)
  .then(() => {
    console.log("Connect to DB successfully")
  })
  .catch((error) => {
    console.log(error.message);
  });
  
// initialize server
app.listen(PORT, () => console.log(`Serve is running in PORT: ${PORT}`));