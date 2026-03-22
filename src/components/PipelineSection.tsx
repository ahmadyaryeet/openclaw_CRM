"use client";

import { Plus, GripVertical } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const columns = [
  {
    title: "New Lead",
    color: "bg-stone-400",
    count: 3,
    cards: [
      { name: "Veer Shah", company: "Cumulus Labs", note: "Added from YC batch" },
      { name: "Henry Birge-Lee", company: "Crosslayer Labs", note: "Added from YC batch" },
      { name: "Rushil Agarwal", company: "Human Archive", note: "Added from YC batch" },
    ],
  },
  {
    title: "Contacted",
    color: "bg-blue-500",
    count: 2,
    cards: [
      { name: "Leo Gierhake", company: "Laurence", note: "LinkedIn message sent" },
      { name: "Berke Argin", company: "Compresr", note: "Follow-up email sent" },
    ],
  },
  {
    title: "Replied",
    color: "bg-yellow-400",
    count: 1,
    cards: [
      { name: "Vincent Chen", company: "Panta", note: "Interested in demo" },
    ],
  },
  {
    title: "Qualified",
    color: "bg-green-500",
    count: 2,
    cards: [
      { name: "Arne Strickmann", company: "Emdash", note: "Demo scheduled Feb 18" },
      { name: "Vincent Jeltsch", company: "sitefire", note: "Pricing discussion" },
    ],
  },
];

export default function PipelineSection() {
  const ref = useScrollFade();

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 scroll-fade">
          <p className="text-sm font-mono text-stone-400 tracking-widest uppercase mb-3">
            Pipeline
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Track every conversation
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Drag-and-drop kanban boards auto-update as leads reply. MailClaw moves cards through your pipeline automatically.
          </p>
        </div>

        <div className="scroll-fade bg-white border border-stone-200 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Window Chrome */}
          <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-4 bg-stone-50/50">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
            </div>
            <span className="text-[11px] text-stone-500 font-mono">Sales Pipeline &mdash; YC W26 Outreach</span>
            <div className="flex-1" />
            <span className="text-[10px] text-stone-400">Drag cards between columns</span>
          </div>

          {/* Kanban Board */}
          <div className="p-5 overflow-x-auto">
            <div className="flex gap-4 min-w-[800px]">
              {columns.map((col) => (
                <div key={col.title} className="flex-1 min-w-[180px]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                      <h4 className="text-[11px] font-semibold text-stone-700">{col.title}</h4>
                      <span className="text-[10px] text-stone-400 bg-stone-100 rounded-full px-1.5 py-0.5 font-medium">
                        {col.count}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {col.cards.map((card) => (
                      <div
                        key={card.name}
                        className="bg-white border border-stone-200 rounded-xl p-3 cursor-grab active:cursor-grabbing hover:shadow-md hover:border-stone-300 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <div className="flex items-start gap-2">
                          <GripVertical className="w-3 h-3 text-stone-300 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-[10px] font-semibold text-stone-600 shrink-0">
                                {card.name.charAt(0)}
                              </div>
                              <div className="min-w-0">
                                <p className="text-[11px] font-medium text-stone-800 truncate">{card.name}</p>
                                <p className="text-[10px] text-stone-400">{card.company}</p>
                              </div>
                            </div>
                            <p className="text-[10px] text-stone-500 mt-1">{card.note}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <button className="w-full flex items-center justify-center gap-1 py-2 text-[10px] text-stone-400 hover:text-stone-600 hover:bg-stone-50 rounded-lg border border-dashed border-stone-200 hover:border-stone-300 transition-all">
                      <Plus className="w-3 h-3" />
                      Add Item
                    </button>
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
