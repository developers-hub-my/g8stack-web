# Styling

The site uses TailwindCSS v4 with custom theme tokens,
utility classes, and CSS animations defined in
`src/styles/global.css`.

## TailwindCSS v4 Setup

TailwindCSS v4 is integrated through the Vite plugin in
`astro.config.mjs`:

```javascript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

The CSS entry point imports Tailwind and font files:

```css
@import "tailwindcss";
@import "@fontsource/inter/400.css";
@import "@fontsource/jetbrains-mono/400.css";
```

## Theme Tokens

Custom colors and fonts are defined via `@theme`:

```css
@theme {
  --color-navy-950: #0B0F1A;
  --color-navy-900: #0F1629;
  --color-navy-800: #151D35;
  --color-navy-700: #1E2A4A;
  --color-navy-600: #2A3A5C;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

These tokens are available as Tailwind classes:
`bg-navy-950`, `font-sans`, `font-mono`.

## Design System

### Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `navy-950` | `#0B0F1A` | Page background |
| `navy-900` | `#0F1629` | Card backgrounds |
| `navy-800` | `#151D35` | Elevated surfaces |
| `navy-700` | `#1E2A4A` | Borders, scrollbar |
| `blue-500` | `#3B82F6` | Primary accent |
| `violet-500` | `#8B5CF6` | Secondary accent |

### Gradient

The primary brand gradient is blue-to-violet: `#3B82F6`
to `#8B5CF6`. Used in:

- Gradient text (`.text-gradient`)
- Button backgrounds
  (`bg-gradient-to-r from-blue-500 to-violet-500`)
- Gradient borders (`.gradient-border`)
- Icon backgrounds
- Step number circles

### Typography

- **Inter** — Headings and body text
  (400, 500, 600, 700, 800 weights)
- **JetBrains Mono** — Code snippets, tech badges,
  technical labels (400, 500 weights)

## Custom Utilities

### `.bg-grid`

Subtle grid pattern overlay on the page background using
CSS linear gradients.

### `.text-gradient`

Blue-to-violet gradient text using `background-clip: text`.

### `.glass-card`

Glassmorphism card with semi-transparent background,
backdrop blur, and subtle blue border. Includes hover state
with increased opacity and border brightness.

### `.glow-blue` / `.glow-violet`

Box shadow glow effects for emphasis on key elements.

### `.gradient-border`

Animated gradient border using a `::before` pseudo-element
with rotating background position.

## Animations

| Class | Effect | Duration |
| --- | --- | --- |
| `.animate-pulse-dot` | Scale and fade | 2s |
| `.animate-marquee` | Horizontal scroll | 30s |
| `.animate-float` | Vertical float | 6s |
| `.animate-float-delayed` | Float, 2s delay | 8s |

All animations use `ease-in-out` timing and loop infinitely.

## Responsive Breakpoints

Standard Tailwind breakpoints are used:

- **Mobile**: Default (< 640px)
- **`sm`**: 640px+
- **`md`**: 768px+
- **`lg`**: 1024px+

## Next Steps

- [Getting Started](../02-development/01-getting-started.md)
- [Content Guide](../02-development/02-content-guide.md)
