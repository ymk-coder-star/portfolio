import profilePic from '../../assets/profile-pic.webp';
import { resumeFilename, resumeUrl } from '../../constants/site';
import Reveal from '../../components/ui/Reveal';
import PageHeader from '../../components/ui/PageHeader';
import Bio from './Bio';
import TechStackList from './TechStackList';
import LinksList from './LinksList';

export default function About() {
	return (
		<div className="px-4 py-8 md:px-6 md:py-12">
			<Reveal as="div" variant="fade">
				<PageHeader
					title="About Me"
					subtitle="Junior frontend developer building with React and JavaScript — focused on clean UI, maintainable code, and shipping real projects."
					gradient
				/>
			</Reveal>

			<div className="mx-auto grid max-w-site grid-cols-1 items-start gap-8 md:grid-cols-[280px_1fr] md:gap-10">
				<Reveal
					as="aside"
					className="glass-card mx-auto flex w-full max-w-xs flex-col items-center gap-4 p-6 text-center shadow-md md:sticky md:top-[calc(4rem+1.5rem)] md:mx-0"
					variant="scale"
					delay={100}>
					<div className="aspect-square w-full overflow-hidden rounded-xl border-[3px] border-accent-soft shadow-md ring-1 ring-border">
						<img
							src={profilePic}
							alt="Yisroel Krausz"
							width="320"
							height="320"
							decoding="async"
							className="h-full w-full object-cover"
						/>
					</div>
					<h2 className="text-xl font-bold tracking-tight text-text">Yisroel Krausz</h2>
					<p className="text-base font-semibold text-text">Junior Frontend Developer</p>
					<div className="flex flex-col gap-1">
						<p className="text-sm leading-relaxed text-text-muted">Tyne and Wear, England</p>
						<p className="text-sm leading-relaxed text-text-muted">
							Self-taught · Open to junior roles (remote/hybrid)
						</p>
					</div>
					<a
						href={resumeUrl}
						className="btn-primary mt-2 w-full"
						download={resumeFilename}
						aria-label="Download CV">
						Download CV
					</a>
				</Reveal>

				<div className="flex min-w-0 flex-col gap-6">
					<Reveal delay={0}>
						<Bio />
					</Reveal>
					<Reveal delay={100}>
						<TechStackList />
					</Reveal>
					<Reveal delay={200}>
						<LinksList />
					</Reveal>
				</div>
			</div>
		</div>
	);
}
