import { Section } from "@/components/Section";
import type { Education } from "@/content/types";

export function EducationSection({ entries }: { entries: Education[] }) {
  return (
    <Section id="education" title="Education">
      <div className="space-y-14">
        {entries.map((entry) => (
          <article key={`${entry.school}-${entry.degree}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="min-w-0 wrap-anywhere text-lg font-semibold text-foreground">
                {entry.school}
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted">
                {entry.graduation}
              </p>
            </div>

            <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-xs text-muted">
              <p className="min-w-0 wrap-anywhere">
                {entry.degree}
                {entry.gpa && ` · GPA ${entry.gpa}`}
              </p>
              <p className="shrink-0">{entry.location}</p>
            </div>

            {entry.coursework.length > 0 && (
              <div className="mt-6 sm:grid sm:grid-cols-4 sm:gap-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Coursework
                </p>
                <p className="mt-3 max-w-[68ch] font-mono text-sm leading-[1.9] sm:col-span-3 sm:mt-0">
                  {entry.coursework.map((course, i) => (
                    <span key={course}>
                      {i > 0 && (
                        <span aria-hidden className="text-muted">
                          {" · "}
                        </span>
                      )}
                      <span className="wrap-anywhere">{course}</span>
                    </span>
                  ))}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
