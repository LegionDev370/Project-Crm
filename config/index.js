import { env } from "process";
import dotenv from "dotenv";
dotenv.config();
export const config = {
  PORT: env.PORT || 3000,
  DB_URL: env.DB_URL || null,
  jwt_key: env.jwt_secret_key || null,
};
