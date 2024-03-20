import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js";
import connectDb from "./connection/connectDb.js";

const PORT = process.env.PORT;

const app = express();

connectDb();

app.use(cors());

app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));

app.use("/posts", postRouter);

//change the location of the connection url , store it in the env file

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDb");
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
