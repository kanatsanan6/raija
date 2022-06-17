import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const data = await Project.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const project = req.body;
  try {
    await Project.create(project);
    res.status(201).json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
