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
const CONNECTION_URL =
  "mongodb+srv://Dishu01:Abhay@1_@cluster0.kr6sa5z.mongodb.net/";
mongoose.connect(CONNECTION_URL);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDb");
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
