"use client";

import { Download, Search } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const skills = [
  { name: "email-sequences", author: "openclaw", downloads: "24.1K", desc: "Multi-step cold email campaigns with personalisation, A/B testing, and smart scheduling" },
  { name: "smtp-warmup", author: "openclaw", downloads: "18.7K", desc: "Automated email warm-up with reputation monitoring and deliverability scoring" },
  { name: "contact-enrichment", author: "openclaw", downloads: "16.3K", desc: "Enrich contacts with email, LinkedIn, company data, and social profiles" },
  { name: "bounce-handler", author: "openclaw", downloads: "12.9K", desc: "Detect and handle bounces, update contact lists, protect sender reputation" },
  { name: "reply-detection", author: "openclaw", downloads: "11.2K", desc: "AI-powered reply classification — interested, not now, unsubscribe, auto-reply" },
  { name: "agent-browser", author: "vercel-labs", downloads: "35.8K", desc: "Browser automation and web scraping capabilities for agents" },
  { name: "template-engine", author: "openclaw", downloads: "9.8K", desc: "Dynamic email templates with merge fields, conditionals, and rich formatting" },
  { name: "web-design-guidelines", author: "vercel-labs", downloads: "99.4K", desc: "Best practices for modern web design and accessibility" },
  { name: "spf-dkim-checker", author: "openclaw", downloads: "8.4K", desc: "Validate SPF, DKIM, and DMARC records for optimal deliverability" },
  { name: "senior-ml-engineer", author: "davila7", downloads: "12.3K", desc: "Machine learning engineering best practices and pipelines" },
  { name: "ab-testing", author: "openclaw", downloads: "7.6K", desc: "Subject line and body A/B testing with statistical significance detection" },
  { name: "typescript-expert", author: "sickn33", downloads: "15.1K", desc: "Advanced TypeScript patterns, type safety, and best practices" },
];

export default function SkillsSection() {
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-fade text-3xl font-semibold tracking-tight text-stone-900 mb-3">
            Extend your agent with one command
          </h2>
          <p className="scroll-fade text-stone-500 max-w-lg mx-auto">
            Browse skills from skills.sh and ClawHub. Install any skill with a single command
            — your agent learns new email capabilities instantly.
          </p>
        </div>

        <div className="scroll-fade section-card shadow-lg shadow-stone-200/50">
          <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-100">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-stone-400 font-mono">skills directory</span>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-sm font-semibold text-stone-900">Skills Directory</h3>
                <p className="text-xs text-stone-400 mt-0.5">58,237 skills available</p>
              </div>
              <div className="relative">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  className="pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-300 transition-all duration-200"
                  readOnly
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card glow-border">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-stone-900">{skill.name}</p>
                      <p className="text-[10px] text-stone-400">{skill.author}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-stone-400">
                      <Download size={10} />
                      <span>{skill.downloads}</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Install Example */}
          <div className="border-t border-stone-100 px-5 py-4 bg-stone-50/50">
            <p className="text-xs text-stone-500 mb-2">Install a skill:</p>
            <div className="inline-flex items-center gap-2 bg-stone-950 text-stone-300 rounded-lg px-4 py-2 font-mono text-xs animate-terminal-glow">
              <span className="text-stone-500">$</span>
              <span className="text-white">npx skills add openclaw/email-sequences</span>
              <span className="animate-cursor-blink text-stone-500">▎</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
