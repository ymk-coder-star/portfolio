import SectionCard from '../../components/ui/SectionCard';

export default function Bio() {
  return (
    <SectionCard title="Hello">
      <div className="flex flex-col gap-4">
        <p className="text-lg leading-relaxed text-text">
          Hi, I’m Yisroel. Here at Code Canvas we provide custom software solutions to
          help businesses and individuals get the digital tools they need, tailored to
          their specific needs — whether that’s a small application or a large system.
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          I love building applications which are user-friendly and efficient. I listen
          first, agree on what “done” looks like, and see the work through from idea to
          something you can actually use day to day.
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          I’m always looking for new challenges and opportunities to grow.
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          If you have a project in mind, feel free to get in touch. I’m seeking
          opportunities to make a meaningful impact.
        </p>
      </div>
    </SectionCard>
  );
}
