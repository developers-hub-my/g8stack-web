# Components

The site uses a three-tier component hierarchy: layout,
sections, and UI primitives.

## Layout

### BaseLayout (`src/layouts/BaseLayout.astro`)

The root layout wraps every page and provides:

- HTML document structure with `lang="en"`
- SEO meta tags (title, description, canonical URL)
- Open Graph and Twitter Card meta
- Favicon and icon links
- AOS scroll animation initialization

**Props**:

- `title` — Page title (default: "G8Stack")
- `description` — Meta description

## Section Components

Each section is a standalone `.astro` file in
`src/components/`. Sections are composed in
`src/pages/index.astro` in reading order.

| Component | Key Features |
| --- | --- |
| `Navbar` | Fixed position, blur, mobile toggle |
| `Hero` | Gradient orbs, badge, dual CTAs |
| `TrustedBy` | CSS marquee with fade edges |
| `Features` | Maps `features.ts` via FeatureCard |
| `HowItWorks` | 3-step grid with connector line |
| `ProductPreview` | Browser chrome, gradient border |
| `UseCases` | Maps `usecases.ts` via UseCaseCard |
| `Architecture` | Layered stack with arrow connectors |
| `Testimonials` | Maps `testimonials.ts` via card |
| `Pricing` | Enterprise card with checklist |
| `CallToAction` | Final CTA with background glow |
| `Footer` | Brand, links, GitHub |

## Card Components

Reusable cards used by section components:

- `FeatureCard.astro` — Icon, title, description
  with glassmorphism styling
- `StepCard.astro` — Numbered circle, title,
  description
- `UseCaseCard.astro` — Audience badge, description,
  benefits checklist
- `TestimonialCard.astro` — Stars, quote, author
  avatar and info

## UI Primitives (`src/components/ui/`)

| Component | Purpose |
| --- | --- |
| `Container` | Max-width wrapper, responsive padding |
| `Button` | Link as button, primary/secondary, sizes |
| `SectionHeading` | Label, title (HTML), description |
| `GradientText` | Blue-to-violet gradient text span |
| `Badge` | Pill with pulse dot indicator |

## Icon Components (`src/components/icons/`)

Twelve SVG icon components, each accepting a `class` prop:

`SubscriptionIcon`, `KeyIcon`, `RateLimitIcon`,
`ApprovalIcon`, `DocsIcon`, `AnalyticsIcon`, `SyncIcon`,
`PluginsIcon`, `UsersIcon`, `RoutesIcon`, `ShieldIcon`,
`LogsIcon`

Icons are mapped by string key in `FeatureCard.astro`.

## Data Files (`src/data/`)

Typed TypeScript files that drive dynamic content:

- `features.ts` — 12 features with icon key, title,
  description
- `usecases.ts` — 4 use cases with audience,
  description, benefits
- `testimonials.ts` — 3 testimonials with quote,
  author, company
- `navigation.ts` — 5 nav links with label and
  anchor href

## Next Steps

- [Styling System](03-styling.md)
- [Content Guide](../02-development/02-content-guide.md)
