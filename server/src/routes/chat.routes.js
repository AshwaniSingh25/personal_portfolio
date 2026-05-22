import express from "express";
import {chatController, result} from "../controllers/chat.controller.js"

const chatRouter = express.Router();

chatRouter.post("/chat", chatController);
chatRouter.post("/ollama", result);

export default chatRouter;

