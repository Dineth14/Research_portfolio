import { ProfileLinks } from "@/components/ProfileLinks";
import { ProfileContent } from "@/types/portfolio";

type HeroProps = {
  profile: ProfileContent;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section id="about" className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">Research Portfolio</span>
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

        <aside className="hero-aside" aria-label="Profile photo">
          <div className="portrait-frame">
            <img
              src={profile.photoSrc}
              alt="Portrait of Dineth Perera"
              loading="eager"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
