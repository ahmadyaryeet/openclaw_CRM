"use client";

import Image from "next/image";

export default function NewsNavbar() {
  return (
    <nav className="news-nav-fixed">
      <div className="news-nav">
        <div className="news-nav-container">
          <a href="/" className="news-nav-logo">
            <Image src="/mailclaw-logo.svg" alt="MailClaw" width={24} height={24} className="rounded-md" />
            <span className="news-nav-brand">MailClaw</span>
          </a>
          <a href="/" className="news-nav-cta">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
