import { Section } from "@/components/Section";
import { withMetrics } from "@/components/Metric";
import type { Role } from "@/content/types";

export function Experience({ roles }: { roles: Role[] }) {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-14">
        {roles.map((role) => (
          <article key={`${role.company}-${role.period}`}>
            {/* min-w-0 lets the long left column shrink instead of forcing
                horizontal scroll; wrap-anywhere breaks unbreakable tokens. */}
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="min-w-0 wrap-anywhere text-lg font-semibold text-foreground">
                {role.company}
                <span className="text-muted"> — </span>
                {role.title}
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted">
                {role.period}
              </p>
            </div>

            <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-xs text-muted">
              {role.focus && (
                <p className="min-w-0 wrap-anywhere">{role.focus}</p>
              )}
              <p className="shrink-0">{role.location}</p>
            </div>

            <ul className="mt-5 max-w-[68ch] space-y-3">
              {role.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 leading-[1.6] before:absolute before:left-0 before:text-muted before:content-['—']"
                >
                  {withMetrics(bullet)}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
