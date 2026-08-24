import { Fragment, type ReactNode } from "react";

/**
 * Sets engineering figures in mono so a dense bullet can be skimmed for
 * numbers. Rationale borrowed from the "Dashboard Data" type pairing:
 * "Code for data, Sans for labels."
 *
 * Deliberately narrow — numbers with a unit, and nothing else. A broader
 * pattern (tool names, acronyms) would light up half the page and stop
 * meaning anything.
 *
 * Pure function, no client JS: this runs during the static export.
 */
// `%` takes no trailing \b — it is not a word character, so \b after it would
// demand a following letter and silently skip "12% LUT". Alphabetic units keep
// the boundary so "128x" matches but "128xyz" does not.
const METRIC =
  /\b\d+(?:[.,]\d+)?[KM]?[-\s]?(?:%|(?:x|MHz|GHz|Gb\/s|GB\/s|Mb\/s|FLOP|nm|KB|MB|GB)\b)/gi;

export function withMetrics(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(METRIC)) {
    const start = match.index;
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <span key={start} className="font-mono text-foreground">
        {match[0]}
      </span>,
    );
    cursor = start + match[0].length;
  }

  // No figures in this bullet — hand back the string untouched.
  if (parts.length === 0) return text;

  if (cursor < text.length) parts.push(text.slice(cursor));
  return <Fragment>{parts}</Fragment>;
}
