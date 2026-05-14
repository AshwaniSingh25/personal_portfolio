import { useState } from "react";

export default function PortfolioAIChatbotUI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* FLOATING CHAT BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
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
            hover:border-cyan-400/40
          "
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute h-10 w-10 rounded-full bg-cyan-400/20 blur-xl" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="relative h-7 w-7 text-cyan-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.255-1.063L3 21l1.063-4.745A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z"
              />
            </svg>
          </div>
        </button>
      )}

      {/* CHAT WINDOW */}
      {isOpen && (
        <div
          className="
            absolute
            bottom-20
            right-0
            flex
            h-[650px]
            w-[380px]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#060816]/95
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            backdrop-blur-2xl

            max-sm:bottom-0
            max-sm:right-0
            max-sm:h-[100dvh]
            max-sm:w-[100vw]
            max-sm:rounded-none
          "
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          {/* HEADER */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-4">
              {/* AI AVATAR */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                <div className="absolute h-full w-full animate-pulse rounded-2xl bg-cyan-400/20" />

                <span className="relative text-sm font-bold text-white">
                  AI
                </span>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Manav AI Assistant
                </h2>

                <div className="mt-1 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />

                  <p className="text-xs text-gray-400">
                    Online • Ask anything about Manav
                  </p>
                </div>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
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
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              ✕
            </button>
          </div>

          {/* QUICK QUESTIONS */}
          <div className="relative z-10 flex gap-3 overflow-x-auto border-b border-white/10 px-4 py-4 scrollbar-hide">
            {[
              "What technologies do you use?",
              "Tell me about your projects",
              "Do you know backend?",
              "What experience do you have?",
            ].map((item) => (
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
                  transition-all
                  duration-300
                  hover:bg-cyan-400/20
                "
              >
                {item}
              </button>
            ))}
          </div>

          {/* CHAT AREA */}
          <div className="relative z-10 flex-1 space-y-6 overflow-y-auto px-5 py-6">
            {/* AI MESSAGE */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white">
                AI
              </div>

              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-relaxed text-gray-300">
                👋 Hi! I'm Manav's AI assistant.
                <br />
                <br />
                Ask me about:
                <br />
                • Skills
                <br />
                • Projects
                <br />
                • Experience
                <br />• AI & automation
              </div>
            </div>
          </div>

          {/* INPUT */}
          <div className="relative z-10 border-t border-white/10 p-4">
            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-3
                backdrop-blur-xl
              "
            >
              <input
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
                  shadow-[0_0_20px_rgba(34,211,238,0.25)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
