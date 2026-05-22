import { ProfileLinks } from "@/components/ProfileLinks";
import { ProfileContent } from "@/types/portfolio";

type HeroProps = {
  profile: ProfileContent;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-subheadline">{profile.subheadline}</p>
          <div className="status-row" aria-label="Current status">
            {profile.statusItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-links">
            <ProfileLinks links={profile.heroLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}
