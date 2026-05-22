import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://dineth14.github.io/dineth-portfolio/";

export const metadata: Metadata = {
  title: "Dineth Perera | Research Portfolio",
  description:
    "Research portfolio of Dineth Perera, Electrical and Electronic Engineering undergraduate at the University of Peradeniya, focused on remote-sensing computer vision, change detection, visual state-space models, dataset preparation, signal processing, and embedded sensing.",
  keywords: [
    "Dineth Perera",
    "remote sensing",
    "computer vision",
    "change detection",
    "WildFire-S2",
    "disaster remote sensing",
    "visual state-space models",
    "MambaVision",
    "Sentinel-2",
    "signal processing",
    "University of Peradeniya",
    "research internship",
  ],
  openGraph: {
    title: "Dineth Perera | Research Portfolio",
    description:
      "Research portfolio of Dineth Perera, focused on remote-sensing computer vision, change detection, visual state-space models, dataset preparation, signal processing, and embedded sensing.",
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
