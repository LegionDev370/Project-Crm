import { Group } from "../models/group-model.js";
import { Attendance } from "../models/attendance-model.js";
export const getOneGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const group = await Group.findById(id);
    return res.json({
      message: "Success",
      data: group,
    });
  } catch (error) {
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};
export const getAllGroup = async (req, res) => {
  try {
    const groups = await Group.find();
    return res.json({
      message: "Success",
      data: groups,
    });
  } catch (error) {
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};
export const attendanceStudents = async (req, res, next) => {
  try {
    const { students } = req.body;
    const { id } = req.params;
    const date = new Date();
    const readAttendance = await Attendance.find();
    const findGroup = readAttendance.find(
      (attendance) => attendance.group_id == id
    );
    if (findGroup) {
      await Attendance.updateOne(
        {
          _id: findGroup._id,
        },
        {
          $set: { students: students },
        },
        { new: true }
      );
      const updatedDate = await Attendance.find();
      const data = updatedDate.find(
        (attendance) => attendance.group_id == id
      );
      return res.json({
        message: "Successfully updated",
        data
      });
    } else {
      const data = await Attendance.create({ date, students, group_id: id });
      if (data) {
        return res.json({
          message: "Success",
          data: data,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};
