import { Schema, model } from "mongoose";
const paymentSchema = new Schema({
  student_name: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  teacher_name: {
    type: String,
    required: true,
  },
  payment_date: {
    type: Date,
    required: true,
  },
},{
    timestamps: true
});
export const Payment = model("payments", paymentSchema);
