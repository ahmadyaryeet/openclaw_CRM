"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const reportBars = [
  { label: "Discovery", value: 42, max: 42 },
  { label: "Proposal", value: 28, max: 42 },
  { label: "Negotiation", value: 15, max: 42 },
  { label: "Closed Won", value: 8, max: 42 },
  { label: "Closed Lost", value: 7, max: 42 },
];

const cronJobs = [
  { name: "Weekly pipeline report", schedule: "0 9 * * MON", lastRun: "3d ago", nextIn: "4d 2h" },
  { name: "Lead enrichment sync", schedule: "every 6h", lastRun: "2h ago", nextIn: "3h 48m" },
  { name: "Email follow-up check", schedule: "every 30m", lastRun: "12m ago", nextIn: "18m" },
  { name: "Inbox digest", schedule: "0 8,18 * * *", lastRun: "5h ago", nextIn: "1h 12m" },
  { name: "Competitor monitoring", schedule: "0 6 * * *", lastRun: "18h ago", nextIn: "5h 30m" },
  { name: "Contact list cleanup", schedule: "0 2 * * SUN", lastRun: "4d ago", nextIn: "2d 14h" },
];

export default function DocumentsSection() {
  const ref = useScrollFade();

  return (
    <section className="relative py-20 sm:py-28 bg-stone-50 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 scroll-fade">
          <p className="text-sm font-mono text-stone-400 tracking-widest uppercase mb-3">
            Knowledge &amp; Automation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Documents, Reports &amp; Cron Jobs
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Rich markdown documents with embedded live charts. Scheduled automations that run in the background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-children">
          {/* Report Document */}
          <div className="scroll-fade bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-4 bg-stone-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
              </div>
              <span className="text-[11px] text-stone-500 font-mono">weekly-report.md</span>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-base font-semibold text-stone-900">Weekly Pipeline Report</h3>
                <p className="text-[10px] text-stone-400 mt-0.5">Auto-generated every Monday at 9:00 AM</p>
              </div>

              <div className="text-[12.5px] text-stone-600 leading-relaxed space-y-2">
                <p>
                  This week we added <strong className="text-stone-900">23 new leads</strong> to the pipeline. Outreach response rate improved to <strong className="text-stone-900">34%</strong>, up from 28% last week.
                </p>
              </div>

              {/* Mini chart */}
              <div className="bg-stone-50 border border-stone-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-medium text-stone-500 uppercase tracking-wider">report-json &mdash; Deal Pipeline</span>
                  <span className="text-[10px] text-stone-400 font-mono bg-stone-100 px-2 py-0.5 rounded">Live</span>
                </div>
                <div className="space-y-2">
                  {reportBars.map((d) => (
                    <div key={d.label} className="flex items-center gap-3">
                      <span className="text-[9px] text-stone-500 w-20 text-right">{d.label}</span>
                      <div className="flex-1 bg-stone-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-stone-900 progress-animate"
                          style={{ width: `${(d.value / d.max) * 100}%` }}
                        />
                      </div>
                      <span className="text-[9px] text-stone-500 w-6 tabular-nums">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[12.5px] text-stone-600 leading-relaxed space-y-1">
                <p>
                  Top performers this week: <strong className="text-stone-900">Sarah Chen</strong> closed 3 deals worth $42K total. <strong className="text-stone-900">Marcus Johnson</strong> generated 15 qualified leads from LinkedIn outreach.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-medium text-stone-500 mb-2 uppercase tracking-wider">Action Items</p>
                <ul className="text-[11px] text-stone-600 space-y-1 list-inside">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400">&#x2610;</span>
                    Follow up with 8 prospects in &ldquo;Negotiation&rdquo; stage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400">&#x2610;</span>
                    Schedule demos for 5 newly qualified leads
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400">&#x2610;</span>
                    Review and update email templates for cold outreach
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cron Jobs */}
          <div className="scroll-fade bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-4 bg-stone-50/50">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
              </div>
              <span className="text-[11px] text-stone-500 font-mono">cron jobs</span>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-stone-900">Cron Jobs</h3>
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
                    <th>Next In</th>
                  </tr>
                </thead>
                <tbody>
                  {cronJobs.map((job) => (
                    <tr key={job.name}>
                      <td className="font-medium text-stone-700">{job.name}</td>
                      <td>
                        <code className="text-[10px] bg-stone-50 px-1.5 py-0.5 rounded font-mono text-stone-500">
                          {job.schedule}
                        </code>
                      </td>
                      <td className="text-stone-400">{job.lastRun}</td>
                      <td className="text-stone-500">{job.nextIn}</td>
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
