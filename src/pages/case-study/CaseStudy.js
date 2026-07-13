import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import { getCaseStudy } from '../../data/caseStudies';
import { getLinkProps } from '../../utils/linkProps';
import SkillIcon from '../../components/ui/SkillIcon';
import Reveal from '../../components/ui/Reveal';
import GithubIcon from '../../components/icons/GithubIcon';
import ExternalLinkIcon from '../../components/icons/ExternalLinkIcon';

export default function CaseStudy() {
	const { projectId } = useParams();
	const project = projects.find((entry) => entry.id === projectId);
	const caseStudy = getCaseStudy(projectId);

	if (!project || !caseStudy) {
		return <Navigate to="/" replace />;
	}

	return (
		<article className="px-4 py-8 md:px-6 md:py-12">
			<div className="mx-auto max-w-prose">
				<Reveal variant="fade">
					<Link
						to="/#featured-projects"
						className="mb-6 inline-flex items-center text-sm font-semibold text-text-muted no-underline transition-colors duration-fast hover:text-accent md:mb-8">
						&larr; Back to projects
					</Link>
				</Reveal>

				<Reveal delay={80}>
					<header className="mb-8">
						<p className="eyebrow">Case Study</p>
						<h1 className="text-gradient mb-4 text-[clamp(1.5rem,4vw,1.875rem)] font-bold tracking-tight">
							{project.title}
						</h1>
						<p className="text-base leading-relaxed text-text-muted md:text-lg">
							{caseStudy.subtitle}
						</p>
					</header>
				</Reveal>

				<Reveal delay={160} variant="scale">
					<figure className="mb-8 overflow-hidden rounded-xl border border-slate-200/90 bg-bg shadow-glow">
						<img
							src={project.src}
							alt={`Screenshot of ${project.title}`}
							width="960"
							height="540"
							decoding="async"
							className="aspect-video w-full object-cover object-top"
						/>
					</figure>
				</Reveal>

				<Reveal delay={240} variant="fade">
					<div className="mb-8 flex flex-col flex-wrap gap-3 sm:flex-row">
						<a
							href={project.href}
							className="btn-primary"
							{...getLinkProps(project.href, `Live demo of ${project.title}`)}>
							Live Demo
							<ExternalLinkIcon />
						</a>
						<a
							href={project.repo}
							className="btn-secondary w-full sm:w-auto"
							{...getLinkProps(project.repo, `Source code for ${project.title}`)}>
							<GithubIcon />
							Source Code
						</a>
					</div>
				</Reveal>

				<Reveal delay={120}>
					<div className="mb-10 border-b border-border pb-8">
						<h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
							Tech stack
						</h2>
						<ul className="flex flex-wrap gap-2" aria-label="Technologies used">
							{project.tags.map((tag) => (
								<li key={tag} className="flex">
									<SkillIcon skill={tag} />
								</li>
							))}
						</ul>
					</div>
				</Reveal>

				<div className="flex flex-col gap-8">
					{caseStudy.sections.map((section, index) => (
						<Reveal key={section.title} delay={index * 80}>
							<section>
								<h2 className="section-title-border mb-4 border-b-2 border-transparent pb-2 text-xl font-bold tracking-tight">
									{section.title}
								</h2>
								{section.body && (
									<p className="text-base leading-relaxed text-text-muted">
										{section.body}
									</p>
								)}
								{section.list && (
									<ul className="flex flex-col gap-3 pl-5 text-base leading-relaxed text-text-muted marker:text-accent">
										{section.list.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								)}
							</section>
						</Reveal>
					))}
				</div>
			</div>
		</article>
	);
}
