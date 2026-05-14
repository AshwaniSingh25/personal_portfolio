import ChatHeader from "./ChatHeader";
import QuickQuestions from "./QuickQuestions";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { motion } from "framer-motion";

const ChatWindow = (props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
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
        duration: 0.25,
      }}
      className="
        absolute
        bottom-20
        right-0
        flex
        h-[580px]
        w-[380px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#060816]/95
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]
        backdrop-blur-2xl

        max-sm:bottom-0
        max-sm:right-0
        max-sm:h-[100dvh]
        max-sm:w-[100vw]
        max-sm:rounded-none
      "
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <ChatHeader onClose={props.onClose} />

      <QuickQuestions onQuickQuestion={props.onQuickQuestion} />

      <ChatMessages isTyping={props.isTyping} messages={props.messages} />

      <ChatInput
        input={props.input}
        setInput={props.setInput}
        onSend={props.onSend}
        isTyping={props.isTyping}
      />
    </motion.div>
  );
};

export default ChatWindow;
