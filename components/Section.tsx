import type { SectionId } from "@/components/section-ids";

/**
 * Section shell, framed as a datasheet chapter: a hex index block followed
 * by the title block. The index is just the section's position, formatted
 * the way a register map would show it.
 */
export function Section({
  id,
  index,
  title,
  fill,
  children,
}: {
  id: SectionId;
  index: number;
  title: string;
  fill: string;
  children: React.ReactNode;
}) {
  const hex = `0x${index.toString(16).toUpperCase().padStart(2, "0")}`;

  return (
    <section id={id} className="scroll-mt-24 py-14">
      <h2 className="reveal mb-10 flex flex-wrap items-stretch gap-2">
        <span className="brut flex items-center border-edge bg-paper px-3 font-mono text-sm font-bold text-ink">
          {hex}
        </span>
        <span
          className={`brut inline-block px-5 py-2 text-2xl font-black uppercase tracking-tight ${fill}`}
        >
          {title}
        </span>
      </h2>
      {children}
    </section>
  );
}
