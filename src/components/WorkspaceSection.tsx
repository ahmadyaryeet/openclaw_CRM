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
  MessageSquare,
} from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Mail, label: "Campaigns" },
  { icon: Send, label: "Sequences" },
  { icon: Users, label: "Contacts", active: true },
  { icon: Activity, label: "Heartbeat" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Wrench, label: "Tools" },
  { icon: Sparkles, label: "Skills" },
  { icon: Brain, label: "Memories" },
  { icon: Clock, label: "Cron" },
];

const contacts = [
  { name: "Veer Shah", email: "veer@cumulus.ai", company: "Cumulus Labs", status: "Active" },
  { name: "Emily Zhang", email: "emily@nexusai.co", company: "Nexus AI", status: "Active" },
  { name: "Marcus Johnson", email: "marcus@dataforge.io", company: "DataForge", status: "Replied" },
  { name: "Sarah Chen", email: "sarah@quantumlabs.ai", company: "Quantum Labs", status: "Active" },
  { name: "Alex Park", email: "alex@synthetics.io", company: "Synthetics.io", status: "Bounced" },
  { name: "Leo Gierhake", email: "leo@laurence.ai", company: "Laurence", status: "Opened" },
  { name: "Arne Strickmann", email: "arne@emdash.dev", company: "Emdash", status: "Replied" },
];

const chatMessages = [
  { role: "user", text: "Show me all contacts who replied in the last 7 days" },
  { role: "assistant", text: "Found 3 contacts who replied recently. Marcus Johnson from DataForge replied about pricing. Arne Strickmann from Emdash wants a demo. Showing filtered view." },
];

export default function WorkspaceSection() {
  const ref = useScrollFade();

  return (
    <section className="pb-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto scroll-fade">
        <div className="section-card shadow-lg shadow-black/5">
          {/* Window Chrome */}
          <div className="window-chrome">
            <div className="window-dot red" />
            <div className="window-dot yellow" />
            <div className="window-dot green" />
            <span className="ml-3 text-xs text-[#737373] font-mono">mailclaw — workspace</span>
          </div>

          <div className="flex min-h-[500px]">
            {/* Sidebar */}
            <div className="w-48 border-r border-[#e5e5e5] bg-[#fafafa] p-3 flex flex-col gap-0.5">
              <div className="flex items-center gap-2 px-3 py-2 mb-2">
                <span className="text-sm font-bold text-[#1a1a1a] tracking-tight uppercase">MailClaw</span>
              </div>

              <div className="relative mb-2 px-1">
                <Search size={12} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a3a3a3]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-7 pr-3 py-1.5 text-xs bg-white border border-[#e5e5e5] rounded-lg focus:outline-none"
                  readOnly
                />
              </div>

              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 ${
                      item.active
                        ? "bg-white text-[#1a1a1a] shadow-sm font-medium border border-[#e5e5e5]"
                        : "text-[#737373] hover:bg-white/60 hover:text-[#525252]"
                    }`}
                  >
                    <Icon size={14} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
              <div className="px-5 py-4 border-b border-[#e5e5e5]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-[#1a1a1a]">Contacts</h3>
                    <p className="text-xs text-[#737373] mt-0.5">7 contacts · 3 sequences active</p>
                  </div>
                  <div className="relative">
                    <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]" />
                    <input
                      type="text"
                      placeholder="Search contacts..."
                      className="pl-7 pr-3 py-1.5 text-xs bg-[#fafafa] border border-[#e5e5e5] rounded-lg focus:outline-none"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#e5e5e5] bg-[#fafafa]">
                      <th className="text-left px-5 py-2.5 text-[10px] font-medium text-[#737373] uppercase tracking-wider">Full Name</th>
                      <th className="text-left px-5 py-2.5 text-[10px] font-medium text-[#737373] uppercase tracking-wider">Email</th>
                      <th className="text-left px-5 py-2.5 text-[10px] font-medium text-[#737373] uppercase tracking-wider">Company</th>
                      <th className="text-left px-5 py-2.5 text-[10px] font-medium text-[#737373] uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((c, i) => (
                      <tr key={i} className="border-b border-[#f5f5f5] hover:bg-[#fafafa] transition-colors duration-150">
                        <td className="px-5 py-2.5 text-xs font-medium text-[#1a1a1a]">{c.name}</td>
                        <td className="px-5 py-2.5 text-xs text-[#737373] font-mono">{c.email}</td>
                        <td className="px-5 py-2.5 text-xs text-[#525252]">{c.company}</td>
                        <td className="px-5 py-2.5">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            c.status === "Active" ? "bg-green-50 text-green-700" :
                            c.status === "Replied" ? "bg-blue-50 text-blue-700" :
                            c.status === "Bounced" ? "bg-red-50 text-red-700" :
                            "bg-yellow-50 text-yellow-700"
                          }`}>
                            {c.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Chat Panel */}
            <div className="w-72 border-l border-[#e5e5e5] flex flex-col bg-[#fafafa]">
              <div className="px-4 py-3 border-b border-[#e5e5e5] flex items-center gap-2">
                <MessageSquare size={14} className="text-[#737373]" />
                <span className="text-xs font-medium text-[#1a1a1a]">Chat: contacts</span>
              </div>

              <div className="flex-1 p-4 space-y-3 overflow-auto">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex gap-2 ${msg.role === "user" ? "" : ""}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-medium ${
                      msg.role === "user" ? "bg-[#1a1a1a] text-white" : "bg-[#e5e5e5] text-[#525252]"
                    }`}>
                      {msg.role === "user" ? "U" : "M"}
                    </div>
                    <p className="text-xs text-[#525252] leading-relaxed">{msg.text}</p>
                  </div>
                ))}
              </div>

              <div className="p-3 border-t border-[#e5e5e5]">
                <div className="flex items-center gap-2 bg-white border border-[#e5e5e5] rounded-xl px-3 py-2">
                  <span className="text-[10px] text-[#a3a3a3]">Ask about contacts...</span>
                  <span className="animate-cursor-blink text-[#a3a3a3] text-[10px]">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
