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
      "G8Stack transformed how our team manages our API gateway. What used to take hours now takes minutes — saving our team roughly 15 hours a week.",
    author: "Ahmad Rahman",
    role: "Head of Platform Engineering",
    company: "TechCorp Asia",
    avatar: "AR",
  },
  {
    quote:
      "Before G8Stack, we couldn't prove who changed what in our gateway. Now every action is logged automatically, and our compliance team finally has the audit trail they need.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "FinanceHub",
    avatar: "SC",
  },
  {
    quote:
      "We went from a handful of engineers who could touch the gateway to our entire team contributing. G8Stack made API management accessible to everyone.",
    author: "Marcus Liu",
    role: "DevOps Lead",
    company: "CloudScale Solutions",
    avatar: "ML",
  },
];
