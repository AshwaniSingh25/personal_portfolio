import React from "react";

const TypingLoader = () => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white">
        AI
      </div>

      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] px-5 py-4">
        <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0.4s]" />
      </div>
    </div>
  );
};

export default TypingLoader;
