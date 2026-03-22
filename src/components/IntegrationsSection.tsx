"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const integrations = [
  { name: "Google Drive", icon: "/logos/apps/google-drive.svg" },
  { name: "Notion", icon: "/logos/apps/notion.svg" },
  { name: "Salesforce", icon: "/logos/apps/salesforce.svg" },
  { name: "HubSpot", icon: "/logos/apps/hubspot.svg" },
  { name: "Gmail", icon: "/logos/apps/gmail.svg" },
  { name: "Calendar", icon: "/logos/apps/google-calendar.svg" },
  { name: "Obsidian", icon: "/logos/apps/obsidian.svg" },
  { name: "Slack", icon: "/logos/apps/slack.svg" },
  { name: "LinkedIn", icon: "/logos/apps/linkedin.svg" },
  { name: "Asana", icon: "/logos/apps/asana.svg" },
  { name: "Monday", icon: "/logos/apps/monday.svg" },
  { name: "ClickUp", icon: "/logos/apps/clickup.svg" },
  { name: "PostHog", icon: "/logos/apps/posthog.svg" },
  { name: "Sheets", icon: "/logos/apps/google-sheets.svg" },
  { name: "Apple Notes", icon: "/logos/apps/apple.svg" },
  { name: "GitHub", icon: "/logos/apps/github.svg" },
];

/* Inline SVG fallback icons for each integration */
const iconEmoji: Record<string, string> = {
  "Google Drive": "\u{1F4C1}",
  "Notion": "\u{1F4D3}",
  "Salesforce": "\u2601\uFE0F",
  "HubSpot": "\u{1F9F2}",
  "Gmail": "\u2709\uFE0F",
  "Calendar": "\u{1F4C5}",
  "Obsidian": "\u{1F48E}",
  "Slack": "\u{1F4AC}",
  "LinkedIn": "\u{1F517}",
  "Asana": "\u{1F3AF}",
  "Monday": "\u{1F4CB}",
  "ClickUp": "\u2705",
  "PostHog": "\u{1F994}",
  "Sheets": "\u{1F4CA}",
  "Apple Notes": "\u{1F4DD}",
  "GitHub": "\u{1F431}",
};

export default function IntegrationsSection() {
  const ref = useScrollFade();

  return (
    <section className="relative py-20 sm:py-28 bg-stone-50 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 scroll-fade">
          <p className="text-sm font-mono text-stone-400 tracking-widest uppercase mb-3">
            Integrations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Import your data from anywhere
          </h2>
          <p className="text-stone-500 text-base sm:text-lg max-w-lg mx-auto">
            Contacts, emails, documents, CRM records -- bring everything into one workspace.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="scroll-fade grid grid-cols-4 sm:grid-cols-8 gap-6 sm:gap-8 justify-items-center">
          {integrations.map((int) => (
            <div key={int.name} className="group flex flex-col items-center gap-2.5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-stone-300 group-hover:-translate-y-1">
                <span className="text-2xl">{iconEmoji[int.name] || "\u{1F4E6}"}</span>
              </div>
              <span className="text-[11px] font-medium text-stone-500 group-hover:text-stone-700 transition-colors text-center leading-tight">
                {int.name}
              </span>
            </div>
          ))}
        </div>

        <p className="scroll-fade text-center text-sm text-stone-400 mt-8 animate-subtle-pulse">
          + 50 more integrations via Skills Store
        </p>
      </div>
    </section>
  );
}
