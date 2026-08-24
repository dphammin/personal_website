import type { Resume } from "@/content/types";

/**
 * Datasheet masthead. Every field is derived from real resume data — the
 * part number is initials plus graduation year, not an invented revision
 * string. Nothing here asserts a fact the resume does not already contain.
 */
export function Masthead({ resume }: { resume: Resume }) {
  const { profile, education } = resume;

  const initials = profile.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  // "Expected May 2027" -> "2027". Falls back to just the initials.
  const gradYear = education[0]?.graduation.match(/\b(20\d{2})\b/)?.[1];
  const partNumber = gradYear ? `${initials}-${gradYear}` : initials;

  const fields = [
    partNumber,
    education[0]?.degree.replace(/^M\.S\.\s*\+\s*B\.S\.\s*in\s*/i, ""),
    education[0]?.school,
  ].filter(Boolean);

  return (
    <div className="border-b-2 border-edge bg-paper">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-3 gap-y-1 px-5 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-ink sm:px-8">
        {fields.map((field, i) => (
          <span key={field} className="flex items-center gap-x-3">
            {i > 0 && (
              <span aria-hidden className="opacity-40">
                ·
              </span>
            )}
            {field}
          </span>
        ))}
      </div>
    </div>
  );
}
