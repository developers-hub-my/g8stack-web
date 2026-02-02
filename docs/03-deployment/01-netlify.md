# Netlify

The site is configured for Netlify deployment via
`netlify.toml` in the project root.

## Build Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Astro builds the static site to `dist/`, which Netlify
serves directly.

## Security Headers

Applied to all routes (`/*`):

| Header | Value | Purpose |
| --- | --- | --- |
| `X-Frame-Options` | `DENY` | Clickjacking prevention |
| `X-Content-Type` | `nosniff` | MIME sniff prevention |
| `Referrer-Policy` | `strict-origin` | Referrer control |
| `Permissions` | `camera=()...` | Restricts browser APIs |

## Caching

Static assets use aggressive caching with immutable headers:

| Path | Cache-Control |
| --- | --- |
| `/images/*` | `public, max-age=31536000, immutable` |
| `/*.css` | `public, max-age=31536000, immutable` |
| `/*.js` | `public, max-age=31536000, immutable` |

Astro's hashed filenames (e.g., `BaseLayout.DvB2Xm2x.css`)
enable safe immutable caching since the filename changes
when content changes.

## Deployment Workflow

1. Push changes to the `main` branch
2. Netlify auto-detects the push and runs `npm run build`
3. The `dist/` directory is published to the CDN
4. Site is live at the configured domain

## Domain Setup

Configure the custom domain (`g8stack.com`) in Netlify's
domain settings. Netlify provides automatic HTTPS via
Let's Encrypt.

## Pre-Deployment Checklist

- [ ] `npm run build` succeeds locally without errors
- [ ] `npm run preview` renders correctly
- [ ] Responsive layout verified at 375px, 768px, 1280px
- [ ] All images load correctly
- [ ] Navigation anchor links work
- [ ] Meta tags and OG image are correct

## Sitemap

The `@astrojs/sitemap` integration auto-generates
`sitemap-index.xml` at build time, referenced in
`public/robots.txt`.

## Next Steps

- [Architecture Overview](../01-architecture/01-overview.md)
- [Getting Started](../02-development/01-getting-started.md)
