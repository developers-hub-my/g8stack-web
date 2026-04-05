export interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  name: string;
  description: string;
  href: string;
  logo: string;
  available: boolean;
}

export const navLinks: NavLink[] = [
  { label: "What's Included", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#use-cases" },
  { label: "Platform", href: "#architecture" },
  { label: "Pricing", href: "#pricing" },
];

export const products: Product[] = [
  {
    name: "G8Connect",
    description: "Data source to API in minutes",
    href: "/products/connect",
    logo: "/images/g8connect-logo.svg",
    available: true,
  },
  {
    name: "G8Shield",
    description: "API security intelligence & compliance",
    href: "/products/shield",
    logo: "/images/logo.svg",
    available: false,
  },
  {
    name: "G8Monitor",
    description: "API observability powered by Elastic Stack",
    href: "/products/monitor",
    logo: "/images/logo.svg",
    available: false,
  },
];
