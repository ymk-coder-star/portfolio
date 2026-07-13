import { getSkillIcon } from '../../data/skillIcons';

const DETAILED_ICONS = new Set([
	'date-fns',
	'Create React App',
	'TMDB API',
	'GitHub Pages',
	'Font Awesome',
	'React Router',
]);

const baseClasses =
	'group relative inline-flex h-[1.875rem] w-[1.875rem] shrink-0 cursor-default items-center justify-center rounded-sm border border-transparent outline-none transition-[border-color,transform] duration-fast hover:-translate-y-0.5 hover:border-border focus-visible:-translate-y-0.5 focus-visible:border-border focus-visible:shadow-[0_0_0_2px_#fff,0_0_0_4px_#6366f1] motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0';

const tooltipClasses =
	'pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-20 -translate-x-1/2 translate-y-1.5 scale-90 whitespace-nowrap rounded-sm bg-gradient-to-br from-accent via-accent-violet to-accent px-2 py-1 text-[0.625rem] font-semibold leading-tight tracking-wide text-white opacity-0 shadow-glow transition-[opacity,visibility,transform] duration-base group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:translate-x-[-50%] motion-reduce:transform-none after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[5px] after:border-transparent after:border-t-accent';

function SkillTooltip({ label }) {
	return (
		<span className={tooltipClasses} role="tooltip">
			{label}
		</span>
	);
}

function SkillIconBase({ skill, className, style, children }) {
	return (
		<span className={className} aria-label={skill} tabIndex={0} style={style}>
			{children}
			<SkillTooltip label={skill} />
		</span>
	);
}

export default function SkillIcon({ skill }) {
	const entry = getSkillIcon(skill);

	if (!entry) {
		return (
			<SkillIconBase
				skill={skill}
				className={`${baseClasses} border-border bg-bg text-[0.625rem] font-semibold text-text-muted`}>
				{skill.slice(0, 2)}
			</SkillIconBase>
		);
	}

	if (entry.label) {
		return (
			<SkillIconBase
				skill={skill}
				className={`${baseClasses} h-[1.875rem] w-auto min-w-8 border-border px-1 text-[0.625rem] font-bold uppercase tracking-wide`}
				style={{
					backgroundColor: entry.bg,
					color: entry.color,
				}}>
				{entry.label}
			</SkillIconBase>
		);
	}

	if (entry.paths) {
		return (
			<SkillIconBase skill={skill} className={`${baseClasses} rounded-none`}>
				<svg
					className="h-[1.4rem] w-[1.4rem] shrink-0 rounded-none"
					viewBox={entry.viewBox || '0 0 24 24'}
					aria-hidden="true">
					{entry.paths.map((path) => (
						<path key={path.d} d={path.d} fill={path.fill} />
					))}
				</svg>
			</SkillIconBase>
		);
	}

	const { Icon, color, bg } = entry;
	const detailed = DETAILED_ICONS.has(skill);
	const svgSize = detailed ? 'h-6 w-6' : 'h-[1.4rem] w-[1.4rem]';

	return (
		<SkillIconBase
			skill={skill}
			className={`${baseClasses}${bg ? ' hover:border-transparent focus-visible:border-transparent' : ''}`}
			style={bg ? { backgroundColor: bg } : undefined}>
			<Icon className={`${svgSize} shrink-0`} color={color} aria-hidden="true" />
		</SkillIconBase>
	);
}
