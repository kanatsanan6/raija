import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const generateToken = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    const newUser = new User({
      email: req.body.email,
    });
    try {
      await newUser.save();
    } catch (error) {
      res.status(400).send(`Error: ${error}`);
    }
  }

  // jwt
  const token = jwt.sign({ email: req.body.email }, process.env.SECRET_TOKEN);
  res.header("auth-token", token).send(token);
};
