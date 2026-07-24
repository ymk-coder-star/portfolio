import { techStack } from '../../data/techStack';
import SectionCard from '../../components/ui/SectionCard';

const pillClass =
  'rounded-full border border-accent/10 bg-accent-soft px-3 py-1 text-xs font-medium text-accent transition-[background-color,border-color,box-shadow] duration-fast hover:border-accent/20 hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.12)]';

function TechStackGroups({ groups }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category} className="flex flex-col gap-3">
          <h4 className="m-0 text-xs font-semibold uppercase tracking-widest text-text-subtle">
            {group.category}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li key={skill} className={pillClass}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function TechStackList() {
  return (
    <SectionCard title="Tech Stack">
      <TechStackGroups groups={techStack} />
    </SectionCard>
  );
}
