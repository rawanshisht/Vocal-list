import jwt from "jsonwebtoken";
import util from "util";
import { User } from "../models/userModel.js";
export const protect = async (req, res, next) => {
  //1- Read the token
  const testToken = req.headers.authorization;
  let token;
  if (testToken && testToken.startsWith("bearer")) {
    try {
      token = testToken.split(" ")[1];
      //2- Verify token
      const decodedToken = jwt.verify(token, process.env.SECRET_STR);
      //3- Check if user exists
      const user = await User.findById(decodedToken.id);
      if (!user) {
        res
          .status(401)
          .send({ message: "The user with the given token doesn't exist." });
      }
      //4- Check if user has changed password
      req.user = user;
      //5- Allow user to access route
      next();
    } catch (error) {
      res.status(401).send({ message: "Not authorized, token failed" });
    }
  }
};
