import { Project } from "@/types/portfolio";
import { ProfileLinks } from "./ProfileLinks";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel">
      <div className="project-meta">
        <span>{project.category}</span>
        {project.year ? <span>{project.year}</span> : null}
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tech-row" aria-label="Project technologies">
        {project.tech.map((item) => (
          <span key={item} className="tech-item">
            {item}
          </span>
        ))}
      </div>
      {project.links.length ? (
        <div className="hero-links">
          <ProfileLinks links={project.links} variant="secondary" compact />
        </div>
      ) : null}
    </article>
  );
}
