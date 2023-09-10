import express from "express";
const app = express();
import { run } from "./start/run.js";
import { module } from "./start/module.js";
import { connect } from "mongoose";
import { config } from "../config/index.js";
run(app);
module(app, express);

const connectBase = async () => {
  await connect(config.DB_URL);
  console.log("Connected to database");
};
connectBase();
