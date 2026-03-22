import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MailClaw — AI Email Automation, hosted locally on your Mac",
  description:
    "AI-powered email automation that runs on localhost:3100. Craft sequences, enrich contacts, automate outreach — all from one command. Powered by OpenClaw.",
  openGraph: {
    title: "MailClaw — AI Email Automation, hosted locally on your Mac",
    description:
      "AI-powered email automation that runs on localhost:3100. Craft sequences, enrich contacts, automate outreach — all from one command. Powered by OpenClaw.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
