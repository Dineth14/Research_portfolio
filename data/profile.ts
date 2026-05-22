import { ContactDetails, LinkItem, ProfileContent } from "@/types/portfolio";

const basePath = process.env.NODE_ENV === "production" ? "/dineth-portfolio" : "";

const links = {
  primaryCv: {
    label: "Download CV",
    href: `${basePath}/cv/Dineth_Perera_CV.pdf`,
    download: true,
    variant: "primary",
  } satisfies LinkItem,
  cv: {
    label: "Download CV",
    href: `${basePath}/cv/Dineth_Perera_CV.pdf`,
    download: true,
    variant: "secondary",
  } satisfies LinkItem,
  googleScholar: {
    label: "View Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=MxZgkDYAAAAJ",
    variant: "secondary",
  } satisfies LinkItem,
  googleScholarShort: {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=MxZgkDYAAAAJ",
    variant: "secondary",
  } satisfies LinkItem,
  github: {
    label: "GitHub",
    href: "https://github.com/Dineth14",
    variant: "secondary",
  } satisfies LinkItem,
  huggingFace: {
    label: "Hugging Face",
    href: "https://huggingface.co/dineth18",
    variant: "secondary",
  } satisfies LinkItem,
  arxiv: {
    label: "arXiv",
    href: "https://arxiv.org/abs/2604.18721v1",
    variant: "secondary",
  } satisfies LinkItem,
  linkedIn: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dineth-perera",
    variant: "secondary",
  } satisfies LinkItem,
  email: {
    label: "Email",
    href: "mailto:e21291@eng.pdn.ac.lk",
    variant: "secondary",
  } satisfies LinkItem,
  portfolio: {
    label: "Portfolio",
    href: "https://dineth14.github.io/dineth-portfolio/",
    variant: "secondary",
  } satisfies LinkItem,
};

export const profile: ProfileContent = {
  name: "Dineth Perera",
  headline: "Electrical & Electronic Engineering Undergraduate",
  subheadline:
    "Research interests in computer vision, remote sensing, signal processing, generative AI, and medical imaging.",
  statusItems: [
    "University of Peradeniya",
    "GPA: 3.70/4.00",
    "Sri Lanka",
    "Open to research internships",
  ],
  heroLinks: [
    links.primaryCv,
    links.googleScholarShort,
    links.github,
    links.huggingFace,
    links.email,
  ],
  profileSectionLinks: [
    links.cv,
    links.googleScholarShort,
    links.github,
    links.huggingFace,
    links.arxiv,
    links.email,
  ],
  footerLinks: [
    links.github,
    links.googleScholarShort,
    links.huggingFace,
    links.arxiv,
    links.linkedIn,
    links.email,
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#awards" },
    { label: "CV & Links", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ],
  links,
};

export const researchFocus = [
  {
    title: "Academic Focus",
    description:
      "I am a third-year Electrical and Electronic Engineering undergraduate at the University of Peradeniya, Sri Lanka. My current work focuses on remote-sensing computer vision, especially binary change detection, semantic segmentation, visual state-space models, and dataset preparation for disaster and wildfire analysis. I am interested in research internships in computer vision, remote sensing, signal processing, generative AI, and medical imaging.",
  },
];

export const contactDetails: ContactDetails = {
  description:
    "Email is the most direct contact channel for research internships, lab applications, and collaborations.",
  emailText: "e21291@eng.pdn.ac.lk",
  location: "Sri Lanka",
  primaryEmail: links.email,
  links: [
    links.github,
    links.huggingFace,
    links.googleScholarShort,
    links.arxiv,
    links.linkedIn,
  ],
};
