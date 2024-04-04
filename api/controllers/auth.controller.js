import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All feilds are required"));
  }

  const hashedPwd = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPwd,
  });

  try {
    await newUser.save();
    res.json("signup successful");
  } catch (error) {
    next(error);
  }
};

export default signup;
