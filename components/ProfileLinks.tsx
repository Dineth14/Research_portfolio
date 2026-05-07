import { LinkItem } from "@/types/portfolio";

type ProfileLinksProps = {
  links: LinkItem[];
  variant?: "primary" | "secondary" | "ghost";
  compact?: boolean;
};

function getLinkAttributes(href: string) {
  const isExternal = href.startsWith("http");
  const isMail = href.startsWith("mailto:");

  if (isExternal) {
    return {
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  if (isMail) {
    return {};
  }

  return {};
}

export function ProfileLinks({
  links,
  variant,
  compact = false,
}: ProfileLinksProps) {
  return (
    <div className="link-row">
      {links.map((link) => {
        const buttonVariant = variant ?? link.variant ?? "secondary";
        const className = compact
          ? `button button-${buttonVariant} button-compact`
          : `button button-${buttonVariant}`;
        return (
          <a
            key={`${link.label}-${link.href}`}
            className={className}
            href={link.href}
            aria-label={link.ariaLabel ?? link.label}
            download={link.download}
            {...getLinkAttributes(link.href)}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
