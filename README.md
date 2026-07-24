# Code Canvas

The source for [codecanvas.uk](https://codecanvas.uk) — Code Canvas, the software studio site for Yisroel Krausz.

The site presents services and selected work on the home page, a full portfolio of commercial and personal projects, case studies, and an about page with profile, tech stack, CV, and contact links.

**Live site:** [https://codecanvas.uk](https://codecanvas.uk)  
**Repository:** [github.com/ymk-coder-star/code-canvas](https://github.com/ymk-coder-star/code-canvas)

## What’s included

- Home page — studio intro, services, selected work, how a project usually goes, and contact
- Portfolio page — featured and additional project galleries (client work and personal builds)
- Case studies for featured projects (movie discovery, finances manager, weather dashboard)
- About page — profile, bio, categorized tech stack, CV download, and contact links
- Lazy-loaded routes and data-driven project cards
- Scroll reveals, hero parallax, page transitions, and reduced-motion support
- WebP images, custom favicons, and Open Graph / Twitter metadata

## Built with

- [React 19](https://react.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Create React App](https://create-react-app.dev/)
- [Sharp](https://sharp.pixelplumbing.com/) for image and favicon generation
- [Vercel](https://vercel.com/) for hosting and SPA routing

## Getting started

You will need Node.js and npm installed.

```bash
git clone https://github.com/ymk-coder-star/code-canvas.git
cd code-canvas
npm install
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm start` — start the development server
- `npm run build` — create an optimized production build
- `npm test` — start the Create React App test runner
- `npm run optimize-images` — convert source images to optimized WebP assets
- `npm run generate-favicon` — generate favicon files from the monogram artwork
- `npm run inject-meta` — inject values from `src/constants/site.js` into the HTML metadata template

When updating the site’s title, description, URL, social preview, or CV path, edit `src/constants/site.js` and run `npm run inject-meta`.

## Routes

- `/` — Code Canvas home (services, selected work, approach, contact)
- `/portfolio` — full project galleries
- `/about` — profile, background, tech stack, and contact details
- `/portfolio/projects/:projectId` — project case study

## Project structure

```
code-canvas/
public/                 Static files, social preview, favicons, and CV
scripts/                Image, favicon, and metadata utilities
src/
  assets/               Project images, profile photo, and brand artwork
  components/           Shared layout, UI, and icon components
  constants/            Site-wide metadata and contact details
  data/                 Projects, case studies, services, skills, and tech stack
  hooks/                Custom React hooks
  pages/                Home, Portfolio, About, and Case Study pages
  utils/                Shared helper functions
```

Project, case study, and service content lives in `src/data`, so new work can be added without changing page layouts.

## Deployment

Configured for Vercel. `vercel.json` rewrites application routes to `index.html` so React Router URLs work when opened directly.

## License

Private project. All rights reserved.
