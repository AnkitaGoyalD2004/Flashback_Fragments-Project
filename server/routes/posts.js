import express from "express";

import { getPosts, createPost } from "../controllers/postsController.js";
const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/", createPost);

export default postRouter;
