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
    audience: "Platform Engineers",
    description:
      "Centralize API gateway operations for your entire organization. G8Stack gives platform teams a single pane of glass to manage services, routes, and policies.",
    benefits: [
      "Self-service API provisioning",
      "Centralized policy enforcement",
      "Cross-team visibility",
    ],
  },
  {
    icon: "devops",
    title: "Enterprise DevOps",
    audience: "DevOps Engineers",
    description:
      "Reduce operational overhead of managing gateway configurations. Replace manual CLI workflows with automated, auditable UI-driven operations.",
    benefits: [
      "Configuration drift detection",
      "One-click gateway sync",
      "Rollback capabilities",
    ],
  },
  {
    icon: "cto",
    title: "Technical Leadership",
    audience: "CTOs & VPs of Engineering",
    description:
      "Gain executive-level visibility into your API infrastructure. Monitor adoption, enforce governance, and demonstrate compliance.",
    benefits: [
      "API usage analytics",
      "Compliance audit trails",
      "Cost allocation insights",
    ],
  },
  {
    icon: "regulated",
    title: "Regulated Industries",
    audience: "Finance, Healthcare, Government",
    description:
      "Meet strict regulatory requirements with built-in approval workflows, audit logging, and role-based access controls.",
    benefits: [
      "Multi-step approval workflows",
      "Complete audit trails",
      "RBAC & access controls",
    ],
  },
];
