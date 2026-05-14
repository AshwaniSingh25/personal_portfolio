import { motion } from "framer-motion";

const MessageBubble = ({ role, content, timestamp }) => {
  const isAssistant = role === "assistant";

  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const messageVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={messageVariants}
      transition={{
        duration: 0.25,
      }}
      className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-5
          py-4
          text-sm
          leading-relaxed

          ${
            isAssistant
              ? "bg-white/[0.04] border border-white/10 text-gray-300"
              : "bg-gradient-to-r from-violet-500 to-cyan-500 text-white"
          }
        `}
      >
        {content}
        <p className="mt-2 text-[10px] text-gray-500">{formattedTime}</p>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
