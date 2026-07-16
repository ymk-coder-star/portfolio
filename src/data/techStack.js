/**
 * Tech stack for the About page — split by evidence level.
 * Move skills from `learningTechStack` → `projectTechStack` once they ship in a repo.
 * @see https://github.com/ymk-coder-star
 */
export const projectTechStack = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'React Router', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Data',
    skills: ['Firebase', 'REST APIs'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'npm'],
  },
];

export const learningTechStack = [
  {
    category: 'Languages',
    skills: ['TypeScript'],
  },
  {
    category: 'Frontend',
    skills: ['Next.js'],
  },
  {
    category: 'Backend & Data',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Zod'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Vitest'],
  },
];

/** Flat sorted list of every unique skill (for reference / search). */
export const allSkills = [
  ...new Set([
    ...projectTechStack.flatMap((group) => group.skills),
    ...learningTechStack.flatMap((group) => group.skills),
  ]),
].sort();
