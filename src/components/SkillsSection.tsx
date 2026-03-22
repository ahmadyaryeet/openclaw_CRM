"use client";

import { useState } from "react";
import { Download, Search } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const filterTabs = ["All", "Sales", "CRM", "Browser", "Frontend", "DevOps", "ML"];

const skills = [
  { name: "crm-automation", author: "mailclawhq", desc: "CRM workflow automation, lead scoring, pipeline management, and deal tracking", tags: ["crm", "sales"], downloads: "18.2K" },
  { name: "linkedin-outreach", author: "mailclawhq", desc: "Automated LinkedIn prospecting, connection requests, and follow-up sequences", tags: ["linkedin", "sales"], downloads: "14.8K" },
  { name: "lead-enrichment", author: "mailclawhq", desc: "Enrich contacts with LinkedIn, email, company data, and social profiles", tags: ["crm", "sales"], downloads: "12.1K" },
  { name: "email-sequences", author: "mailclawhq", desc: "Multi-step cold email campaigns with personalisation and A/B testing", tags: ["email", "sales"], downloads: "9.7K" },
  { name: "sales-pipeline", author: "mailclawhq", desc: "Track deals through stages with automated status updates and forecasting", tags: ["crm", "sales"], downloads: "8.3K" },
  { name: "agent-browser", author: "vercel-labs", desc: "Browser automation and web scraping capabilities for agents", tags: ["browser", "automation"], downloads: "35.8K" },
  { name: "browser-use", author: "browser-use", desc: "Control Chrome programmatically \u2014 click, type, navigate", tags: ["browser", "scraping"], downloads: "29.7K" },
  { name: "web-design-guidelines", author: "vercel-labs", desc: "Best practices for modern web design and accessibility", tags: ["design", "frontend"], downloads: "99.4K" },
  { name: "frontend-design", author: "anthropics", desc: "Expert frontend engineering patterns and component design", tags: ["frontend", "react"], downloads: "68.9K" },
  { name: "senior-ml-engineer", author: "davila7", desc: "Machine learning engineering best practices and pipelines", tags: ["ml", "python"], downloads: "12.3K" },
  { name: "devops-engineer", author: "jeffallan", desc: "Infrastructure, CI/CD, Docker, and deployment automation", tags: ["devops", "infra"], downloads: "8.7K" },
  { name: "typescript-expert", author: "sickn33", desc: "Advanced TypeScript patterns, type safety, and best practices", tags: ["typescript", "backend"], downloads: "15.1K" },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState(0);
  const ref = useScrollFade();

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 scroll-fade">
          <p className="text-sm font-mono text-stone-400 tracking-widest uppercase mb-3">
            Skills Store
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Extend your agent with one command
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Browse skills from <span className="font-medium text-stone-700">skills.sh</span> and{" "}
            <span className="font-medium text-stone-700">ClawHub</span>. Install any skill with a single command &mdash; your agent learns new capabilities instantly.
          </p>
        </div>

        <div className="scroll-fade bg-white border border-stone-200 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-stone-900">Skills Directory</h3>
                <p className="text-[10px] text-stone-400 mt-0.5">58,237 skills</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  className="pl-7 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none text-stone-700 placeholder:text-stone-400"
                  readOnly
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {filterTabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(i)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    i === activeFilter
                      ? "bg-stone-900 text-white"
                      : "text-stone-500 hover:bg-stone-100 hover:text-stone-700 border border-stone-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div key={skill.name} className="border border-stone-200 rounded-xl p-3.5 hover:border-stone-300 hover:shadow-md hover:-translate-y-px transition-all duration-200 bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-[11px] font-semibold text-stone-900">{skill.name}</p>
                      <p className="text-[9px] text-stone-400">{skill.author}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-stone-400">
                      <Download className="w-3 h-3" />
                      <span>{skill.downloads}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-500 leading-relaxed mb-2 line-clamp-2">{skill.desc}</p>
                  <div className="flex items-center gap-1.5">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="text-[9px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Install Example */}
          <div className="border-t border-stone-200 px-5 py-4 bg-stone-50/50 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-stone-900 text-stone-300 rounded-lg px-4 py-2 font-mono text-xs">
              <span className="text-stone-500">$</span>
              <span className="text-white">npx skills add</span>
              <span className="text-blue-400">vercel-labs/agent-browser</span>
            </div>
            <span className="text-[10px] text-stone-400">Install any skill instantly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
