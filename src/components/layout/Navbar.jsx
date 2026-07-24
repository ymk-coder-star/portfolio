import { NavLink } from 'react-router-dom';
import { getLinkProps } from '../../utils/linkProps';
import { socialLinks } from '../../constants/site';
import Monogram from '../ui/Monogram';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import GithubIcon from '../icons/GithubIcon';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio', end: true },
  { to: '/about', label: 'About', end: false },
];

const linkBase =
  'relative inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-text-muted no-underline transition-colors duration-fast hover:bg-accent-soft hover:text-text';

const linkActive =
  'bg-accent-soft font-semibold text-accent after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-accent';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] h-navbar w-full animate-nav-enter border-b border-slate-200/80 bg-white/70 shadow-[0_1px_0_rgba(99,102,241,0.06)] backdrop-blur-xl motion-reduce:animate-none after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-accent/45 after:to-transparent">
      <div className="mx-auto flex h-full max-w-site items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
        <NavLink
          to="/"
          className="-ml-2 flex items-center gap-2.5 rounded-lg p-1 px-2 no-underline transition-colors duration-fast hover:bg-accent-soft sm:gap-3"
          aria-label="Code Canvas — Home"
        >
          <Monogram size="md" />
          <span className="text-sm font-bold tracking-tight text-text sm:text-base">
            Code Canvas
          </span>
        </NavLink>

        <nav className="shrink-0" aria-label="Main navigation">
          <ul className="flex items-center gap-1 max-[380px]:gap-0">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `${linkBase}${isActive ? ` ${linkActive}` : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className={`${linkBase} group ml-0 border border-border bg-surface px-3 hover:border-border-strong hover:text-accent hover:shadow-sm sm:ml-2 sm:px-4`}
                href={socialLinks.github}
                {...getLinkProps(socialLinks.github, 'View my profile on GitHub')}
              >
                <GithubIcon className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">GitHub</span>
                <ExternalLinkIcon className="hidden h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity duration-fast group-hover:opacity-100 sm:block" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
