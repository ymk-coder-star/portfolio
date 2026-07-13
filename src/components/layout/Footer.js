import { resumeFilename, resumeUrl } from '../../constants/site';
import { getLinkProps } from '../../utils/linkProps';

const footerLinks = [
	{
		id: 'resume',
		label: 'Resume',
		href: resumeUrl,
		linkLabel: 'Download CV',
		download: resumeFilename,
	},
	{
		id: 'github',
		label: 'GitHub',
		href: 'https://github.com/ymk-coder-star',
		linkLabel: 'GitHub profile',
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/yisroel-krausz/',
		linkLabel: 'LinkedIn profile',
	},
	{
		id: 'email',
		label: 'Email',
		href: 'mailto:ymk613.dev@gmail.com',
		linkLabel: 'Send email to Yisroel Krausz',
	},
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-auto border-t border-slate-200/80 bg-white/70 backdrop-blur-md">
			<div className="mx-auto flex max-w-site flex-col items-center gap-4 px-4 py-5 text-center sm:flex-row sm:justify-between sm:px-6 sm:py-6 sm:text-left">
				<p className="m-0 text-sm text-text-muted">&copy; {year} Yisroel Krausz</p>
				<nav className="flex w-full justify-center sm:w-auto sm:flex-1 sm:justify-center" aria-label="Footer">
					<ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
						{footerLinks.map((link) => (
							<li key={link.id}>
								<a
									href={link.href}
									className="text-sm font-medium text-text-muted no-underline transition-colors duration-fast hover:text-accent"
									download={link.download}
									{...getLinkProps(link.href, link.linkLabel)}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<p className="m-0 text-sm text-text-muted">Built with React & Tailwind</p>
			</div>
		</footer>
	);
}
