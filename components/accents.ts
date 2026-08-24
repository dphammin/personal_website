/**
 * Fill + text colour as one inseparable pair.
 *
 * They are bundled deliberately. Dark mode lightens every fill, which flips
 * gold and forest to black text while navy and oxblood stay white — so a
 * single shared "text on fill" token would be wrong half the time. Handing
 * out the pair means a component cannot pick a background without also
 * picking the text colour that was measured against it.
 */
export const FILLS = [
  "bg-navy text-on-navy",
  "bg-gold text-on-gold",
  "bg-oxblood text-on-oxblood",
  "bg-forest text-on-forest",
] as const;

export function fillAt(index: number): string {
  return FILLS[index % FILLS.length];
}
