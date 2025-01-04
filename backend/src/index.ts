import express from "express";
import dotenv from "dotenv";
import { router } from "./router";
import cors from "cors";
import CookieParser from "cookie-parser";
import { dbConnect } from "./db";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(CookieParser());

app.use("/api", router);

dbConnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT} :)`);
    });
  })
  .catch((err) => {
    console.log(
      "error while connecting to db so there is no point to start the server :("
    );
  });
