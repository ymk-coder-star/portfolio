import { getLinkProps } from '../../utils/linkProps';
import SectionCard from '../../components/ui/SectionCard';
import GithubIcon from '../../components/icons/GithubIcon';

const links = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/ymk-coder-star',
    linkLabel: 'GitHub profile',
    icon: <GithubIcon className="h-5 w-5 shrink-0" />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yisroel-krausz/',
    linkLabel: 'LinkedIn profile',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.062 2.062 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:ymk613.dev@gmail.com',
    linkLabel: 'Send email to Yisroel Krausz',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function LinksList() {
  return (
    <SectionCard title="Get in Touch">
      <p className="mb-5 text-sm leading-relaxed text-text-muted">
        Open to software development opportunities, freelance client work, and
        collaboration.
      </p>
      <ul className="flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-bg px-5 py-3 text-sm font-medium text-text no-underline transition-[border-color,background-color,box-shadow,transform] duration-fast hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent-soft hover:text-accent hover:shadow-glow motion-reduce:hover:translate-y-0"
              {...getLinkProps(link.href, link.linkLabel)}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                {link.icon}
              </span>
              <span className="leading-none">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
