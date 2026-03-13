"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const weeklyData = [
  { week: "W1", sent: 24, opened: 18 },
  { week: "W2", sent: 52, opened: 38 },
  { week: "W3", sent: 78, opened: 56 },
  { week: "W4", sent: 96, opened: 71 },
  { week: "W5", sent: 115, opened: 84 },
  { week: "W6", sent: 128, opened: 95 },
];

const pipelineData = [
  { label: "Sent", count: 615, color: "bg-stone-900" },
  { label: "Opened", count: 436, color: "bg-blue-500" },
  { label: "Replied", count: 184, color: "bg-yellow-500" },
  { label: "Converted", count: 47, color: "bg-green-500" },
];

const funnelData = [
  { label: "Sent", count: 615, pct: 100 },
  { label: "Opened", count: 436, pct: 71 },
  { label: "Replied", count: 184, pct: 42 },
  { label: "Converted", count: 47, pct: 26 },
];

export default function AnalyticsSection() {
  const maxVal = 128;
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6 bg-stone-50/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-fade text-3xl font-semibold tracking-tight text-stone-900 mb-3">
            See every metric at a glance
          </h2>
          <p className="scroll-fade text-stone-500 max-w-lg mx-auto">
            Ask &ldquo;show me email analytics&rdquo; and get interactive charts generated from
            your live send data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {/* Outreach Activity Chart */}
          <div className="scroll-fade section-card p-5 md:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-sm text-stone-900">Email Activity</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-stone-400">Live</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-1.5 rounded bg-stone-900" />
                <span className="text-xs text-stone-500">Sent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-1.5 rounded bg-blue-400" />
                <span className="text-xs text-stone-500">Opened</span>
              </div>
            </div>

            {/* Chart */}
            <div className="flex items-end gap-3 h-40">
              {weeklyData.map((d) => (
                <div key={d.week} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex gap-1 items-end justify-center h-32">
                    <div
                      className="w-3 bg-stone-900 rounded-t progress-animate"
                      style={{ height: `${(d.sent / maxVal) * 100}%` }}
                    />
                    <div
                      className="w-3 bg-blue-400 rounded-t progress-animate"
                      style={{ height: `${(d.opened / maxVal) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-stone-400">{d.week}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-2 text-[10px] text-stone-300">
              <span>0</span>
              <span>64</span>
              <span>128</span>
            </div>
          </div>

          {/* Pipeline Breakdown */}
          <div className="scroll-fade section-card p-5">
            <h3 className="font-semibold text-sm text-stone-900 mb-1">Funnel Breakdown</h3>
            <p className="text-2xl font-bold text-stone-900 mb-4">615 <span className="text-sm font-normal text-stone-400">emails sent</span></p>

            <div className="space-y-3">
              {pipelineData.map((d) => (
                <div key={d.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-stone-600">{d.label}</span>
                    <span className="text-xs font-mono font-semibold text-stone-900">{d.count}</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${d.color} progress-animate`}
                      style={{ width: `${(d.count / 615) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="scroll-fade section-card p-5 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-sm text-stone-900">Conversion Funnel</h3>
            <span className="text-xs text-stone-400">All time</span>
          </div>

          <div className="space-y-3">
            {funnelData.map((d, i) => (
              <div key={d.label} className="flex items-center gap-4">
                <span className="text-xs text-stone-500 w-20">{d.label}</span>
                <div className="flex-1">
                  <div
                    className="funnel-bar flex items-center px-3 progress-animate"
                    style={{ width: `${d.pct}%` }}
                  >
                    <span className="text-white text-xs font-medium">{d.count}</span>
                  </div>
                </div>
                {i > 0 && (
                  <span className="text-xs text-stone-400 w-10 text-right">{d.pct}%</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
            <span className="text-xs text-stone-500">Overall conversion</span>
            <span className="text-sm font-semibold text-green-600">7.6%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
