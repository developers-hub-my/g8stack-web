# Overview

The G8Stack landing page is a single-page static site that
composes 12 section components into one scrollable marketing
page.

## Framework

**Astro 5** was chosen for:

- Zero JS shipped by default — pure HTML/CSS output
- First-class Netlify support with auto-detection
- Built-in SEO through server-rendered HTML and meta tags
- Native TailwindCSS v4 support via `@tailwindcss/vite`
- Island architecture if interactive components are needed

## File Structure

```text
g8stack-web/
├── public/
│   ├── favicon.svg, favicon.ico    # Brand icons
│   ├── apple-touch-icon.png        # iOS icon
│   ├── icon-192.png, icon-512.png  # PWA icons
│   ├── robots.txt                  # Crawl rules
│   └── images/
│       ├── logo.svg                # SVG wordmark
│       ├── dashboard.png           # Product screenshot
│       ├── features.png            # Features screenshot
│       └── hero-product.png        # Hero screenshot
├── src/
│   ├── components/
│   │   ├── ui/                     # Reusable primitives
│   │   ├── icons/                  # SVG icon components
│   │   └── *.astro                 # Section components
│   ├── data/                       # Typed content data
│   ├── layouts/                    # BaseLayout
│   ├── pages/                      # index.astro
│   └── styles/                     # global.css
├── astro.config.mjs
├── netlify.toml
├── tsconfig.json
└── package.json
```

## Page Sections

The landing page is assembled from these sections in order:

| # | Component | Purpose |
| --- | --- | --- |
| 1 | Navbar | Fixed nav, scroll blur, mobile menu |
| 2 | Hero | Headline, CTAs, animated orbs |
| 3 | TrustedBy | Logo marquee (placeholder) |
| 4 | Features | 12 feature cards in grid |
| 5 | HowItWorks | 3-step: Connect, Configure, Scale |
| 6 | ProductPreview | Screenshot with gradient border |
| 7 | UseCases | 4 audience segment cards |
| 8 | Architecture | Visual stack diagram |
| 9 | Testimonials | 3 social proof cards |
| 10 | Pricing | Enterprise contact-us card |
| 11 | CallToAction | Final conversion CTA |
| 12 | Footer | Company info, links, GitHub |

## Build Output

Astro builds to `dist/` as a fully static site. The output
includes:

- **HTML**: Single `index.html` (~60KB)
- **CSS**: Tailwind output + AOS styles (~94KB)
- **JS**: AOS library only (~15KB)
- **Fonts**: Inter + JetBrains Mono (on demand)

## Next Steps

- [Component Architecture](02-components.md)
- [Styling System](03-styling.md)
