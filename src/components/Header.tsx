"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src="/mailclaw-logo.svg" alt="MailClaw" width={24} height={24} className="rounded-md" />
            <span className="font-semibold text-sm tracking-tight text-stone-900">MailClaw</span>
          </div>
          <span className="text-xs text-stone-400">
            by{" "}
            <a href="#" className="hover:text-stone-600 transition-colors duration-200">
              OpenClaw
            </a>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
          >
            Discord
          </a>
          <a
            href="#"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
          >
            GitHub
          </a>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-stone-200 rounded-lg hover:bg-stone-50 hover:border-stone-300 transition-all duration-200">
            <Star size={14} className="text-stone-500" />
            <span className="text-stone-600">Star</span>
          </button>
        </div>
      </div>
    </header>
  );
}
