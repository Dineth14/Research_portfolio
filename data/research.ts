import { ResearchItem } from "@/types/portfolio";

export const ongoingResearch: ResearchItem[] = [
  {
    title: "Change Detection ",
    typeLabel: "Ongoing research · Remote-sensing change detection",
    status: "Ongoing research",
    description:
      "An ongoing binary change detection project using MambaVision-based bi-temporal feature extraction and region-boundary refinement for remote-sensing imagery.",
    points: [
      "Bi-temporal pre/post image input.",
      "Shared encoder design.",
      "Temporal difference features.",
      "Region and boundary-aware refinement.",
      "Evaluation on standard binary change detection datasets.",
    ],
    tags: ["Change Detection", "MambaVision", "Remote Sensing", "Boundary Refinement"],
  },
  {
    title: "WildFire-S2",
    typeLabel: "Dataset preparation · Wildfire remote sensing",
    status: "Dataset preparation / documentation",
    description:
      "A Sentinel-2 bi-temporal dataset preparation project for wildfire burned-area change detection using pre-fire images, post-fire images, and binary burned-area masks.",
    metadata: [
      { label: "Temporal setting", value: "Bi-temporal" },
      { label: "Source", value: "Sentinel-2" },
      { label: "Task", value: "Burned-area change detection" },
      { label: "Mask format", value: "Binary mask" },
      { label: "Status", value: "Dataset preparation / documentation" },
      {
        label: "Samples",
        value: "210 collected/source pairs; 206 currently standardized triplets.",
      },
    ],
    // TODO: Verify final WildFire-S2 sample count before public release.
    points: [
      "Sentinel-2 imagery.",
      "Pre-fire / post-fire image pairs.",
      "Binary burned-area masks.",
      "Dataset organized for supervised change detection.",
      "Includes dataset documentation and loading examples.",
    ],
    tags: ["Wildfire", "Sentinel-2", "Dataset Preparation", "Change Detection"],
  },
  {
    title: "DiTwa Disaster Tri-Temporal Dataset",
    typeLabel: "Dataset preparation · Disaster remote sensing",
    status: "Ongoing dataset preparation",
    description:
      "An ongoing dataset preparation project for tri-temporal disaster analysis using imagery from multiple stages of a disaster event.",
    points: [
      "T1: pre-disaster image.",
      "T2: post-disaster image.",
      "T3: on-disaster image.",
      "Intended for multi-temporal disaster change analysis.",
      "Metadata and dataset structure under preparation.",
    ],
    // TODO: Add exact DiTwa sample count after verification.
    // TODO: Add disaster types after verification.
    // TODO: Add dataset repository or Hugging Face link if released.
    tags: ["Disaster Remote Sensing", "Tri-temporal Data", "Dataset Preparation"],
  },
];
