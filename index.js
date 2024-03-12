import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
import mongooose from "mongoose";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config()
app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);

const port = process.env.PORT;

mongooose
  .connect(
    process.env.CONNECTION_URL,
  )
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port ${port}`)),
  )
  .catch((e) => console.log(e));