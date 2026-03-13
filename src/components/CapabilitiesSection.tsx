"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function CapabilitiesSection() {
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-fade text-3xl font-semibold tracking-tight text-stone-900 mb-3">
            Not just drafts — full autonomy
          </h2>
          <p className="scroll-fade text-stone-500 max-w-lg mx-auto">
            MailClaw doesn&apos;t just write emails. It sends, tracks, follows up, enriches
            contacts, and manages your entire outreach pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger-children">
          {/* Gmail / SMTP Integration */}
          <div className="scroll-fade section-card">
            <div className="p-6">
              <h3 className="font-semibold text-lg text-stone-900 mb-1">Connects to Your Inbox</h3>
              <p className="text-sm text-stone-500 mb-5">
                Uses your Gmail, Outlook, or SMTP — sends as you, not a third party.
              </p>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="ml-2 text-xs text-stone-500">terminal</span>
                </div>
                <div className="terminal-body space-y-1">
                  <p><span className="text-green-400">✓</span> Connected to Gmail: <span className="text-white">you@company.com</span></p>
                  <p><span className="text-green-400">✓</span> SMTP verified · SPF/DKIM <span className="text-green-400">passing</span></p>
                  <p><span className="text-green-400">✓</span> Warm-up pool: <span className="text-blue-400">3 accounts rotated</span></p>
                  <p className="text-stone-500">→ Scheduling 42 emails across next 6 hours</p>
                  <p className="text-stone-500">→ Rate limiting: 12/hour per account</p>
                  <p><span className="text-green-400">✓</span> First batch sent — <span className="text-white">12 delivered</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Email Writer */}
          <div className="scroll-fade section-card">
            <div className="p-6">
              <h3 className="font-semibold text-lg text-stone-900 mb-1">AI Email Writer</h3>
              <p className="text-sm text-stone-500 mb-5">
                Ask in plain English, get personalised emails with merge fields.
              </p>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="ml-2 text-xs text-stone-500">mailclaw — compose</span>
                </div>
                <div className="terminal-body space-y-3">
                  <p className="text-stone-400">
                    &ldquo;Write a cold email to AI founders about our dev tools&rdquo;
                  </p>
                  <div className="bg-stone-900/50 rounded-lg p-3 text-xs">
                    <p className="text-stone-400">Subject: <span className="text-white">{"{{firstName}}"}, quick thought on {"{{company}}"}</span></p>
                    <p className="text-stone-500 mt-2">---</p>
                    <p className="text-stone-300 mt-2">Hi {"{{firstName}}"},</p>
                    <p className="text-stone-300 mt-1">Saw {"{{company}}"} in the YC W26 batch — congrats!</p>
                    <p className="text-stone-300 mt-1">We help AI teams ship 3x faster with...</p>
                    <p className="text-stone-500 mt-1">
                      <span className="animate-cursor-blink text-stone-400">▎</span>
                    </p>
                  </div>
                  <p className="text-xs text-stone-500">
                    Personalised for <span className="text-white font-medium">127 recipients</span> · avg. read time 18s
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sequence Builder */}
          <div className="scroll-fade section-card">
            <div className="p-6">
              <h3 className="font-semibold text-lg text-stone-900 mb-1">Sequence Builder with Diffs</h3>
              <p className="text-sm text-stone-500 mb-5">
                Modifies your email sequences with clear, reviewable changes.
              </p>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="ml-2 text-xs text-stone-500">sequences/yc-founders.yml</span>
                </div>
                <div className="terminal-body font-mono text-xs space-y-0">
                  <p className="text-stone-500">  sequence:</p>
                  <p className="text-stone-300">    step_1: {"{"} delay: &apos;0d&apos;, channel: &apos;email&apos; {"}"}</p>
                  <p className="text-stone-300">    step_2: {"{"} delay: &apos;3d&apos;, channel: &apos;email&apos; {"}"}</p>
                  <p className="bg-green-900/30 text-green-400">+   step_3: {"{"} delay: &apos;5d&apos;, channel: &apos;linkedin&apos; {"}"}</p>
                  <p className="bg-green-900/30 text-green-400">+   step_4: {"{"} delay: &apos;7d&apos;, channel: &apos;email&apos;, variant: &apos;breakup&apos; {"}"}</p>
                  <p className="bg-red-900/30 text-red-400">-   max_steps: 2</p>
                  <p className="bg-green-900/30 text-green-400">+   max_steps: 4</p>
                  <p className="text-stone-500">    cooldown: &apos;14d&apos;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Memory / Second Brain */}
          <div className="scroll-fade section-card">
            <div className="p-6">
              <h3 className="font-semibold text-lg text-stone-900 mb-1">Your Outreach Brain</h3>
              <p className="text-sm text-stone-500 mb-5">
                Remembers what works — subject lines, send times, reply patterns.
              </p>
              <div className="bg-stone-50 rounded-xl p-5 space-y-3">
                <div className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                    <span className="text-purple-600 text-xs">🧠</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-stone-700">Best Send Times</p>
                    <p className="text-xs text-stone-400">Tue/Thu 9:30am gets 2.4x more opens than Monday</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                    <span className="text-blue-600 text-xs">📋</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-stone-700">Winning Subject Lines</p>
                    <p className="text-xs text-stone-400">Questions outperform statements by 34% open rate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                    <span className="text-green-600 text-xs">🔄</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-stone-700">Follow-up Strategy</p>
                    <p className="text-xs text-stone-400">3rd touch gets 28% replies · breakup email converts 12%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                    <span className="text-orange-600 text-xs">🚫</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-stone-700">Spam Prevention</p>
                    <p className="text-xs text-stone-400">Auto-rotates accounts · respects 12/hr rate limit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
