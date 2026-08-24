import { Nav } from "@/components/Nav";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { EducationSection } from "@/components/sections/EducationSection";
import { resume } from "@/content/resume";

/**
 * The whole site. Composition only — this file decides section order and
 * nothing else. Content comes from content/resume.ts.
 *
 * Server Component: no 'use client' here, so every section prerenders to
 * static HTML at build time.
 */
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-20 focus:border-2 focus:border-edge focus:bg-navy focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-on-navy"
      >
        Skip to content
      </a>
      <Masthead resume={resume} />
      <Nav />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Hero lives INSIDE main: the skip link targets #main, and skipping
            past the name and contact details would defeat its purpose.
            tabIndex={-1} makes the target focusable so focus actually moves,
            not just the scroll position. */}
        <main id="main" tabIndex={-1} className="focus:outline-none">
          <Hero profile={resume.profile} resumePdf={resume.resumePdf} />
          <Experience roles={resume.experience} />
          <Projects projects={resume.projects} />
          <Skills groups={resume.skills} />
          <EducationSection entries={resume.education} />
        </main>
        <Footer contact={resume.profile.contact} />
      </div>
    </>
  );
}
