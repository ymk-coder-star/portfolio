import profilePic from '../../assets/profile-pic.webp';
import { CVFilename, CVUrl } from '../../constants/site';

export default function Profile() {
  return (
    <>
      <div className="aspect-square w-full overflow-hidden rounded-xl border-[3px] border-accent-soft shadow-md ring-1 ring-border">
        <img
          src={profilePic}
          alt="Yisroel Krausz"
          width="320"
          height="320"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold tracking-tight text-text">Yisroel Krausz</h2>
      <p className="text-base font-semibold text-text">Junior Frontend Developer</p>
      <div className="flex flex-col gap-1">
        <p className="text-sm leading-relaxed text-text-muted">Tyne and Wear, England</p>
        <p className="text-sm leading-relaxed text-text-muted">
          Self-taught · Open to junior roles (remote/hybrid)
        </p>
      </div>
      <a
        href={CVUrl}
        className="btn-primary mt-2 w-full"
        download={CVFilename}
        aria-label="Download CV"
      >
        Download CV
      </a>
    </>
  );
}
