"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function CTASection() {
  const ref = useScrollFade();

  return (
    <section className="relative py-24 sm:py-32 bg-stone-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 scroll-fade">
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 italic mb-4">
            Up and running in seconds
          </h2>
          <p className="text-stone-500 text-lg max-w-lg mx-auto">
            One command bootstraps install, onboarding, gateway health, and the web UI.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="scroll-fade terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="ml-4 text-xs text-stone-500 font-mono">mailclaw &mdash; terminal</span>
          </div>

          <div className="terminal-body min-h-[420px] sm:min-h-[480px] overflow-hidden">
            <p className="leading-relaxed">
              <span className="terminal-comment"># Bootstrap MailClaw (onboard + gateway + web UI)</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-prompt">$ npx mailclaw</span>
              <span className="terminal-cursor" />
            </p>
            <p className="leading-relaxed">&nbsp;</p>
            <p className="leading-relaxed">
              <span className="terminal-accent">{"\u25C6"} Ensuring OpenClaw CLI is available...</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-accent">{"\u25C6"} Running onboard --install-daemon (profile: mail)</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-accent">{"\u25C6"} Seeding workspace...          ~/.openclaw-mail/workspace/workspace.duckdb</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-accent">{"\u25C6"} Verifying gateway health...   ws://127.0.0.1:18789</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-accent">{"\u25C6"} Preparing web UI...           http://localhost:3100</span>
            </p>
            <p className="leading-relaxed">&nbsp;</p>
            <p className="leading-relaxed">
              <span className="terminal-comment">Bootstrap checklist</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-success">[ok] OpenClaw CLI detected</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-success">[ok] Profile pinned: mail</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-success">[ok] Gateway reachable at ws://127.0.0.1:18789</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-success">[ok] Web UI reachable on port 3100</span>
            </p>
            <p className="leading-relaxed">&nbsp;</p>
            <p className="leading-relaxed">
              <span className="terminal-success font-semibold">MailClaw ready</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-success">Profile: mail</span>
            </p>
            <p className="leading-relaxed">
              <span className="terminal-success">Gateway: reachable</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
