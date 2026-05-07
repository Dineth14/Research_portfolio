import { ContactDetails } from "@/types/portfolio";
import { ProfileLinks } from "./ProfileLinks";

type ContactCTAProps = {
  details: ContactDetails;
};

export function ContactCTA({ details }: ContactCTAProps) {
  return (
    <div className="panel contact-card">
      <div className="contact-top">
        <div>
          <h3>Research conversations, applications, and collaborations</h3>
          <p className="project-description">{details.description}</p>
        </div>
        <ProfileLinks links={[details.primaryEmail]} variant="primary" compact />
      </div>
      <ul className="contact-list">
        <li>
          <span className="contact-label">Email</span>
          <span className="contact-value">{details.emailText}</span>
        </li>
        <li>
          <span className="contact-label">Location</span>
          <span className="contact-value">{details.location}</span>
        </li>
        <li>
          <span className="contact-label">Profiles</span>
          <div>
            <ProfileLinks links={details.links} variant="ghost" compact />
          </div>
        </li>
      </ul>
    </div>
  );
}
