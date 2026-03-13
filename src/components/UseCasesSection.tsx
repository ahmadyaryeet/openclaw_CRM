"use client";

import { useState } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";

const tabs = ["Draft Emails", "Build Sequences", "Enrich Contacts", "A/B Test", "Automate"];

const results = [
  { name: "Veer Shah", company: "Cumulus Labs", email: "veer@cumulus.ai", score: 98 },
  { name: "Emily Zhang", company: "Nexus AI", email: "emily@nexusai.co", score: 95 },
  { name: "Marcus Johnson", company: "DataForge", email: "marcus@dataforge.io", score: 93 },
  { name: "Sarah Chen", company: "Quantum Labs", email: "sarah@quantumlabs.ai", score: 91 },
  { name: "Alex Park", company: "Synthetics.io", email: "alex@synthetics.io", score: 88 },
];

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6 bg-stone-50/50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="scroll-fade text-3xl font-semibold tracking-tight text-stone-900 mb-3">
          One prompt for any email task
        </h2>
        <p className="scroll-fade text-stone-500 mb-10 max-w-lg mx-auto">
          Type what you need in plain English. MailClaw writes, sends, and tracks it all.
        </p>

        {/* Tabs */}
        <div className="scroll-fade flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`tab-btn ${i === activeTab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Demo Card */}
        <div className="scroll-fade section-card text-left max-w-2xl mx-auto shadow-lg shadow-stone-200/50">
          <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-100">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-stone-400 font-mono">mailclaw — agent</span>
          </div>

          <div className="p-5 space-y-4">
            {/* Query */}
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">U</span>
              </div>
              <p className="text-sm font-medium text-stone-900">
                &ldquo;Draft a 3-step cold email sequence for YC W26 AI founders&rdquo;
              </p>
            </div>

            {/* Status */}
            <div className="ml-9 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                <span>Generating sequence...</span>
              </div>
              <p className="text-xs text-stone-400">
                Enriching 127 contacts · Personalising subject lines · Scheduling sends
              </p>
            </div>

            {/* Results */}
            <div className="ml-9 bg-stone-50 rounded-xl p-4">
              <p className="text-xs font-medium text-stone-500 mb-3 uppercase tracking-wider">
                Sequence Preview — 127 recipients
              </p>
              <div className="space-y-2.5">
                {results.map((r) => (
                  <div key={r.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600 transition-colors duration-200 group-hover:bg-stone-900 group-hover:text-white">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">{r.name}</p>
                        <p className="text-xs text-stone-400">{r.email}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-green-600">{r.score}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
