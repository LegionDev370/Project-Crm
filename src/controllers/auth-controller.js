import { authValidator } from "../utils/auth-validation.js";
import { User } from "../models/users-model.js";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "../utils/jwt.js";
export const register = async (req, res, next) => {
  try {
    const { username, password, email, isAdmin } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ message: "Please provide all fields" });
    }
    const { error } = authValidator({ username, password, email, isAdmin });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const readData = await User.find();
    const findUser = readData.find((user) => user.username === username);
    const hashPassword = await bcrypt.hash(password, 12);
    if (!findUser) {
      const data = await User.create({
        username,
        password: hashPassword,
        email,
        isAdmin,
      });
      const token = generateToken({
        data: data._id,
      });
      if (data) {
        return res
          .status(201)
          .json({ message: "User created successfully", token });
      }
    } else {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res, next) => {
  try {
    const { username, password, email, isAdmin } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Please provide all fields" });
    }
    const { error } = authValidator({ username, password, email, isAdmin });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const readData = await User.find();
    const findUser = readData.find((user) => user.username === username);
    if (!findUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (isMatch) {
      const token = generateToken({
        data: findUser._id,
      });
      if (findUser) {
        return res
          .status(200)
          .json({ message: "User logged in successfully", token });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
