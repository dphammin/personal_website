import { Section } from "@/components/Section";
import { EntryCard } from "@/components/EntryCard";
import { fillAt } from "@/components/accents";
import type { Education } from "@/content/types";

export function EducationSection({ entries }: { entries: Education[] }) {
  return (
    <Section
      id="education"
      index={4}
      title="Education"
      fill="bg-gold text-on-gold"
    >
      <div className="space-y-8">
        {entries.map((entry, i) => (
          <EntryCard
            key={`${entry.school}-${entry.degree}`}
            title={entry.school}
            index={i}
            total={entries.length}
            badge={entry.graduation}
            badgeFill={fillAt(i + 1)}
            specs={[
              { label: "Degree", value: entry.degree },
              ...(entry.gpa ? [{ label: "GPA", value: entry.gpa }] : []),
              { label: "Site", value: entry.location },
            ]}
          >
            {entry.coursework.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-ink opacity-55">
                  Relevant Coursework
                </h4>
                <ul className="reveal-stagger flex flex-wrap gap-2">
                  {entry.coursework.map((course, j) => (
                    <li
                      key={course}
                      style={{ "--i": j } as React.CSSProperties}
                      className={`brut-sm min-w-0 wrap-anywhere px-2.5 py-1 font-mono text-xs font-bold ${fillAt(j)}`}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </EntryCard>
        ))}
      </div>
    </Section>
  );
}
