import mongoose from "mongoose";

const schemaOption = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const taskSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reporter: {
      type: String,
      required: true,
    },
    asignees: {
      type: [String],
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    estimatedTime: {
      type: Number,
      required: true,
    },
    currentTime: {
      type: Number,
      default: 0,
    },
  },
  schemaOption
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
