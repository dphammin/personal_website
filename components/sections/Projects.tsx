import { Section } from "@/components/Section";
import { EntryCard } from "@/components/EntryCard";
import { withMetrics } from "@/components/Metric";
import { fillAt } from "@/components/accents";
import type { Project } from "@/content/types";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section
      id="projects"
      index={2}
      title="Projects"
      fill="bg-oxblood text-on-oxblood"
    >
      <div className="space-y-8">
        {projects.map((project, i) => (
          <EntryCard
            key={project.name}
            title={project.name}
            index={i}
            total={projects.length}
            badge={project.period}
            badgeFill={fillAt(i + 2)}
            specs={
              project.context ? [{ label: "Lab", value: project.context }] : []
            }
          >
            <ul className="reveal-stagger mt-6 max-w-[68ch] space-y-4">
              {project.bullets.map((bullet, j) => (
                <li
                  key={bullet}
                  style={{ "--i": j } as React.CSSProperties}
                  className="relative pl-6 leading-[1.6] text-ink before:absolute before:left-0 before:top-[0.55em] before:h-2 before:w-3 before:bg-edge"
                >
                  {withMetrics(bullet)}
                </li>
              ))}
            </ul>

            {project.links && project.links.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link, j) => (
                  <li key={link.href} className="min-w-0">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`brut-sm brut-press inline-block wrap-anywhere px-3 py-1.5 font-mono text-xs font-bold uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-edge ${fillAt(j)}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </EntryCard>
        ))}
      </div>
    </Section>
  );
}
