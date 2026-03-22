"use client";

import { ChevronRight, Search, File, Database, Bot, Activity, Fingerprint, Brain, Wrench, Users, Sparkles, Clock } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const sidebarFiles = [
  { name: "companies", type: "table" },
  { name: "contact", type: "table" },
  { name: "customer", type: "table" },
  { name: "founders", type: "table" },
];

const tmpFiles = ["mailclaw-campaign", "welcome-sequence"];

const sidebarSections = [
  { icon: Bot, label: "AGENTS" },
  { icon: Activity, label: "HEARTBEAT" },
  { icon: Fingerprint, label: "IDENTITY" },
  { icon: Brain, label: "SOUL" },
  { icon: Wrench, label: "TOOLS" },
  { icon: Users, label: "USER" },
];

const bottomNav = [
  { label: "Skills" },
  { label: "Memories" },
  { label: "Cron" },
];

const tableData = [
  { name: "Veer Shah", company: "Cumulus Labs", role: "CEO", status: "Active", email: "veer@cumulus.ai" },
  { name: "Emily Zhang", company: "Nexus AI", role: "CTO", status: "Active", email: "emily@nexusai.co" },
  { name: "Marcus Johnson", company: "DataForge", role: "Founder", status: "Replied", email: "marcus@dataforge.io" },
  { name: "Sarah Chen", company: "Quantum Labs", role: "CEO", status: "Active", email: "sarah@quantumlabs.co" },
  { name: "Leo Gierhake", company: "Laurence", role: "CTO", status: "Contacted", email: "leo@laurence.ai" },
  { name: "Arne Strickmann", company: "Emdash", role: "Founder", status: "Replied", email: "arne@emdash.dev" },
];

export default function WorkspaceSection() {
  const ref = useScrollFade();

  return (
    <section className="relative pt-8 pb-16 sm:pb-24 bg-stone-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade relative w-full">
          {/* Main Window */}
          <div className="bg-white border border-stone-200/70 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col" style={{ minHeight: '520px' }}>
            {/* Window Chrome */}
            <div className="px-4 py-2.5 border-b border-stone-200/50 flex items-center gap-4 bg-stone-50/50 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                <ChevronRight className="w-3 h-3" />
                <span className="text-stone-700 font-medium">workspace</span>
              </div>
              <div className="flex-1" />
              <span className="text-[10px] text-stone-400 font-mono">mailclaw.sh</span>
            </div>

            <div className="flex flex-1 min-h-0">
              {/* Sidebar */}
              <div className="w-[200px] bg-[#f5f5f0] border-r border-stone-200/60 flex flex-col text-[13px] shrink-0 hidden sm:flex">
                <div className="px-3 py-3 border-b border-stone-200/40">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-stone-700">Workspace</span>
                    <span className="text-[9px] text-stone-400 font-medium">MailClaw</span>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Search files..."
                      className="w-full pl-7 pr-2 py-1 text-[11px] bg-white/80 border border-stone-200/60 rounded-md text-stone-600 placeholder:text-stone-400 outline-none"
                      readOnly
                    />
                  </div>
                </div>

                <div className="px-2 py-2 flex-1 overflow-y-auto">
                  {/* Files */}
                  {sidebarFiles.map((f) => (
                    <div key={f.name} className="flex items-center gap-2 px-2 py-1 rounded text-[11px] text-stone-600 hover:bg-stone-200/50 cursor-default">
                      <Database className="w-3 h-3 text-stone-400" />
                      <span>{f.name}</span>
                      <span className="text-[9px] text-stone-400 ml-auto">{f.type}</span>
                    </div>
                  ))}

                  <div className="mt-2 px-2">
                    <span className="text-[10px] text-stone-400 font-medium">Tmp</span>
                  </div>
                  {tmpFiles.map((f) => (
                    <div key={f} className="flex items-center gap-2 px-2 py-1 rounded text-[11px] text-stone-500 hover:bg-stone-200/50 cursor-default">
                      <File className="w-3 h-3 text-stone-400" />
                      <span>{f}</span>
                    </div>
                  ))}

                  <div className="mt-2 px-2">
                    <span className="text-[10px] text-stone-400 font-medium">workspace.duckdb</span>
                  </div>

                  <div className="mt-3 border-t border-stone-200/40 pt-2">
                    {sidebarSections.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.label} className="flex items-center gap-2 px-2 py-1 rounded text-[10px] text-stone-500 font-medium uppercase tracking-wider hover:bg-stone-200/50 cursor-default">
                          <Icon className="w-3 h-3 text-stone-400" />
                          <span>{s.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-3 border-t border-stone-200/40 pt-2">
                    {bottomNav.map((n) => (
                      <div key={n.label} className="flex items-center gap-2 px-2 py-1 rounded text-[11px] text-stone-600 hover:bg-stone-200/50 cursor-default">
                        <Sparkles className="w-3 h-3 text-stone-400" />
                        <span>{n.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col min-w-0">
                <div className="px-4 py-3 border-b border-stone-200/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-semibold text-stone-700">Founders</span>
                    <span className="text-[10px] text-stone-400">YC Winter 2026 batch founders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-stone-400">{tableData.length} rows</span>
                  </div>
                </div>

                {/* Table */}
                <div className="flex-1 overflow-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-stone-100 bg-stone-50/50">
                        <th className="text-left px-4 py-2 text-[10px] font-medium text-stone-400 uppercase tracking-wider">Name</th>
                        <th className="text-left px-4 py-2 text-[10px] font-medium text-stone-400 uppercase tracking-wider">Company</th>
                        <th className="text-left px-4 py-2 text-[10px] font-medium text-stone-400 uppercase tracking-wider">Role</th>
                        <th className="text-left px-4 py-2 text-[10px] font-medium text-stone-400 uppercase tracking-wider">Status</th>
                        <th className="text-left px-4 py-2 text-[10px] font-medium text-stone-400 uppercase tracking-wider">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, i) => (
                        <tr key={i} className="border-b border-stone-50 hover:bg-stone-50/50 transition-colors">
                          <td className="px-4 py-2 text-[11px] font-medium text-stone-800">{row.name}</td>
                          <td className="px-4 py-2 text-[11px] text-stone-600">{row.company}</td>
                          <td className="px-4 py-2 text-[11px] text-stone-500">{row.role}</td>
                          <td className="px-4 py-2">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              row.status === "Active" ? "bg-green-50 text-green-700" :
                              row.status === "Replied" ? "bg-blue-50 text-blue-600" :
                              "bg-stone-100 text-stone-600"
                            }`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-4 py-2 text-[11px] text-blue-500 font-mono">{row.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
