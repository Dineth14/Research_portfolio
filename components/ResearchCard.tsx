import { ResearchItem } from "@/types/portfolio";

type ResearchCardProps = {
  item: ResearchItem;
};

export function ResearchCard({ item }: ResearchCardProps) {
  return (
    <article className="panel research-panel">
      <div className="panel-heading">
        <div>
          <h3>{item.title}</h3>
          <p className="dataset-subtitle">{item.typeLabel}</p>
          <p>{item.description}</p>
        </div>
        <span className="status-chip neutral">{item.status}</span>
      </div>
      {item.metadata ? (
        <dl className="metadata-grid compact-metadata">
          {item.metadata.map((entry) => (
            <div key={`${item.title}-${entry.label}`} className="metadata-item">
              <dt>{entry.label}</dt>
              <dd>{entry.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <ul className="detail-list">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="tag-row research-tags" aria-label={`${item.title} topics`}>
        {item.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
