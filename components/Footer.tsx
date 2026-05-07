import { LinkItem } from "@/types/portfolio";
import { ProfileLinks } from "./ProfileLinks";

type FooterProps = {
  links: LinkItem[];
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© Dineth Perera. Research portfolio.</span>
        <ProfileLinks links={links} variant="ghost" compact />
      </div>
    </footer>
  );
}
