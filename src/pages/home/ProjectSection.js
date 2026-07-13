import Reveal from '../../components/ui/Reveal';
import ProjectCard from './ProjectCard';

export default function ProjectSection({
	id,
	title,
	subtitle,
	projects,
	priorityFirst = false,
	className = '',
}) {
	return (
		<section
			id={id}
			className={`scroll-mt-[calc(4rem+1rem)] ${className}`}
			aria-labelledby={`${id}-heading`}>
			<Reveal as="header" className="mb-8 text-center md:mb-10" variant="fade">
				<h2
					id={`${id}-heading`}
					className="section-ornament mb-3 text-[clamp(1.25rem,3vw,1.5rem)] font-bold tracking-tight">
					{title}
				</h2>
				<p className="mx-auto max-w-copy text-base leading-relaxed text-text-muted">
					{subtitle}
				</p>
			</Reveal>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] sm:gap-8">
				{projects.map((project, index) => (
					<Reveal
						key={project.id}
						className="h-full"
						variant="scale"
						delay={Math.min(index * 90, 360)}>
						<ProjectCard
							project={project}
							priority={priorityFirst && index === 0}
						/>
					</Reveal>
				))}
			</div>
		</section>
	);
}
