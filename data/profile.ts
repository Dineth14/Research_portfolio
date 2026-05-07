import { ContactDetails, LinkItem, ProfileContent } from "@/types/portfolio";

const basePath = process.env.NODE_ENV === "production" ? "/dineth-portfolio" : "";

const links = {
  publications: {
    label: "View Publications",
    href: "#publications",
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
  headline:
    "Electrical & Electronic Engineering Undergraduate | Remote-Sensing Computer Vision | Signal Processing",
  subheadline:
    "Third-year B.Sc. Engineering undergraduate at the University of Peradeniya, Sri Lanka, working on remote-sensing computer vision, visual state-space models, binary change detection, semantic segmentation, and signal-processing-based intelligent systems.",
  photoSrc: `${basePath}/images/dineth-perera.jpg`,
  statusItems: [
    "University of Peradeniya",
    "GPA: 3.74/4.00",
    "Open to research internships",
    "Sri Lanka",
  ],
  heroLinks: [
    links.publications,
    links.cv,
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
    links.linkedIn,
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
    { label: "Awards", href: "#awards" },
    { label: "CV", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ],
  links,
};

export const researchFocus = [
  {
    title: "Remote-Sensing Computer Vision",
    description:
      "Semantic segmentation and change detection for aerial and satellite imagery, with emphasis on fair benchmarking, domain shift, and boundary quality.",
  },
  {
    title: "Visual State-Space Models",
    description:
      "Evaluation and adaptation of visual SSM/Mamba-style backbones such as VMamba, MambaVision, and Spatial-Mamba for dense prediction tasks.",
  },
  {
    title: "Binary Change Detection",
    description:
      "Developing MambaVision-based region-boundary temporal refinement methods for detecting land-cover and building changes from bi-temporal remote-sensing images.",
  },
  {
    title: "Signal Processing & Field Sensing",
    description:
      "Signal acquisition, spectral analysis, filtering, vibration/infrasound analysis, and ML-based sensing systems for real-world engineering problems.",
  },
];

export const ongoingResearch = [
  {
    title: "MambaRefine-CD",
    status: "Manuscript / under review",
    description:
      "A MambaVision-based binary remote-sensing change detection architecture using shared-weight bi-temporal encoding, differential region-boundary interaction, adaptive multiscale decoding, and boundary residual refinement.",
    points: [
      "Shared-weight MambaVision encoder for pre-change and post-change images.",
      "Differential feature construction using normalized bi-temporal features, absolute difference, and signed difference.",
      "D-RBI module for region and boundary evidence separation.",
      "Sobel-conditioned boundary gating.",
      "ARF-FPN-style multiscale decoding.",
      "Bounded residual refinement near uncertain boundaries.",
      "Currently being evaluated with Precision, Recall, F1, IoU, OA, BF1, BIoU, and Trimap F1.",
    ],
  },
  {
    title: "Controlled Visual SSM Benchmarking for Remote-Sensing Segmentation",
    status: "Accepted at IGARSS 2026",
    description:
      "Controlled benchmarking of VMamba, MambaVision, Spatial-Mamba, CNN, and Transformer baselines for semantic segmentation under fixed decoder and training settings.",
    points: [
      "Encoder-isolated comparison under a unified four-stage feature interface.",
      "LoveDA and ISPRS Potsdam evaluation.",
      "Domain-shift analysis across urban and rural scenes.",
      "Boundary quality inspection alongside region-level accuracy.",
      "Accuracy-efficiency trade-off analysis under fixed lightweight decoding.",
    ],
  },
  {
    title: "Infrasound-Based Elephant Detection",
    status: "Developing",
    description:
      "Development of an infrasound-based elephant detection approach using low-frequency acoustic signals, spectral feature extraction, and ML classification for eventual embedded and field deployment.",
    points: [
      "Signal acquisition in the low-frequency acoustic regime.",
      "Spectral feature extraction and filtering for noisy outdoor environments.",
      "ML-based classification design for real-world deployment settings.",
      "Embedded and field sensing considerations for eventual monitoring systems.",
    ],
  },
];

export const leadershipItems = [
  {
    title: "Central Link Toastmasters Club",
    role: "Member, 2023-2026",
    description:
      "Developed technical communication, public speaking, and structured presentation skills through club participation.",
  },
  {
    title: "Raceday.lk",
    role: "Co-owner",
    description:
      "Co-owner of an online luxury car marketplace and community in Sri Lanka, with experience in digital presence, content, listings, and community building.",
  },
];

export const contactDetails: ContactDetails = {
  description:
    "For research internships, lab applications, collaborations, or technical discussions in computer vision, remote sensing, signal processing, or embedded AI, email is the most direct contact channel.",
  emailText: "e21291@eng.pdn.ac.lk",
  location: "Sri Lanka",
  primaryEmail: links.email,
  links: [
    links.github,
    links.huggingFace,
    links.googleScholarShort,
    links.arxiv,
    links.portfolio,
    links.linkedIn,
  ],
};
