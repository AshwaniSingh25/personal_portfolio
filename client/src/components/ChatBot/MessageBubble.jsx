import { motion } from "framer-motion";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MessageBubble = ({
  role,
  content,
  timestamp,
}) => {
  const isAssistant =
    role === "assistant";

  const formattedTime =
    new Date(timestamp).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );

  const messageVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      scale: 0.96,
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
      className={`flex ${
        isAssistant
          ? "justify-start"
          : "justify-end"
      }`}
    >
      <div
        className={`
          relative

          max-w-[92%]
          md:max-w-[88%]

          overflow-hidden

          rounded-[26px]

          px-5
          py-4

          backdrop-blur-xl

          ${
            isAssistant
              ? `
                border
                border-white/10

                bg-white/[0.04]

                text-gray-200

                shadow-[0_8px_40px_rgba(0,0,0,0.25)]
              `
              : `
                bg-gradient-to-br
                from-violet-500
                via-fuchsia-500
                to-cyan-500

                text-white

                shadow-[0_8px_30px_rgba(139,92,246,0.35)]
              `
          }
        `}
      >
        {/* Reflection Layer */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-white/[0.05]
            to-transparent
          "
        />

        {/* Message Content */}
        <div
          className="
            relative
            z-10

            prose
            prose-invert

            max-w-none

            prose-p:leading-7
            prose-p:text-[15px]

            prose-headings:text-white

            prose-strong:text-white

            prose-code:text-cyan-300

            prose-pre:border
            prose-pre:border-white/10
            prose-pre:bg-black/40

            prose-li:text-gray-200

            prose-a:text-cyan-300
            prose-a:no-underline

            prose-blockquote:border-cyan-400/40
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Timestamp */}
        <div
          className={`
            mt-3

            text-[11px]

            ${
              isAssistant
                ? "text-gray-500"
                : "text-white/70"
            }
          `}
        >
          {formattedTime}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
