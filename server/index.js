import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDb from "./connection/connectDb.js";

//import all the routes
import postRouter from "./routes/posts.js";

//to use env file in our project
dotenv.config();

const PORT = process.env.PORT || 8000;

//create the app
const app = express();

//function defined in the config folder
connectDb();

app.use(cors());

app.use(express.json({ limit: "30mb", extended: true }));

app.use(express.urlencoded({ limit: "30mb", extended: false }));

app.use("/posts", postRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDb");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
