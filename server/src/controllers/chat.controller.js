import { chatService } from "../services/chat.service.js";
import { generateOllamaResponse } from "../services/providers/ollama.service.js";

export const chatController = async (req, res) => {
  try {
    const { message, messages } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Ask your question first" });
    }
    const chat = await chatService(message, messages);

    return res.status(chat.success ? 200 : 400).json(chat);
  } catch (error) {
    console.error("Chat Controller Error", error);
    return res.status(500).json({ message: "Server Error!" });
  }
};
