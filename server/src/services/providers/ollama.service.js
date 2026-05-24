import axios from "axios";
import { portfolioContext } from "../prompt/buildPortfolioContext.js";
import { prompt } from "../prompt/buildPrompt.js";

export const generateOllamaResponse = async (
  userMessage,
  conversationHistory,
  res,
) => {
  try {
    const finalPrompt = prompt({
      portfolioContext,
      conversationHistory,
      userMessage,
    });
    const response = await axios.post(
      `${process.env.OLLAMA_PORT}`,
      {
        model: "qwen2.5:3b",

        prompt: finalPrompt,

        stream: true, 
        // wait for complete response if "false"
      },
      {
        responseType: "stream",
      },
    );

    let fullResponse = "";
    return new Promise((resolve, reject) => {
      response.data.on("data", (chunk) => {
        const chunkText = chunk.toString();

        const lines = chunkText
          .split("\n")
          .filter((line) => line.trim() !== "");

        lines.forEach((line) => {
          try {
            const parsedLine = JSON.parse(line);

            fullResponse += parsedLine.response || "";
            res.write(parsedLine.response || "");
          } catch (error) {
            console.error("Chunk Parse Error", error);
          }
        });
      });

      response.data.on("end", () => {
        resolve({
          success: true,
          message: fullResponse,
        });
        res.end();
      });

      response.data.on("error", (error) => {
        reject(error);
      });
    });
  } catch (error) {
    console.error("Ollama Error:", error.message);
    return {
      success: false,
      message: "Ollama service unavailable.",
    };
  }
};
