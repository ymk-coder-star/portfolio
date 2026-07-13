import SectionCard from '../../components/ui/SectionCard';

export default function Bio() {
	return (
		<SectionCard title="About">
			<div className="flex flex-col gap-4">
				<p className="text-lg leading-relaxed text-text">
					Hi — I&apos;m a self-taught frontend developer who learns best by
					building. I work mainly with React and JavaScript, and I like taking an
					idea from early sketch to something deployed that people can actually
					use.
				</p>
				<p className="text-base leading-relaxed text-text-muted">
					What keeps me interested is the craft side of frontend: semantic HTML,
					responsive layouts, and interfaces that feel simple to navigate. I aim
					for accessible patterns where I can — readable markup, sensible focus
					states — and enjoy figuring out how state, routing, and APIs fit
					together.
				</p>
				<p className="text-base leading-relaxed text-text-muted">
					Right now I&apos;m focused on growing my portfolio, sharpening my skills
					on real projects, and finding a junior role where I can learn alongside a
					team. If you&apos;d like to connect, I&apos;m always happy to chat about
					work, collabs, or what you&apos;re building.
				</p>
			</div>
		</SectionCard>
	);
}
