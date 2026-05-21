import React, { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { createMessage } from "./utils/createMessage";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    createMessage("assistant", "👋 Hi! I'm Manav's AI assistant."),
  ]);

  const [input, setInput] = useState("");

  // API call function
  const fetchData = async (messageContent) => {
    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageContent,messages }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.log("Error", error);
      return {
        success: false,
        message: "Something went wrong while connecting to the server.",
      };
    }
  };

  const generateResponse = async (messageContent) => {
    setMessages((prev) => [...prev, createMessage("user", messageContent)]);

    // start typing animation
    setIsTyping(true);

    // wait for backend response
    const result = await fetchData(messageContent);

      setMessages((prev) => [
        ...prev,
        createMessage("assistant", result.message),
      ]);

      // Stop typing
      setIsTyping(false);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    generateResponse(input);

    setInput("");
  };

  const handleQuickQuestion = (question) => {
    generateResponse(question);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && <ChatButton onOpen={() => setIsOpen(true)} />}

      {isOpen && (
        <ChatWindow
          onClose={() => setIsOpen(false)}
          messages={messages}
          input={input}
          setInput={setInput}
          onSend={handleSend}
          isTyping={isTyping}
          onQuickQuestion={handleQuickQuestion}
        />
      )}
    </div>
  );
};

export default ChatWidget;
