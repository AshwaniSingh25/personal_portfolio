import React, { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hi! I'm Manav's AI assistant.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    // TEMPORARY FAKE AI RESPONSE
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm still under development, but soon I'll answer everything about Manav 🚀",
        },
      ]);
    }, 1000);
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
        />
      )}
    </div>
  );
};

export default ChatWidget;
