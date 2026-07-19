import SectionCard from '../../components/ui/SectionCard';

export default function Bio() {
  return (
    <SectionCard title="About">
      <div className="flex flex-col gap-4">
        <p className="text-lg leading-relaxed text-text">
          I'm Yisroel, a software developer who builds modern, responsive digital
          products. My main focus is frontend development with React, Next.js, and
          TypeScript, but my work also extends across APIs, backend services, data, and
          deployment.
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          Through freelance work, I've created web applications, websites, and tailored
          digital solutions for real clients. That experience has taught me how to turn
          business requirements into reliable, user-friendly products and carry projects
          from early ideas through development and delivery.
        </p>
        <p className="text-base leading-relaxed text-text-muted">
          I'm open to software development opportunities and client collaborations where I
          can apply that experience, contribute across the stack when needed, and keep
          delivering thoughtful, maintainable products.
        </p>
      </div>
    </SectionCard>
  );
}
