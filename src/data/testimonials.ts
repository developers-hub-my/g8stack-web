export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "G8Stack transformed how our team manages our API gateway. What used to take hours of CLI work now takes minutes through the dashboard.",
    author: "Ahmad Rahman",
    role: "Head of Platform Engineering",
    company: "TechCorp Asia",
    avatar: "AR",
  },
  {
    quote:
      "The approval workflows and audit logging were exactly what we needed for our compliance requirements. Deployment to production is now fully governed.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "FinanceHub",
    avatar: "SC",
  },
  {
    quote:
      "We went from managing gateway configs across 12 microservices via YAML files to a single, unified dashboard. Our developers love it.",
    author: "Marcus Liu",
    role: "DevOps Lead",
    company: "CloudScale Solutions",
    avatar: "ML",
  },
];
