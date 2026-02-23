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
      "G8Stack cut our API gateway operations from a full day per week to under an hour. The entire platform team can now manage routes and policies without waiting on DevOps.",
    author: "Ahmad Rahman",
    role: "Head of Platform Engineering",
    company: "TechCorp Asia",
    avatar: "AR",
  },
  {
    quote:
      "Before G8Stack, we couldn't prove who changed what in our gateway configuration. Now every action is logged automatically — our compliance audits went from stressful to straightforward.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "FinanceHub",
    avatar: "SC",
  },
  {
    quote:
      "We went from three engineers who could touch the gateway to our entire team contributing safely. Onboarding new developers used to take days — now it takes minutes.",
    author: "Marcus Liu",
    role: "Engineering Manager",
    company: "CloudScale Solutions",
    avatar: "ML",
  },
];
