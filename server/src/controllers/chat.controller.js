import { chatService } from "../services/chat.service.js";
import { generateOllamaResponse } from "../services/ai/ollama.service.js";

export const chatController = async (req, res) => {
  try {
    const { message, messages } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Ask your question first" });
    }
    const chat = await chatService(message, messages);

    if (chat.success) {
      return res.status(200).json(chat);
    } else {
      return res.status(404).json("Not Working");
    }
  } catch (error) {
    console.error("Chat Controller Error", error);
    return res.status(500).json({ message: "Server Error!" });
  }
};

export const result = async (req,res) => {
  try {
    const ollamaResponse = await generateOllamaResponse("hello");

    if (ollamaResponse.success) {
      return res.status(200).json(ollamaResponse);
    } else {
      return res.status(404).json("Not Working");
    }
  } catch (error) {
    console.error("Ollama Controller Error", error);
    return res.status(500).json({ message: "Server Error!" });
  }
};

console.log(result);
