import type { Contact } from "@/content/types";

export function Footer({ contact }: { contact: Contact }) {
  return (
    <footer className="reveal border-t-4 border-edge py-10">
      <p className="mb-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-ink opacity-55">
        End of document
      </p>
      <p className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold uppercase text-ink">
        <span className="brut-sm bg-gold text-on-gold px-2 py-1">
          {contact.email}
        </span>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="brut-sm brut-press bg-navy text-on-navy px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-edge"
        >
          {contact.linkedinLabel}
        </a>
      </p>
    </footer>
  );
}
