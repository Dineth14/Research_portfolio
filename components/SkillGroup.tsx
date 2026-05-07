import { SkillGroup as SkillGroupType } from "@/types/portfolio";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="panel skill-group">
      <h3>{group.title}</h3>
      <ul className="skill-list">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
