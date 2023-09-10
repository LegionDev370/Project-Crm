import { Router } from "express";
import { transaction } from "../controllers/payment-controller.js";
const paymentRouter = Router();
paymentRouter.post("/payment", transaction);
export default paymentRouter;
