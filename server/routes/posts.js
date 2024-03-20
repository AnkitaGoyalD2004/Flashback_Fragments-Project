import express from "express";

import { getPosts } from "../controllers/postsController.js";
const postRouter = express.Router();

postRouter.get("/", getPosts);
export default postRouter;
