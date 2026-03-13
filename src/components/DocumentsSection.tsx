"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const cronJobs = [
  { name: "Weekly campaign report", schedule: "0 9 * * MON", lastRun: "3d ago", nextIn: "4d 2h" },
  { name: "Contact enrichment sync", schedule: "every 6h", lastRun: "2h ago", nextIn: "3h 48m" },
  { name: "Follow-up email check", schedule: "every 30m", lastRun: "12m ago", nextIn: "18m" },
  { name: "Bounce rate digest", schedule: "0 8,18 * * *", lastRun: "5h ago", nextIn: "1h 12m" },
  { name: "Warm-up rotation", schedule: "0 6 * * *", lastRun: "18h ago", nextIn: "5h 48m" },
  { name: "Reply detection scan", schedule: "every 15m", lastRun: "8m ago", nextIn: "7m" },
];

const emailPerformance = [
  { label: "Delivered", value: 580 },
  { label: "Opened", value: 436 },
  { label: "Clicked", value: 198 },
  { label: "Replied", value: 184 },
  { label: "Bounced", value: 35 },
];

export default function DocumentsSection() {
  const maxVal = 580;
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6 bg-stone-50/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="scroll-fade text-3xl font-semibold tracking-tight text-stone-900 mb-3">
            Reports, Templates & Cron Jobs
          </h2>
          <p className="scroll-fade text-stone-500 max-w-lg mx-auto">
            Auto-generated campaign reports with live charts. Scheduled automations that
            run in the background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {/* Report Document */}
          <div className="scroll-fade section-card">
            <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-100">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-stone-400 font-mono">weekly-email-report.md</span>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-stone-900">Weekly Email Report</h3>
                <p className="text-xs text-stone-400">Auto-generated every Monday at 9:00 AM</p>
              </div>

              <div className="text-sm text-stone-600 leading-relaxed space-y-2">
                <p>
                  This week: <strong>128 emails sent</strong>, open rate improved to{" "}
                  <strong>71%</strong> (up from 64%). Reply rate holding at <strong>30%</strong>.
                </p>
                <p>
                  Top sequence: <strong>YC Founders</strong> (84% open rate). Best subject line:{" "}
                  <strong>&ldquo;Quick question about {"{{company}}"}&rdquo;</strong>.
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-stone-500 mb-2 uppercase tracking-wider">
                  Action Items
                </p>
                <ul className="text-xs text-stone-500 space-y-1">
                  <li>☐ A/B test new breakup email variant</li>
                  <li>☐ Pause bouncing domains (3 flagged)</li>
                  <li>☐ Review 12 pending replies</li>
                </ul>
              </div>

              {/* Embedded Chart */}
              <div className="bg-stone-50 rounded-xl p-4">
                <p className="text-xs font-medium text-stone-500 mb-3">Email Performance</p>
                <div className="space-y-2">
                  {emailPerformance.map((d) => (
                    <div key={d.label} className="flex items-center gap-3">
                      <span className="text-[10px] text-stone-500 w-16 text-right">{d.label}</span>
                      <div className="flex-1 bg-stone-200 rounded-full h-4">
                        <div
                          className="h-4 rounded-full bg-stone-900 flex items-center justify-end pr-2 progress-animate"
                          style={{ width: `${(d.value / maxVal) * 100}%` }}
                        >
                          <span className="text-[9px] text-white font-medium">{d.value}</span>
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
            <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-100">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-stone-400 font-mono">cron jobs</span>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-stone-900">Scheduled Jobs</h3>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">
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
                        <code className="text-xs bg-stone-100 px-1.5 py-0.5 rounded font-mono text-stone-600">
                          {job.schedule}
                        </code>
                      </td>
                      <td className="text-stone-400">{job.lastRun}</td>
                      <td className="text-stone-600 font-mono">{job.nextIn}</td>
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
