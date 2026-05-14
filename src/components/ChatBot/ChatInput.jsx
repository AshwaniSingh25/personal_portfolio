import { useEffect, useRef } from "react";

const ChatInput = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  return (
    <div className="relative z-10 border-t border-white/10 p-4">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <input
          ref={inputRef}
          disabled={props.isTyping}
          value={props.input}
          onChange={(e) => props.setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.onSend();
            }
          }}
          type="text"
          placeholder="Ask AI about Manav..."
          className="
            flex-1
            bg-transparent
            px-2
            text-sm
            text-white
            outline-none
            placeholder:text-gray-500
          "
        />

        <button
          disabled={props.isTyping}
          onClick={props.onSend}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            from-violet-500
            to-cyan-500
            text-white
          "
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
