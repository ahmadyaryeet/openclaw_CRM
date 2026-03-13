"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function CTASection() {
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="scroll-fade text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
          Get Started
        </p>
        <h2 className="scroll-fade text-4xl font-semibold tracking-tight text-stone-900 mb-3">
          Install MailClaw
        </h2>
        <p className="scroll-fade text-stone-500 mb-8 max-w-md mx-auto">
          One command. Node 22+. Opens at{" "}
          <code className="text-stone-700 bg-stone-100 px-1.5 py-0.5 rounded text-sm">localhost:3100</code>{" "}
          in under a minute.
        </p>

        <div className="scroll-fade inline-flex items-center gap-3 bg-stone-950 text-stone-300 rounded-xl px-6 py-3.5 font-mono text-sm mb-6 animate-terminal-glow">
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

        <div className="scroll-fade flex flex-wrap justify-center gap-6 text-xs text-stone-400 mb-8">
          <span className="flex items-center gap-1.5 transition-colors duration-200 hover:text-stone-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Powered by OpenClaw
          </span>
          <span className="flex items-center gap-1.5 transition-colors duration-200 hover:text-stone-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Local-first by default
          </span>
          <span className="flex items-center gap-1.5 transition-colors duration-200 hover:text-stone-600">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Extensible with skills
          </span>
        </div>

        <a
          href="#"
          className="scroll-fade text-sm text-blue-600 hover:underline transition-colors duration-200"
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
}
