import { motion } from "framer-motion";

import ChatHeader from "./ChatHeader";
import QuickQuestions from "./QuickQuestions";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatWindow = ({
  onClose,
  messages,
  input,
  setInput,
  onSend,
  isTyping,
  onQuickQuestion,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        damping: 18,
        stiffness: 180,
      }}
      className="
        fixed
        bottom-24
        right-5
        z-50

        flex
        h-[620px]
        w-[390px]
        flex-col

        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-[#060816]/90

        shadow-[0_20px_120px_rgba(0,0,0,0.7)]

        backdrop-blur-3xl

        max-sm:bottom-0
        max-sm:right-0
        max-sm:h-[100dvh]
        max-sm:w-full
        max-sm:rounded-none
      "
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-120px]

            h-[320px]
            w-[320px]

            -translate-x-1/2

            rounded-full

            bg-violet-500/15

            blur-3xl
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-[-80px]
            right-[-40px]

            h-[260px]
            w-[260px]

            rounded-full

            bg-cyan-500/15

            blur-3xl
          "
        />

        {/* Light Reflection */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-white/[0.04]
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Inner Border */}
      <div
        className="
          absolute
          inset-[1px]

          rounded-[31px]

          border
          border-white/[0.03]
        "
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <ChatHeader onClose={onClose} />

        <QuickQuestions onQuickQuestion={onQuickQuestion} />

        <ChatMessages messages={messages} isTyping={isTyping} />

        <ChatInput
          input={input}
          setInput={setInput}
          onSend={onSend}
          isTyping={isTyping}
        />
      </div>
    </motion.div>
  );
};

export default ChatWindow;
