# Project Setup

Presentation website for **Cristina Bujoreanu** (psychologist). Static content
(story, studies, packages, contact) plus appointment booking. No custom backend
to run — everything renders from the code.

## Tech stack

- **TanStack Start** (full-stack React framework, file-based routing, SSR)
- **React 19** + **TypeScript**
- **Vite 8** (dev server + build)
- **Tailwind CSS v4** for styling
- **shadcn/ui** (Radix-based components) in `src/components`
- Deploys as a server build (Nitro; Cloudflare is the default target)

## Prerequisites

Install these before anything else:

1. **Node.js 22.12.0 or newer.** This is a hard requirement — the TanStack
   packages refuse to run below it, and installs fail in confusing ways on
   older Node. Check with:
   ```bash
   node --version
   ```
   If it's below 22.12, install the latest LTS from https://nodejs.org (or use
   `nvm`).
2. **Git.**
3. A code editor — **VS Code** or **Cursor** recommended (setup notes below
   assume one of these).

## First-time setup

```bash
# 1. Clone the repo
git clone <REPO_URL>
cd <REPO_FOLDER>

# 2. Install dependencies (reads package.json + package-lock.json)
npm install

# 3. Start the dev server
npm run dev
```

Then open the local URL printed in the terminal (typically
`http://localhost:3000`). The site hot-reloads as you edit files.

> **Package manager:** use **npm** for consistency. The repo has a
> `package-lock.json`. If you see a stray `bun.lock`, ignore it — don't mix
> package managers, or the two of us will end up with different dependency
> versions. Pick npm and stick with it.

## Available scripts

| Command             | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload                    |
| `npm run build`     | Production build                                        |
| `npm run build:dev` | Build in development mode (useful for debugging builds) |
| `npm run preview`   | Serve the production build locally to test it           |
| `npm run lint`      | Run ESLint over the project                             |
| `npm run format`    | Auto-format all files with Prettier                     |

Before pushing, it's good practice to run `npm run lint` and `npm run format`.

## Project structure

```
src/
  routes/          # Pages — file-based routing (see below)
    __root.tsx     # Root layout: header, footer, error/404 handling
    index.tsx      # Home page ("/")
    about.tsx      # "/about"
    studies.tsx    # "/studies"
    packages.tsx   # "/packages"
    contact.tsx    # "/contact"
    sitemap[.]xml.tsx
  components/       # Reusable UI (shadcn components + custom)
  lib/             # Helpers (error handling, etc.)
  assets/          # Images imported by code (photos, etc.)
  styles.css       # Global styles + Tailwind theme (colors, fonts)
  router.tsx       # Router config
  server.ts        # SSR entry with error handling
  start.ts         # Server middleware (CSRF, error boundary)
  routeTree.gen.ts # AUTO-GENERATED — do not edit by hand
public/            # Static files served as-is (favicon, robots, etc.)
vite.config.js     # Build config (uses Lovable's TanStack preset)
```

## How routing works

Routing is **file-based**. A file in `src/routes/` becomes a page automatically:

- `src/routes/about.tsx` → `/about`
- Add a new file, e.g. `src/routes/resources.tsx`, and `/resources` exists.

`routeTree.gen.ts` is regenerated automatically by the dev server whenever routes
change. **Never edit it manually** — your changes get overwritten.

## Editing content

Page text lives directly inside the route files as JSX (in Romanian). To change
copy, edit the relevant file in `src/routes/`. For example, pricing text is in
`src/routes/packages.tsx`, the bio is in `src/routes/about.tsx`.

The color palette and fonts are defined as CSS variables at the top of
`src/styles.css` (the `--primary`, `--background`, etc. values).

