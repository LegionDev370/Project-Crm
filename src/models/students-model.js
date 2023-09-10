import { Schema, model } from "mongoose";
const studentSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    parentsName: {
      type: String,
      required: true,
    },
    parentsPhone: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    cameToStudy: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const Student = model("students", studentSchema);
