import { Section } from "@/components/Section";
import { withMetrics } from "@/components/Metric";
import type { Project } from "@/content/types";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-14">
        {projects.map((project) => (
          <article key={project.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="min-w-0 wrap-anywhere text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted">
                {project.period}
              </p>
            </div>

            {project.context && (
              <p className="mt-1 font-mono text-xs text-muted">
                {project.context}
              </p>
            )}

            <ul className="mt-5 max-w-[68ch] space-y-3">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 leading-[1.6] before:absolute before:left-0 before:text-muted before:content-['—']"
                >
                  {withMetrics(bullet)}
                </li>
              ))}
            </ul>

            {project.links && project.links.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-x-5 font-mono text-xs">
                {project.links.map((link) => (
                  <li key={link.href} className="min-w-0">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="wrap-anywhere text-muted underline-offset-4 transition-colors duration-150 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
