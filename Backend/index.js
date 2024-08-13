import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoListRoute from "./routes/todoListRoute.js";
import todoListItemRoute from "./routes/todoListItemRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import { protect } from "./middlewares/authMiddleware.js";
import path from "path";
import favicon from "serve-favicon";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use(favicon(path.join(path.resolve(), "public", "favicon.ico")));
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/todolists", protect, todoListRoute);
app.use("/api/todos", protect, todoListItemRoute);
app.use("/api/users", authRoute);

mongoose
  .connect(process.env.mongoDBURL, {
    serverSelectionTimeoutMS: 100000,
  })
  .then(() => console.log("App connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

export default app;
