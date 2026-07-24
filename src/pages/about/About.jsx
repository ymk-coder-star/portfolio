import Reveal from '../../components/ui/Reveal';
import PageHeader from '../../components/ui/PageHeader';
import { usePageTitle } from '../../hooks/usePageTitle';
import Bio from './Bio';
import TechStackList from './TechStackList';
import LinksList from './LinksList';
import Profile from './Profile';

export default function About() {
  usePageTitle('About');

  return (
    <div className="px-4 py-8 md:px-6 md:py-12">
      <Reveal as="div" variant="fade">
        <PageHeader
          title="About"
          subtitle="I’m Yisroel Krausz. Code Canvas is my platform where I build and ship web apps, tools, and software solutions for businesses and individuals."
          gradient
        />
      </Reveal>

      <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-6 md:grid-cols-[280px_1fr] md:gap-x-10 md:gap-y-6">
        <Reveal
          as="aside"
          className="glass-card mx-auto flex w-full max-w-xs flex-col items-center gap-4 p-6 text-center shadow-md md:sticky md:top-[calc(4rem+1.5rem)] md:col-start-1 md:row-span-4 md:row-start-1 md:mx-0"
          variant="scale"
          delay={100}
        >
          <Profile />
        </Reveal>

        <Reveal className="min-w-0 md:col-start-2" delay={0}>
          <Bio />
        </Reveal>

        <Reveal className="min-w-0 md:col-start-2" delay={100}>
          <TechStackList />
        </Reveal>

        <Reveal className="min-w-0 md:col-start-2" delay={200}>
          <LinksList />
        </Reveal>
      </div>
    </div>
  );
}
