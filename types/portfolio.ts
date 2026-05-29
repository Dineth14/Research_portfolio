export type LinkItem = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  ariaLabel?: string;
};

export type ProfileContent = {
  name: string;
  headline: string;
  subheadline: string;
  photoSrc?: string;
  statusItems: string[];
  heroLinks: LinkItem[];
  profileSectionLinks: LinkItem[];
  footerLinks: LinkItem[];
  navigation: Array<{ label: string; href: string }>;
  links: Record<string, LinkItem>;
};

export type Publication = {
  title: string;
  venue: string;
  authors: string;
  contribution: string;
  description: string;
  tags: string[];
  statusLabel: string;
  statusTone: "accepted" | "review" | "neutral";
  links: LinkItem[];
};

export type Project = {
  title: string;
  category: string;
  status: string;
  year?: string;
  description: string;
  tags: string[];
  links: LinkItem[];
};

export type ResearchItem = {
  title: string;
  typeLabel: string;
  status: string;
  description: string;
  points: string[];
  tags: string[];
  metadata?: Array<{ label: string; value: string }>;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Award = {
  year: string;
  title: string;
  description: string;
};

export type ContactDetails = {
  description: string;
  emailText: string;
  location: string;
  primaryEmail: LinkItem;
  links: LinkItem[];
};
