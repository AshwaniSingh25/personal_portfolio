import axios from "axios";
import { portfolioContext } from "../prompt/buildPortfolioContext.js";
import { prompt } from "../prompt/buildPrompt.js";
export const generateOllamaResponse = async (
  userMessage,
  conversationHistory,
) => {
  try {
    const finalPrompt = prompt({
      portfolioContext,
      conversationHistory,
      userMessage,
    });
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "qwen2.5:3b",

      prompt: finalPrompt,

      stream: false,
    });

    return {
      success: true,
      message: response.data.response,
    };
  } catch (error) {
    console.error("Ollama Error:", error.message);

    return {
      success: false,
      message: "Ollama service unavailable.",
    };
  }
};
