import express from "express";
import mongoose from "mongoose";
import todoListRoute from "./routes/todoListRoute.js";
import todoListItemRoute from "./routes/todoListItemRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import { protect } from "./middlewares/authMiddleware.js";
import favicon from "serve-favicon";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// Error handling middleware to ignore favicon requests
app.use((req, res, next) => {
  if (req.originalUrl === "/favicon.ico") {
    res.status(204).end(); // No Content
  } else {
    next();
  }
});
app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome");
});
app.use("/todolists", protect, todoListRoute);
app.use("/todos", protect, todoListItemRoute);
app.use("/users", authRoute);
const port = process.env.PORT || 5555;
mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
