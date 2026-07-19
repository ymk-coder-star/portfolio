import {
  memoryGame,
  movieApp,
  myMoney,
  tracalorie,
  theDojo,
} from '../assets/assetsHandler';

export const projects = [
  {
    id: 'the-dojo',
    title: 'Team Project Workspace',
    featured: true,
    caseStudy: true,
    highlight: 'A shared workspace that keeps project teams organised and aligned',
    description:
      'The Dojo brings projects, task assignments, deadlines, team activity, and discussions into one place, helping users coordinate work without losing track of responsibilities or progress.',
    src: theDojo,
    href: 'https://business-management-app-ee53c.web.app/',
    repo: 'https://github.com/ymk-coder-star/project-management-app',
    tags: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'mymoney',
    title: 'Personal Finance Tracker',
    featured: true,
    highlight: 'A personal finance dashboard for understanding everyday spending',
    description:
      'myMoney gives each user a private account where they can record income and expenses, review their transaction history, and maintain a clearer picture of where their money is going.',
    src: myMoney,
    href: 'https://mymoney-88a40.web.app/',
    repo: 'https://github.com/ymk-coder-star/mymoney-app',
    tags: ['React', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 'movie-app',
    title: 'Movie & TV Discovery',
    featured: true,
    highlight: 'A simple way to discover films and TV shows worth watching',
    description:
      'Flixx helps viewers explore now-playing and popular titles, search a large movie and TV catalogue, and open detailed pages with the information needed to choose what to watch next.',
    src: movieApp,
    href: 'https://ymk-coder-star.github.io/flixx-app/',
    repo: 'https://github.com/ymk-coder-star/flixx-app',
    tags: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    id: 'tracalorie',
    title: 'Calorie & Workout Tracker',
    highlight: 'A daily calorie tracker that balances food against exercise',
    description:
      'Tracalorie lets users set a daily calorie limit, log meals and workouts, and immediately see calories consumed, burned, and remaining—making daily energy goals easier to manage.',
    src: tracalorie,
    href: 'https://ymk-coder-star.github.io/tracalorie-app/',
    repo: 'https://github.com/ymk-coder-star/tracalorie-app',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'memory-game',
    title: 'Memory Matching Game',
    highlight: '24 hour challenge - build a game in a day',
    description:
      'Memory Game presents a freshly shuffled deck on every round, tracks the player’s turns, locks in matching pairs, and makes it easy to restart and improve on the previous score.',
    src: memoryGame,
    href: 'https://ymk-coder-star.github.io/memory-game/',
    repo: 'https://github.com/ymk-coder-star/memory-game',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
