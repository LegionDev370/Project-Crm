const today = new Date();
import { Student } from "../models/students-model.js";
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
export const lefThisMonth = async () => {
  const data = await Student.find({ isActive: false });
  data.sort((a, b) => {
    const monthA = new Date(a.updatedAt).getMonth() + 1;
    const monthB = new Date(b.updatedAt).getMonth() + 1;
    return monthA - monthB;
  }); 
  return data;
};
