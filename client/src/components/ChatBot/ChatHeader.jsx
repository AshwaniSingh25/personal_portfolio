import { motion } from "framer-motion";
import { Bot, Sparkles, X } from "lucide-react";

const ChatHeader = ({ onClose }) => {
  return (
    <div
      className="
        relative
        z-20

        flex
        items-center
        justify-between

        border-b
        border-white/10

        px-5
        py-4

        backdrop-blur-xl
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-violet-500/5
          via-cyan-500/5
          to-transparent
        "
      />

      {/* LEFT SECTION */}
      <div className="relative flex items-center gap-4">
        {/* AI ICON */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px rgba(34,211,238,0.25)",
              "0 0 22px rgba(139,92,246,0.35)",
              "0 0 10px rgba(34,211,238,0.25)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            relative

            flex
            h-12
            w-12

            items-center
            justify-center

            overflow-hidden

            rounded-2xl

            border
            border-white/10

            bg-gradient-to-br
            from-violet-500
            via-fuchsia-500
            to-cyan-500
          "
        >
          {/* Inner Glow */}
          <div
            className="
              absolute
              inset-0

              bg-white/10
            "
          />

          <Bot
            className="
              relative
              z-10

              h-5
              w-5

              text-white
            "
          />

          {/* Floating Sparkle */}
          <motion.div
            animate={{
              y: [0, -3, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              absolute
              right-1
              top-1
            "
          >
            <Sparkles
              className="
                h-3
                w-3

                text-cyan-200
              "
            />
          </motion.div>
        </motion.div>

        {/* TEXT */}
        <div>
          <div className="flex items-center gap-2">
            <h2
              className="
                text-[17px]
                font-semibold
                tracking-wide
                text-white
              "
            >
              Ashwani AI Assistant
            </h2>

            {/* LIVE STATUS DOT */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                h-2
                w-2

                rounded-full

                bg-emerald-400

                shadow-[0_0_10px_rgba(74,222,128,0.9)]
              "
            />
          </div>

          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              mt-0.5

              text-xs
              tracking-wide

              text-gray-400
            "
          >
            Online • Streaming intelligent responses
          </motion.p>
        </div>
      </div>

      {/* CLOSE BUTTON */}
      <motion.button
        onClick={onClose}
        whileHover={{
          scale: 1.08,
          rotate: 90,
        }}
        whileTap={{
          scale: 0.92,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          relative

          flex
          h-11
          w-11

          items-center
          justify-center

          overflow-hidden

          rounded-2xl

          border
          border-white/10

          bg-white/[0.03]

          text-gray-400

          transition-all
          duration-300

          hover:border-cyan-400/30
          hover:bg-cyan-400/10
          hover:text-white
        "
      >
        {/* Hover Glow */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-cyan-400/0
            to-violet-500/0

            opacity-0

            transition-opacity
            duration-300

            hover:opacity-100
          "
        />

        <X className="relative z-10 h-5 w-5" />
      </motion.button>
    </div>
  );
};

export default ChatHeader;
