import { User } from "../models/users-model.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = req.user?.data;
    const findAdmin = await User.findById(user);
    if (findAdmin.isAdmin) {
      return next();
    } else {
      res.status(401).json({
        message:
          "You are not authorized to perform this action only administrator",
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};
