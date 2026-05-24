import { motion } from "framer-motion";

import { quickQuestions } from "./chatbotData";

const QuickQuestions = ({ onQuickQuestion }) => {
  return (
    <div
      className="
        relative
        z-10

        flex
        gap-3

        overflow-x-auto

        border-b
        border-white/10

        px-4
        py-4

        scrollbar-hide
      "
    >
      {quickQuestions.map((item, index) => (
        <motion.button
          key={item}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.08,
          }}
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => onQuickQuestion(item)}
          className="
              group
              relative

              flex-shrink-0

              overflow-hidden

              whitespace-nowrap

              rounded-2xl

              border
              border-cyan-400/20

              bg-white/[0.03]

              px-5
              py-2.5

              text-[13px]
              font-medium

              text-cyan-200

              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-cyan-400/40
              hover:text-white
              hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]
            "
        >
          {/* Glow Background */}
          <div
            className="
                absolute
                inset-0

                bg-gradient-to-r
                from-cyan-500/0
                via-cyan-400/10
                to-violet-500/0

                opacity-0

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
          />

          {/* Inner Reflection */}
          <div
            className="
                absolute
                inset-0

                bg-gradient-to-b
                from-white/[0.06]
                to-transparent
              "
          />

          {/* Text */}
          <span className="relative z-10">{item}</span>

          {/* Hover Shine */}
          <motion.div
            initial={{
              x: "-120%",
            }}
            whileHover={{
              x: "120%",
            }}
            transition={{
              duration: 0.7,
            }}
            className="
                absolute
                inset-y-0

                w-8

                rotate-12

                bg-white/10

                blur-md
              "
          />
        </motion.button>
      ))}
    </div>
  );
};

export default QuickQuestions;
