export interface UseCase {
  icon: string;
  title: string;
  audience: string;
  description: string;
  benefits: string[];
}

export const usecases: UseCase[] = [
  {
    icon: "platform",
    title: "API Platform Teams",
    audience: "Platform & Infrastructure Teams",
    description:
      "Give your platform team a single dashboard to manage services, routes, and policies across the entire organization — without juggling config files.",
    benefits: [
      "Self-service API provisioning",
      "Centralized policy management",
      "Cross-team visibility",
    ],
  },
  {
    icon: "devops",
    title: "Operations Teams",
    audience: "DevOps & SRE Teams",
    description:
      "Reduce time spent on gateway operations. Replace manual workflows with a visual interface your team can use to manage configurations in minutes.",
    benefits: [
      "Instant drift detection",
      "One-click gateway sync",
      "Visual change management",
    ],
  },
  {
    icon: "cto",
    title: "Technical Leadership",
    audience: "CTOs & Engineering Leaders",
    description:
      "Get executive-level visibility into your API infrastructure. Monitor adoption, enforce governance, and make data-driven decisions about your API strategy.",
    benefits: [
      "Real-time usage analytics",
      "Compliance-ready audit trails",
      "Team performance insights",
    ],
  },
  {
    icon: "regulated",
    title: "Regulated Industries",
    audience: "Finance, Healthcare, Government",
    description:
      "Meet strict regulatory requirements with built-in approval workflows, full audit logging, and granular access controls — out of the box.",
    benefits: [
      "Structured approval workflows",
      "Complete audit trail",
      "Granular access controls",
    ],
  },
];
