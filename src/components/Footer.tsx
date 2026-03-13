"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-stone-900 flex items-center justify-center">
              <Mail size={11} className="text-stone-300" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-stone-900">MAILCLAW</span>
          </div>

          <p className="text-xs text-stone-400">
            Powered by OpenClaw · MIT License
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-500">
            <a href="#" className="hover:text-stone-900 transition-colors duration-200">
              GitHub
            </a>
            <a href="#" className="hover:text-stone-900 transition-colors duration-200">
              npm
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-stone-300">
            © 2026 OpenClaw · San Francisco, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
