import { SpecRow } from "@/components/SpecRow";

/**
 * A datasheet entry: registration marks at the corners, an index counter,
 * a PARAM/VALUE spec table for the metadata, then the prose.
 *
 * Shared by Experience, Projects and Education so the three cannot drift
 * apart visually.
 */
export function EntryCard({
  title,
  index,
  total,
  badge,
  badgeFill,
  specs,
  children,
}: {
  title: string;
  index: number;
  total: number;
  badge: string;
  badgeFill: string;
  specs: { label: string; value: string }[];
  children: React.ReactNode;
}) {
  return (
    <article className="brut regmarks reveal bg-paper p-6 pt-7 sm:p-8 sm:pt-9">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h3 className="min-w-0 wrap-anywhere text-2xl font-black uppercase leading-tight tracking-tight text-ink">
          {title}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          <span className="font-mono text-[0.65rem] font-bold text-ink opacity-55">
            [{index + 1}/{total}]
          </span>
          <span
            className={`brut-sm px-2 py-1 font-mono text-xs font-bold uppercase ${badgeFill}`}
          >
            {badge}
          </span>
        </div>
      </div>

      {specs.length > 0 && (
        <dl className="spec-row mt-5 border-y-2 border-edge py-3">
          {specs.map((spec) => (
            <SpecRow key={spec.label} label={spec.label} value={spec.value} />
          ))}
        </dl>
      )}

      {children}
    </article>
  );
}
