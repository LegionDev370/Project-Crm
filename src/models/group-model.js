import { Schema, model } from "mongoose";
const groupSchema = new Schema(
  {
    groupOrientation: {
      type: String,
      required: true,
    },
    schoolDays: {
      type: String,
      required: true,
    },
    lessonTime: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    teacherPhoneNumber: {
      type: String,
      required: true,
    },
    teacherPhoto: {
      type: String,
      required: true,
    },
    students: {
      type: Array,
      default: [],
    },
    paidStudens: {
      type: Array,
      default: [],
    },
    attendance: {
      type: Array,
      default: [],
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Group = model("groups", groupSchema);
