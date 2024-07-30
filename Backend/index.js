import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import todoListRoute from "./routes/todoListRoute.js";
import todoListItemRoute from "./routes/todoListItemRoute.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome");
});
app.use("/todolists", todoListRoute);
app.use("/todos", todoListItemRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
