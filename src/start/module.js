import { routes } from "../routes/index.js";
import fileUpload from "express-fileupload";
export const module = (app, express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(fileUpload());
  app.use(express.static(process.cwd() + "/uploads"));
  app.use("/api", routes);
};
