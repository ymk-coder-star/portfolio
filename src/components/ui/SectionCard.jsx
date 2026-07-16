export default function SectionCard({ title, children, className = '' }) {
	return (
		<section className={`glass-card-soft px-5 py-5 sm:px-6 md:px-8 md:py-6 ${className}`}>
			<h2 className="section-title-border mb-5 border-b-2 border-transparent pb-3 text-sm font-semibold uppercase tracking-widest text-text-muted">
				{title}
			</h2>
			{children}
		</section>
	);
}
