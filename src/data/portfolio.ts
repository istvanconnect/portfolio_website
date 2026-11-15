export type Project = {
  name: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  number: string;
};

export const projects: Project[] = [
  {
    name: "Offscript® — Brand world",
    category: "Art Direction · Visual Identity",
    year: "2025",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85",
    alt: "Minimal creative studio with considered furniture and natural light",
  },
  {
    name: "Goodday — Digital product",
    category: "Product Design · Development",
    year: "2025",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1500&q=85",
    alt: "Smartphone displaying a clean mobile interface",
  },
  {
    name: "Forma — Packaging system",
    category: "Strategy · Packaging · Art Direction",
    year: "2024",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1500&q=85",
    alt: "Minimal reusable bottle product photography",
  },
  {
    name: "New Forms — Campaign",
    category: "Campaign · Digital Experience",
    year: "2024",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1500&q=85",
    alt: "Abstract gradient artwork in vivid colors",
  },
];

export const services = [
  {
    number: "01 — THINK",
    title: "Strategy & direction",
    description:
      "Positioning, creative direction, and a clear point of view that gives the work somewhere meaningful to go.",
  },
  {
    number: "02 — SHAPE",
    title: "Identity & experience",
    description:
      "Visual identities, digital design systems, and expressive interfaces with purpose behind every pixel.",
  },
  {
    number: "03 — MAKE",
    title: "Creative development",
    description:
      "Responsive websites and digital details, thoughtfully built to feel as good as they look.",
  },
];
