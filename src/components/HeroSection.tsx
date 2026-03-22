"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function HeroSection() {
  const ref = useScrollFade();

  return (
    <section className="pt-20 pb-16 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Large faded background text */}
        <div
          className="scroll-fade select-none pointer-events-none text-[8rem] sm:text-[10rem] md:text-[14rem] font-bold tracking-tighter leading-none text-[#1a1a1a] opacity-[0.06] uppercase"
          aria-hidden="true"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        >
          MAILCLAW
        </div>

        {/* Tagline */}
        <p
          className="scroll-fade text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] mb-10 max-w-2xl mx-auto -mt-12 sm:-mt-16 md:-mt-20 leading-relaxed"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
        >
          AI Email Automation, hosted locally on your Mac. Built on{" "}
          <a
            href="#"
            className="underline underline-offset-4 decoration-[#d4d4d4] hover:decoration-[#1a1a1a] transition-colors duration-200"
          >
            OpenClaw
          </a>
          .
        </p>

        {/* Terminal CTA */}
        <div className="scroll-fade inline-flex items-center gap-3 bg-[#1a1a1a] text-[#d4d4d4] rounded-2xl px-7 py-4 font-mono text-sm animate-terminal-glow">
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

        <p className="scroll-fade text-xs text-[#737373] mt-4">
          opens at <code className="text-[#525252] bg-[#f5f5f5] px-1.5 py-0.5 rounded font-mono">localhost:3100</code>
        </p>
      </div>
    </section>
  );
}
