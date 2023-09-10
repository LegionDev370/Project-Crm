import { Student } from "../models/students-model.js";
import { studentValidator } from "../utils/students-validation.js";
import { Group } from "../models/group-model.js";
export const createStudent = async (req, res, next) => {
  try {
    const { firstname, phone_number, parentsName, parentsPhone } = req.body;
    const photo = req.file;
    const { error } = studentValidator({
      firstname,
      phone_number,
      parentsName,
      parentsPhone,
      photo,
    });
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const findStudent = await Student.findOne({ phone_number });
    if (!findStudent) {
      const data = await Student.create({
        firstname,
        phone_number,
        parentsName,
        parentsPhone,
        photo,
      });
      if (data) {
        res.status(201).json({
          message: "Student created successfully",
          data,
        });
      }
    } else {
      res.status(400).json({
        message: "Student already exists",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const joinGroup = async (req, res, next) => {
  try {
    const { studentId, groupId } = req.body;
    const readStudents = await Student.find();
    const findStudent = readStudents.find(
      (student) => student._id == studentId
    );
    Group.findOneAndUpdate(
      { _id: groupId },
      { $addToSet: { students: findStudent } },
      { new: true }
    )
      .then((data) => {
        res.status(200).json({
          message: "Student joined group successfully",
          data,
        });
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getAllStudents = async (req, res, next) => {
  try {
    const readStudents = await Student.find();
    res.status(200).json({
      message: "Students fetched successfully",
      data: readStudents,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const readStudent = await Student.findById(id);
    res.status(200).json({
      message: "Student fetched successfully",
      data: readStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
