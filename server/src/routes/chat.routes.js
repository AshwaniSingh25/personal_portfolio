import express from "express";
import {chatController} from "../controllers/chat.controller.js"

const chatRouter = express.Router();

chatRouter.get("/chat", chatController);

export default chatRouter;

