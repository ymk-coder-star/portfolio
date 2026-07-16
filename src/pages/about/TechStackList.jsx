import { learningTechStack, projectTechStack } from '../../data/techStack';
import SectionCard from '../../components/ui/SectionCard';

const pillBase =
	'rounded-full border px-3 py-1 text-xs font-medium transition-[background-color,border-color,box-shadow] duration-fast';

const pillProject =
	`${pillBase} border-accent/10 bg-accent-soft text-accent hover:border-accent/20 hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.12)]`;

const pillLearning =
	`${pillBase} border-border bg-bg text-text-muted hover:border-border-strong hover:bg-surface hover:text-text`;

function TechStackGroups({ groups, learning = false }) {
	const pillClass = learning ? pillLearning : pillProject;

	return (
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
			{groups.map((group) => (
				<div key={group.category} className="flex flex-col gap-3">
					<h4 className="m-0 text-xs font-semibold uppercase tracking-widest text-text-subtle">
						{group.category}
					</h4>
					<ul className="flex flex-wrap gap-2">
						{group.skills.map((skill) => (
							<li key={skill} className={pillClass}>
								{skill}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default function TechStackList() {
	return (
		<SectionCard title="Tech Stack">
			<p className="mb-6 text-sm leading-relaxed text-text-muted">
				Skills I&apos;ve used in deployed projects, plus what I&apos;m building
				with next.
			</p>

			<div>
				<h3 className="mb-5 text-sm font-semibold text-text">Used in projects</h3>
				<TechStackGroups groups={projectTechStack} />
			</div>

			<div className="mt-8 border-t border-border pt-8">
				<h3 className="mb-5 text-sm font-semibold text-text">Currently learning</h3>
				<TechStackGroups groups={learningTechStack} learning />
			</div>
		</SectionCard>
	);
}
