import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../../data/projects';
import { services, approachSteps } from '../../data/services';
import { contactMailto, socialLinks, siteTitle } from '../../constants/site';
import { getLinkProps } from '../../utils/linkProps';
import Reveal from '../../components/ui/Reveal';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { usePageTitle } from '../../hooks/usePageTitle';
import ProjectSection from './ProjectSection';

const selectedWork = featuredProjects.slice(0, 3);

export default function Home() {
  const glowRef = useRef(null);
  useHeroParallax(glowRef);
  usePageTitle(siteTitle, { absolute: true });

  return (
    <div className="px-4 py-8 md:px-6 md:py-12">
      <section
        className="relative mx-auto mb-16 max-w-site text-center md:mb-20"
        aria-labelledby="hero-title"
      >
        <div
          ref={glowRef}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(20rem,50vw)] w-[min(36rem,90vw)] -translate-x-1/2 rounded-full blur-[2px] will-change-transform"
          style={{
            transform: 'translate(-50%, calc(-55% + var(--parallax-y, 0px)))',
            background:
              'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.14) 0%, rgba(139, 92, 246, 0.06) 45%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <Reveal immediate delay={0} variant="fade">
          <p className="eyebrow">Software by Yisroel Krausz</p>
        </Reveal>
        <Reveal immediate delay={100}>
          <h1
            id="hero-title"
            className="text-gradient mb-4 text-[clamp(2rem,6vw,3rem)] font-bold tracking-tight"
          >
            Code Canvas
          </h1>
        </Reveal>
        <Reveal immediate delay={200} variant="fade">
          <p className="mx-auto mb-6 max-w-copy text-base leading-relaxed text-text-muted md:mb-8 md:text-lg">
            I help people and businesses get the digital solutions they need — websites,
            apps, and simple systems that make day-to-day work easier.
          </p>
        </Reveal>
        <Reveal immediate delay={320} variant="fade">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/portfolio" className="btn-primary px-5">
              View my work
            </Link>
            <a
              href={contactMailto}
              className="btn-secondary"
              {...getLinkProps(contactMailto, 'Email Yisroel at Code Canvas')}
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </section>

      <section
        id="services"
        className="mx-auto mb-16 max-w-site scroll-mt-[calc(4rem+1rem)] md:mb-20"
        aria-labelledby="services-heading"
      >
        <Reveal as="header" className="mb-8 text-center md:mb-10" variant="fade">
          <h2
            id="services-heading"
            className="section-ornament mb-3 text-[clamp(1.25rem,3vw,1.5rem)] font-bold tracking-tight"
          >
            What I can help with
          </h2>
          <p className="mx-auto max-w-copy text-base leading-relaxed text-text-muted">
            A few common things people ask me to build.
          </p>
        </Reveal>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.id} as="li" delay={index * 80} variant="scale">
              <article className="glass-card flex h-full flex-col gap-3 px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="text-lg font-semibold tracking-tight text-text">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <div className="mx-auto mb-16 max-w-site md:mb-20">
        <ProjectSection
          id="selected-work"
          title="Selected work"
          subtitle="A few recent projects. There’s more on the portfolio page and on my GitHub profile."
          projects={selectedWork}
          priorityFirst
        />
        <Reveal className="mt-8 text-center" delay={200} variant="fade">
          <Link
            to="/portfolio"
            className="inline-flex text-sm font-semibold text-accent no-underline transition-colors duration-fast hover:text-accent-hover"
          >
            Browse the full portfolio &rarr;
          </Link>
        </Reveal>
      </div>

      <section
        id="approach"
        className="mx-auto mb-16 max-w-site scroll-mt-[calc(4rem+1rem)] md:mb-20"
        aria-labelledby="approach-heading"
      >
        <Reveal as="header" className="mb-8 text-center md:mb-10" variant="fade">
          <h2
            id="approach-heading"
            className="section-ornament mb-3 text-[clamp(1.25rem,3vw,1.5rem)] font-bold tracking-tight"
          >
            How we’ll work together
          </h2>
          <p className="mx-auto max-w-copy text-base leading-relaxed text-text-muted">
            Simple steps from first contact to finished product.
          </p>
        </Reveal>
        <ol className="mx-auto max-w-prose">
          {approachSteps.map((step, index) => {
            const isLast = index === approachSteps.length - 1;
            return (
              <Reveal key={step.id} as="li" delay={index * 80} variant="fade">
                <div className="grid grid-cols-[2rem_1fr] gap-x-4 sm:grid-cols-[2.5rem_1fr] sm:gap-x-5">
                  <div className="flex h-full flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-soft text-sm font-semibold text-accent">
                      {index + 1}
                    </span>
                    {!isLast && (
                      <span
                        className="mt-2 min-h-[1.5rem] w-px flex-1 bg-border"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className={isLast ? 'pb-0' : 'pb-8 sm:pb-10'}>
                    <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-text">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-site scroll-mt-[calc(4rem+1rem)]"
        aria-labelledby="contact-heading"
      >
        <Reveal
          className="glass-card mx-auto max-w-copy px-6 py-8 text-center shadow-md sm:px-10 sm:py-10"
          variant="scale"
        >
          <h2
            id="contact-heading"
            className="mb-3 text-[clamp(1.25rem,3vw,1.5rem)] font-bold tracking-tight text-text"
          >
            Got an idea? Let’s talk
          </h2>
          <p className="mb-6 text-base leading-relaxed text-text-muted">
            Let's talk about your problem and we'll come up with a solution together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={contactMailto}
              className="btn-primary px-5"
              {...getLinkProps(contactMailto, 'Email Yisroel at Code Canvas')}
            >
              Email me
            </a>
            <Link to="/about" className="btn-secondary">
              About me
            </Link>
            <a
              href={socialLinks.github}
              className="btn-secondary"
              {...getLinkProps(socialLinks.github, 'View GitHub profile')}
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
