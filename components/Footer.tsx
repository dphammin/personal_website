import type { Contact } from "@/content/types";

export function Footer({ contact }: { contact: Contact }) {
  return (
    <footer className="border-t border-line py-12 font-mono text-xs text-muted">
      <p className="wrap-anywhere">
        {contact.email}
        <span aria-hidden className="text-muted">
          {" · "}
        </span>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 transition-colors duration-150 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          {contact.linkedinLabel}
        </a>
      </p>
    </footer>
  );
}
