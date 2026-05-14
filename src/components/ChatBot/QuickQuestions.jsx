import { quickQuestions } from "./chatbotData";

const QuickQuestions = () => {
  return (
    <div className="relative z-10 flex gap-3 overflow-x-auto border-b border-white/10 px-4 py-4 scrollbar-hide">
      {quickQuestions.map((item) => (
        <button
          key={item}
          className="
            whitespace-nowrap
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-4
            py-2
            text-xs
            font-medium
            text-cyan-300
          "
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default QuickQuestions;