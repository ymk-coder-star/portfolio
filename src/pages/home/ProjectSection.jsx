import { useEffect, useState } from 'react';
import Reveal from '../../components/ui/Reveal';
import ProjectCard from './ProjectCard';

const cardShellClass =
  'flex h-full w-[min(85vw,20rem)] shrink-0 snap-center flex-col sm:w-auto sm:min-w-0 sm:snap-align-none';

export default function ProjectSection({
  id,
  title,
  subtitle,
  projects,
  priorityFirst = false,
  className = '',
}) {
  const [useReveal, setUseReveal] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 640px)');
    const sync = () => setUseReveal(media.matches);

    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <section
      id={id}
      className={`scroll-mt-[calc(4rem+1rem)] ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <Reveal as="header" className="mb-8 text-center md:mb-10" variant="fade">
        <h2
          id={`${id}-heading`}
          className="section-ornament mb-3 text-[clamp(1.25rem,3vw,1.5rem)] font-bold tracking-tight"
        >
          {title}
        </h2>
        <p className="mx-auto max-w-copy text-base leading-relaxed text-text-muted">
          {subtitle}
        </p>
      </Reveal>
      {/* Mobile: horizontal snap-scroll grid (equal card heights). sm+: 2 cols, lg+: 3 cols. */}
      <div className="-mx-4 grid auto-cols-[min(85vw,20rem)] grid-flow-col items-stretch gap-4 overflow-x-auto overscroll-x-contain scroll-auto snap-x snap-proximity touch-pan-x px-[calc(50%-min(42.5vw,10rem))] pb-2 [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 sm:gap-8 sm:snap-none sm:overflow-visible sm:overscroll-auto sm:px-0 sm:pb-0 sm:touch-auto lg:grid-cols-3">
        {projects.map((project, index) => {
          const card = (
            <ProjectCard project={project} priority={priorityFirst && index === 0} />
          );

          if (!useReveal) {
            return (
              <div key={project.id} className={cardShellClass}>
                {card}
              </div>
            );
          }

          return (
            <Reveal
              key={project.id}
              className={cardShellClass}
              variant="scale"
              delay={Math.min(index * 90, 360)}
            >
              {card}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
