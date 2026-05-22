import { generateAIResponse } from "./providers/gemini.service.js";
import { generateOllamaResponse } from "./providers/ollama.service.js";

export const chatService = async (chatMessage, messages) => {
  try {
    // Limit chat history
    const recentMessages = messages?.slice(-6) || [];

    // Format conversation history
    const conversationHistory = recentMessages
      .map((message) => {
        const role = message.role === "user" ? "User" : "Assistant";

        return `${role}: ${message.content}`;
      })
      .join("\n\n");

    if (process.env.AI_PROVIDER === "ollama") {
      return await generateOllamaResponse(chatMessage, conversationHistory);
    } else {
      return await generateAIResponse(chatMessage, conversationHistory);
    }
  } catch (error) {
    console.error("Chat Service Error:", error);
    return {
      success: false,
      message: "Chat Service is unavailable.",
    };
  }
};
