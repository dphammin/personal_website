import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { resume } from "@/content/resume";
import "./globals.css";

// Self-hosted at build time by next/font — no runtime request to Google, no
// layout shift. Variable fonts, so one file covers every weight used.
// The variable names differ from the Tailwind token names on purpose:
// globals.css maps --font-geist-sans -> --font-sans, and a shared name would
// make that mapping circular.
const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${resume.profile.name} — ${resume.profile.headline}`,
  description: resume.profile.headline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
