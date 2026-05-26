import { useState } from "react";

import { createMessage } from "../components/ChatBot/utils/createMessage";

const CHAT_ERROR_MESSAGE =
  "I couldn't connect to the AI service right now. Please make sure the backend/API is running and try again.";

const replaceLastAssistantMessage = (messages, content) => {
  const updated = [...messages];
  const lastMessageIndex = updated.length - 1;

  if (updated[lastMessageIndex]?.role === "assistant") {
    updated[lastMessageIndex] = {
      ...updated[lastMessageIndex],
      content,
    };

    return updated;
  }

  return [...updated, createMessage("assistant", content)];
};

export const useChatStream = () => {
  const [messages, setMessages] = useState([
    createMessage("assistant", "Hi! I'm Manav's AI assistant."),
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const [showTyping, setShowTyping] = useState(false);

  const sendMessage = async (messageContent) => {
    if (!messageContent.trim()) return;

    // CREATE UPDATED MESSAGE ARRAY
    const updatedMessages = [
      ...messages,

      createMessage("user", messageContent),

      createMessage("assistant", ""),
    ];

    // UPDATE UI IMMEDIATELY
    setMessages(updatedMessages);

    setIsLoading(true);
    setShowTyping(true);

    let timeoutId;

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("VITE_API_URL is not configured.");
      }

      const controller = new AbortController();
      timeoutId = window.setTimeout(() => controller.abort(), 45000);

      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: messageContent,

          messages: updatedMessages,
        }),

        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Chat API request failed with status ${response.status}.`);
      }

      if (!response.body) {
        throw new Error("Chat API returned no response stream.");
      }

      // STREAM READER
      const reader = response.body.getReader();

      const decoder = new TextDecoder();
      let streamedContent = "";

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        // DECODE CHUNK
        const chunk = decoder.decode(value);

        setShowTyping(false);
        streamedContent += chunk;

        // SMALL DELAY FOR SMOOTHNESS
        await new Promise((resolve) => setTimeout(resolve, 25));

        // UPDATE LAST MESSAGE
        setMessages((prev) => {
          const updated = [...prev];

          const lastMessageIndex = updated.length - 1;

          updated[lastMessageIndex] = {
            ...updated[lastMessageIndex],

            content: updated[lastMessageIndex].content + chunk,
          };

          return updated;
        });
      }

      window.clearTimeout(timeoutId);

      if (!streamedContent.trim()) {
        throw new Error("Chat API returned an empty response.");
      }
    } catch (error) {
      console.error("Streaming Error:", error);

      setMessages((prev) => replaceLastAssistantMessage(prev, CHAT_ERROR_MESSAGE));
    } finally {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      setIsLoading(false);

      setShowTyping(false);
    }
  };

  return {
    messages,
    isLoading,
    showTyping,
    sendMessage,
  };
};
