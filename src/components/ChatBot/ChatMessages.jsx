import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";
import TypingLoader from "./TypingLoader";

const ChatMessages = (props) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [props.messages]);

  return (
    <div className="relative z-10 flex-1 overflow-y-auto px-5 py-6 space-y-4">
      {props.messages.map((message, indx) => (
        <MessageBubble
          key={indx}
          role={message.role}
          content={message.content}
        />
      ))}
      <div ref={bottomRef}/>
      {props.isTyping && <TypingLoader />}
    </div>
  );
};

export default ChatMessages;
