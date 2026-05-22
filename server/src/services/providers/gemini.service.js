import { GoogleGenAI } from "@google/genai";
import { prompt } from "../prompt/buildPrompt.js";
import { portfolioContext } from "../prompt/buildPortfolioContext.js";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateAIResponse = async (userMessage, conversationHistory) => {
  try {
    const finalPrompt = prompt({
      portfolioContext,
      conversationHistory,
      userMessage,
    });
    // GEMINI RESPONSE
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: finalPrompt,

      // stream: true,
    });

    // RETURN CLEAN RESPONSE
    return {
      success: true,

      message: response.text?.trim() || "I couldn't generate a response.",
    };
  } catch (error) {
    console.error("AI Service Error:", error);

    return {
      success: false,

      message: "AI service is currently unavailable.",
    };
  }
};
