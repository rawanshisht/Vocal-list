import mongoose from "mongoose";

export const todoListItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    dueDate: {
      type: Date,
      required: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TodoListItem = mongoose.model(
  "Todo List Item",
  todoListItemSchema
);
