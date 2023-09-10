import { config } from "../../config/index.js";
import { verifyToken } from "../utils/jwt.js";
export const isAuth = (req, res, next) => {
  const data = req.headers.authorization;
  const token = data?.split(" ")[1];
  if (token) {
    verifyToken(token, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};
