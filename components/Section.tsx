/**
 * Shared shell for every page section: anchor target, hairline rule, mono
 * eyebrow heading, content. The eyebrow-over-rule treatment is the strongest
 * Swiss signal in the design and it costs one element.
 *
 * Sections own their content, not their outer spacing — that lives here so
 * vertical rhythm stays consistent across the page.
 */
import type { SectionId } from "@/components/section-ids";

export function Section({
  id,
  title,
  children,
}: {
  id: SectionId;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line py-16">
      <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}
