# SC_ Design Lab

A personal portfolio and creative showcase built with React, TypeScript, and Vite. Design Lab is a curated archive of interactive web experiments — 3D environments, WebGL shaders, audio-reactive visuals, and cinematic web experiences — all accessible from a single, minimal interface.

---

## What It Is

Design Lab serves as the portfolio hub for **SC_** (Shirisha C), a frontend developer focused on creative web experiences. Each entry in the lab is treated as an *experiment* — a project numbered and archived like a scientific log, with its own context, screenshots, live link, and tech breakdown.

The site itself is intentionally minimal and fast, acting as a clean gallery frame so the experiments can speak for themselves.

---

## Features

- **Animated Preloader** — Assets are pre-fetched in the background before the UI appears, with a smooth GSAP curtain transition into the main page.
- **Project Grid** — All experiments are displayed in a two-column card layout with staggered entrance animations powered by GSAP.
- **Experiment Detail Pages** — Each project has its own page with a hero image viewer, scrollable screenshot strip, feature list, description, and a direct link to the live site.
- **Client-Side Routing** — Navigation between the lab index and individual project pages is handled by React Router with no full page reloads.
- **Deployed on Vercel** — SPA rewrites are configured so deep links (e.g. `/project/flutter`) work correctly when accessed directly.

---

## Experiments in the Lab

| # | Title | Status | Description |
|---|-------|--------|-------------|
| 001 | Kronos Minima | Live | Immersive 3D portfolio with four interactive stations built on a futuristic planet |
| 002 | Luxe Interior | Live | Editorial 3D architectural portfolio with procedural wireframes and GLSL shaders |
| 003 | Pixie Bloomlands | Live | Scroll-driven 3D woodland microsite with enchanted dark-fantasy aesthetic |
| 004 | Animal Kingdom | Live | Interactive wildlife archive with liquid and pixel distortion WebGL effects |
| 005 | Apex Interceptor | Live | Cinematic vehicle showcase with animated grid environment and GSAP scroll interactions |
| 006 | Flutter | Live | A butterfly sculpted from 22,000 GPU-driven particles with cursor repulsion |
| 007 | The Art of Ghibli | In Progress | Interactive tribute archive for Studio Ghibli with GSAP animations |
| 008 | Luminescent | Live | Audio-reactive WebGL experience driven by live microphone input via Web Audio API |
| 009 | Golden Hour | Live | Four-act cinematic 3D narrative with custom rain shaders and atmospheric lighting |
| 010 | CineMad | Template | Movie recommendation UI with a clean, editorial layout |
| 011 | Tourism Website | Template | Immersive showcase of Tamil Nadu's culture and destinations |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript 6 |
| Build Tool | Vite 8 |
| Animations | GSAP 3 |
| Routing | React Router 7 |
| Icons | Lucide React, React Icons |
| Linting | ESLint + typescript-eslint |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── components/
│   ├── DesignLab.tsx       # Home page — project grid with GSAP entrance animations
│   ├── DesignLab.css
│   ├── ProjectPage.tsx     # Individual experiment detail page
│   ├── ProjectPage.css
│   ├── Preloader.tsx       # Asset preloader with animated curtain transition
│   ├── Preloader.css
│   ├── LabHeader.tsx       # Site-wide header
│   └── LabFooter.tsx       # Site-wide footer
├── data/
│   └── projects.ts         # All project metadata (title, screenshots, links, tech, highlights)
├── App.tsx                 # Root layout with BrowserRouter and route definitions
└── main.tsx                # Application entry point
```

---

## Getting Started

**Prerequisites:** Node.js 18 or later

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Adding a New Experiment

All project data lives in `src/data/projects.ts`. To add a new entry, append an object to the `projects` array:

```ts
{
  id: "your-project-id",           // Used in the URL: /project/your-project-id
  experimentNo: "EXPERIMENT_012",
  title: "Project Title",
  tagline: "A short one-liner",
  thumbnail: "/Work/YourProject/thumb.png",
  screenshots: ["/Work/YourProject/s1.png"],
  liveUrl: "https://your-live-url.vercel.app/",
  status: "Live",                  // "Live" | "In Progress" | "Archived" | "Template"
  description: "A detailed description of what the project is and how it was built.",
  techStack: [
    { name: "Three.js", icon: "🟢" },
  ],
  highlights: [
    "Key feature one",
    "Key feature two",
  ],
}
```

Place the corresponding images in the `public/Work/YourProject/` folder.

---

## Deployment

The project is deployed on [Vercel](https://design-lab-sc.vercel.app/). The `vercel.json` file includes a catch-all rewrite rule so React Router's client-side routes work correctly when accessed directly by URL.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
