import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (error) {
    return console.log(error);
  }
};

app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors());

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDb");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
