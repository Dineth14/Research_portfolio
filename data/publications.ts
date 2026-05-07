import { Publication } from "@/types/portfolio";

export const publications: Publication[] = [
  {
    title:
      "A Controlled Benchmark of Visual State-Space Backbones with Domain-Shift and Boundary Analysis for Remote-Sensing Segmentation",
    venue: "Accepted, IEEE International Geoscience and Remote Sensing Symposium, IGARSS 2026",
    authors:
      "Nichula Wasalathilaka, Dineth Perera, Oshadha Samarakoon, Buddhi Wijenayake, Roshan Godaliyadda, Vijitha Herath, Parakrama Ekanayake",
    contribution:
      "Contributed to experiments, benchmarking, analysis, and manuscript preparation. The work compares representative visual SSM backbones with controlled CNN and Transformer baselines on LoveDA and ISPRS Potsdam under a unified four-stage feature interface and fixed lightweight decoder.",
    description:
      "This study investigates whether visual state-space backbones provide practical advantages for remote-sensing semantic segmentation under controlled conditions. The benchmark emphasizes encoder isolation, domain-shift behavior, and boundary-related failure modes.",
    tags: [
      "Remote Sensing",
      "Semantic Segmentation",
      "Visual SSMs",
      "MambaVision",
      "VMamba",
      "Spatial-Mamba",
      "Domain Shift",
      "Boundary Analysis",
    ],
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
      "Dineth Perera, Thaariq Firdous, Oshadha Samarakoon, Buddhi Wijenayake, Roshan Godaliyadda, Parakrama Ekanayake, Vijitha Herath",
    contribution:
      "Developing a MambaVision-based binary change detection architecture with differential region-boundary interaction, ARF-FPN multiscale decoding, CRAM-lite spatial modulation, and bounded boundary residual refinement.",
    description:
      "This ongoing work focuses on accurate binary change detection in bi-temporal remote-sensing imagery. The method emphasizes explicit temporal difference modeling, region-boundary separation, and boundary-aware refinement.",
    tags: [
      "Change Detection",
      "MambaVision",
      "Remote Sensing",
      "Region-Boundary Refinement",
      "Boundary Metrics",
      "DSIFN-CD",
      "WHU-CD",
      "LEVIR-CD",
    ],
    statusLabel: "Under Review",
    statusTone: "review",
    // TODO: add public code or project links here only after a repository or project page is intentionally made public.
    links: [],
  },
  {
    title:
      "Task-Aware Evaluation of Generative Models for Ultra-Long Vibration Signals in Predictive Maintenance",
    venue: "Manuscript / Under Review, IRAI 2026",
    authors:
      "Oshadha Samarakoon, Dineth Perera, Kavishka Galagoda, Thaariq Firdous, Fikry Nuhuman",
    contribution:
      "Contributed to experiments, methodology development, evaluation design, result analysis, and manuscript preparation for generative predictive-maintenance benchmarking.",
    description:
      "This work studies the evaluation of generative models for ultra-long vibration signals, with a focus on task-aware metrics and predictive-maintenance relevance.",
    tags: [
      "Predictive Maintenance",
      "Vibration Signals",
      "Generative Models",
      "Time Series",
      "Signal Processing",
    ],
    statusLabel: "Under Review",
    statusTone: "review",
    // TODO: add a public manuscript or code link only when one exists.
    links: [],
  },
];
