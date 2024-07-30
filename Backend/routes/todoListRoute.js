import express from "express";
import { TodoList } from "../models/todoListModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todoLists = await TodoList.find({});
    return res.status(200).json({
      count: todoLists.length,
      data: todoLists,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todoList = await TodoList.findById(id);
    if (!result) {
      return res.status(404).json({ message: "Todo List not found" });
    }
    return res.status(200).json(todoList);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { title, category } = req.body;
    if (!title) {
      return res.status(400).send({ message: "Todo List Title is required." });
    }
    const newTodoList = {
      title,
      category,
    };
    const todoList = await TodoList.create(newTodoList);
    return res.status(201).send(todoList);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).send({
        message: "Todo List Title is required.",
      });
    }
    const { id } = req.params;
    const result = await TodoList.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(400).json({ message: "Todo List not found" });
    }
    return res.status(200).send({ message: "Todo List updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodoList.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Todo List not found" });
    }
    return res.status(200).send({ message: "Todo List deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
export default router;
