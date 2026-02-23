export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "subscription",
    title: "Manage API Access",
    description:
      "Create access tiers, set usage limits, and let consumers sign up on their own — all through the dashboard.",
  },
  {
    icon: "key",
    title: "Keys & Credentials",
    description:
      "Issue, rotate, and revoke API keys from one screen. See who's using what and set limits per key.",
  },
  {
    icon: "rateLimit",
    title: "Traffic Protection",
    description:
      "Set up traffic rules in clicks, not config files. Protect your APIs from overuse without touching a terminal.",
  },
  {
    icon: "approval",
    title: "Controlled Access",
    description:
      "Every API access request goes through a structured approval process. Set reviewers, enforce SLAs, and keep a complete paper trail.",
  },
  {
    icon: "docs",
    title: "API Documentation",
    description:
      "Auto-generate and publish interactive API documentation. Keep your developer portal always up to date with your gateway.",
  },
  {
    icon: "analytics",
    title: "Live Analytics",
    description:
      "See your API traffic, errors, and performance in real time. Spot issues before they become problems.",
  },
  {
    icon: "sync",
    title: "One-Click Sync",
    description:
      "Keep your gateway and dashboard perfectly aligned. Spot changes instantly and fix them in one click.",
  },
  {
    icon: "plugins",
    title: "Extend Without Code",
    description:
      "Add capabilities to your gateway from a visual marketplace. No config files to write or maintain.",
  },
  {
    icon: "users",
    title: "Team & User Management",
    description:
      "Invite team members, set permissions, and let consumers self-serve — without bottlenecking your engineers.",
  },
  {
    icon: "routes",
    title: "Traffic Routing",
    description:
      "Point traffic where it needs to go with a visual editor. No config files required.",
  },
  {
    icon: "shield",
    title: "Policy Enforcement",
    description:
      "Set authentication, access restrictions, and security rules once — enforce them everywhere, automatically.",
  },
  {
    icon: "logs",
    title: "Full Audit Trail",
    description:
      "Know exactly who changed what, when, and why. Meet compliance requirements with automatically generated audit records.",
  },
];
