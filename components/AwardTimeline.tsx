import { Award } from "@/types/portfolio";

type AwardTimelineProps = {
  items: Award[];
};

export function AwardTimeline({ items }: AwardTimelineProps) {
  return (
    <div className="panel">
      <ul className="award-list">
        {items.map((item) => (
          <li key={`${item.year}-${item.title}`} className="award-item">
            <div className="award-year">{item.year}</div>
            <div>
              <div className="publication-label">{item.title}</div>
              <div className="award-description">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
