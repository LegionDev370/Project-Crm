import { Group } from "../models/group-model.js";
import { Payment } from "../models/payment-model.js";
import { Student } from "../models/students-model.js";
import { paymentValidator } from "../utils/payment-validation.js";
export const transaction = async (req, res, next) => {
  try {
    const {
      student_name,
      direction,
      phone_number,
      teacher_name,
      payment_date,
    } = req.body;
    const { error } = paymentValidator({
      student_name,
      direction,
      phone_number,
      teacher_name,
      payment_date,
    });
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const paymentDate = new Date().toLocaleDateString();
    const data = await Payment.create({
      student_name,
      direction,
      phone_number,
      teacher_name,
      payment_date: paymentDate,
    });
    if (data) {
      const readDataStudents = await Student.find();
      console.log(readDataStudents);
      const findStudent = readDataStudents.find(
        (student) => student.phone_number === phone_number
      );
      const readGroup = await Group.find();
      const findGroup = readGroup.find(
        (group) => group.teacher === teacher_name
      );
      await Group.findByIdAndUpdate(
        { _id: findGroup._id },
        { $addToSet: { paidStudens: findStudent._id } },
        { new: true }
      );
      return res.status(201).json({
        message: "Payment created successfully",
        data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};
