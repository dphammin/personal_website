import { Fragment, type ReactNode } from "react";

/**
 * Sets engineering figures as small outlined chips so the numbers pop out of
 * a dense bullet. This is the one loud element allowed inside body prose —
 * the surrounding sentence stays plain and readable.
 *
 * Pure function, no client JS: runs during the static export.
 *
 * `%` takes no trailing \b — it is not a word character, so \b after it would
 * demand a following letter and silently skip "12% LUT".
 */
const METRIC =
  /\b\d+(?:[.,]\d+)?[KM]?[-\s]?(?:%|(?:x|MHz|GHz|Gb\/s|GB\/s|Mb\/s|FLOP|nm|KB|MB|GB)\b)/gi;

export function withMetrics(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(METRIC)) {
    const start = match.index;
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <span
        key={start}
        className="mx-0.5 inline-block border-2 border-edge bg-gold text-on-gold px-1.5 font-mono text-[0.85em] font-bold"
      >
        {match[0]}
      </span>,
    );
    cursor = start + match[0].length;
  }

  if (parts.length === 0) return text;
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <Fragment>{parts}</Fragment>;
}
