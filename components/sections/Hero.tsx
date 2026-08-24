import type { Profile } from "@/content/types";

export function Hero({
  profile,
  resumePdf,
}: {
  profile: Profile;
  resumePdf: string;
}) {
  const { name, headline, summary, contact } = profile;

  const links = [
    { label: contact.email, href: `mailto:${contact.email}` },
    { label: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` },
    { label: contact.linkedinLabel, href: contact.linkedin, external: true },
    ...(contact.github
      ? [{ label: "GitHub", href: contact.github, external: true }]
      : []),
    // Served straight from /public — no server involved.
    { label: "Résumé (PDF)", href: resumePdf, external: true },
  ];

  return (
    <header className="py-20 sm:py-28">
      <h1 className="max-w-[20ch] text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
        {name}
      </h1>
      <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-balance">
        {headline}
      </p>
      {summary && (
        <p className="mt-5 max-w-[68ch] leading-[1.6]">{summary}</p>
      )}

      {/* Hairline-separated run rather than chips — no boxes, no radius. */}
      <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
        {links.map((link, i) => (
          <li key={link.href} className="flex min-w-0 items-center gap-x-4">
            {i > 0 && (
              <span aria-hidden className="text-muted">
                /
              </span>
            )}
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="wrap-anywhere text-muted underline-offset-4 transition-colors duration-150 hover:text-foreground hover:underline focus-visible:rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
