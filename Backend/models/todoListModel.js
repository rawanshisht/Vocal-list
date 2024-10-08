import mongoose from "mongoose";
import { todoListItemSchema } from "./todoListItemModel.js";
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
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo List Item",
        required: false,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const TodoList = mongoose.model("Todo List", todoListSchema);
