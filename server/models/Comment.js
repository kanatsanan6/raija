import mongoose from "mongoose";

const schemaOption = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const commentSchema = new mongoose.Schema({
  taskId: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
