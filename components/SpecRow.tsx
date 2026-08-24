/**
 * One PARAM / VALUE line from a datasheet table. Label is a <dt>, value a
 * <dd>, so the pairing survives with the styles turned off.
 */
export function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-ink opacity-55">
        {label}
      </dt>
      <dd className="min-w-0 wrap-anywhere font-mono text-[0.7rem] font-bold uppercase text-ink">
        {value}
      </dd>
    </>
  );
}
