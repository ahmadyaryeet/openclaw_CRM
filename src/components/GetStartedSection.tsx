"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function GetStartedSection() {
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6 bg-stone-50/50" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        {/* YC Badge */}
        <div className="scroll-fade inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-8 transition-transform duration-300 hover:scale-105">
          <svg width="20" height="20" viewBox="0 0 40 40" className="rounded">
            <rect width="40" height="40" rx="4" fill="#FF5733" />
            <path d="M10 8L20 22V32H20V22L30 8H26L20 18L14 8H10Z" fill="white" />
          </svg>
          <span className="text-sm font-medium text-orange-700">Backed by Y Combinator</span>
        </div>

        <h2 className="scroll-fade text-3xl font-semibold tracking-tight text-stone-900 mb-3">
          Up and running in seconds
        </h2>
        <p className="scroll-fade text-stone-500 mb-10 max-w-md mx-auto">
          One command bootstraps install, onboarding, SMTP config, and the web UI.
        </p>

        {/* Agentic workflows */}
        <div className="scroll-fade mb-16">
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-2">
            <span className="shimmer-text">Agentic email workflows that let you focus on what matters</span>
          </h3>
          <p className="text-stone-400 text-sm">MIT Licensed · Open Source</p>
        </div>

        {/* Built in the open */}
        <div className="scroll-fade mb-16">
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-3">
            Built in the open
          </h3>
          <p className="text-stone-500 max-w-md mx-auto mb-6">
            MailClaw is your ultimate OpenClaw Email Automation Framework. The right way to
            automate outreach with OpenClaw.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white text-sm rounded-lg hover:bg-stone-800 transition-all duration-200 hover:shadow-lg hover:shadow-stone-900/20"
            >
              View on GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-200 text-sm rounded-lg hover:bg-stone-50 hover:border-stone-300 transition-all duration-200"
            >
              Star the Repo
            </a>
          </div>
        </div>

        {/* OpenClaw Architecture */}
        <div className="scroll-fade section-card p-8 text-left mb-16">
          <h3 className="text-lg font-semibold text-stone-900 mb-6 text-center">OpenClaw Architecture</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                <span className="text-lg">⚡</span>
              </div>
              <h4 className="font-semibold text-sm text-stone-900 mb-1">Runtime</h4>
              <p className="text-xs text-stone-500">Local-first agents + SMTP gateway</p>
            </div>
            <div className="text-center group">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                <span className="text-lg">🧩</span>
              </div>
              <h4 className="font-semibold text-sm text-stone-900 mb-1">Skills</h4>
              <p className="text-xs text-stone-500">Composable email automations and tools</p>
            </div>
            <div className="text-center group">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                <span className="text-lg">🖥️</span>
              </div>
              <h4 className="font-semibold text-sm text-stone-900 mb-1">Interfaces</h4>
              <p className="text-xs text-stone-500">Web UI, email channels, and APIs</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <a href="#" className="text-xs text-blue-600 hover:underline transition-colors duration-200">
              Powered by OpenClaw →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
