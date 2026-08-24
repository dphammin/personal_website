"use client";

import { useEffect, useState } from "react";

import { SECTIONS, type SectionId } from "@/components/section-ids";

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
    const sections = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
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
      { rootMargin: "-64px 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    // Four uppercase mono labels overflow a 375px viewport at the desktop gap
    // and tracking, so both tighten on small screens. Measured, not guessed.
    <ul className="flex gap-x-4 font-mono text-xs uppercase tracking-[0.06em] sm:gap-x-6 sm:tracking-[0.12em]">
      {SECTIONS.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            aria-current={active === link.id ? "true" : undefined}
            className={`transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground hover:text-foreground ${
              active === link.id ? "text-foreground" : "text-muted"
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
