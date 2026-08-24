/**
 * Single source of truth for anchor ids.
 *
 * Section.tsx and NavLinks.tsx both read this, so renaming a section is a
 * compile error instead of a dead anchor plus a scroll-spy observer that
 * silently watches nothing.
 *
 * `label` is the nav label, deliberately separate from the section heading —
 * the nav says "Skills" where the heading says "Technical Skills".
 */
export const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
