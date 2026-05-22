import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Real-Time Elephant Detection Using Infrasound Analysis and Machine Learning",
    category: "Signal Processing / Machine Learning",
    status: "Project",
    year: "2025",
    description:
      "Signal-processing and machine-learning project exploring low-frequency infrasound features for elephant detection.",
    tags: ["Infrasound", "Signal Processing", "Machine Learning"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Dineth14/elephanet-detection-system-using-infrasound-vibrations",
      },
    ],
  },
  {
    title: "Wavelets / Contourlets / XLET-NSST Experiments",
    category: "Signal and Image Processing",
    status: "Experiments",
    description:
      "Experiments with multiscale signal and image transforms, including wavelet, contourlet, XLET, and NSST workflows.",
    tags: ["Signal Processing", "Image Processing", "MATLAB"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Dineth14/wavelets-and-contourlets",
      },
    ],
  },
  {
    title: "Controlled Visual SSM Benchmark Implementation",
    category: "Remote-Sensing Segmentation",
    status: "Research code",
    description:
      "Implementation work connected to controlled visual SSM benchmarking for remote-sensing semantic segmentation.",
    tags: ["PyTorch", "Remote Sensing", "Segmentation"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Dineth14/Mamba-Segmentation",
      },
    ],
  },
];
