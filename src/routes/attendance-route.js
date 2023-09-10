import { Router } from "express";
const attendanceRouter = Router();
import {
  attendanceStudents,
  getAllGroup,
  getOneGroup,
} from "../controllers/attendance-controller.js";
attendanceRouter.get("/attendances", getAllGroup);
attendanceRouter.get("/attendance/:id", getOneGroup);
attendanceRouter.post("/attendance/group/:id", attendanceStudents);
export default attendanceRouter;
