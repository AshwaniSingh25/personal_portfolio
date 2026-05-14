import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";
import TypingLoader from "./TypingLoader";
import { motion } from "framer-motion";

const ChatMessages = (props) => {
  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [props.messages]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex-1 overflow-y-auto px-5 py-6 space-y-4"
    >
      {props.messages.map((message, indx) => (
        <MessageBubble
          key={indx}
          role={message.role}
          content={message.content}
          timestamp={message.timestamp}
        />
      ))}
      <div ref={bottomRef} />
      {props.isTyping && <TypingLoader />}
    </motion.div>
  );
};

export default ChatMessages;
