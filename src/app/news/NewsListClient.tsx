"use client";

import { useState, useMemo } from "react";
import type { Article } from "@/data/articles";

const TAGS_DISPLAY = [
  "all",
  "getting-started",
  "tutorial",
  "integrations",
  "automation",
  "email-sequences",
  "ai-agent",
  "cold-email",
  "deliverability",
  "enrichment",
  "best-practices",
  "comparison",
  "enterprise",
  "analytics",
  "sales",
  "open-source",
];

const PER_PAGE = 30;

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function NewsListClient({
  articles,
}: {
  articles: Article[];
}) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);

  const filtered = useMemo(() => {
    let result = articles;

    if (activeTag !== "all") {
      result = result.filter((a) => a.tags.includes(activeTag));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.tags.some((t) => t.includes(q))
      );
    }

    return result;
  }, [articles, search, activeTag]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      {/* Search */}
      <div className="news-controls">
        <div className="news-search-wrap">
          <svg
            className="news-search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="news-search"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(PER_PAGE);
            }}
          />
        </div>
      </div>

      {/* Tag filters */}
      <div className="news-tags">
        {TAGS_DISPLAY.map((tag) => (
          <button
            key={tag}
            className={`news-tag ${activeTag === tag ? "active" : ""}`}
            onClick={() => {
              setActiveTag(tag);
              setVisibleCount(PER_PAGE);
            }}
          >
            {tag === "all" ? "All" : tag.replace(/-/g, " ")}
          </button>
        ))}
      </div>

      {/* Article list */}
      <ol className="news-list" start={1}>
        {visible.map((article, i) => (
          <li key={article.slug} className="news-item">
            <span className="news-item-rank">{i + 1}.</span>
            <div className="news-item-content">
              <div className="news-item-vote">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-8 8h16z" />
                </svg>
              </div>
              <div className="news-item-body">
                <a href={`/news/${article.slug}`} className="news-item-title">
                  {article.title}
                </a>
                <div className="news-item-meta">
                  <span>{article.points} points</span>
                  <span className="news-item-sep">&middot;</span>
                  <span>{article.author}</span>
                  <span className="news-item-sep">&middot;</span>
                  <span>{formatDate(article.date)}</span>
                  <span className="news-item-sep">&middot;</span>
                  <span>{article.readTime} min read</span>
                  <span className="news-item-sep">&middot;</span>
                  <span>{article.commentCount} comments</span>
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="news-item-tag">
                      {tag.replace(/-/g, " ")}
                    </span>
                  ))}
                </div>
                <p className="news-item-summary">{article.summary}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Load more */}
      {visibleCount < filtered.length && (
        <div className="news-load-more">
          <button
            className="news-load-btn"
            onClick={() => setVisibleCount((c) => c + PER_PAGE)}
          >
            Load more ({filtered.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="news-empty">
          <p>No articles found matching your search.</p>
          <button
            className="news-load-btn"
            onClick={() => {
              setSearch("");
              setActiveTag("all");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
