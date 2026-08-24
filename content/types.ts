/**
 * The contract between resume data and the components that render it.
 *
 * Components import these types, never the data. Adding a field here and
 * omitting it in `resume.ts` is a compile error — that is the point.
 */

export type Contact = {
  email: string;
  phone: string;
  /** Full URL, e.g. https://www.linkedin.com/in/duc-pham */
  linkedin: string;
  /** What the link shows, e.g. "linkedin.com/in/duc-pham" */
  linkedinLabel: string;
  github?: string;
};

export type Profile = {
  name: string;
  /** One line under the name. Who you are, not a slogan. */
  headline: string;
  /** Two to three sentences. Optional — omit rather than pad. */
  summary?: string;
  contact: Contact;
};

export type Education = {
  school: string;
  location: string;
  degree: string;
  /** Display string, e.g. "3.6/4.0". Omit if you'd rather not show it. */
  gpa?: string;
  /** Display string, e.g. "Expected May 2027" */
  graduation: string;
  coursework: string[];
};

export type Role = {
  company: string;
  title: string;
  /** The team or chip/system worked on — the line under the company. */
  focus?: string;
  location: string;
  /** Display string, e.g. "Jan 2026 – Jun 2026". Ordering is array order. */
  period: string;
  bullets: string[];
};

export type Project = {
  name: string;
  /** Lab, course, or org the work sat under. */
  context?: string;
  period: string;
  bullets: string[];
  /** Optional outbound links (repo, paper, writeup). */
  links?: { label: string; href: string }[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Resume = {
  profile: Profile;
  education: Education[];
  experience: Role[];
  projects: Project[];
  skills: SkillGroup[];
  /** Path under /public, served at the site root. */
  resumePdf: string;
};
