"use client";

import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <span className="font-mono text-sm font-semibold tracking-wider text-stone-900">
              MAILCLAW
            </span>
            <p className="text-xs text-stone-400">
              Powered by{" "}
              <a href="#" className="underline underline-offset-2 hover:text-stone-600 transition-colors">
                OpenClaw
              </a>{" "}
              &middot; MIT License
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-stone-500">
            <a href="#" className="flex items-center gap-1.5 hover:text-stone-900 transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="#" className="hover:text-stone-900 transition-colors">
              npm
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-100 text-center">
          <p className="text-xs text-stone-400">
            &copy; 2026 MailClaw &middot; San Francisco, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
