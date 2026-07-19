# Yisroel Krausz — Portfolio

The source code for [codecanvas.uk](https://codecanvas.uk), my personal
portfolio. It highlights selected frontend projects, client-focused development
experience, technical skills, and ways to get in touch.

## What is included

- A responsive home page with featured and additional project galleries
- Project links to live demos and source repositories
- A detailed case study for **The Dojo**, a team project workspace
- An about page with a profile, bio, categorized tech stack, CV, and contact links
- Lazy-loaded routes and reusable, data-driven project components
- Scroll reveals, hero parallax, page transitions, and reduced-motion support
- WebP images, custom favicons, and Open Graph and Twitter metadata

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
git clone https://github.com/ymk-coder-star/portfolio.git
cd portfolio
npm install
npm start
```

The development server runs at
[http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm start` — start the development server
- `npm run build` — create an optimized production build
- `npm test` — start the Create React App test runner
- `npm run optimize-images` — convert source images to optimized WebP assets
- `npm run generate-favicon` — generate favicon files from the monogram artwork
- `npm run inject-meta` — inject values from `src/constants/site.js` into the
  HTML metadata template

When updating the site's title, description, URL, social preview, or CV path,
edit `src/constants/site.js` and run `npm run inject-meta`.

## Routes

- `/` — project gallery and introduction
- `/about` — profile, background, tech stack, and contact details
- `/projects/the-dojo` — full project case study

## Project structure

```portfolio
public/                 Static files, social preview, favicons, and CV
scripts/                Image, favicon, and metadata utilities
src/
  assets/               Project images, profile photo, and brand artwork
  components/           Shared layout, UI, and icon components
  constants/            Site-wide metadata and asset paths
  data/                 Projects, case studies, skills, and tech stack
  hooks/                Custom React hooks
  pages/                Home, About, and Case Study pages
  utils/                Shared helper functions
```

Project and case-study content is managed in `src/data`, so new work can be
added without changing the page layouts.

## Deployment

The project is configured for Vercel. `vercel.json` rewrites application routes
to `index.html`, allowing React Router URLs to work when opened directly.

## License

Private portfolio project. All rights reserved.
