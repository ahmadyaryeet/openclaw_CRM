"use client";

export default function NewsNavbar() {
  return (
    <nav className="news-nav-fixed">
      <div className="news-nav">
        <div className="news-nav-container">
          <a href="/" className="news-nav-logo">
            <span className="news-nav-brand font-bold uppercase tracking-tight">MAILCLAW</span>
          </a>
          <a href="/" className="news-nav-cta">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
