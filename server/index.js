import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());
const CONNECTION_URL =
  "mongodb+srv://Dishu01:Abhay@1_@cluster0.kr6sa5z.mongodb.net/";
const PORT = process.env.PORT || 5000;
