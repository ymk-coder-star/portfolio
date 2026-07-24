import {
  financesManager,
  memoryGame,
  movieApp,
  tracalorie,
  theDojo,
  weatherApp,
} from '../assets/assetsHandler';

export const projects = [
  {
    id: 'movie-app',
    title: 'Movie & TV Discovery',
    featured: true,
    caseStudy: true,
    highlight: 'Find something to watch without the fuss',
    description:
      'Search films and TV shows, check popular and trending titles, and access detailed information with ratings, genres, production info and direct links to streaming services.',
    src: movieApp,
    href: 'https://ymk-coder-star.github.io/flixx-app/',
    repo: 'https://github.com/ymk-coder-star/flixx-app',
    tags: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'finances-manager',
    title: 'Financial Operations Manager',
    featured: true,
    caseStudy: true,
    highlight: 'Manage your finances in one place',
    description:
      'Track your invoices and payments, add and edit customers and invoices and view a dashboard to track your financial performance.',
    src: financesManager,
    href: 'https://finances-manager-six.vercel.app/',
    repo: 'https://github.com/ymk-coder-star/finances-manager',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast Dashboard',
    featured: true,
    caseStudy: true,
    highlight: 'Check the forecast, save the places you use',
    description:
      'Search a city or use your location, switch units if you want, and keep favourites handy for next time.',
    src: weatherApp,
    href: 'https://weather-forecast-4c393.web.app/',
    repo: 'https://github.com/ymk-coder-star/weather-app',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'memory-game',
    title: 'Memory Matching Game',
    highlight: 'Built in a day for a 24-hour challenge',
    description: 'Match pairs, keep an eye on your turns, then reshuffle and try again.',
    src: memoryGame,
    href: 'https://ymk-coder-star.github.io/memory-game/',
    repo: 'https://github.com/ymk-coder-star/memory-game',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'tracalorie',
    title: 'Calorie & Workout Tracker',
    highlight: 'Meals, workouts, and what’s left in the day',
    description:
      'Set a daily target, log food and exercise, and watch the remaining calories update as you go.',
    src: tracalorie,
    href: 'https://ymk-coder-star.github.io/tracalorie-app/',
    repo: 'https://github.com/ymk-coder-star/tracalorie-app',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'the-dojo',
    title: 'Team Project Workspace',
    highlight: 'Tasks and updates where the whole team can see them',
    description:
      'Assign work, set deadlines, follow activity, and leave comments without everything living in separate chats.',
    src: theDojo,
    href: 'https://business-management-app-ee53c.web.app/',
    repo: 'https://github.com/ymk-coder-star/project-management-app',
    tags: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
