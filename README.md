# G8Stack

API Gateway Manager with a powerful web UI.

## Overview

G8Stack provides a comprehensive web interface for managing
your API gateway — subscriptions, API keys, rate limiting,
approval workflows, analytics, and more — without the CLI.

Built by [Developers Hub Sdn Bhd](https://devhub.my).

## Features

- Subscription and API key management
- Rate limiting with visual controls
- Multi-step approval workflows
- Real-time analytics and monitoring
- Gateway sync and drift detection
- Plugin and route management
- Consumer management with RBAC
- Audit logging for compliance

## Tech Stack

- [Astro 5](https://astro.build) — Static site framework
- [TailwindCSS v4](https://tailwindcss.com) — Utility-first CSS
- [AOS](https://michalsnik.github.io/aos/) — Scroll animations
- Self-hosted Inter + JetBrains Mono fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view
the site.

## Build

```bash
npm run build
npm run preview
```

The static site is built to `dist/` and ready for deployment.

## Deployment

Configured for [Netlify](https://netlify.com) with
`netlify.toml`. Push to main to deploy.

## Documentation

See [docs/README.md](docs/README.md) for full documentation.

## License

Proprietary. All rights reserved.
