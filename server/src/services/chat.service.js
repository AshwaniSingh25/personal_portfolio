import { generateAIResponse } from "./providers/gemini.service.js";
import { generateOllamaResponse } from "./providers/ollama.service.js";
import { detectRelevantContext } from "../utils/detectRelevantContext.js";

const CHAT_UNAVAILABLE_MESSAGE =
  "The AI service is currently unavailable. Please try again in a moment.";

export const chatService = async (chatMessage, messages, res) => {
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

      // Detect relevant context
    const relevantContext = detectRelevantContext(chatMessage);

    if (process.env.AI_PROVIDER === "ollam") {
      return await generateOllamaResponse(
        chatMessage,
        conversationHistory,
        relevantContext,
        res,
      );
    } else {
      return await generateAIResponse(
        chatMessage,
        conversationHistory,
        relevantContext,
        res,
      );
    }
  } catch (error) {
    console.error("Chat Service Error:", error);

    if (!res.writableEnded) {
      res.write(CHAT_UNAVAILABLE_MESSAGE);
      res.end();
    }

    return {
      success: false,
      message: CHAT_UNAVAILABLE_MESSAGE,
    };
  }
};
