import SectionCard from '../../components/ui/SectionCard';

export default function Bio() {
  return (
    <SectionCard title="About">
      <div className="flex flex-col gap-4">
        <p className="text-lg leading-relaxed text-text">
          I'm Yisroel, a self-taught Front-End Developer passionate about creating modern,
          responsive, and user-friendly web applications with React, TypeScript, and
          JavaScript.
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          Over the past year, I've focused on building real-world projects that strengthen
          my understanding of software development, API integration, and creating seamless
          user experiences. I enjoy turning ideas into functional applications while
          continuously improving my skills and knowledge.
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          Before transitioning into software development, I worked in accounts, where I
          developed strong analytical, organisational, and problem-solving skills that
          continue to shape my approach to development..
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          I'm now seeking my first opportunity as a Junior Front-End Developer, where I
          can contribute to meaningful projects, collaborate with experienced developers,
          and continue growing within the industry.
        </p>
      </div>
    </SectionCard>
  );
}
