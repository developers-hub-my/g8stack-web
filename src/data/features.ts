export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "subscription",
    title: "Subscription Management",
    description:
      "Create and manage API subscription tiers with usage quotas, billing cycles, and automated provisioning for your consumers.",
  },
  {
    icon: "key",
    title: "API Key Management",
    description:
      "Issue, rotate, and revoke API keys through an intuitive dashboard. Track key usage and set per-key rate limits.",
  },
  {
    icon: "rateLimit",
    title: "Rate Limiting",
    description:
      "Configure granular rate limiting policies per route, service, or consumer. Protect your APIs from abuse with visual controls.",
  },
  {
    icon: "approval",
    title: "Approval Workflow",
    description:
      "Multi-step approval workflows for API access requests. Assign reviewers, set SLAs, and maintain audit trails.",
  },
  {
    icon: "docs",
    title: "API Documentation",
    description:
      "Auto-generate and publish interactive API documentation. Keep your developer portal in sync with your gateway configuration.",
  },
  {
    icon: "analytics",
    title: "Analytics & Monitoring",
    description:
      "Real-time dashboards for API traffic, latency, error rates, and consumer activity. Powered by Elasticsearch and Kibana.",
  },
  {
    icon: "sync",
    title: "Gateway Sync",
    description:
      "One-click synchronization with your API gateway. Detect configuration drift and resolve conflicts visually.",
  },
  {
    icon: "plugins",
    title: "Plugin Management",
    description:
      "Browse, configure, and toggle gateway plugins from the UI. No YAML files or CLI commands required.",
  },
  {
    icon: "users",
    title: "Consumer Management",
    description:
      "Onboard and manage API consumers with role-based access control, groups, and credential management.",
  },
  {
    icon: "routes",
    title: "Routes & Services",
    description:
      "Visual route configuration with path matching, header routing, and upstream load balancing controls.",
  },
  {
    icon: "shield",
    title: "Security Policies",
    description:
      "Enforce authentication, IP restrictions, CORS, and OAuth2 policies across your API gateway from a single pane.",
  },
  {
    icon: "logs",
    title: "Audit Logs",
    description:
      "Complete audit trail of every configuration change, access request, and administrative action across your gateway.",
  },
];
