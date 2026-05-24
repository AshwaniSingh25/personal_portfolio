import React from "react";

import { motion } from "framer-motion";
import { Sparkles, Bot } from "lucide-react";

const ChatButton = ({ onOpen }) => {
  return (
    <motion.button
      onClick={onOpen}
      aria-label="Open AI Chat Assistant"
      initial={{
        opacity: 0,
        scale: 0.5,
        rotate: -20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      whileHover={{
        scale: 1.12,
        y: -4,
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 12,
      }}
      className="
        group
        fixed
        bottom-5
        right-5
        z-50

        flex
        h-16
        w-16
        md:h-20
        md:w-20

        items-center
        justify-center

        overflow-hidden
        rounded-[28px]

        border
        border-white/10

        bg-[#060816]/90

        backdrop-blur-2xl

        shadow-[0_0_60px_rgba(34,211,238,0.25)]

        transition-all
        duration-500
      "
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[-40%]

          bg-conic-gradient
          from-cyan-400/30
          via-violet-500/30
          to-cyan-400/30

          blur-3xl
        "
      />

      {/* Floating Gradient Blob */}
      <motion.div
        animate={{
          x: [0, 10, -5, 0],
          y: [0, -10, 5, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-24
          w-24

          rounded-full

          bg-gradient-to-br
          from-cyan-400/30
          via-violet-500/20
          to-cyan-500/20

          blur-2xl
        "
      />

      {/* Glass Inner Layer */}
      <div
        className="
          absolute
          inset-[2px]

          rounded-[26px]

          bg-[#0b1120]/95

          backdrop-blur-2xl
        "
      />

      {/* Animated Ring */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-1

          rounded-[24px]

          border
          border-cyan-400/20
        "
      />

      {/* Bot Icon */}
      <motion.div
        animate={{
          y: [0, -3, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20

          flex
          items-center
          justify-center
        "
      >
        <Bot
          className="
            h-8
            w-8

            text-cyan-300

            drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:text-white
          "
        />
      </motion.div>

      {/* Floating Sparkles */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          right-3
          top-3
          z-20
        "
      >
        <Sparkles
          className="
            h-3.5
            w-3.5

            text-cyan-300
          "
        />
      </motion.div>

      {/* Online Indicator */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-3
          right-3
          z-20

          h-2.5
          w-2.5

          rounded-full
          bg-emerald-400

          shadow-[0_0_14px_rgba(74,222,128,0.9)]
        "
      />

      {/* Hover Shine Effect */}
      <motion.div
        initial={{
          x: "-120%",
        }}
        whileHover={{
          x: "120%",
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          absolute
          inset-y-0

          w-10

          rotate-12

          bg-white/10

          blur-md
        "
      />
    </motion.button>
  );
};

export default ChatButton;
