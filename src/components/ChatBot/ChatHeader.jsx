const ChatHeader = ({ onClose }) => {
  return (
    <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5">
      <div className="flex items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500">
          <span className="text-sm font-bold text-white">AI</span>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Manav AI Assistant</h2>

          <p className="text-xs text-gray-400">
            Online • Ask anything about Manav
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          text-gray-400
          transition-all
          duration-300
          hover:text-white
        "
      >
        ✕
      </button>
    </div>
  );
};

export default ChatHeader;
