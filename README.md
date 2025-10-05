# CIS – Climate Integration Stations (Built for Nasa Space Apps Competition)

Production-grade Next.js app showcasing CIS with animated hero, sections, and an interactive simulation page.

## Overview

- **Framework**: Next.js App Router
- **Styling**: Tailwind CSS 4, custom fonts, glassmorphism overlays
- **Animations**: Framer Motion, optional GSAP
- **3D/Graphics**: React Three Fiber/Drei (for `EarthScene`)
- **Route**: `/` (landing), `/simulation` (interactive simulation without NavBar)

## Features

- **Hero + Sections**: `About`, `Problem`, `Case Studies`, `Mission/Vision`, `Services`, `Benefits`, `Final`, `Footer`.
- **NavBar**: Smooth anchor scrolling on the landing page.
- **Simulation Page**: UI that emulates satellite data analysis and a decision step.
  - Phases: receiving → analyzing → decision (pauses until input) → done
  - Suggestion prompt during decision: “Make the drone go up?” (Yes/No)
  - Manual controls: Auto/Manual mode; in Manual choose Up/Hold/Down
  - Visual feedback: progress bar, telemetry metrics, and drone motion (up/down)
  - No `NavBar` on `/simulation` by design

## Project Structure

```
app/
  layout.jsx          # Root layout (fonts, globals)
  page.jsx            # Landing page; includes NavBar and sections
  globals.css         # Tailwind and design tokens
  simulation/
    page.jsx          # Simulation route (no NavBar)
components/
  NavBar.jsx          # Top navigation for landing
  ...                 # Sections and shared components
public/
  fonts/GTProelium.otf
```

## Run Locally

1. Install dependencies
   ```bash
   npm install
   ```
2. Dev server
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Routes

- `/` — Landing experience with animated Earth overlay and content sections.
- `/simulation` — Interactive simulation page without `NavBar`.

## Styling & Identity

- Global styles: `app/globals.css` define color tokens via `:root` and `.dark`.
- Consistent black background, white/glassy overlays, and GTProelium display font.
- Components use Tailwind utility classes for design consistency.

## Simulation Details

- File: `app/simulation/page.jsx`
- Logic:
  - Random telemetry: Temperature (20–45°C), Humidity (40–90%).
  - Decision rule in Auto: launch upward if humidity > 60 and temperature > 30.
  - Decision phase pauses until user input (Yes/No on suggestion).
  - Manual override: Up, Hold, Down.
- Animations: Framer Motion for progress and drone motion (up/down y-axis).

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build with Turbopack
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npm run strip:comments` — Strip comments (configured for source folders)

Note: The comment-stripping script targets `app/` and `components/` and excludes build artifacts. Adjust the script if you want broader scope.

## Environment

This project does not require environment variables for local development by default. If you add APIs or external services, document them here.

## Deployment

You can deploy to any Node-compatible host. For Vercel:

1. Push to a Git repository.
2. Import in Vercel.
3. Use default Next.js build settings.

## Troubleshooting

- If dev server runs but pages are blank, verify components are imported correctly and check the browser console for errors.
- If 3D scene causes performance issues, disable or lazy-load heavy visuals.
- Tailwind classes not applying? Ensure `app/globals.css` is imported in `app/layout.jsx`.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
