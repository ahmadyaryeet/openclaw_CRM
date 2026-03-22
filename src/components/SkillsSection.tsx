"use client";

import { Download, Search } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const skills = [
  { name: "email-sequences", author: "openclaw", downloads: "24.1K", desc: "Multi-step cold email campaigns with personalisation and smart scheduling" },
  { name: "smtp-warmup", author: "openclaw", downloads: "18.7K", desc: "Automated email warm-up with reputation monitoring and deliverability scoring" },
  { name: "contact-enrichment", author: "openclaw", downloads: "16.3K", desc: "Enrich contacts with email, LinkedIn, company data, and social profiles" },
  { name: "bounce-handler", author: "openclaw", downloads: "12.9K", desc: "Detect and handle bounces, update contact lists, protect sender reputation" },
  { name: "reply-detection", author: "openclaw", downloads: "11.2K", desc: "AI-powered reply classification — interested, not now, unsubscribe, auto-reply" },
  { name: "template-engine", author: "openclaw", downloads: "9.8K", desc: "Dynamic email templates with merge fields, conditionals, and rich formatting" },
  { name: "spf-dkim-checker", author: "openclaw", downloads: "8.4K", desc: "Validate SPF, DKIM, and DMARC records for optimal deliverability" },
  { name: "ab-testing", author: "openclaw", downloads: "7.6K", desc: "Subject line and body A/B testing with statistical significance detection" },
  { name: "agent-browser", author: "vercel-labs", downloads: "35.8K", desc: "Browser automation and web scraping capabilities for agents" },
];

export default function SkillsSection() {
  const ref = useScrollFade();

  return (
    <section className="py-28 px-6 bg-[#fafafa]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="scroll-fade section-label mb-4">SKILLS</p>
          <h2
            className="scroll-fade text-3xl sm:text-4xl text-[#1a1a1a]"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            Extend with one command
          </h2>
        </div>

        <div className="scroll-fade section-card shadow-lg shadow-black/5">
          <div className="window-chrome">
            <div className="window-dot red" />
            <div className="window-dot yellow" />
            <div className="window-dot green" />
            <span className="ml-3 text-xs text-[#737373] font-mono">skills directory</span>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-sm font-semibold text-[#1a1a1a]">Skills Directory</h3>
                <p className="text-xs text-[#a3a3a3] mt-0.5">58,237 skills available</p>
              </div>
              <div className="relative">
                <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  className="pl-7 pr-3 py-1.5 text-xs bg-[#fafafa] border border-[#e5e5e5] rounded-lg focus:outline-none"
                  readOnly
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-xs font-semibold text-[#1a1a1a]">{skill.name}</p>
                      <p className="text-[9px] text-[#a3a3a3]">{skill.author}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-[#a3a3a3]">
                      <Download size={9} />
                      <span>{skill.downloads}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#737373] leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Install Example */}
          <div className="border-t border-[#e5e5e5] px-5 py-4 bg-[#fafafa]">
            <p className="text-[10px] text-[#737373] mb-2">Install a skill:</p>
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#d4d4d4] rounded-lg px-4 py-2 font-mono text-xs">
              <span className="text-[#737373]">$</span>
              <span className="text-white">npx skills add openclaw/email-sequences</span>
              <span className="animate-cursor-blink text-[#737373]">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
