import { articles } from "@/data/articles";
import NewsNavbar from "@/components/NewsNavbar";
import Footer from "@/components/Footer";
import NewsListClient from "./NewsListClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MailClaw News — Guides, Tutorials & Updates for AI Email Automation",
  description:
    "Tutorials, how-to guides, and deep dives on AI email automation with MailClaw. Learn to build email agents, craft sequences, enrich contacts, and automate outreach.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "MailClaw News — Guides & Tutorials",
    description:
      "Tutorials, how-to guides, and deep dives on AI email automation with MailClaw.",
    url: "https://www.mailclaw.ai/news",
    type: "website",
  },
};

export default function NewsPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="page-wrapper">
      <NewsNavbar />
      <main className="news-page">
        <div className="news-page-container">
          <div className="news-header">
            <h1 className="news-page-title">News</h1>
            <p className="news-page-subtitle">
              Updates on AI email agents, OpenClaw Mail, and the tools that make
              autonomous email automation real.
            </p>
          </div>
          <NewsListClient articles={sorted} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
