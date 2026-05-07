import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  action,
  children,
}: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-inner">
        <div className="section-heading">
          <div className="section-text">
            <span className="eyebrow-label">{eyebrow}</span>
            <h2 id={`${id}-title`}>{title}</h2>
            <p>{description}</p>
          </div>
          {action ? <div className="section-action">{action}</div> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
