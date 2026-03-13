import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import NewsNavbar from "@/components/NewsNavbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} — MailClaw`,
    description: article.summary,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://www.mailclaw.ai/news/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  // Find related articles (same tags, different slug)
  const related = articles
    .filter(
      (a) =>
        a.slug !== slug && a.tags.some((t) => article.tags.includes(t))
    )
    .slice(0, 3);

  return (
    <div className="page-wrapper">
      <NewsNavbar />
      <main className="article-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mailclaw.ai" },
                  { "@type": "ListItem", "position": 2, "name": "News", "item": "https://mailclaw.ai/news" },
                  { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://mailclaw.ai/news/${article.slug}` }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": article.title,
                "description": article.summary,
                "datePublished": article.date,
                "author": { "@type": "Person", "name": article.author },
                "publisher": { "@type": "Organization", "name": "MailClaw", "url": "https://mailclaw.ai" },
                "mainEntityOfPage": `https://mailclaw.ai/news/${article.slug}`
              }
            ])
          }}
        />
        <article className="article-container">
          <header className="article-header">
            <div className="article-tags">
              {article.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/news?tag=${tag}`}
                  className="article-tag"
                >
                  {tag.replace(/-/g, " ")}
                </a>
              ))}
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-summary">{article.summary}</p>
            <div className="article-meta">
              <span className="article-author">{article.author}</span>
              <span className="article-meta-dot">&middot;</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span className="article-meta-dot">&middot;</span>
              <span>{article.readTime} min read</span>
            </div>
          </header>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <footer className="article-footer">
            <a href="/news" className="article-back">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all articles
            </a>

            <div className="article-cta-box">
              <h3>Ready to try MailClaw?</h3>
              <p>
                Install MailClaw and start automating your email outreach with
                AI agents in minutes.
              </p>
              <a href="/" className="button button-primary">
                Get Started — Free
              </a>
            </div>
          </footer>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="article-related">
            <div className="container">
              <h2 className="article-related-heading">Related articles</h2>
              <div className="news-grid news-grid-related">
                {related.map((r) => (
                  <a
                    key={r.slug}
                    href={`/news/${r.slug}`}
                    className="news-card"
                  >
                    <div className="news-card-tags">
                      {r.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="news-card-tag">
                          {tag.replace(/-/g, " ")}
                        </span>
                      ))}
                    </div>
                    <h3 className="news-card-title">{r.title}</h3>
                    <p className="news-card-summary">{r.summary}</p>
                    <div className="news-card-meta">
                      <span className="news-card-author">{r.author}</span>
                      <span className="news-card-dot">&middot;</span>
                      <span className="news-card-read">
                        {r.readTime} min read
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
