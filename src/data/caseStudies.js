/**
 * Extended write-ups for featured projects.
 * Keys match `project.id` in projects.js.
 */
export const caseStudies = {
  'finances-manager': {
    subtitle:
      'A signed-in dashboard for revenue, customers, and invoices — built end to end with Next.js.',
    sections: [
      {
        title: 'The goal',
        body: 'I wanted something that felt like a real product: login, live data from PostgreSQL, and invoice admin that doesn’t feel sluggish. Demo login details are in the GitHub README.',
      },
      {
        title: 'What it does',
        list: [
          'Protected dashboard routes with NextAuth credentials login',
          'Summary cards, a revenue chart, and latest invoices from PostgreSQL',
          'Searchable, paginated invoices with create, edit, and delete',
          'Customer list with paid and pending totals',
          'Server Actions and Zod for form checks and database updates',
          'Loading skeletons and streaming so sections appear as data arrives',
        ],
      },
      {
        title: 'Challenges & solutions',
        list: [
          'Keeping server data fetching separate from the reusable UI pieces',
          'Driving search and pagination from the URL so links stay shareable',
          'Refreshing the page after Server Actions so changes show up straight away',
          'Guarding the dashboard while keeping login and logout simple',
          'Suspense boundaries so each section can load on its own',
        ],
      },
      {
        title: 'Outcome',
        body: 'A full Next.js App Router build under Code Canvas — auth, database, forms, and deployment on Vercel — that I can point to as a complete stack example.',
      },
    ],
  },
  'movie-app': {
    subtitle:
      'A movie and TV browser powered by The Movie Database, with search and detail pages.',
    sections: [
      {
        title: 'The goal',
        body: 'I wanted people to go from “what’s popular?” to a proper title page quickly, on desktop and on a phone, without the layout falling apart.',
      },
      {
        title: 'What it does',
        list: [
          'Now-playing carousel plus popular movies and TV lists',
          'Search with result counts and previous / next pages',
          'Detail pages with ratings, dates, genres, summaries, and production info',
          'Posters and backdrops with a fallback when artwork is missing',
          'Loading spinner, empty-search alerts, and active nav states',
          'Swiper carousel with autoplay and breakpoints for smaller screens',
        ],
      },
      {
        title: 'Challenges & solutions',
        list: [
          'One fetch helper reused across different TMDB endpoints',
          'Pulling search terms and IDs from the URL on static HTML pages',
          'Keeping pagination in sync when people move between result pages',
          'Movie vs TV fields without copying the whole page twice',
          'Sensible defaults when dates, posters, or homepages are missing',
        ],
      },
      {
        title: 'Outcome',
        body: 'A vanilla JS Code Canvas project that pulls a big catalogue into a simple browse → search → details flow.',
      },
    ],
  },
  'weather-app': {
    subtitle:
      'Live forecasts with location search, unit toggles, and saved places — no account signup required.',
    sections: [
      {
        title: 'The goal',
        body: 'I wanted weather that was actually useful day to day: find a place fast, read the forecast, change units, and save favourites without filling out a form.',
      },
      {
        title: 'What it does',
        list: [
          'City search plus browser geolocation for local weather',
          'Current conditions, hourly view, and a seven-day outlook',
          'Controls for temperature, wind, and precipitation units',
          'Anonymous Firebase Auth with Firestore for saved places',
          'Desktop sidebar and a slide-in panel on smaller screens',
          'Zod checks on API responses before they hit the UI',
        ],
      },
      {
        title: 'Challenges & solutions',
        list: [
          'Turning Open-Meteo’s current, hourly, and daily payloads into typed state',
          'Keeping the selected day, timeline, and units in sync with React Context',
          'Holding on to the last good forecast when geolocation or the network fails',
          'Firestore rules so each anonymous user only sees their own places',
          'Mapping weather codes and day/night to the right Meteocons artwork',
        ],
      },
      {
        title: 'Outcome',
        body: 'A React and TypeScript Code Canvas app in production, with APIs, validation, Firebase, and careful error handling in one place.',
      },
    ],
  },
};

export function getCaseStudy(projectId) {
  return caseStudies[projectId] || null;
}
