import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";

const ChatInput = ({ input, setInput, onSend, isLoading }) => {
  const inputRef = useRef(null);

  // AUTO FOCUS
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="
        relative
        z-20

        border-t
        border-white/10

        p-4

        backdrop-blur-xl
      "
    >
      {/* Background Reflection */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-white/[0.02]
          to-transparent
        "
      />

      <div
        className="
          relative

          flex
          items-center
          gap-3

          overflow-hidden

          rounded-[24px]

          border
          border-white/10

          bg-white/[0.03]

          px-4
          py-3

          backdrop-blur-2xl

          transition-all
          duration-300

          focus-within:border-cyan-400/30
          focus-within:shadow-[0_0_30px_rgba(34,211,238,0.08)]
        "
      >
        {/* Left Icon */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Sparkles
            className="
              h-4
              w-4

              text-cyan-300
            "
          />
        </motion.div>

        {/* INPUT */}
        <input
          ref={inputRef}
          disabled={isLoading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isLoading) {
              onSend();
            }
          }}
          type="text"
          placeholder={isLoading ? "AI is thinking..." : "Ask AI about Ashwani..."}
          className="
            flex-1

            bg-transparent

            text-[15px]
            text-white

            outline-none

            placeholder:text-gray-500
          "
        />

        {/* SEND BUTTON */}
        <motion.button
          disabled={isLoading || !input.trim()}
          onClick={onSend}
          whileHover={{
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className={`
            relative

            flex
            h-11
            w-11

            items-center
            justify-center

            overflow-hidden

            rounded-2xl

            transition-all
            duration-300

            ${
              input.trim()
                ? `
                  bg-gradient-to-br
                  from-violet-500
                  via-fuchsia-500
                  to-cyan-500

                  text-white

                  shadow-[0_0_25px_rgba(139,92,246,0.35)]

                  hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                `
                : `
                  bg-white/[0.04]

                  text-gray-500
                `
            }
          `}
        >
          {/* Shine Effect */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-b
              from-white/[0.12]
              to-transparent
            "
          />

          <ArrowUp
            className="
              relative
              z-10

              h-5
              w-5
            "
          />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatInput;
