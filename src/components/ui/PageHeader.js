export default function PageHeader({ title, subtitle, gradient = false, className = '' }) {
	return (
		<header className={`mb-8 text-center md:mb-12 ${className}`}>
			<h1
				className={`mb-3 text-[clamp(1.5rem,4vw,2.25rem)] font-bold tracking-tight ${
					gradient ? 'text-gradient' : 'text-text'
				}`}>
				{title}
			</h1>
			{subtitle && (
				<p className="mx-auto max-w-copy text-lg leading-relaxed text-text-muted">
					{subtitle}
				</p>
			)}
		</header>
	);
}
