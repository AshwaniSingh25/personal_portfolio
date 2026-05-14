const MessageBubble = ({ role, content }) => {
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
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
      </div>
    </div>
  );
};

export default MessageBubble;