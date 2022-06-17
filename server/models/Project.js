import mongoose from "mongoose";

const schemaOption = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    members: {
      type: [String],
    },
  },
  schemaOption
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
