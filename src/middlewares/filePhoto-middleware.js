import path from "path";
import { v4 as uuid } from "uuid";
export const file = (req, res, next) => {
  try {
    const { photo } = req.files;
    const mimeType = path.extname(photo.name);
    const fileName = uuid() + mimeType;
    req.file = fileName;
    photo.mv(process.cwd() + "/uploads/" + fileName);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};
