import { generateAIResponse } from "./ai.service.js";

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

    // Generate AI Response
    const aiResponse = await generateAIResponse(
      chatMessage,
      conversationHistory,
    );

    return aiResponse;
  } catch (error) {
    console.error("Chat Service Error:", error);
    return {
      success: false,
      message: "Chat Service is unavailable.",
    };
  }
};
