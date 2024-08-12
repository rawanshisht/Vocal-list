import express from "express";
import mongoose from "mongoose";
import todoListRoute from "../routes/todoListRoute.js";
import todoListItemRoute from "../routes/todoListItemRoute.js";
import authRoute from "../routes/authRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import { protect } from "../middlewares/authMiddleware.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// Error handling middleware to ignore favicon requests

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome");
});
app.use("/api/todolists", protect, todoListRoute);
app.use("/api/todos", protect, todoListItemRoute);
app.use("/api/users", authRoute);
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
