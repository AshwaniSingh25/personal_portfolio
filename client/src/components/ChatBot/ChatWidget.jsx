import React, { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { generateFakeResponse } from "./utils/generateFakeResponse";
import { createMessage } from "./utils/createMessage";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    createMessage("assistant", "👋 Hi! I'm Manav's AI assistant."),
  ]);

  const [input, setInput] = useState("");

  const generateResponse = (messageContent) => {

    setMessages((prev) => [...prev, createMessage("user", messageContent)]);

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        createMessage("assistant", generateFakeResponse(messageContent)),
      ]);

      setIsTyping(false);
    }, 1000);
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
