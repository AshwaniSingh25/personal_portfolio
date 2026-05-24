import React, { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

import { useChatStream } from "../../hooks/useChatStream";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const { messages, isLoading, sendMessage, showTyping } = useChatStream();

  // SEND MESSAGE
  const handleSend = () => {
    if (!input.trim()) return;

    sendMessage(input);

    setInput("");
  };

  // QUICK QUESTION
  const handleQuickQuestion = (question) => {
    sendMessage(question);
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
          isLoading={isLoading}
          showTyping={showTyping}
          onQuickQuestion={handleQuickQuestion}
        />
      )}
    </div>
  );
};

export default ChatWidget;
