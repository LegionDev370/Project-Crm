import { Group } from "../models/group-model.js";
import { groupValidator } from "../utils/group-validation.js";

export const createGroup = async (req, res, next) => {
  try {
    const {
      groupOrientation,
      schoolDays,
      lessonTime,
      teacher,
      teacherPhoneNumber,
    } = req.body;
    const teacherPhoto = req.file;
    const { error } = groupValidator({
      groupOrientation,
      schoolDays,
      lessonTime,
      teacher,
      teacherPhoneNumber,
      teacherPhoto,
      isActive: true,
    });
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await Group.create({
      groupOrientation,
      schoolDays,
      lessonTime,
      teacher,
      teacherPhoto,
      teacherPhoneNumber,
      isActive: true,
    });
    if (data) {
      res.status(201).json({
        message: "Group created successfully",
        data,
      });
    } else {
      res.status(500).json({
        message: "INTERNAL SERVER ERROR",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};
