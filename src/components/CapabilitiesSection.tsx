"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function CapabilitiesSection() {
  const ref = useScrollFade();

  return (
    <section className="py-28 px-6 bg-[#fafafa]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="scroll-fade section-label mb-4">CAPABILITIES</p>
          <h2
            className="scroll-fade text-3xl sm:text-4xl text-[#1a1a1a]"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            Not just drafts — full autonomy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger-children">
          {/* Card 1: AI Email Writer */}
          <div className="scroll-fade section-card">
            <div className="p-8">
              <h3 className="font-semibold text-lg text-[#1a1a1a] mb-2">AI Email Writer</h3>
              <p className="text-sm text-[#737373] mb-6">
                MailClaw doesn&apos;t just template — it writes personalized emails.
                Review drafts in a rich preview before sending.
              </p>

              {/* Mock email preview */}
              <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-[#e5e5e5] bg-[#fafafa]">
                  <div className="flex items-center gap-2 text-xs text-[#737373]">
                    <span className="font-medium text-[#1a1a1a]">Draft</span>
                    <span className="text-[#d4d4d4]">|</span>
                    <span>to: veer@cumulus.ai</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <p className="text-[#737373]">Subject: <span className="text-[#1a1a1a] font-medium">Quick thought on Cumulus Labs</span></p>
                  <div className="border-t border-[#f5f5f5] pt-3 text-[#525252] leading-relaxed">
                    <p>Hi Veer,</p>
                    <p className="mt-2">Saw Cumulus Labs in the YC W26 batch — congrats! We help AI teams ship 3x faster with automated outreach that actually converts.</p>
                    <p className="mt-2">Would love 15 minutes to show you how we helped Nexus AI hit 73% open rates.</p>
                    <p className="mt-2 text-[#737373]">Best,<br/>Ahmad</p>
                  </div>
                </div>
                <div className="px-4 py-2.5 border-t border-[#f5f5f5] bg-[#fafafa] flex items-center gap-3">
                  <span className="text-[10px] text-[#737373]">Personalized for <span className="font-medium text-[#1a1a1a]">127 recipients</span></span>
                  <span className="text-[10px] text-[#a3a3a3]">avg. read time 18s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Your Email Brain */}
          <div className="scroll-fade section-card">
            <div className="p-8">
              <h3 className="font-semibold text-lg text-[#1a1a1a] mb-2">Your Email Brain</h3>
              <p className="text-sm text-[#737373] mb-6">
                MailClaw has full access to your contacts, sequences, analytics. It remembers
                context and proactively handles follow-ups.
              </p>

              {/* Memory/context display */}
              <div className="bg-[#fafafa] rounded-xl p-5 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">&#x1f9e0;</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#1a1a1a]">Best Send Times</p>
                    <p className="text-xs text-[#737373] mt-0.5">Tue/Thu 9:30am gets 2.4x more opens than Monday</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">&#x1f4cb;</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#1a1a1a]">Winning Subject Lines</p>
                    <p className="text-xs text-[#737373] mt-0.5">Questions outperform statements by 34% open rate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">&#x1f504;</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#1a1a1a]">Follow-up Strategy</p>
                    <p className="text-xs text-[#737373] mt-0.5">3rd touch gets 28% replies. Breakup email converts 12%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">&#x1f6e1;&#xfe0f;</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#1a1a1a]">Spam Prevention</p>
                    <p className="text-xs text-[#737373] mt-0.5">Auto-rotates accounts. Respects 12/hr rate limit</p>
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
