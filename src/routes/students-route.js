import { Router } from "express";
const studentsRouter = Router();
import {
  createStudent,
  getAllStudents,
  joinGroup,
  getStudentById
} from "../controllers/students-controller.js";
import { file } from "../middlewares/filePhoto-middleware.js";
import { isAuth } from "../middlewares/isAuth.js";
import { isAdmin } from "../middlewares/isAdmin.js";
studentsRouter.post("/student", isAuth, isAdmin, file, createStudent);
studentsRouter.post("/group/join", isAuth, isAdmin, joinGroup);
studentsRouter.get("/students", isAuth, isAdmin, getAllStudents);
studentsRouter.get("/students/:id", isAuth, isAdmin, getStudentById);
export default studentsRouter;
