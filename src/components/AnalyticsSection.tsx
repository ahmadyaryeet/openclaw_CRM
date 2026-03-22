"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const weeklyData = [
  { week: "Mon", sent: 24, opened: 18 },
  { week: "Tue", sent: 52, opened: 38 },
  { week: "Wed", sent: 78, opened: 56 },
  { week: "Thu", sent: 96, opened: 71 },
  { week: "Fri", sent: 115, opened: 84 },
  { week: "Sat", sent: 42, opened: 31 },
  { week: "Sun", sent: 28, opened: 19 },
];

const metrics = [
  { label: "Open Rate", value: "71%", change: "+7%" },
  { label: "Reply Rate", value: "30%", change: "+4%" },
  { label: "Bounce Rate", value: "2.1%", change: "-0.8%" },
  { label: "Avg. Response", value: "4.2h", change: "-1.1h" },
];

export default function AnalyticsSection() {
  const maxVal = 115;
  const ref = useScrollFade();

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="scroll-fade section-label mb-4">ANALYTICS</p>
          <h2
            className="scroll-fade text-3xl sm:text-4xl text-[#1a1a1a]"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            See everything at a glance
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-6 stagger-children">
          {metrics.map((m) => (
            <div key={m.label} className="scroll-fade section-card p-5">
              <p className="text-xs text-[#737373] mb-1">{m.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-[#1a1a1a]">{m.value}</span>
                <span className={`text-xs font-medium ${
                  m.change.startsWith("+") ? "text-green-600" :
                  m.change.startsWith("-") && m.label === "Bounce Rate" ? "text-green-600" :
                  m.change.startsWith("-") && m.label === "Avg. Response" ? "text-green-600" :
                  "text-red-500"
                }`}>
                  {m.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="scroll-fade section-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-sm text-[#1a1a1a]">Email Activity</h3>
              <p className="text-xs text-[#737373] mt-0.5">Last 7 days</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-1.5 rounded bg-[#1a1a1a]" />
                <span className="text-xs text-[#737373]">Sent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-1.5 rounded bg-[#a3a3a3]" />
                <span className="text-xs text-[#737373]">Opened</span>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-3 h-48">
            {weeklyData.map((d) => (
              <div key={d.week} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full flex gap-1 items-end justify-center h-40">
                  <div
                    className="w-4 bg-[#1a1a1a] rounded-t progress-animate"
                    style={{ height: `${(d.sent / maxVal) * 100}%` }}
                  />
                  <div
                    className="w-4 bg-[#d4d4d4] rounded-t progress-animate"
                    style={{ height: `${(d.opened / maxVal) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] text-[#737373]">{d.week}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
