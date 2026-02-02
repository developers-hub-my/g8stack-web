# Content Guide

How to edit the text, features, testimonials, and other
content on the G8Stack landing page.

## Data-Driven Content

Most section content is defined in TypeScript files under
`src/data/`. Edit these files to update the site without
touching component markup.

### Features (`src/data/features.ts`)

Array of 12 feature objects displayed in the Features
section grid.

```typescript
{
  icon: "subscription",  // Maps to icon component
  title: "Subscription Management",
  description: "Create and manage API subscription tiers..."
}
```

**Available icon keys**: `subscription`, `key`,
`rateLimit`, `approval`, `docs`, `analytics`, `sync`,
`plugins`, `users`, `routes`, `shield`, `logs`

To add a new feature, add an entry to the array. To add a
new icon, create a component in `src/components/icons/` and
register it in the `iconMap` in `FeatureCard.astro`.

### Use Cases (`src/data/usecases.ts`)

Array of 4 use case objects for the Use Cases section.

```typescript
{
  icon: "platform",
  title: "API Platform Teams",
  audience: "Platform Engineers",
  description: "Centralize API gateway operations...",
  benefits: [
    "Self-service API provisioning",
    "Centralized policy enforcement",
    "Cross-team visibility"
  ]
}
```

### Testimonials (`src/data/testimonials.ts`)

Array of 3 testimonial objects for the Testimonials section.

```typescript
{
  quote: "G8Stack transformed how our team manages...",
  author: "Ahmad Rahman",
  role: "Head of Platform Engineering",
  company: "TechCorp Asia",
  avatar: "AR"  // Initials shown in avatar circle
}
```

### Navigation (`src/data/navigation.ts`)

Array of nav link objects for the Navbar and mobile menu.

```typescript
{ label: "Features", href: "#features" }
```

## Inline Content

Some content is defined directly in component files:

| Content | File |
| --- | --- |
| Hero headline | `Hero.astro` |
| Hero tech badges | `Hero.astro` |
| TrustedBy names | `TrustedBy.astro` |
| How It Works steps | `HowItWorks.astro` |
| Architecture layers | `Architecture.astro` |
| Pricing features | `Pricing.astro` |
| CTA headline/text | `CallToAction.astro` |
| Footer links/info | `Footer.astro` |

## SEO Content

Page title and meta description are set in
`src/layouts/BaseLayout.astro`:

```typescript
title = "G8Stack — API Gateway Manager"
description = "Manage your API Gateway with a powerful web UI..."
```

## Images

Product screenshots are in `public/images/`:

- `dashboard.png` — Dashboard view
- `features.png` — Features grid page
- `hero-product.png` — Hero page

Replace these files with updated screenshots as the product
evolves. Keep the same filenames to avoid updating
references.

## Next Steps

- [Getting Started](01-getting-started.md)
- [Deployment](../03-deployment/01-netlify.md)
