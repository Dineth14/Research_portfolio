import { Publication } from "@/types/portfolio";

export const publications: Publication[] = [
  {
    title:
      "A Controlled Benchmark of Visual State-Space Backbones with Domain-Shift and Boundary Analysis for Remote-Sensing Segmentation",
    venue: "Accepted, IGARSS 2026",
    authors:
      "Nichula Wasalathilaka, Dineth Perera, Oshadha Samarakoon, Buddhi Wijenayake, Roshan Godaliyadda, Vijitha Herath, Parakrama Ekanayake",
    contribution:
      "Contributed to experiments, benchmarking, analysis, and manuscript preparation.",
    description:
      "Controlled comparison of visual state-space backbones and baseline models for remote-sensing semantic segmentation.",
    tags: ["Remote Sensing", "Semantic Segmentation", "Visual SSMs"],
    statusLabel: "Accepted",
    statusTone: "accepted",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2604.18721v1",
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?hl=en&user=MxZgkDYAAAAJ",
      },
      {
        label: "Code",
        href: "https://github.com/Dineth14/Mamba-Segmentation",
      },
    ],
  },
  {
    title:
      "MambaRefine-CD: MambaVision with Region-Boundary Temporal Refinement for Remote-Sensing Change Detection",
    venue: "Manuscript / Under Review, MERCon 2026",
    authors:
      "Dineth Perera, Thaariq Firdous, Oshadha Samarakoon, Roshan Godaliyadda, Parakrama Ekanayake, Vijitha Herath",
    contribution:
      "Developing the change detection architecture, experimental setup, and analysis.",
    description:
      "Ongoing manuscript on MambaVision-based binary remote-sensing change detection.",
    tags: ["Change Detection", "MambaVision", "Remote Sensing"],
    statusLabel: "Under Review",
    statusTone: "review",
    // TODO: add public code or project links here only after a repository or project page is intentionally made public.
    links: [],
  }
];
