import { Router } from "express";
const authRouter = Router();
import { register, login } from "../controllers/auth-controller.js";
authRouter.post("/auth/register", register);
authRouter.post("/auth/login", login);
export default authRouter;
