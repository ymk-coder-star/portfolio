import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, moreProjects } from '../../data/projects';
import { getLinkProps } from '../../utils/linkProps';
import Reveal from '../../components/ui/Reveal';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import ProjectSection from './ProjectSection';

export default function Home() {
	const glowRef = useRef(null);
	useHeroParallax(glowRef);

	return (
		<div className="px-4 py-8 md:px-6 md:py-12">
			<section className="relative mx-auto mb-12 max-w-site text-center md:mb-16" aria-labelledby="hero-title">
				<div
					ref={glowRef}
					className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(20rem,50vw)] w-[min(36rem,90vw)] -translate-x-1/2 rounded-full blur-[2px] will-change-transform"
					style={{
						transform: 'translate(-50%, calc(-55% + var(--parallax-y, 0px)))',
						background:
							'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.14) 0%, rgba(139, 92, 246, 0.06) 45%, transparent 70%)',
					}}
					aria-hidden="true"
				/>
				<Reveal immediate delay={0} variant="fade">
					<p className="eyebrow">Junior Frontend Developer</p>
				</Reveal>
				<Reveal immediate delay={120}>
					<h1 id="hero-title" className="text-gradient mb-4 text-[clamp(1.875rem,5vw,2.25rem)] font-bold tracking-tight">
						Yisroel Krausz
					</h1>
				</Reveal>
				<Reveal immediate delay={240} variant="fade">
					<p className="mx-auto mb-6 max-w-copy text-base leading-relaxed text-text-muted md:mb-8 md:text-lg">
						I build responsive, accessible web apps with React and JavaScript. Open
						to junior roles — remote or hybrid.
					</p>
				</Reveal>
				<Reveal immediate delay={360} variant="fade">
					<div className="flex flex-wrap items-center justify-center gap-3">
						<a href="#featured-projects" className="btn-primary px-5">
							View projects
						</a>
						<Link to="/about" className="btn-secondary">
							About me
						</Link>
						<a
							href="https://github.com/ymk-coder-star"
							className="btn-secondary"
							{...getLinkProps(
								'https://github.com/ymk-coder-star',
								'View GitHub profile'
							)}>
							GitHub
						</a>
					</div>
				</Reveal>
			</section>

			<div className="mx-auto max-w-site">
				<ProjectSection
					id="featured-projects"
					title="Featured"
					subtitle="Full-stack React apps and API-driven builds I'm most proud of."
					projects={featuredProjects}
					priorityFirst
				/>
				<ProjectSection
					id="more-projects"
					title="More Projects"
					subtitle="Earlier vanilla JS and React exercises that built my foundations."
					projects={moreProjects}
					className="relative mt-12 border-t-0 pt-12 before:absolute before:left-1/2 before:top-0 before:h-px before:w-[min(24rem,80%)] before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-accent/35 before:to-accent-violet/35 md:mt-16 md:pt-16"
				/>
			</div>
		</div>
	);
}
