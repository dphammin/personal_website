"use client";

import { useEffect, useState } from "react";

import { SECTIONS, type SectionId } from "@/components/section-ids";
import { FILLS } from "@/components/accents";

/**
 * The ONLY client component in the app. It exists solely for the scroll-spy
 * active-section indicator; keeping it a leaf means page.tsx and every section
 * stay Server Components and still prerender to static HTML.
 *
 * Ids come from components/section-ids.ts, shared with <Section>, so the nav
 * and the sections cannot drift apart.
 */
export function NavLinks() {
  // No section is active until the observer says so, which keeps the
  // server-rendered markup and the first client render identical.
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const sections = SECTIONS.map(({ id }) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Topmost section currently intersecting the upper band wins.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const top = visible[0]?.target.id;
        const match = SECTIONS.find((s) => s.id === top);
        if (match) setActive(match.id);
      },
      // Upper band of the viewport, below the sticky nav.
      { rootMargin: "-72px 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex gap-2 sm:gap-3">
      {SECTIONS.map((link, i) => (
        <li key={link.id} className="min-w-0">
          <a
            href={`#${link.id}`}
            aria-current={active === link.id ? "true" : undefined}
            // Text colour must follow the background. An active link takes a
            // FILLS entry, which already carries its own measured text colour;
            // an inactive one sits on paper and needs --ink, which flips with
            // the theme. Sharing one text token across both renders invisible
            // in dark mode.
            className={`brut-sm brut-press inline-block px-2 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-edge sm:px-3 sm:text-xs ${
              active === link.id
                ? FILLS[i % FILLS.length]
                : "bg-paper text-ink"
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
