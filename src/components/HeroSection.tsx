"use client";

import Image from "next/image";
import { useScrollFade } from "@/hooks/useScrollFade";

export default function HeroSection() {
  const ref = useScrollFade();

  return (
    <section className="pt-24 pb-16 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="scroll-fade flex items-center justify-center gap-4 mb-6">
          <Image
            src="/mailclaw-logo.svg"
            alt="MailClaw"
            width={56}
            height={56}
            className="rounded-xl"
            priority
          />
          <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-stone-900">
            <span className="shimmer-text">MailClaw</span>
          </h1>
        </div>

        <p className="scroll-fade text-lg text-stone-500 mb-8 max-w-xl mx-auto">
          AI Email Automation, hosted locally on your Mac. Built on{" "}
          <a href="#" className="text-stone-700 hover:text-stone-900 underline underline-offset-2 decoration-stone-300 hover:decoration-stone-500 transition-colors duration-200">
            OpenClaw
          </a>
          .
        </p>

        <div className="scroll-fade inline-flex items-center gap-3 bg-stone-950 text-stone-300 rounded-xl px-6 py-3.5 font-mono text-sm animate-terminal-glow">
          <span className="text-stone-500">$</span>
          <span className="text-white">npx mailclaw</span>
          <span className="animate-cursor-blink text-stone-400">▎</span>
          <button
            onClick={() => navigator.clipboard.writeText("npx mailclaw")}
            className="ml-2 text-stone-500 hover:text-stone-300 transition-colors duration-200"
            title="Copy command"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>

        <p className="scroll-fade text-xs text-stone-400 mt-3">
          opens at <code className="text-stone-500 bg-stone-100 px-1 py-0.5 rounded">localhost:3100</code>
        </p>
      </div>
    </section>
  );
}
