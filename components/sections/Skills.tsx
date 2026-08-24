import { Section } from "@/components/Section";
import type { SkillGroup } from "@/content/types";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <Section id="skills" title="Technical Skills">
      <dl className="space-y-10">
        {groups.map((group) => (
          <div key={group.label} className="sm:grid sm:grid-cols-4 sm:gap-8">
            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {group.label}
            </dt>
            {/*
              A middot run, not chips. 25 bordered boxes in one group reads as
              clutter, and a comma separator would be ambiguous — several items
              contain their own commas, e.g. "Microarchitecture (5-stage
              pipelines, out-of-order execution, ...)".
            */}
            <dd className="mt-3 max-w-[68ch] font-mono text-sm leading-[1.9] sm:col-span-3 sm:mt-0">
              {group.items.map((item, i) => (
                <span key={item}>
                  {i > 0 && (
                    <span aria-hidden className="text-muted">
                      {" · "}
                    </span>
                  )}
                  <span className="wrap-anywhere">{item}</span>
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
