"use client";

import { Star } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-tight text-[#1a1a1a] uppercase">MAILCLAW</span>
          </div>
          <span className="text-xs text-[#737373]">
            by{" "}
            <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-200">
              OpenClaw
            </a>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors duration-200"
          >
            Discord
          </a>
          <a
            href="#"
            className="text-sm text-[#737373] hover:text-[#1a1a1a] transition-colors duration-200"
          >
            GitHub
          </a>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-[#e5e5e5] rounded-lg hover:bg-[#fafafa] hover:border-[#d4d4d4] transition-all duration-200">
            <Star size={14} className="text-[#737373]" />
            <span className="text-[#525252]">Star</span>
          </button>
        </div>
      </div>
    </header>
  );
}
