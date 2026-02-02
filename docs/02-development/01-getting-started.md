# Getting Started

Set up your local development environment for the G8Stack
landing page.

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

## Installation

```bash
git clone <repository-url>
cd g8stack-web
npm install
```

## Development Server

```bash
npm run dev
```

Opens at [http://localhost:4321](http://localhost:4321)
with hot module replacement.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview production build locally |

## Project Structure

```text
src/
├── components/       # Astro components
│   ├── ui/           # Reusable primitives (Button, etc.)
│   ├── icons/        # SVG icon components
│   └── *.astro       # Section components (Hero, etc.)
├── data/             # TypeScript data files
├── layouts/          # BaseLayout.astro
├── pages/            # index.astro (page entry point)
└── styles/           # global.css (Tailwind theme)
```

## Making Changes

1. Edit component files in `src/components/`
2. Edit content data in `src/data/`
3. Changes hot-reload automatically in dev mode
4. Run `npm run build` to verify production build

## Next Steps

- [Content Guide](02-content-guide.md)
- [Architecture Overview](../01-architecture/01-overview.md)
