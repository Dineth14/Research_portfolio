import { Publication } from "@/types/portfolio";
import { ProfileLinks } from "./ProfileLinks";

type PublicationCardProps = {
  publication: Publication;
};

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="panel publication-card">
      <div className="publication-header">
        <div>
          <h3>{publication.title}</h3>
          <ul className="publication-meta">
            <li>{publication.venue}</li>
            <li>{publication.authors}</li>
          </ul>
        </div>
        <span className={`status-chip ${publication.statusTone}`}>
          {publication.statusLabel}
        </span>
      </div>

      <div className="publication-block">
        <span className="publication-label">Contribution</span>
        <span className="publication-text">{publication.contribution}</span>
      </div>

      <div className="publication-block">
        <span className="publication-label">Summary</span>
        <span className="publication-text">{publication.description}</span>
      </div>

      <div className="tag-row" aria-label="Publication topics">
        {publication.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="publication-footer">
        {publication.links.length ? (
          <ProfileLinks links={publication.links} variant="secondary" compact />
        ) : (
          <span className="placeholder-note">
            Manuscript under review. Public links will be added when available.
          </span>
        )}
      </div>
    </article>
  );
}
