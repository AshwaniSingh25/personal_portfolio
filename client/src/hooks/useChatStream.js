import { useState } from "react";

import { createMessage } from "../components/ChatBot/utils/createMessage";

export const useChatStream = () => {
  const [messages, setMessages] = useState([
    createMessage("assistant", "👋 Hi! I'm Manav's AI assistant."),
  ]);

  const [isTyping, setIsTyping] = useState(false);

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

    setIsTyping(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: messageContent,

          messages: updatedMessages,
        }),
      });

      // STREAM READER
      const reader = response.body.getReader();

      const decoder = new TextDecoder();

      setIsTyping(false);

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        // DECODE CHUNK
        const chunk = decoder.decode(value);

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
    } catch (error) {
      console.error("Streaming Error:", error);

      setMessages((prev) => [
        ...prev,

        createMessage(
          "assistant",
          "Something went wrong while connecting to the server.",
        ),
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return {
    messages,
    isTyping,
    sendMessage,
  };
};
