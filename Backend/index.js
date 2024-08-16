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
const port = process.env.PORT || 3000;
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

app.use("/api/todolists", todoListRoute);
app.use("/api/todos", todoListItemRoute);
app.use("/api/users", authRoute);

mongoose
  .connect(process.env.mongoDBURL, {
    serverSelectionTimeoutMS: 100000,
  })
  .then(() => {
    console.log("App connected to DB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.error("DB connection error:", err));

export default app;
