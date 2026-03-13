#!/usr/bin/env node

/**
 * Generate 200 SEO-optimized articles for MailClaw news section
 * Uses Claude Sonnet 4.6 via Anthropic API
 *
 * Usage: ANTHROPIC_API_KEY=sk-... node scripts/generate-articles.mjs
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "..", "src", "data", "articles.ts");
const PROGRESS_PATH = join(__dirname, "..", "src", "data", "articles-progress.json");

const API_KEY = process.env.ANTHROPIC_API_KEY || "";
const MODEL = "claude-sonnet-4-6";
const API_URL = "https://api.anthropic.com/v1/messages";

const CONCURRENCY = 5;
const RETRY_LIMIT = 3;
const RETRY_DELAY = 5000;

// --- 200 SEO-optimized topics for MailClaw / OpenClaw Mail ---
const TOPICS = [
  // Getting started & setup (1-20)
  "How to Install MailClaw on Your Mac in Under 5 Minutes",
  "MailClaw for Beginners: Complete Getting Started Guide",
  "Setting Up MailClaw AI Email Agent on localhost:3100",
  "How to Connect Your Gmail Account to MailClaw",
  "MailClaw First Run: Your First Automated Email Sequence",
  "How to Configure MailClaw SMTP Settings for Maximum Deliverability",
  "Getting Started with OpenClaw Mail: From Install to First Campaign",
  "MailClaw Setup Checklist: Everything You Need Before Your First Send",
  "How to Connect Microsoft Outlook to MailClaw",
  "MailClaw OAuth Setup: Connecting Email Providers Securely",
  "How to Set Up Multiple Email Accounts in MailClaw",
  "MailClaw Workspace Configuration: Best Practices for Teams",
  "How to Import Contacts into MailClaw from CSV",
  "Migrating from Mailchimp to MailClaw: A Step-by-Step Guide",
  "MailClaw Admin Guide: Managing Users and API Keys",
  "How to Set Up MailClaw for Multiple Team Members",
  "MailClaw Onboarding Checklist for Sales Teams",
  "How to Test MailClaw with a Sandbox Email Account First",
  "MailClaw Free Tier: What You Get with the Open Source Version",
  "How to Update MailClaw to the Latest Version",

  // Email sequences & campaigns (21-45)
  "How to Build a Cold Outreach Sequence with MailClaw AI",
  "Creating Drip Email Campaigns with MailClaw Automation",
  "How to Set Up Follow-Up Sequences That Actually Convert",
  "MailClaw AI Writer: Generating Personalized Email Copy at Scale",
  "How to Create Multi-Step Email Sequences with MailClaw",
  "Building a Welcome Email Series with MailClaw Automation",
  "How to Schedule Email Campaigns by Time Zone in MailClaw",
  "MailClaw Sequences: A/B Testing Subject Lines with AI",
  "How to Create Re-Engagement Campaigns with MailClaw",
  "Building Nurture Sequences for SaaS Onboarding with MailClaw",
  "How to Automate Post-Demo Follow-Ups with MailClaw",
  "MailClaw for Event Marketing: Automated Invite and Reminder Sequences",
  "How to Build a Product Launch Email Sequence with MailClaw",
  "Creating Automated Referral Request Sequences with MailClaw",
  "How to Set Up Abandoned Cart Email Flows with MailClaw",
  "MailClaw AI Agent: Writing Email Sequences from a Single Prompt",
  "How to Create Seasonal Campaign Templates in MailClaw",
  "Building Automated Upsell Sequences with MailClaw",
  "How to Use MailClaw for Webinar Promotion Email Sequences",
  "MailClaw for Recruiting: Automated Candidate Outreach Sequences",
  "How to Create Feedback Collection Email Flows with MailClaw",
  "Building Partnership Outreach Sequences with MailClaw AI",
  "How to Automate Invoice and Payment Reminder Emails with MailClaw",
  "MailClaw for Newsletters: Setting Up Automated Content Digests",
  "How to Build a Customer Reactivation Email Sequence with MailClaw",

  // Contact enrichment & management (46-70)
  "How MailClaw AI Enriches Contacts Automatically",
  "Contact Enrichment with MailClaw: Finding Emails, Titles, and Company Data",
  "How to Use MailClaw for Lead Scoring Based on Email Engagement",
  "MailClaw Contact Database: Organizing and Segmenting Your Leads",
  "How to Deduplicate Contacts in MailClaw Automatically",
  "Building Smart Contact Lists with MailClaw AI Segmentation",
  "How to Enrich LinkedIn Leads with MailClaw",
  "MailClaw Data Enrichment: Pulling Company Info from Domain Names",
  "How to Tag and Categorize Contacts in MailClaw",
  "Using MailClaw AI to Find Decision-Maker Email Addresses",
  "How to Build Ideal Customer Profile Lists with MailClaw",
  "MailClaw Contact Hygiene: Automated Email Verification and Cleanup",
  "How to Import and Enrich Contacts from Google Sheets",
  "Using MailClaw to Build Targeted Account Lists for ABM",
  "How to Track Contact Engagement History in MailClaw",
  "MailClaw Smart Lists: Dynamic Segments That Update Automatically",
  "How to Export Enriched Contacts from MailClaw to Your CRM",
  "Using MailClaw AI for Prospect Research Before Outreach",
  "How to Manage Opt-Outs and Unsubscribes in MailClaw",
  "MailClaw for Data Teams: Bulk Email Verification and Enrichment",
  "How to Use MailClaw Contact Scoring for Sales Prioritization",
  "Building Lookalike Audiences from Your Best Contacts in MailClaw",
  "How to Sync MailClaw Contacts with Your CRM Bidirectionally",
  "MailClaw Contact Insights: Understanding Engagement Patterns",
  "How to Clean and Validate Your Email List with MailClaw",

  // Integrations (71-100)
  "How to Connect MailClaw to HubSpot for CRM Sync",
  "MailClaw + Salesforce Integration: Automating Sales Outreach",
  "How to Connect MailClaw to Slack for Notification Alerts",
  "Using MailClaw with SendGrid for High-Volume Sending",
  "How to Integrate MailClaw with Zapier for Custom Workflows",
  "MailClaw + Google Sheets: Importing Leads and Tracking Results",
  "How to Connect MailClaw to Pipedrive for Pipeline Automation",
  "Using MailClaw with AWS SES for Cost-Effective Email Delivery",
  "How to Integrate MailClaw with Linear for Customer Communication Tracking",
  "MailClaw + Notion Integration: Documenting Outreach Playbooks",
  "How to Connect MailClaw to Stripe for Customer Lifecycle Emails",
  "Using MailClaw with Webhooks for Real-Time Event Triggers",
  "How to Integrate MailClaw with Segment for Behavioral Email Triggers",
  "MailClaw + Airtable: Managing Campaign Data and Contact Sheets",
  "How to Connect MailClaw to Intercom for Unified Customer Messaging",
  "Using MailClaw with Postmark for Transactional Email",
  "How to Integrate MailClaw with Calendly for Booking Follow-Ups",
  "MailClaw + GitHub: Automating Open Source Contributor Outreach",
  "How to Connect MailClaw to Shopify for E-Commerce Email Automation",
  "Using MailClaw with Twilio for SMS + Email Coordinated Outreach",
  "How to Integrate MailClaw with Clearbit for Real-Time Enrichment",
  "MailClaw + Mixpanel: Triggering Emails Based on Product Analytics",
  "How to Connect MailClaw to Close CRM for Sales Automation",
  "Using MailClaw with n8n for Advanced Workflow Orchestration",
  "How to Integrate MailClaw with PostgreSQL for Custom Data Pipelines",
  "MailClaw + Supabase: Building a Custom Email Automation Backend",
  "How to Connect MailClaw to Freshdesk for Support Email Automation",
  "Using MailClaw with Make (formerly Integromat) for Visual Workflows",
  "How to Integrate MailClaw with Apollo.io for Prospecting",
  "MailClaw + Clay: Enriching and Automating Outbound Together",

  // AI email agents & automation (101-130)
  "How MailClaw AI Email Agents Work Under the Hood",
  "Building Autonomous Email Agents with OpenClaw and MailClaw",
  "How to Create a Self-Optimizing Email Agent with MailClaw",
  "MailClaw AI Agent: Automating Replies Based on Email Content",
  "How to Build an AI Email Triaging Agent with MailClaw",
  "Using MailClaw Agents to Auto-Categorize Incoming Email",
  "How to Create an AI Agent That Schedules Meetings from Email",
  "MailClaw Email Agent: Automatically Summarizing Long Email Threads",
  "How to Build an AI Agent for Lead Qualification via Email",
  "Using MailClaw to Create Agents That Draft Personalized Responses",
  "How to Build a Customer Support Email Agent with MailClaw",
  "MailClaw AI Agent: Detecting Email Sentiment and Escalating Automatically",
  "How to Create an Agent That Extracts Data from Emails into Spreadsheets",
  "Using MailClaw AI for Intelligent Email Routing and Assignment",
  "How to Build an AI Agent That Follows Up on Unanswered Emails",
  "MailClaw Agent Skills: Creating Custom Automations for Your Inbox",
  "How to Build an Email Agent That Generates Reports from Inbox Data",
  "Using MailClaw AI to Auto-Label and Organize Your Inbox",
  "How to Create an AI Agent for Contract Review Emails",
  "MailClaw Agent Memory: How Your Email Agent Learns from Past Interactions",
  "How to Build an AI Agent That Monitors Competitor Emails",
  "Using MailClaw Agents for Automated Email Compliance Checking",
  "How to Create an AI Agent for Invoice Processing from Email",
  "MailClaw AI Agent: Personalizing Outreach at Scale with Context Memory",
  "How to Build an Agent That Syncs Email Decisions to Project Tools",
  "Using MailClaw AI Agents for Multi-Language Email Automation",
  "How to Create an AI Agent That Tracks Deals from Email Conversations",
  "MailClaw Agent Workflows: Chaining Multiple AI Actions Together",
  "How to Build an AI Agent for Recruiting Email Automation",
  "Using MailClaw to Create Self-Improving Email Campaign Agents",

  // Deliverability & analytics (131-155)
  "MailClaw Email Deliverability Guide: Getting to the Primary Inbox",
  "How to Set Up SPF, DKIM, and DMARC for MailClaw",
  "MailClaw Analytics Dashboard: Understanding Your Email Metrics",
  "How to Improve Open Rates with MailClaw AI Subject Line Optimization",
  "MailClaw Warm-Up: How to Warm Up a New Email Domain Properly",
  "How to Monitor Email Bounce Rates with MailClaw",
  "MailClaw Sender Reputation: How to Build and Protect It",
  "How to Use MailClaw Analytics to Optimize Send Times",
  "MailClaw Deliverability Checklist: 15 Things to Check Before Sending",
  "How to Track Email Reply Rates and Response Times with MailClaw",
  "Using MailClaw to Monitor Spam Score Before Sending",
  "How to Set Up Email Tracking and Click Analytics in MailClaw",
  "MailClaw AI: Predicting Which Emails Will Get Replies",
  "How to Use MailClaw Heatmaps to Understand Email Engagement",
  "MailClaw for Growth Teams: Measuring Email Campaign ROI",
  "How to Reduce Unsubscribe Rates with MailClaw Smart Sending",
  "MailClaw A/B Testing: Optimizing Email Content with AI",
  "How to Set Up Custom Email Tracking Domains in MailClaw",
  "MailClaw Reporting: Creating Weekly Campaign Performance Reports",
  "How to Use MailClaw Analytics for Sales Pipeline Attribution",
  "MailClaw Domain Health Monitor: Keeping Your Sending Reputation Clean",
  "How to Diagnose and Fix Email Deliverability Issues with MailClaw",
  "Using MailClaw to Calculate Customer Lifetime Value from Email",
  "How to Set Up Real-Time Email Analytics Alerts in MailClaw",
  "MailClaw Benchmarks: How Your Email Metrics Compare to Industry Averages",

  // Comparisons & alternatives (156-175)
  "MailClaw vs Lemlist: Which Email Automation Tool Is Better",
  "MailClaw vs Apollo.io: Feature-by-Feature Comparison",
  "Why MailClaw Beats Traditional Email Marketing Platforms",
  "MailClaw vs Instantly: Cold Email Tools Compared",
  "Comparing AI Email Tools: MailClaw, Lavender, and Others",
  "MailClaw vs Mailchimp: Why AI-First Email Automation Wins",
  "Why Teams Are Switching from Outreach.io to MailClaw",
  "MailClaw vs SalesLoft: Email Automation for Modern Teams",
  "The Best AI Email Agents in 2026: MailClaw Leading the Pack",
  "MailClaw vs Woodpecker: Cold Email Tool Comparison",
  "Why Open Source Email Automation Beats SaaS: The MailClaw Advantage",
  "MailClaw vs HubSpot Email: Agent-Based vs Rule-Based Automation",
  "Email Automation Tools Compared: MailClaw, Smartlead, and Reply.io",
  "MailClaw vs Building Your Own Email Automation Pipeline",
  "Why Localhost Email Automation Beats Cloud-Only Tools",
  "MailClaw vs Mixmax: Which Email Tool Is Right for Your Team",
  "The ROI of MailClaw vs Manual Email Outreach",
  "MailClaw vs ActiveCampaign: AI Agent vs Legacy Automation",
  "Open Source Email Tools Compared: MailClaw vs Mautic vs Listmonk",
  "MailClaw vs Clay: Enrichment and Outreach in One Tool",

  // Best practices & tips (176-200)
  "10 MailClaw Tips Every Email Power User Should Know",
  "Best Practices for AI-Powered Email Automation in 2026",
  "How to Write Cold Emails That Get Replies Using MailClaw AI",
  "MailClaw Email Etiquette: Guidelines for AI-Assisted Outreach",
  "5 Common Mistakes When Setting Up Email Automation with MailClaw",
  "How to Write Better Prompts for MailClaw AI Email Generation",
  "MailClaw Security Best Practices: Protecting Your Email Data Locally",
  "How to Measure the Impact of AI Email Automation on Your Sales",
  "MailClaw Performance Tuning: Optimizing for High-Volume Sending",
  "How to Organize Email Campaigns for Maximum MailClaw Results",
  "The Complete MailClaw CLI Commands Reference Guide",
  "How to Use MailClaw Templates Effectively for Different Audiences",
  "MailClaw for Remote Sales Teams: Maximizing Outreach Productivity",
  "How to Avoid Spam Filters with MailClaw Smart Sending",
  "Best Practices for MailClaw Email Sequences and Timing",
  "How to Train Your Sales Team on MailClaw Email Automation",
  "MailClaw Governance: Email Compliance Policies for Enterprise Teams",
  "How to Handle Bounced and Invalid Emails in MailClaw",
  "MailClaw for Founders: A Guide to AI-Powered Email Outreach",
  "How to Build an Email Automation Champion Program with MailClaw",
  "Reducing Email Fatigue with MailClaw Smart Throttling",
  "How to Use MailClaw for Personalized Email at Scale Without Being Spammy",
  "MailClaw Email Automation Playbook for B2B SaaS Companies",
  "How to Set Up MailClaw for GDPR and CAN-SPAM Compliance",
  "Why Every Sales Team Needs an AI Email Agent Like MailClaw",
];

const AUTHORS = [
  "Ahmad Saroya",
  "Sarah Kim",
  "James Rodriguez",
  "Priya Patel",
  "Mike Chen",
  "Anna Liu",
  "David Torres",
];

const TAG_POOL = [
  "getting-started", "setup", "tutorial", "integrations", "gmail",
  "outlook", "sendgrid", "hubspot", "salesforce", "automation",
  "email-sequences", "cold-email", "ai-agent", "email-agent",
  "deliverability", "analytics", "personalization", "enrichment",
  "contacts", "crm", "comparison", "best-practices", "tips",
  "mailclaw", "openclaw", "productivity", "sales", "marketing",
  "enterprise", "compliance", "open-source", "localhost",
  "templates", "campaigns", "warm-up", "smtp",
];

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 80);
}

function randomDate() {
  // Last 3 months: Dec 13 2025 - Mar 13 2026
  const start = new Date("2025-12-13");
  const end = new Date("2026-03-13");
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return d.toISOString().split("T")[0];
}

function pickTags(title) {
  const lower = title.toLowerCase();
  const tags = ["mailclaw"];
  for (const tag of TAG_POOL) {
    if (tags.length >= 5) break;
    if (lower.includes(tag.replace("-", " ")) || lower.includes(tag.replace("-", ""))) {
      if (!tags.includes(tag)) tags.push(tag);
    }
  }
  // Fill to at least 3
  while (tags.length < 3) {
    const pick = TAG_POOL[Math.floor(Math.random() * TAG_POOL.length)];
    if (!tags.includes(pick)) tags.push(pick);
  }
  return tags;
}

async function callClaude(topic, retries = 0) {
  const prompt = `Write a comprehensive, high-value article for the MailClaw blog. MailClaw is an open-source AI-powered email automation tool built on OpenClaw that runs locally on your Mac (localhost:3100). It lets you craft email sequences, enrich contacts, automate outreach, build AI email agents, and manage campaigns — all from one command. Key features: AI email agents, contact enrichment, sequence builder, deliverability monitoring, multi-account support, SMTP/OAuth integration, and a beautiful local dashboard.

Topic: "${topic}"

Requirements:
- Write 800-1400 words of substantive, helpful content
- Use a professional but approachable tone
- Include practical, actionable advice
- Structure with clear H2 and H3 headings
- Include code examples, CLI commands, or step-by-step instructions where relevant
- Reference real tools/integrations naturally (Gmail, Outlook, SendGrid, HubSpot, Salesforce, etc.)
- Mention MailClaw features naturally: AI email agents, contact enrichment, sequence builder, localhost dashboard, open source, OpenClaw powered, deliverability tools
- Do NOT include the article title as an H1 — it will be added by the page template
- Use semantic HTML: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <pre><code>, <strong>, <em>, <blockquote>
- Do not include <html>, <head>, <body> tags — just the article body content
- Make it genuinely useful — someone reading this should learn something actionable

Use this EXACT output format with delimiters (no JSON, no markdown fences):

---SUMMARY---
A 1-2 sentence plain text summary here
---READTIME---
5
---CONTENT---
<h2>Your HTML content here</h2><p>Rest of article...</p>`;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 4096,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (res.status === 429 || res.status >= 500) {
      if (retries < RETRY_LIMIT) {
        const wait = RETRY_DELAY * (retries + 1);
        console.log(`  Rate limited/server error (${res.status}), retrying in ${wait / 1000}s...`);
        await sleep(wait);
        return callClaude(topic, retries + 1);
      }
      throw new Error(`API error ${res.status} after ${RETRY_LIMIT} retries`);
    }

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(`API error ${res.status}: ${errBody}`);
    }

    const data = await res.json();
    const text = data.content[0].text;

    // Parse delimiter-based format
    const summaryMatch = text.match(/---SUMMARY---\s*([\s\S]*?)\s*---READTIME---/);
    const readTimeMatch = text.match(/---READTIME---\s*(\d+)\s*---CONTENT---/);
    const contentMatch = text.match(/---CONTENT---\s*([\s\S]*)/);

    if (!summaryMatch || !contentMatch) {
      throw new Error("Could not parse delimited response");
    }

    return {
      summary: summaryMatch[1].trim(),
      readTime: parseInt(readTimeMatch?.[1] || "6", 10),
      content: contentMatch[1].trim(),
    };
  } catch (err) {
    if (retries < RETRY_LIMIT) {
      console.log(`  Error: ${err.message}, retrying (${retries + 1}/${RETRY_LIMIT})...`);
      await sleep(RETRY_DELAY * (retries + 1));
      return callClaude(topic, retries + 1);
    }
    throw err;
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function generateBatch(topics, startIdx, articles) {
  const promises = topics.map(async (topic, i) => {
    const idx = startIdx + i;
    const slug = slugify(topic);
    console.log(`[${idx + 1}/${TOPICS.length}] Generating: ${topic}`);

    try {
      const result = await callClaude(topic);

      const article = {
        slug,
        title: topic,
        author: AUTHORS[idx % AUTHORS.length],
        date: randomDate(),
        summary: result.summary || "",
        content: result.content || "",
        tags: pickTags(topic),
        readTime: result.readTime || 6,
        points: Math.floor(Math.random() * 400) + 50,
        commentCount: Math.floor(Math.random() * 80) + 5,
      };

      console.log(`  Done: ${slug} (${result.readTime || 6} min read)`);
      return { idx, article };
    } catch (err) {
      console.error(`  FAILED [${idx + 1}]: ${topic} — ${err.message}`);
      // Return a fallback so we don't lose the slot
      return {
        idx,
        article: {
          slug,
          title: topic,
          author: AUTHORS[idx % AUTHORS.length],
          date: randomDate(),
          summary: `Learn about ${topic.toLowerCase()} and how MailClaw can supercharge your email automation.`,
          content: `<h2>Coming Soon</h2><p>This article is being updated. Check back soon for comprehensive coverage of ${topic.toLowerCase()}.</p>`,
          tags: pickTags(topic),
          readTime: 5,
          points: Math.floor(Math.random() * 200) + 50,
          commentCount: Math.floor(Math.random() * 40) + 5,
        },
      };
    }
  });

  const results = await Promise.all(promises);
  for (const { idx, article } of results) {
    articles[idx] = article;
  }
}

async function main() {
  console.log(`\nGenerating ${TOPICS.length} articles using ${MODEL}...\n`);
  console.log(`Concurrency: ${CONCURRENCY} parallel requests\n`);

  // Check for existing progress
  let articles = new Array(TOPICS.length).fill(null);
  let startFrom = 0;

  if (existsSync(PROGRESS_PATH)) {
    try {
      const progress = JSON.parse(readFileSync(PROGRESS_PATH, "utf-8"));
      articles = progress.articles;
      startFrom = articles.filter((a) => a !== null).length;
      console.log(`Resuming from article ${startFrom + 1} (${startFrom} already done)\n`);
    } catch {
      console.log("Could not read progress file, starting fresh\n");
    }
  }

  const startTime = Date.now();

  for (let i = startFrom; i < TOPICS.length; i += CONCURRENCY) {
    const batch = TOPICS.slice(i, i + CONCURRENCY);
    await generateBatch(batch, i, articles);

    // Save progress after each batch
    writeFileSync(PROGRESS_PATH, JSON.stringify({ articles }, null, 0));

    const done = Math.min(i + CONCURRENCY, TOPICS.length);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const rate = (done - startFrom) / ((Date.now() - startTime) / 1000);
    const remaining = ((TOPICS.length - done) / rate).toFixed(0);
    console.log(`\n--- Progress: ${done}/${TOPICS.length} | ${elapsed}s elapsed | ~${remaining}s remaining ---\n`);

    // Small delay between batches to be nice to the API
    if (i + CONCURRENCY < TOPICS.length) {
      await sleep(500);
    }
  }

  // Sort by date descending
  const sorted = articles
    .filter((a) => a !== null)
    .sort((a, b) => b.date.localeCompare(a.date));

  // Write the TypeScript file
  const tsContent = `// Auto-generated by scripts/generate-articles.mjs — do not edit manually
// Generated: ${new Date().toISOString()}
// Total articles: ${sorted.length}

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  readTime: number;
  points: number;
  commentCount: number;
}

export const articles: Article[] = ${JSON.stringify(sorted, null, 2)};
`;

  // Ensure data dir exists
  const dataDir = join(__dirname, "..", "src", "data");
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

  writeFileSync(OUTPUT_PATH, tsContent, "utf-8");

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\nDone! ${sorted.length} articles written to src/data/articles.ts`);
  console.log(`Total time: ${elapsed}s`);
  console.log(`File size: ${(Buffer.byteLength(tsContent) / 1024).toFixed(0)} KB`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
