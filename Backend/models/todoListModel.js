import mongoose from "mongoose";

const todoListSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TodoList = mongoose.model("Todo List", todoListSchema);
