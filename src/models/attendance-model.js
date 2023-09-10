import { Schema, model } from "mongoose";

const attendanceSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    students: {
      type: Array,
      required: true,
    },
    group_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "groups",
    },
  },
  {
    timestamps: true,
  }
);
export const Attendance = model("attendance", attendanceSchema);
