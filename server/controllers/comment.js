import mongoose from "mongoose";
import Comment from "../models/Comment.js";

export const getCommentById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const data = await Comment.find({ taskId: taskId });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createComment = async (req, res) => {
  const comment = req.body;
  try {
    await Comment.create(comment);
    res.status(201).json(comment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  const isIdExist = mongoose.Types.ObjectId.isValid(id);
  if (!isIdExist) return res.status(404).json({ message: "comment not found" });
  await Comment.deleteOne({ _id: id });
  res.status(200).json({ message: "comment is deleted" });
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const isIdExist = mongoose.Types.ObjectId.isValid(id);
  if (!isIdExist) return res.status(404).json({ message: "comment not found" });

  const updatedComment = { ...req.body, _id: id };
  await Comment.findByIdAndUpdate(id, updatedComment, { new: true });
  res.status(200).json({ message: "comment is updated successfully" });
};
