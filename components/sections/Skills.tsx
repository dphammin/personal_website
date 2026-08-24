import { Section } from "@/components/Section";
import { fillAt } from "@/components/accents";
import type { SkillGroup } from "@/content/types";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <Section
      id="skills"
      index={3}
      title="Technical Skills"
      fill="bg-forest text-on-forest"
    >
      <div className="space-y-8">
        {groups.map((group, gi) => (
          <div key={group.label} className="brut regmarks reveal bg-paper p-6 pt-7 sm:p-8 sm:pt-9">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-edge pb-3">
              <h3 className="text-lg font-black uppercase tracking-tight text-ink">
                {group.label}
              </h3>
              <span className="font-mono text-[0.65rem] font-bold text-ink opacity-55">
                {group.items.length} ENTRIES
              </span>
            </div>
            <ul className="reveal-stagger flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <li
                  key={item}
                  style={{ "--i": i } as React.CSSProperties}
                  className={`brut-sm min-w-0 wrap-anywhere px-2.5 py-1 font-mono text-xs font-bold ${fillAt(i + gi)}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
