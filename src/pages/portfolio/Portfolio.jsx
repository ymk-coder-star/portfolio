import { featuredProjects, moreProjects } from '../../data/projects';
import Reveal from '../../components/ui/Reveal';
import PageHeader from '../../components/ui/PageHeader';
import { usePageTitle } from '../../hooks/usePageTitle';
import ProjectSection from '../home/ProjectSection';

export default function Portfolio() {
  usePageTitle('Portfolio');

  return (
    <div className="px-4 py-8 md:px-6 md:py-12">
      <Reveal as="div" variant="fade">
        <PageHeader
          title="Portfolio"
          subtitle="Some of the projects I've worked on, including full-stack applications, APIs, databases and integrated systems."
          gradient
        />
      </Reveal>

      <div className="mx-auto max-w-site">
        <ProjectSection
          id="featured-projects"
          title="Featured"
          subtitle="Larger builds with more going on under the hood."
          projects={featuredProjects}
          priorityFirst
        />
        <ProjectSection
          id="more-projects"
          title="More projects"
          subtitle="Smaller apps and experiments from along the way."
          projects={moreProjects}
          className="relative mt-12 border-t-0 pt-12 before:absolute before:left-1/2 before:top-0 before:h-px before:w-[min(24rem,80%)] before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-accent/35 before:to-accent-violet/35 md:mt-16 md:pt-16"
        />
      </div>
    </div>
  );
}
