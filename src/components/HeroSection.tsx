"use client";

import { Copy } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const ASCII_BANNER = `███╗   ███╗ █████╗ ██╗██╗      ██████╗██╗      █████╗ ██╗    ██╗
████╗ ████║██╔══██╗██║██║     ██╔════╝██║     ██╔══██╗██║    ██║
██╔████╔██║███████║██║██║     ██║     ██║     ███████║██║ █╗ ██║
██║╚██╔╝██║██╔══██║██║██║     ██║     ██║     ██╔══██║██║███╗██║
██║ ╚═╝ ██║██║  ██║██║███████╗╚██████╗███████╗██║  ██║╚███╔███╔╝
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝`;

export default function HeroSection() {
  const ref = useScrollFade();

  return (
    <section
      className="relative pt-24 pb-0 sm:pt-32 sm:pb-0 flex flex-col items-center overflow-hidden bg-stone-50"
      ref={ref}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* ASCII Banner with iron shimmer */}
        <pre className="ascii-banner select-none scroll-fade">{ASCII_BANNER}</pre>

        {/* Tagline */}
        <p className="scroll-fade mt-5 text-center font-serif text-xl sm:text-2xl lg:text-3xl text-stone-600 italic">
          AI Email Automation, hosted locally on your Mac. Built on{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-stone-900 transition-colors"
          >
            OpenClaw
          </a>
          .
        </p>

        {/* Terminal CTA */}
        <div className="scroll-fade mt-7">
          <button
            onClick={() => navigator.clipboard.writeText("npx mailclaw")}
            className="bg-stone-800/90 border border-stone-800 rounded-[12px] px-6 py-3.5 font-mono text-base ring-2 ring-stone-200 ring-offset-4 ring-offset-stone-50 text-stone-50 flex items-center justify-between gap-3.5 cursor-pointer transition-all duration-300 hover:border-stone-700 group"
          >
            <span className="text-stone-500">$</span>
            <span className="text-stone-50">npx mailclaw</span>
            <Copy className="w-4 h-4 text-stone-500 group-hover:text-stone-300 transition-colors" />
          </button>
        </div>

        {/* Localhost note */}
        <p className="scroll-fade mt-2.5 text-[11px] text-stone-400 font-mono">
          opens at <span className="text-stone-500">localhost:3100</span>
        </p>
      </div>
    </section>
  );
}
