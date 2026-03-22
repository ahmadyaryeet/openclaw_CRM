"use client";

import { useState } from "react";
import { Search, Sparkles, Send, BarChart3, Clock, ArrowRight } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const tabs = [
  { label: "Find Contacts", icon: Search },
  { label: "Enrich Data", icon: Sparkles },
  { label: "Send Outreach", icon: Send },
  { label: "Analyze", icon: BarChart3 },
  { label: "Automate", icon: Clock },
];

const results = [
  { name: "Veer Shah", linkedin: "linkedin.com/in/veer-shah", email: "veer@cumulus.ai", education: "University of Wisconsin" },
  { name: "Emily Zhang", linkedin: "linkedin.com/in/emily-zhang", email: "emily@nexusai.co", education: "Stanford University" },
  { name: "Marcus Johnson", linkedin: "linkedin.com/in/marcus-j", email: "marcus@dataforge.io", education: "MIT" },
  { name: "Sarah Chen", linkedin: "linkedin.com/in/sarah-chen", email: "sarah@quantumlabs.co", education: "UC Berkeley" },
];

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(1);
  const ref = useScrollFade();

  return (
    <section className="relative py-20 sm:py-28 bg-stone-50 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 scroll-fade">
          <p className="text-sm font-mono text-stone-400 tracking-widest uppercase mb-3">
            Use Cases
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 italic mb-4">
            One prompt for anything
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto">
            Type what you need in plain English. MailClaw handles the rest.
          </p>
        </div>

        {/* Tabs */}
        <div className="scroll-fade flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  i === activeTab
                    ? "bg-white shadow-md border border-stone-200 text-stone-900"
                    : "bg-transparent border border-transparent text-stone-500 hover:text-stone-700 hover:bg-white/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Demo Card */}
        <div className="scroll-fade bg-white border border-stone-200/70 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Query Bar */}
          <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            </div>
            <span className="text-sm text-stone-700 font-serif italic flex-1">
              &ldquo;Enrich all contacts with LinkedIn and email&rdquo;
            </span>
            <div className="flex items-center gap-1 text-[10px] text-stone-400 font-mono shrink-0">
              <span>Running</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Results Area */}
          <div className="p-5 min-h-[340px] bg-stone-50/50">
            {/* Status */}
            <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-3">
              <Sparkles className="w-3 h-3 text-violet-500" />
              <span className="text-stone-600 font-medium">Enriching 127 profiles &mdash;</span>
              <span>98% coverage</span>
            </div>

            {/* Results Table */}
            <div className="border border-stone-100 rounded-xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1fr] text-[9px] font-mono text-stone-400 uppercase tracking-wider px-3 py-2 bg-stone-50/80 border-b border-stone-100">
                <span>Name</span>
                <span>LinkedIn</span>
                <span>Email</span>
                <span>Education</span>
              </div>

              {/* Table Rows */}
              {results.map((r) => (
                <div key={r.name} className="grid grid-cols-[1fr_1.2fr_1.2fr_1fr] text-[11px] px-3 py-2 border-b border-stone-50 last:border-0 items-center">
                  <span className="font-medium text-stone-800 truncate">{r.name}</span>
                  <span className="text-blue-500 truncate">{r.linkedin}</span>
                  <span className="text-stone-500 truncate">{r.email}</span>
                  <span className="text-stone-500 truncate">{r.education}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
