# Portfolio

My personal portfolio: a single-page site with my professional work, a corner for side projects and small games, and a bit about me.

**Live site:** [aspherioth.github.io/portfolio](https://aspherioth.github.io/portfolio/)

## Learning Focus

This project is designed to deepen understanding of modern web development through hands-on practice. The main focus areas include:

- **HTML5 + CSS3** – Semantics, accessibility, responsiveness, cross-browser compatibility
- **React + TypeScript** – Component-driven development with typed props and state
- **Chakra UI** – Flexible and accessible UI components, themed with custom design tokens
- **Vite** – Fast and efficient development environment
- **Tooling and workflow** – Linting, formatting, bundle analysis and CI/CD with GitHub Actions

## Features

- **Sections**: hero, selected work, side quests (small games and experiments), about and contact
- **Light and dark mode**: follows the system setting, with a toggle in the navigation
- **Responsive design**: mobile-first layout with a collapsible menu on small screens
- **Custom theme**: brand colours, fonts and semantic tokens defined in `src/theme.ts`
- **Lean bundle**: only the Chakra UI recipes the site uses are registered

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build tool**: Vite 7
- **Styling**: Chakra UI v3 (with Emotion), `next-themes` for colour mode
- **Fonts**: Fontsource (Hanken Grotesk, Instrument Serif, JetBrains Mono)
- **Code quality**: ESLint 9 (flat config) + Prettier
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

You'll need Node.js 24 (the version is pinned in `.nvmrc`, so `nvm use` picks it up).

```bash
npm ci
npm run dev
```

The dev server runs at `http://localhost:5173/portfolio/`. The `/portfolio/` path matches where GitHub Pages serves the site.

### Scripts

| Script             | What it does                                                        |
| ------------------ | ------------------------------------------------------------------- |
| `npm run dev`      | Starts the Vite dev server with hot reload                          |
| `npm run build`    | Builds the production site into `dist/`                             |
| `npm run preview`  | Serves the built `dist/` locally to check the production build      |
| `npm run analyze`  | Builds and opens a bundle size report (`stats.html`, not committed) |
| `npm run lint`     | Checks the whole project with ESLint                                |
| `npm run lint:fix` | Fixes what ESLint can fix automatically                             |
| `npm run format`   | Formats every file with Prettier                                    |
| `npm run fix`      | Runs `lint:fix` and then `format`                                   |

## Project Structure

```
src/
├── assets/        Images
├── components/    Page sections (Hero, About, Contact, ...)
│   ├── cards/     Card components used in the work and games grids
│   └── ui/        Chakra UI snippets (colour mode toggle)
├── pages/         Page layouts (Home)
├── theme.ts       Chakra UI system: tokens, semantic colours and recipes
├── App.tsx        Providers and top-level layout
└── main.tsx       Entry point
```

Imports can use the path aliases `@/`, `@assets/`, `@components/` and `@pages/`, which point into `src/` (configured in `tsconfig.json`).

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`). Pull requests run the same build without deploying, so a green check on a PR means the site will build once it's merged.

## License

This project is open source and available under the [MIT License](./LICENSE).
