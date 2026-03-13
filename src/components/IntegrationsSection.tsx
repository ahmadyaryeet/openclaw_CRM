"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

/* Minimal inline SVG icons for each integration – matches stone theme */
const GmailIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
  </svg>
);

const OutlookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M24 7.387v10.478c0 .23-.08.424-.238.576a.806.806 0 0 1-.588.236h-8.42v-8.47l1.87 1.308a.27.27 0 0 0 .317 0l6.9-4.87c.066-.048.143-.066.16-.066v.808zM15.07 8.39l-1.317-.914H24c.238 0 .413.08.588.236L17.69 12.58a.27.27 0 0 1-.317 0L15.07 8.39z" fill="#0078D4"/>
    <path d="M8.47 7.916c.743 0 1.376.265 1.896.8.524.534.788 1.188.788 1.96 0 .784-.264 1.442-.788 1.976-.52.535-1.153.8-1.896.8-.74 0-1.372-.265-1.893-.8-.52-.534-.783-1.192-.783-1.977 0-.77.262-1.425.783-1.96.52-.534 1.153-.8 1.893-.8zm6.283-3.107v14.382c0 .318-.1.585-.3.802a1.04 1.04 0 0 1-.77.336H.95a.85.85 0 0 1-.344-.072.94.94 0 0 1-.286-.192A1.058 1.058 0 0 1 0 19.19V4.81c0-.318.105-.587.32-.805.212-.217.47-.33.77-.342l13.663 1.147z" fill="#0078D4"/>
    <ellipse cx="8.47" cy="10.68" rx="2.37" ry="2.47" fill="white"/>
  </svg>
);

const SendGridIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M8 0h8v8h8v8h-8v8H8v-8H0V8h8V0z" fill="#1A82E2" fillRule="evenodd"/>
  </svg>
);

const MailgunIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#F06B54"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#F06B54"/>
    <circle cx="12" cy="12" r="2" fill="#F06B54"/>
  </svg>
);

const HubSpotIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M17.09 5.13V3.2a1.76 1.76 0 0 0 1.02-1.59A1.77 1.77 0 0 0 16.34 0a1.77 1.77 0 0 0-1.77 1.61c0 .69.38 1.28.95 1.57v1.97a4.9 4.9 0 0 0-2.2 1.1L6.1 1.05a2.07 2.07 0 0 0 .04-.36A2.05 2.05 0 0 0 4.1 0 2.05 2.05 0 0 0 2.73.6a2.05 2.05 0 0 0 0 2.9c.38.38.87.6 1.37.6a2.04 2.04 0 0 0 1.22-.4l7.05 5.1a4.91 4.91 0 0 0-.56 2.28 4.9 4.9 0 0 0 .66 2.47l-2.14 2.14a1.56 1.56 0 0 0-.5-.08 1.58 1.58 0 1 0 1.58 1.58c0-.18-.03-.35-.08-.5l2.1-2.1a4.93 4.93 0 1 0 3.66-9.4z" fill="#FF7A59"/>
  </svg>
);

const SalesforceIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M10.05 4.6a4.34 4.34 0 0 1 3.17-1.38c1.71 0 3.2 1.01 3.93 2.47a4.94 4.94 0 0 1 2.05-.44c2.76 0 5 2.28 5 5.09s-2.24 5.09-5 5.09a4.9 4.9 0 0 1-.93-.09 3.97 3.97 0 0 1-3.54 2.2 3.95 3.95 0 0 1-1.92-.5 4.54 4.54 0 0 1-4.02 2.44 4.58 4.58 0 0 1-4.23-2.87 4.16 4.16 0 0 1-.74.07C1.82 16.68 0 14.82 0 12.5c0-1.63.92-3.04 2.26-3.74a4.4 4.4 0 0 1-.18-1.24C2.08 4.36 4.75 1.8 8.02 1.8c1.5 0 1.5.83 2.03 2.8z" fill="#00A1E0"/>
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L2.58 2.559c-.467.047-.56.28-.374.466l2.253 1.183zm.793 3.172v13.851c0 .746.373 1.026 1.213.98l14.523-.839c.84-.047.933-.56.933-1.166V6.354c0-.606-.233-.933-.746-.886l-15.177.886c-.56.047-.746.327-.746.886v.14zm14.337.42c.093.42 0 .84-.42.886l-.7.14v10.264c-.606.327-1.166.514-1.633.514-.746 0-.933-.234-1.493-.933l-4.571-7.185v6.952l1.446.327s0 .84-1.166.84l-3.218.187c-.093-.187 0-.653.327-.746l.84-.233V8.86l-1.166-.093c-.093-.42.14-1.026.793-1.073l3.451-.233 4.758 7.278v-6.44l-1.213-.14c-.093-.513.28-.886.746-.933l3.225-.187z" fill="#1c1917"/>
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
    <path d="M15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" fill="#ECB22E"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
  </svg>
);

const GoogleSheetsIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6z" fill="#0F9D58"/>
    <path d="M14.727 0v6.727h6L14.727 0z" fill="#87CEAC"/>
    <path d="M7.273 18.545h9.454v1.091H7.273v-1.09zm0-3.272h9.454v1.09H7.273v-1.09zm0-3.273h9.454v1.09H7.273V12z" fill="white"/>
  </svg>
);

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M15.535 8.465l-2.12 2.12a4.97 4.97 0 0 1 .002 2.832l2.12 2.12a7.986 7.986 0 0 0 0-7.072zM12 14.07c-.554 0-1.078-.108-1.558-.305l-2.12 2.12a7.986 7.986 0 0 0 7.358 0l-2.12-2.12c-.482.197-1.006.305-1.56.305zm-3.535-5.605a7.986 7.986 0 0 0 0 7.072l2.12-2.12a4.97 4.97 0 0 1-.002-2.832l-2.118-2.12zM12 9.93c.554 0 1.078.108 1.558.305l2.12-2.12a7.986 7.986 0 0 0-7.358 0l2.12 2.12c.482-.197 1.006-.305 1.56-.305z" fill="#FF4A00"/>
  </svg>
);

const WebhooksIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-2.17l-3.83 2.21-1-1.73L10 12.59 6.17 10.38l1-1.73L11 10.87V5.5h2v5.37l3.83-2.22 1 1.73L14 12.59l3.83 2.22-1 1.73L13 14.33V16.5h-2z" fill="#44403c"/>
  </svg>
);

const PostHogIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 0L0 12h4l8-8 8 8h4L12 0z" fill="#1d4aff"/>
    <path d="M12 8L4 16h4l4-4 4 4h4l-8-8z" fill="#1d4aff"/>
    <path d="M12 16l-4 4h8l-4-4z" fill="#1d4aff"/>
  </svg>
);

const StripeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.918 3.757 7.068c0 4.072 2.484 5.867 6.517 7.37 2.58 .964 3.477 1.655 3.477 2.718 0 .952-.808 1.545-2.263 1.545-1.907 0-4.89-.952-6.756-2.195l-.89 5.555c1.68.95 4.756 1.94 7.954 1.94 2.614 0 4.764-.653 6.283-1.88 1.662-1.34 2.498-3.248 2.498-5.67 0-4.153-2.527-5.918-6.601-7.3z" fill="#635BFF"/>
  </svg>
);

const CalcomIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#292524"/>
    <path d="M11 7h2v5.41l3.29 3.29-1.41 1.41L11 13.41V7z" fill="#292524"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#1c1917"/>
  </svg>
);

const integrations = [
  { name: "Gmail", icon: GmailIcon },
  { name: "Outlook", icon: OutlookIcon },
  { name: "SendGrid", icon: SendGridIcon },
  { name: "Mailgun", icon: MailgunIcon },
  { name: "HubSpot", icon: HubSpotIcon },
  { name: "Salesforce", icon: SalesforceIcon },
  { name: "Notion", icon: NotionIcon },
  { name: "Slack", icon: SlackIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
  { name: "Google Sheets", icon: GoogleSheetsIcon },
  { name: "Zapier", icon: ZapierIcon },
  { name: "Webhooks", icon: WebhooksIcon },
  { name: "PostHog", icon: PostHogIcon },
  { name: "Stripe", icon: StripeIcon },
  { name: "Cal.com", icon: CalcomIcon },
  { name: "GitHub", icon: GitHubIcon },
];

const topRow = integrations.slice(0, 8);
const bottomRow = integrations.slice(8, 16);

export default function IntegrationsSection() {
  const ref = useScrollFade();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="scroll-fade text-3xl font-semibold tracking-tight text-stone-900 mb-3">
          Connect your email stack
        </h2>
        <p className="scroll-fade text-stone-500 mb-12 max-w-lg mx-auto">
          Gmail, Outlook, SendGrid, CRMs — bring all your email data into one workspace.
        </p>

        {/* Marquee Row 1 */}
        <div className="scroll-fade marquee-container mb-4">
          <div className="marquee-track animate-marquee">
            {[...topRow, ...topRow].map((int, i) => (
              <div key={`${int.name}-${i}`} className="flex flex-col items-center gap-2 px-3">
                <div className="integration-icon">
                  <int.icon />
                </div>
                <span className="text-[10px] text-stone-400 whitespace-nowrap">{int.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (reverse) */}
        <div className="scroll-fade marquee-container mb-6">
          <div className="marquee-track animate-marquee-reverse">
            {[...bottomRow, ...bottomRow].map((int, i) => (
              <div key={`${int.name}-${i}`} className="flex flex-col items-center gap-2 px-3">
                <div className="integration-icon">
                  <int.icon />
                </div>
                <span className="text-[10px] text-stone-400 whitespace-nowrap">{int.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="scroll-fade text-sm text-stone-400 mt-4 animate-subtle-pulse">+50 more integrations</p>
      </div>
    </section>
  );
}
