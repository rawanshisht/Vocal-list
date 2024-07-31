import express from "express";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};
router.route("/signup").post(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ message: "Name, Email, and Password are required." });
    }
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);
    const options = {
      maxAge: process.env.LOGIN_EXPIRES,
      httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") {
      options.secure = true;
    }
    res.cookie("jwt", token, options);
    res.status(201).send({ message: "User created.", token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.route("/login").post(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and Password are required." });
    }
    const user = await User.findOne({ email }).select("+password");
    //const isMatch = await user.comparePassword(password, user.password);
    if (!user || !(await user.comparePassword(password, user.password))) {
      return res.status(400).send({ message: "Incorrect email or password." });
    }
    const token = signToken(user._id);
    const options = {
      maxAge: process.env.LOGIN_EXPIRES,
      httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") {
      options.secure = true;
    }
    res.cookie("jwt", token, options);
    res.status(200).send({ message: "User logged in.", token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.route("/profile").get(protect, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).send({ message: "Incorrect email or password." });
    }
    // Access the user object attached to the request
    const token = signToken(user._id);
    res.status(200).send({ message: "User profile.", user, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
export default router;
