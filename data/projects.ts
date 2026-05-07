import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Real-Time Elephant Detection Using Infrasound Analysis and Machine Learning",
    category: "Signal Processing, Machine Learning, Embedded Sensing",
    year: "2025",
    description:
      "Developing an infrasound-based elephant detection system using low-frequency acoustic signals in the 5-35 Hz range. The project focuses on signal acquisition, preprocessing, spectral feature extraction, noise robustness, ML-based classification, and eventual embedded deployment.",
    tech: [
      "Python",
      "Signal Processing",
      "FFT/PSD",
      "Filtering",
      "Machine Learning",
      "Embedded Systems",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Dineth14/elephanet-detection-system-using-infrasound-vibrations",
      },
    ],
  },
  {
    title: "MambaRefine-CD",
    category: "Remote-Sensing Change Detection",
    description:
      "MambaVision-based binary change detection research project focused on region-boundary temporal refinement for bi-temporal remote-sensing imagery.",
    tech: [
      "PyTorch",
      "MambaVision",
      "Remote Sensing",
      "Change Detection",
      "Segmentation Metrics",
    ],
    // TODO: add a public repository link only after the research code is intentionally released.
    links: [],
  },
  {
    title: "Controlled Visual SSM Benchmark for Remote-Sensing Segmentation",
    category: "Remote-Sensing Semantic Segmentation",
    description:
      "Controlled benchmark comparing visual SSM, CNN, and Transformer backbones under fixed decoder and training settings for remote-sensing segmentation.",
    tech: [
      "PyTorch",
      "VMamba",
      "MambaVision",
      "Spatial-Mamba",
      "LoveDA",
      "ISPRS Potsdam",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Dineth14/Mamba-Segmentation",
      },
    ],
  },
  {
    title: "Wavelets / Contourlets / XLET-NSST Experiments",
    category: "Signal and Image Processing",
    description:
      "Experiments with multiscale signal and image transforms including wavelet, contourlet, XLET, and NSST workflows.",
    tech: [
      "Python",
      "MATLAB",
      "Signal Processing",
      "Image Processing",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Dineth14/wavelets-and-contourlets",
      },
    ],
  },
];
