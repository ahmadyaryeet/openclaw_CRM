"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const cronJobs = [
  { name: "Weekly campaign report", schedule: "0 9 * * MON", lastRun: "3d ago", status: "OK" },
  { name: "Contact enrichment sync", schedule: "every 6h", lastRun: "2h ago", status: "OK" },
  { name: "Follow-up email check", schedule: "every 30m", lastRun: "12m ago", status: "OK" },
  { name: "Bounce rate digest", schedule: "0 8,18 * * *", lastRun: "5h ago", status: "OK" },
  { name: "Warm-up rotation", schedule: "0 6 * * *", lastRun: "18h ago", status: "OK" },
  { name: "Reply detection scan", schedule: "every 15m", lastRun: "8m ago", status: "OK" },
];

export default function DocumentsSection() {
  const ref = useScrollFade();

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="scroll-fade section-label mb-4">AUTOMATION</p>
          <h2
            className="scroll-fade text-3xl sm:text-4xl text-[#1a1a1a]"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            Reports, templates, and cron jobs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 stagger-children">
          {/* Report Document */}
          <div className="scroll-fade section-card">
            <div className="window-chrome">
              <div className="window-dot red" />
              <div className="window-dot yellow" />
              <div className="window-dot green" />
              <span className="ml-3 text-xs text-[#737373] font-mono">weekly-email-report.md</span>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-base font-semibold text-[#1a1a1a]">Weekly Email Report</h3>
                <p className="text-[10px] text-[#a3a3a3] mt-0.5">Auto-generated every Monday at 9:00 AM</p>
              </div>

              <div className="text-sm text-[#525252] leading-relaxed space-y-2">
                <p>
                  This week: <strong className="text-[#1a1a1a]">128 emails sent</strong>, open rate improved to{" "}
                  <strong className="text-[#1a1a1a]">71%</strong> (up from 64%). Reply rate holding at <strong className="text-[#1a1a1a]">30%</strong>.
                </p>
                <p>
                  Top sequence: <strong className="text-[#1a1a1a]">YC Founders</strong> (84% open rate). Best subject line:{" "}
                  <strong className="text-[#1a1a1a]">&ldquo;Quick question about {"{{company}}"}&rdquo;</strong>.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-medium text-[#737373] mb-2 uppercase tracking-wider">Action Items</p>
                <ul className="text-xs text-[#737373] space-y-1">
                  <li>&#x2610; A/B test new breakup email variant</li>
                  <li>&#x2610; Pause bouncing domains (3 flagged)</li>
                  <li>&#x2610; Review 12 pending replies</li>
                </ul>
              </div>

              {/* Embedded mini bar chart */}
              <div className="bg-[#fafafa] rounded-xl p-4">
                <p className="text-[10px] font-medium text-[#737373] mb-3">Performance</p>
                <div className="space-y-2">
                  {[
                    { label: "Delivered", value: 580, max: 580 },
                    { label: "Opened", value: 436, max: 580 },
                    { label: "Replied", value: 184, max: 580 },
                    { label: "Bounced", value: 35, max: 580 },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center gap-3">
                      <span className="text-[9px] text-[#737373] w-14 text-right">{d.label}</span>
                      <div className="flex-1 bg-[#e5e5e5] rounded-full h-3">
                        <div
                          className="h-3 rounded-full bg-[#1a1a1a] flex items-center justify-end pr-1.5 progress-animate"
                          style={{ width: `${(d.value / d.max) * 100}%` }}
                        >
                          <span className="text-[8px] text-white font-medium">{d.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cron Jobs */}
          <div className="scroll-fade section-card">
            <div className="window-chrome">
              <div className="window-dot red" />
              <div className="window-dot yellow" />
              <div className="window-dot green" />
              <span className="ml-3 text-xs text-[#737373] font-mono">cron jobs</span>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-[#1a1a1a]">Scheduled Jobs</h3>
                <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">
                  6 active
                </span>
              </div>

              <table className="cron-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Schedule</th>
                    <th>Last Run</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cronJobs.map((job) => (
                    <tr key={job.name}>
                      <td className="font-medium text-[#525252]">{job.name}</td>
                      <td>
                        <code className="text-[10px] bg-[#f5f5f5] px-1.5 py-0.5 rounded font-mono text-[#525252]">
                          {job.schedule}
                        </code>
                      </td>
                      <td className="text-[#a3a3a3]">{job.lastRun}</td>
                      <td>
                        <span className="text-[10px] text-green-600 font-medium">{job.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
