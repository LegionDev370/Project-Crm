import authRouter from "./auth-route.js";
import groupRouter from "./group-route.js";
import paymentRouter from "./payment-route.js";
import studentsRouter from "./students-route.js";
import attendanceRouter from "./attendance-route.js";
import reportRouter from "./report-route.js";
export const routes = [
  authRouter,
  studentsRouter,
  groupRouter,
  paymentRouter,
  attendanceRouter,
  reportRouter
];
