"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function CTASection() {
  const ref = useScrollFade();

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="scroll-fade section-label mb-4">GET STARTED</p>
        <h2
          className="scroll-fade text-3xl sm:text-4xl text-[#1a1a1a] mb-4"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
        >
          Get started in 60 seconds
        </h2>
        <p className="scroll-fade text-[#737373] mb-10 max-w-md mx-auto">
          One command. Node 22+. Opens at{" "}
          <code className="text-[#525252] bg-[#f5f5f5] px-1.5 py-0.5 rounded text-sm font-mono">localhost:3100</code>{" "}
          in under a minute.
        </p>

        <div className="scroll-fade inline-flex items-center gap-3 bg-[#1a1a1a] text-[#d4d4d4] rounded-2xl px-7 py-4 font-mono text-sm mb-8 animate-terminal-glow">
          <span className="text-[#737373]">$</span>
          <span className="text-white font-medium">npx mailclaw</span>
          <span className="animate-cursor-blink text-[#737373]">|</span>
          <button
            onClick={() => navigator.clipboard.writeText("npx mailclaw")}
            className="ml-2 text-[#737373] hover:text-white transition-colors duration-200"
            title="Copy command"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>

        <div className="scroll-fade flex flex-wrap justify-center gap-6 text-xs text-[#a3a3a3]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Powered by OpenClaw
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Local-first by default
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            MIT Licensed
          </span>
        </div>
      </div>
    </section>
  );
}
