import './TechStackList.css';

export default function TechStackList() {
	const techStack = [
		'React',
		'JavaScript',
		'HTML',
		'CSS',
		'Firebase',
		'Git',
		'Github',
		'REST APIs',
		'Tailwind',
	];

	return (
		<div className="tech-stack-section">
			<h3>Tech Stack</h3>
			<div className="tech-stack">
				{techStack.map((item) => (
					<span key={item}>{item}</span>
				))}
			</div>
		</div>
	);
}
