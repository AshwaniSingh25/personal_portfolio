import { GoogleGenAI } from "@google/genai";
import { prompt } from "../prompt/buildPrompt.js";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const AI_UNAVAILABLE_MESSAGE =
  "The AI service is currently unavailable. Please try again in a moment.";

export const generateAIResponse = async (
  userMessage,
  conversationHistory,
  relevantContext,
  res,
) => {
  try {
    const finalPrompt = prompt({
      relevantContext,
      conversationHistory,
      userMessage,
    });

    const response = await ai.models.generateContentStream({
      model: "models/gemini-3.1-flash-lite",

      contents: finalPrompt,
      config: {
        temperature: 0.4,
         maxOutputTokens: 1024,
        responseMimeType: "text/plain",
      },
    });

    let fullResponse = "";

    for await (const chunk of response) {
      const text = chunk.text || "";

      fullResponse += text;

      // STREAM TO CLIENT
      res.write(text);
    }

    // END STREAM
    res.end();

    return {
      success: true,
      message: fullResponse,
    };
  } catch (error) {
    console.error("Gemini Streaming Error:", error);

    if (!res.writableEnded) {
      res.write(AI_UNAVAILABLE_MESSAGE);
      res.end();
    }

    return {
      success: false,
      message: AI_UNAVAILABLE_MESSAGE,
    };
  }
};
