/**
 * Extended write-ups for featured projects.
 * Keys match `project.id` in projects.js.
 */
export const caseStudies = {
  'movie-app': {
    subtitle:
      'A responsive movie and TV discovery experience powered by live catalogue data from The Movie Database.',
    sections: [
      {
        title: 'The goal',
        body: 'I wanted to build a focused entertainment browser that helps users move quickly from discovering popular titles to finding the details they need. The interface needed to support both movies and TV shows while remaining straightforward across desktop and mobile screens.',
      },
      {
        title: 'What I built',
        list: [
          'Now-playing carousel and separate popular movie and TV views',
          'Movie and TV search with result counts and paginated navigation',
          'Dedicated detail pages with ratings, release information, genres, summaries, and production data',
          'Dynamic poster and backdrop imagery with fallbacks for missing artwork',
          'Responsive layouts, loading indicators, validation messages, and active navigation states',
          'Swiper-powered carousel with autoplay and responsive breakpoints',
        ],
      },
      {
        title: 'Challenges & solutions',
        list: [
          'Reusing one API layer for multiple TMDB endpoints while keeping each page’s rendering logic focused',
          'Reading search terms, media types, and title IDs from URLs so static pages could display dynamic content',
          'Maintaining pagination state and rebuilding search results as users moved between pages',
          'Handling differences between movie and TV response fields without duplicating the whole interface',
          'Providing sensible fallbacks when dates, posters, homepages, or other catalogue details were unavailable',
        ],
      },
      {
        title: 'Outcome',
        body: 'The finished application demonstrates how a multi-page vanilla JavaScript interface can consume a substantial third-party API and turn its data into a clear discovery flow. It strengthened my experience with asynchronous requests, URL-driven state, dynamic DOM rendering, responsive CSS, and reusable data-handling functions.',
      },
    ],
  },
  'weather-app': {
    subtitle:
      'A responsive weather dashboard combining live forecast data, location-aware search, flexible units, and private saved places.',
    sections: [
      {
        title: 'The goal',
        body: 'I wanted to turn raw weather data into a useful everyday dashboard: fast location search, forecasts that are easy to scan, and favourite places that remain available without asking users to complete a registration form.',
      },
      {
        title: 'What I built',
        list: [
          'Worldwide location search plus browser geolocation for local weather',
          'Current conditions, an hourly timeline, and an interactive seven-day forecast',
          'Temperature, wind-speed, and precipitation unit controls',
          'Anonymous Firebase Authentication and Firestore-backed saved places',
          'Responsive desktop sidebar and mobile slide-in panel',
          'Runtime API response validation with Zod',
        ],
      },
      {
        title: 'Challenges & solutions',
        list: [
          'Normalising current, hourly, and daily Open-Meteo responses into typed application state',
          'Keeping the selected day, forecast timeline, and unit preferences in sync through React Context',
          'Handling denied geolocation and failed network requests without discarding the last successful forecast',
          'Protecting saved locations with Firestore rules scoped to each anonymous user ID',
          'Mapping weather codes and day/night state to clear, animated Meteocons artwork',
        ],
      },
      {
        title: 'Outcome',
        body: 'The finished dashboard is a production-deployed React and TypeScript application that brings together third-party APIs, runtime validation, persistent cloud data, responsive interface design, and resilient error handling in a focused user experience.',
      },
    ],
  },
  'the-dojo': {
    subtitle:
      'A shared project workspace designed to keep tasks, responsibilities, deadlines, and team communication in one organised place.',
    sections: [
      {
        title: 'The goal',
        body: 'I wanted a practical app where users could manage projects and tasks in one workspace — with clear navigation, filtered views, and data that persists between visits. It needed to feel like a real product, not just a tutorial follow-along.',
      },
      {
        title: 'What I built',
        list: [
          'Multi-route React app with dedicated project and task views',
          'Firebase / Firestore integration for reading and writing workspace data',
          'Filtered task lists using React Select',
          'Date handling with date-fns for deadlines and activity timestamps',
          'Responsive UI built from reusable components',
        ],
      },
      {
        title: 'Challenges & solutions',
        list: [
          'Structuring Firestore data and wiring it cleanly into React state',
          'Keeping forms, filters, and routed views in sync without overcomplicating the UI',
          'Breaking the interface into smaller components as features grew',
          'Deploying a production build to Firebase Hosting',
        ],
      },
      {
        title: 'Outcome',
        body: 'The Dojo brought together routing, backend integration, and UI craft in one deployed full-stack application. It strengthened my experience with Firebase and with structuring a React codebase for a substantial product.',
      },
    ],
  },
};

export function getCaseStudy(projectId) {
  return caseStudies[projectId] || null;
}
