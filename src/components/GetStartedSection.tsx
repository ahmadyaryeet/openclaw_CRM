"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function GetStartedSection() {
  const ref = useScrollFade();

  return (
    <section className="py-20 sm:py-24 bg-stone-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="scroll-fade flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm sm:text-base text-stone-400 font-light">Backed by</span>
            <svg width="100" height="28" viewBox="0 0 100 28" className="text-stone-400">
              <text x="0" y="20" fill="currentColor" fontSize="14" fontWeight="600" fontFamily="var(--font-mono), monospace">OpenClaw</text>
            </svg>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 italic font-light max-w-2xl leading-snug">
            Agentic email workflows that let you focus on what matters
          </h2>
        </div>
      </div>
    </section>
  );
}
