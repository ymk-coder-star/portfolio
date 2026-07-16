import { useEffect, useState } from 'react';
import Reveal from '../../components/ui/Reveal';
import ProjectCard from './ProjectCard';

const cardShellClass =
	'h-full w-[min(85vw,20rem)] shrink-0 snap-center sm:w-auto sm:min-w-0 sm:snap-align-none';

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
			{/* Mobile: horizontal snap-scroll. sm+: responsive grid. */}
			<div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50%-min(42.5vw,10rem))] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0">
				{projects.map((project, index) => {
					const card = (
						<ProjectCard
							project={project}
							priority={priorityFirst && index === 0}
						/>
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
							delay={Math.min(index * 90, 360)}>
							{card}
						</Reveal>
					);
				})}
			</div>
		</section>
	);
}
