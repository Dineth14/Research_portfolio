import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://dineth14.github.io/dineth-portfolio/";

export const metadata: Metadata = {
  title: "Dineth Perera | Research Portfolio",
  description:
    "Research portfolio of Dineth Perera, Electrical and Electronic Engineering undergraduate at the University of Peradeniya, focused on remote-sensing computer vision, visual state-space models, change detection, semantic segmentation, signal processing, and embedded AI.",
  keywords: [
    "Dineth Perera",
    "remote sensing",
    "computer vision",
    "change detection",
    "semantic segmentation",
    "visual state-space models",
    "MambaVision",
    "VMamba",
    "Hugging Face",
    "Google Scholar",
    "signal processing",
    "University of Peradeniya",
    "research internship",
  ],
  openGraph: {
    title: "Dineth Perera | Research Portfolio",
    description:
      "Research portfolio of Dineth Perera, focused on remote-sensing computer vision, visual state-space models, semantic segmentation, change detection, signal processing, and embedded AI.",
    type: "website",
    url: siteUrl,
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
