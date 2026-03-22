"use client";

import { Chrome, Database, Code, Brain } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

export default function CapabilitiesSection() {
  const ref = useScrollFade();

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 scroll-fade">
          <p className="text-sm font-mono text-stone-400 tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Not just chat &mdash; full autonomy
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            MailClaw doesn&apos;t just answer questions. It takes action &mdash; browsing the web, querying databases, writing code, and managing your pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-children">
          {/* Card 1: Uses Your Chrome Profile */}
          <div className="scroll-fade group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-stone-300 transition-all duration-300">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Chrome className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-stone-900 mb-1.5">Uses Your Chrome Profile</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Unlike other AI tools, MailClaw uses your existing Chrome profile &mdash; all your auth sessions, cookies, and history. It logs into LinkedIn, scrapes contacts, and sends messages as you.
                </p>
              </div>
            </div>
            <div className="bg-stone-900 rounded-xl p-4 text-[11px] font-mono text-stone-300 space-y-1.5 shadow-inner">
              <p><span className="text-stone-500">// MailClaw detects your active Chrome profile</span></p>
              <p><span className="text-green-400">&#x2713;</span> <span className="text-blue-400">Found Chrome profile:</span> <span className="text-stone-200">Default</span></p>
              <p><span className="text-green-400">&#x2713;</span> Auth sessions: <span className="text-stone-200">LinkedIn, Gmail, GitHub, Twitter</span></p>
              <p><span className="text-green-400">&#x2713;</span> Cookies synced &mdash; no login needed</p>
              <p className="pt-1"><span className="text-stone-500">// Browsing as you...</span></p>
              <p><span className="text-yellow-400">&#x2192;</span> <span className="text-yellow-400">Opening linkedin.com/in/veer-shah</span></p>
              <p><span className="text-yellow-400">&#x2192;</span> Sending connection request + message</p>
              <p><span className="text-green-400">&#x2713;</span> Connection request sent to <span className="text-stone-200">Veer Shah</span></p>
            </div>
          </div>

          {/* Card 2: Chat with Your Database */}
          <div className="scroll-fade group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-stone-300 transition-all duration-300">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Database className="w-5 h-5 text-violet-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-stone-900 mb-1.5">Chat with Your Database</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Ask questions in plain English &mdash; MailClaw translates to SQL, queries your DuckDB, and returns structured results. Like having a data analyst on speed dial.
                </p>
              </div>
            </div>
            <div className="bg-stone-900 rounded-xl p-4 text-[11px] font-mono space-y-2 shadow-inner">
              <p className="text-blue-400">&gt; How many founders have we contacted from YC W26?</p>
              <div className="bg-stone-800/50 rounded-lg p-3 mt-2">
                <p className="text-stone-400 text-[10px] mb-1">SELECT &quot;Status&quot;, COUNT(*) as count</p>
                <p className="text-stone-400 text-[10px]">FROM v_founders GROUP BY &quot;Status&quot;;</p>
              </div>
              <p className="text-stone-300 mt-2">
                You&apos;ve contacted <span className="text-green-400 font-semibold">67</span> of <span className="text-stone-200">200</span> founders. 31 are qualified, 13 converted. Reply rate is <span className="text-green-400 font-semibold">34%</span>.
              </p>
            </div>
          </div>

          {/* Card 3: Coding Agent with Diffs */}
          <div className="scroll-fade group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-stone-300 transition-all duration-300">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Code className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-stone-900 mb-1.5">Coding Agent with Diffs</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  MailClaw doesn&apos;t just talk &mdash; it writes code. Review changes in a rich diff viewer before applying. Like Cursor, but for your whole system.
                </p>
              </div>
            </div>
            <div className="bg-stone-900 rounded-xl overflow-hidden shadow-inner">
              <div className="px-4 py-2 border-b border-stone-700/30 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-mono">src/config/channels.ts</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-green-400">+3</span>
                  <span className="text-[10px] text-red-300">-1</span>
                </div>
              </div>
              <div className="p-4 text-[11px] font-mono space-y-0.5">
                <p className="text-stone-500"><span className="text-stone-600 mr-2">14</span> channels: {"{"}</p>
                <p className="bg-red-50/70 text-red-500 rounded px-1"><span className="text-stone-600 mr-2">15</span> <span className="text-red-300">&minus;</span>   whatsapp: {"{"} enabled: false {"}"}, </p>
                <p className="bg-green-50/70 text-green-600 rounded px-1"><span className="text-stone-600 mr-2">15</span> <span className="text-green-400">+</span> whatsapp: {"{"} enabled: true {"}"}, </p>
                <p className="bg-green-50/70 text-green-600 rounded px-1"><span className="text-stone-600 mr-2">16</span> <span className="text-green-400">+</span> telegram: {"{"} enabled: true {"}"}, </p>
                <p className="bg-green-50/70 text-green-600 rounded px-1"><span className="text-stone-600 mr-2">17</span> <span className="text-green-400">+</span> slack: {"{"} enabled: true {"}"}, </p>
                <p className="text-stone-500"><span className="text-stone-600 mr-2">18</span> {"}"},</p>
              </div>
            </div>
          </div>

          {/* Card 4: Your Second Brain */}
          <div className="scroll-fade group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-stone-300 transition-all duration-300">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Brain className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-stone-900 mb-1.5">Your Second Brain</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  MailClaw has full access to your Mac &mdash; files, apps, documents. It remembers context across sessions, learns your preferences, and proactively handles tasks.
                </p>
              </div>
            </div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl p-4 space-y-3">
              <p className="text-[10px] font-medium text-stone-500 uppercase tracking-wider mb-2">Memory</p>
              {[
                "Ahmad prefers Anthropic Claude for complex tasks, GPT-4o for quick responses",
                "YC W26 outreach campaign: 200 founders, 67 contacted, focus on AI/ML companies",
                "Follow-up sequence: LinkedIn \u2192 Email \u2192 2nd email (3 day intervals)",
                "Best send times: Tue/Thu 9:30am. Questions in subject lines get 34% more opens",
              ].map((mem, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 shrink-0" />
                  <p className="text-[11px] text-stone-600 leading-relaxed">{mem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
