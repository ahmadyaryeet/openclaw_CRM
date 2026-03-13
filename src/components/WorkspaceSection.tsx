"use client";

import {
  LayoutDashboard,
  Mail,
  Activity,
  Send,
  Users,
  Wrench,
  BarChart3,
  Sparkles,
  Brain,
  Clock,
  Search,
} from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Mail, label: "Campaigns" },
  { icon: Send, label: "Sequences" },
  { icon: Users, label: "Contacts" },
  { icon: Activity, label: "Heartbeat" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Wrench, label: "Tools" },
  { icon: Sparkles, label: "Skills" },
  { icon: Brain, label: "Memories" },
  { icon: Clock, label: "Cron" },
];

const campaigns = [
  { name: "YC W26 Founders", status: "Active", sent: 127, opened: 89, replied: 34, rate: "70%" },
  { name: "Series A CEOs", status: "Active", sent: 84, opened: 52, replied: 18, rate: "62%" },
  { name: "DevTool Leads", status: "Paused", sent: 210, opened: 145, replied: 67, rate: "69%" },
  { name: "AI Startups Batch", status: "Active", sent: 56, opened: 41, replied: 15, rate: "73%" },
  { name: "Enterprise Outreach", status: "Draft", sent: 0, opened: 0, replied: 0, rate: "—" },
  { name: "Investor Updates", status: "Active", sent: 45, opened: 38, replied: 22, rate: "84%" },
  { name: "Conference Follow-ups", status: "Completed", sent: 93, opened: 71, replied: 28, rate: "76%" },
];

export default function WorkspaceSection() {
  const ref = useScrollFade();

  return (
    <section className="pb-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto scroll-fade">
        <div className="section-card shadow-lg shadow-stone-200/50">
          {/* Window Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-100">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-stone-400 font-mono">mailclaw — dashboard</span>
          </div>

          <div className="flex min-h-[480px]">
            {/* Sidebar */}
            <div className="w-52 border-r border-stone-100 bg-stone-50/50 p-3 flex flex-col gap-0.5">
              <div className="flex items-center gap-2 px-3 py-2 mb-2">
                <div className="w-5 h-5 rounded bg-stone-900 flex items-center justify-center">
                  <Mail size={11} className="text-stone-300" />
                </div>
                <span className="text-sm font-semibold text-stone-900">MailClaw</span>
              </div>

              <div className="relative mb-2 px-1">
                <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-300 transition-all duration-200"
                  readOnly
                />
              </div>

              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                      item.active
                        ? "bg-white text-stone-900 shadow-sm font-medium"
                        : "text-stone-500 hover:bg-white/60 hover:text-stone-700"
                    }`}
                  >
                    <Icon size={15} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              <div className="px-5 py-4 border-b border-stone-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-stone-900">Email Campaigns</h3>
                    <p className="text-xs text-stone-400 mt-0.5">7 campaigns · 615 emails sent</p>
                  </div>
                  <div className="relative">
                    <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Search campaigns..."
                      className="pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-300 transition-all duration-200"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <th className="text-left px-5 py-2.5 text-xs font-medium text-stone-500 uppercase tracking-wider">Campaign</th>
                      <th className="text-left px-5 py-2.5 text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
                      <th className="text-left px-5 py-2.5 text-xs font-medium text-stone-500 uppercase tracking-wider">Sent</th>
                      <th className="text-left px-5 py-2.5 text-xs font-medium text-stone-500 uppercase tracking-wider">Opened</th>
                      <th className="text-left px-5 py-2.5 text-xs font-medium text-stone-500 uppercase tracking-wider">Replied</th>
                      <th className="text-left px-5 py-2.5 text-xs font-medium text-stone-500 uppercase tracking-wider">Open Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((c, i) => (
                      <tr key={i} className="border-b border-stone-50 hover:bg-stone-50/50 transition-colors duration-150">
                        <td className="px-5 py-2.5 font-medium text-stone-900">{c.name}</td>
                        <td className="px-5 py-2.5">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            c.status === "Active" ? "bg-green-50 text-green-700" :
                            c.status === "Paused" ? "bg-yellow-50 text-yellow-700" :
                            c.status === "Draft" ? "bg-stone-100 text-stone-500" :
                            "bg-blue-50 text-blue-700"
                          }`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-5 py-2.5 text-stone-600 font-mono text-xs">{c.sent}</td>
                        <td className="px-5 py-2.5 text-stone-600 font-mono text-xs">{c.opened}</td>
                        <td className="px-5 py-2.5 text-stone-600 font-mono text-xs">{c.replied}</td>
                        <td className="px-5 py-2.5 text-stone-600 font-mono text-xs">{c.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Chat Bar */}
              <div className="px-5 py-3 border-t border-stone-100 bg-stone-50/30">
                <div className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-2 bg-white border border-stone-200 rounded-xl px-4 py-2.5">
                    <span className="text-xs text-stone-400">Message MailClaw...</span>
                    <span className="animate-cursor-blink text-stone-300 text-xs">▎</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
