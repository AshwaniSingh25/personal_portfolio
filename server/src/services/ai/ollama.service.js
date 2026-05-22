import axios from "axios";

export const generateOllamaResponse = async (prompt) => {
  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "qwen2.5:3b",

      prompt,

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
