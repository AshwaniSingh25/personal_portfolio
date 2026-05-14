import React from "react";

const ChatButton = ({ onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="
        group
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#0b1120]/90
        text-white
        shadow-[0_0_30px_rgba(34,211,238,0.25)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute h-10 w-10 rounded-full bg-cyan-400/20 blur-xl" />

        <span className="relative text-cyan-300 text-2xl">💬</span>
      </div>
    </button>
  );
};

export default ChatButton;
