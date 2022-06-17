import mongoose from "mongoose";
import Task from "../models/Task.js";

export const getTaskById = async (req, res) => {
  const { projectId } = req.params;
  console.log(projectId)
  try {
    const data = await Task.find({ projectId: projectId });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;
  try {
    await Task.create(task);
    res.status(201).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  const isIdExist = mongoose.Types.ObjectId.isValid(id);
  if (!isIdExist) return res.status(404).json({ message: "project not found" });
  await Project.deleteOne({ _id: id });
  res.status(200).json({ message: "project is deleted" });
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { projectName, projectDescription, owner, members } = req.body;
  const isIdExist = mongoose.Types.ObjectId.isValid(id);
  if (!isIdExist) return res.status(404).json({ message: "project not found" });

  const updatedProject = { projectName, projectDescription, owner, members, _id: id };
  await Project.findByIdAndUpdate(id, updatedProject, { new: true });
  res.status(200).json({ message: "project is updated successfully" });
};
