import { Link, useLocation } from 'react-router-dom';
import { getLinkProps } from '../../utils/linkProps';
import SkillIcon from '../../components/ui/SkillIcon';
import GithubIcon from '../../components/icons/GithubIcon';
import ExternalLinkIcon from '../../components/icons/ExternalLinkIcon';

export default function ProjectCard({ project, priority = false }) {
  const location = useLocation();
  const caseStudyState = {
    from: `${location.pathname}${location.hash}`,
  };

  return (
    <article
      className={`group/card glass-card flex h-full min-h-full flex-1 flex-col overflow-hidden transition-[transform,box-shadow,border-color] duration-base hover:-translate-y-1 hover:border-accent/20 hover:shadow-glow motion-reduce:hover:translate-y-0 ${
        project.featured ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <a
        href={project.href}
        className="block text-inherit no-underline hover:text-inherit"
        {...getLinkProps(project.href, `Live demo of ${project.title}`)}
      >
        <div className="relative aspect-video overflow-hidden bg-bg">
          <img
            src={project.src}
            alt={`Screenshot of ${project.title}`}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
            width="640"
            height="360"
            className="h-full w-full object-cover object-top transition-transform duration-base group-hover/card:scale-[1.04] motion-reduce:group-hover/card:scale-100"
          />
          <span className="absolute inset-0 flex items-center justify-center gap-2 bg-slate-900/55 text-sm font-semibold text-white opacity-0 transition-opacity duration-base group-hover/card:opacity-100">
            Live demo
            <ExternalLinkIcon />
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col gap-3 px-5 py-4 pb-5 sm:px-6 sm:py-5 sm:pb-6">
        <h3 className="text-lg font-semibold tracking-tight text-text">
          {project.title}
        </h3>
        {project.highlight && (
          <p className="text-xs font-medium leading-normal text-text-subtle">
            {project.highlight}
          </p>
        )}
        <p className="flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-1" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="flex">
              <SkillIcon skill={tag} />
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap gap-3 border-t border-border pt-4">
          <a
            href={project.href}
            className="btn-primary min-w-fit flex-1"
            {...getLinkProps(project.href, `Live demo of ${project.title}`)}
          >
            Live Demo
            <ExternalLinkIcon />
          </a>
          <a
            href={project.repo}
            className="btn-secondary min-w-fit flex-1"
            {...getLinkProps(project.repo, `Source code for ${project.title}`)}
          >
            <GithubIcon />
            Source Code
          </a>
          {project.caseStudy && (
            <Link
              to={`/portfolio/projects/${project.id}`}
              state={caseStudyState}
              className="mt-1 w-full text-center text-sm font-semibold text-accent no-underline transition-colors duration-fast hover:text-accent-hover"
            >
              Read case study &rarr;
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
