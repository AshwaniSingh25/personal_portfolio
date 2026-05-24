import { chatService } from "../services/chat.service.js";

export const chatController = async (req, res) => {
  try {
    const { message, messages } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Ask your question first" });
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    res.setHeader("Transfer-Encoding", "chunked");
    await chatService(message, messages, res);
  } catch (error) {
    console.error("Chat Controller Error", error);
    return res.status(500).json({ message: "Server Error!" });
  }
};
