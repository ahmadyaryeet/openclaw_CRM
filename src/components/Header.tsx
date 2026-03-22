"use client";

import { Star, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-stone-50/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-13 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mailclaw-logo.svg" alt="MailClaw" className="w-7 h-7 rounded-md" />
          <div className="flex flex-col">
            <span className="font-mono text-base font-semibold tracking-wider text-stone-900 leading-none">
              MAILCLAW
            </span>
            <span className="text-[10px] font-medium text-stone-500 leading-none">
              by{" "}
              <span className="hover:text-stone-600 transition-colors">
                OpenClaw
              </span>
            </span>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-500 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="hidden sm:inline">Discord</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-500 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 text-white text-xs font-medium rounded-full hover:bg-stone-800 transition-colors">
            <Star className="w-3 h-3" />
            Star
          </button>
        </div>
      </div>
    </header>
  );
}
