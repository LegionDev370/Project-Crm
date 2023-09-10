import { Router } from "express";
import { createGroup } from "../controllers/group-controller.js";
import { file } from "../middlewares/filePhoto-middleware.js";
import { isAuth } from "../middlewares/isAuth.js";
import { isAdmin } from "../middlewares/isAdmin.js";
const groupRouter = Router();
groupRouter.post("/group", isAuth, isAdmin, file, createGroup);
export default groupRouter;
