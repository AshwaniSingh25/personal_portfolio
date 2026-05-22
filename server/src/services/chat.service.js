import { generateAIResponse } from "./ai/gemini.service.js";
import { generateOllamaResponse } from "./ai/ollama.service.js";

export const chatService = async (chatMessage, messages) => {
  try {
    // Limit chat history
    const recentMessages = messages.slice(-6);

    // Format conversation history
    const conversationHistory = recentMessages
      .map((message) => {
        const role = message.role === "user" ? "User" : "Assistant";

        return `${role}: ${message.content}`;
      })
      .join("\n\n");

    // Generate AI Response using gemni api
    const aiResponse = await generateAIResponse(
      chatMessage,
      conversationHistory,
    );

    // Generate AI response using ollama local model
    const ollamaResponse = await generateOllamaResponse();

    if (process.env.AI_PROVIDER === ollama) {
      return ollamaResponse;
    } else {
      return aiResponse;
    }
  } catch (error) {
    console.error("Chat Service Error:", error);
    return {
      success: false,
      message: "Chat Service is unavailable.",
    };
  }
};
