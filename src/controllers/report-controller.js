import { Group } from "../models/group-model.js";
import { Student } from "../models/students-model.js";
import { lefThisMonth } from "../utils/leftStudentstThisMonth.js";

export const getReport = async (req, res) => {
  try {
    const studentsBase = await Student.find();
    const groupBase = await Group.find();
    const studentLength = studentsBase.map((student) => {
      if (student.isActive) {
        return student;
      }
    }).length;
    const groupLength = groupBase.map((group) => {
      if (group.isActive) {
        return group;
      }
    }).length;
    const result = [];
    const teachersArr = [];
    groupBase.filter((group) => {
      result.push(group.teacher);
    });
    const filteredTeachers = new Set(result);
    for (let value of filteredTeachers) {
      teachersArr.push(value);
    }
    const leftStudentsMonth = await lefThisMonth();
    return res.json({
      studentLength: studentLength,
      groupLength,
      leftStudentsMonth: leftStudentsMonth.length,
      teachersLength: teachersArr.length,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
