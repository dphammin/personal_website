import type { Profile } from "@/content/types";
import { fillAt } from "@/components/accents";

export function Hero({
  profile,
  resumePdf,
}: {
  profile: Profile;
  resumePdf: string;
}) {
  const { name, headline, summary, contact } = profile;

  // "Duc Pham" -> given "Duc", family "Pham". A single-word name degrades
  // gracefully: given is empty and the whole thing lands in the block.
  const words = name.trim().split(/\s+/);
  const family = words[words.length - 1];
  const given = words.slice(0, -1).join(" ");

  const links = [
    { label: contact.email, href: `mailto:${contact.email}` },
    { label: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` },
    { label: contact.linkedinLabel, href: contact.linkedin, external: true },
    ...(contact.github
      ? [{ label: "GitHub", href: contact.github, external: true }]
      : []),
    { label: "RÉSUMÉ (PDF)", href: resumePdf, external: true },
  ];

  return (
    <header className="reveal py-14 sm:py-20">
      {/* Name stacked as display type — the single biggest element on the
          page. Split from the data, never hardcoded: everything but the last
          word sits plain, the last word gets the highlighted block. */}
      <h1 className="text-[clamp(3rem,13vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter text-ink">
        <span className="block">{given}</span>
        <span className="brut mt-2 inline-block bg-navy px-4 text-on-navy">
          {family}
        </span>
      </h1>

      <p className="mt-8 max-w-[46ch] text-xl font-bold leading-snug text-ink text-balance">
        {headline}
      </p>
      {summary && (
        <p className="mt-5 max-w-[68ch] leading-[1.6] text-ink">{summary}</p>
      )}

      {/* Contact details as pressable blocks, not a quiet inline run. */}
      <ul className="reveal-stagger mt-8 flex flex-wrap gap-3">
        {links.map((link, i) => (
          <li key={link.href} style={{ "--i": i } as React.CSSProperties} className="min-w-0">
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className={`brut brut-press inline-block wrap-anywhere px-3 py-2 font-mono text-xs font-bold uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-edge ${fillAt(i)}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
