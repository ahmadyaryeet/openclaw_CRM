"use client";

import { Plus } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const columns = [
  {
    title: "New Lead",
    count: 3,
    cards: [
      { name: "Veer Shah", company: "Cumulus Labs", note: "Enriched from YC directory", time: "2h ago" },
      { name: "Henry Birge-Lee", company: "Crosslayer Labs", note: "Email found via LinkedIn", time: "2h ago" },
      { name: "Rushil Agarwal", company: "Human Archive", note: "Imported from CSV", time: "3h ago" },
    ],
  },
  {
    title: "Email Sent",
    count: 2,
    cards: [
      { name: "Leo Gierhake", company: "Laurence", note: "Step 1 delivered · opened", time: "1d ago" },
      { name: "Berke Argin", company: "Compresr", note: "Step 2 follow-up sent", time: "2d ago" },
    ],
  },
  {
    title: "Replied",
    count: 1,
    cards: [
      { name: "Vincent Chen", company: "Panta", note: "\"Interested — send me a cal link\"", time: "4h ago" },
    ],
  },
  {
    title: "Booked",
    count: 2,
    cards: [
      { name: "Arne Strickmann", company: "Emdash", note: "Demo scheduled Feb 18", time: "1d ago" },
      { name: "Vincent Jeltsch", company: "sitefire", note: "Intro call Wednesday", time: "3d ago" },
    ],
  },
];

export default function PipelineSection() {
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-fade text-3xl font-semibold tracking-tight text-stone-900 mb-3">
            Track every email thread
          </h2>
          <p className="scroll-fade text-stone-500 max-w-lg mx-auto">
            Kanban boards auto-update as leads reply. MailClaw moves cards through
            your pipeline automatically.
          </p>
        </div>

        <div className="scroll-fade section-card shadow-lg shadow-stone-200/50">
          {/* Window Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-100">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-stone-400 font-mono">Email Pipeline — YC W26 Outreach</span>
          </div>

          {/* Kanban Board */}
          <div className="p-5 overflow-x-auto">
            <div className="flex gap-4 min-w-[800px]">
              {columns.map((col) => (
                <div key={col.title} className="flex-1 min-w-[200px]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-medium text-stone-700">{col.title}</h4>
                      <span className="text-xs text-stone-400 bg-stone-100 rounded-full px-2 py-0.5">
                        {col.count}
                      </span>
                    </div>
                    <button className="text-stone-400 hover:text-stone-600 transition-colors duration-200">
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {col.cards.map((card) => (
                      <div key={card.name} className="kanban-card cursor-grab">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs font-medium text-stone-600">
                            {card.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-stone-900">{card.name}</p>
                            <p className="text-[10px] text-stone-400">{card.company}</p>
                          </div>
                        </div>
                        <p className="text-xs text-stone-500 mt-1">{card.note}</p>
                        <p className="text-[10px] text-stone-300 mt-1.5">{card.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
