"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const weeklyData = [
  { week: "W1", linkedin: 18, email: 12 },
  { week: "W2", linkedin: 32, email: 24 },
  { week: "W3", linkedin: 48, email: 38 },
  { week: "W4", linkedin: 72, email: 56 },
  { week: "W5", linkedin: 96, email: 78 },
  { week: "W6", linkedin: 128, email: 94 },
];

const pipelineBreakdown = [
  { label: "New", value: 89, color: "bg-stone-300" },
  { label: "Contacted", value: 67, color: "bg-blue-400" },
  { label: "Qualified", value: 31, color: "bg-violet-400" },
  { label: "Converted", value: 13, color: "bg-green-500" },
];

const funnelData = [
  { label: "Total Leads", value: 200, width: "100%" },
  { label: "Contacted", value: 134, width: "67%" },
  { label: "Replied", value: 67, width: "34%" },
  { label: "Qualified", value: 31, width: "16%" },
  { label: "Converted", value: 13, width: "7%" },
];

export default function AnalyticsSection() {
  const maxVal = 128;
  const ref = useScrollFade();

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 scroll-fade">
          <p className="text-sm font-mono text-stone-400 tracking-widest uppercase mb-3">
            Analytics
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 italic mb-4">
            See everything at a glance
          </h2>
          <p className="text-stone-500 text-lg max-w-xl">
            Ask &ldquo;show me pipeline analytics&rdquo; and get interactive charts generated from your live data.
          </p>
        </div>

        <div className="scroll-fade grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Outreach Activity Chart */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-stone-800">Outreach Activity</h3>
              <span className="text-[10px] text-stone-400 font-mono bg-stone-50 px-2 py-0.5 rounded">Live</span>
            </div>
            <div className="flex items-center gap-3 mb-3 text-[10px]">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-stone-500">LinkedIn</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-stone-500">Email</span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="h-[190px] flex items-end gap-2">
              {weeklyData.map((d) => (
                <div key={d.week} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex gap-0.5 items-end justify-center h-[160px]">
                    <div
                      className="flex-1 bg-blue-500 rounded-t-md progress-animate"
                      style={{ height: `${(d.linkedin / maxVal) * 100}%` }}
                    />
                    <div
                      className="flex-1 bg-violet-400 rounded-t-md progress-animate"
                      style={{ height: `${(d.email / maxVal) * 100}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-stone-400">{d.week}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-stone-400 mt-1 font-mono">
              <span>0</span>
              <span>64</span>
              <span>128</span>
            </div>
          </div>

          {/* Pipeline Breakdown */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-800">Pipeline Breakdown</h3>
              <span className="text-[10px] text-stone-400 font-mono">200 leads</span>
            </div>

            {/* Donut-style display */}
            <div className="flex items-center justify-center mb-5">
              <div className="relative w-28 h-28">
                <div className="absolute inset-0 rounded-full border-8 border-stone-100" />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-semibold text-stone-900">200</span>
                  <span className="text-[10px] text-stone-400">total</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              {pipelineBreakdown.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="text-[11px] text-stone-600">{item.label}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-stone-800 tabular-nums">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-800">Conversion Funnel</h3>
              <span className="text-[10px] text-stone-400 font-mono">All time</span>
            </div>

            <div className="space-y-3">
              {funnelData.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-stone-500">{item.label}</span>
                    <span className="text-[10px] font-semibold text-stone-700 tabular-nums">{item.value}</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2.5">
                    <div
                      className="h-2.5 bg-stone-900 rounded-full progress-animate"
                      style={{ width: item.width }}
                    />
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
