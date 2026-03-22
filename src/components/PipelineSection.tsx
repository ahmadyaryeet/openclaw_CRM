"use client";

import { Plus } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const columns = [
  {
    title: "New",
    color: "bg-[#e5e5e5]",
    count: 3,
    cards: [
      { name: "Veer Shah", company: "Cumulus Labs", note: "Enriched from YC directory", time: "2h ago" },
      { name: "Henry Birge-Lee", company: "Crosslayer Labs", note: "Email found via LinkedIn", time: "2h ago" },
      { name: "Rushil Agarwal", company: "Human Archive", note: "Imported from CSV", time: "3h ago" },
    ],
  },
  {
    title: "Contacted",
    color: "bg-blue-400",
    count: 2,
    cards: [
      { name: "Leo Gierhake", company: "Laurence", note: "Step 1 delivered, opened", time: "1d ago" },
      { name: "Berke Argin", company: "Compresr", note: "Step 2 follow-up sent", time: "2d ago" },
    ],
  },
  {
    title: "Replied",
    color: "bg-yellow-400",
    count: 1,
    cards: [
      { name: "Vincent Chen", company: "Panta", note: "\"Interested — send me a cal link\"", time: "4h ago" },
    ],
  },
  {
    title: "Negotiating",
    color: "bg-orange-400",
    count: 1,
    cards: [
      { name: "Arne Strickmann", company: "Emdash", note: "Pricing discussion ongoing", time: "1d ago" },
    ],
  },
  {
    title: "Closed",
    color: "bg-green-500",
    count: 1,
    cards: [
      { name: "Vincent Jeltsch", company: "sitefire", note: "Signed. Onboarding next week", time: "3d ago" },
    ],
  },
];

export default function PipelineSection() {
  const ref = useScrollFade();

  return (
    <section className="py-28 px-6 bg-[#fafafa]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="scroll-fade section-label mb-4">PIPELINE</p>
          <h2
            className="scroll-fade text-3xl sm:text-4xl text-[#1a1a1a]"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            Track every email thread
          </h2>
        </div>

        <div className="scroll-fade section-card shadow-lg shadow-black/5">
          {/* Window Chrome */}
          <div className="window-chrome">
            <div className="window-dot red" />
            <div className="window-dot yellow" />
            <div className="window-dot green" />
            <span className="ml-3 text-xs text-[#737373] font-mono">Email Pipeline — YC W26 Outreach</span>
          </div>

          {/* Kanban Board */}
          <div className="p-5 overflow-x-auto">
            <div className="flex gap-4 min-w-[900px]">
              {columns.map((col) => (
                <div key={col.title} className="flex-1 min-w-[170px]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${col.color}`} />
                      <h4 className="text-xs font-medium text-[#525252]">{col.title}</h4>
                      <span className="text-[10px] text-[#a3a3a3] bg-[#f5f5f5] rounded-full px-1.5 py-0.5">
                        {col.count}
                      </span>
                    </div>
                    <button className="text-[#a3a3a3] hover:text-[#525252] transition-colors duration-200">
                      <Plus size={13} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {col.cards.map((card) => (
                      <div key={card.name} className="kanban-card">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-6 h-6 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[10px] font-medium text-[#525252]">
                            {card.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[#1a1a1a]">{card.name}</p>
                            <p className="text-[9px] text-[#a3a3a3]">{card.company}</p>
                          </div>
                        </div>
                        <p className="text-[10px] text-[#737373] mt-1">{card.note}</p>
                        <p className="text-[9px] text-[#d4d4d4] mt-1.5">{card.time}</p>
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
