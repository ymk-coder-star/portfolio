import { cloneElement } from 'react';
import { skillIconMap } from '../../data/skillIcons';

const baseClasses =
	'group relative inline-flex h-[1.875rem] w-[1.875rem] shrink-0 cursor-default items-center justify-center rounded-sm border border-transparent transition-[border-color,transform] duration-fast hover:-translate-y-0.5 hover:border-border motion-reduce:hover:translate-y-0 [&>svg]:h-[1.4rem] [&>svg]:w-[1.4rem] [&>svg]:shrink-0';

export default function SkillIcon({ skill }) {
	const icon = skillIconMap[skill];

	if (!icon) {
		return null;
	}

	return (
		<span className={baseClasses} role="img" aria-label={skill}>
			{cloneElement(icon, { 'aria-hidden': true, focusable: false })}
			<span
				className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-20 -translate-x-1/2 translate-y-1.5 scale-90 whitespace-nowrap rounded-sm bg-gradient-to-br from-accent via-accent-violet to-accent px-2 py-1 text-[0.625rem] font-semibold leading-tight tracking-wide text-white opacity-0 shadow-glow transition-[opacity,visibility,transform] duration-base group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:translate-x-[-50%] motion-reduce:transform-none after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[5px] after:border-transparent after:border-t-accent"
				aria-hidden="true">
				{skill}
			</span>
		</span>
	);
}
