import { Section } from "@/components/Section";
import { EntryCard } from "@/components/EntryCard";
import { withMetrics } from "@/components/Metric";
import { fillAt } from "@/components/accents";
import type { Role } from "@/content/types";

export function Experience({ roles }: { roles: Role[] }) {
  return (
    <Section
      id="experience"
      index={1}
      title="Experience"
      fill="bg-navy text-on-navy"
    >
      <div className="space-y-8">
        {roles.map((role, i) => (
          <EntryCard
            key={`${role.company}-${role.period}`}
            title={role.company}
            index={i}
            total={roles.length}
            badge={role.period}
            badgeFill={fillAt(i)}
            specs={[
              { label: "Role", value: role.title },
              ...(role.focus ? [{ label: "Scope", value: role.focus }] : []),
              { label: "Site", value: role.location },
            ]}
          >
            <ul className="reveal-stagger mt-6 max-w-[68ch] space-y-4">
              {role.bullets.map((bullet, j) => (
                <li
                  key={bullet}
                  style={{ "--i": j } as React.CSSProperties}
                  className="relative pl-6 leading-[1.6] text-ink before:absolute before:left-0 before:top-[0.55em] before:h-2 before:w-3 before:bg-edge"
                >
                  {withMetrics(bullet)}
                </li>
              ))}
            </ul>
          </EntryCard>
        ))}
      </div>
    </Section>
  );
}
