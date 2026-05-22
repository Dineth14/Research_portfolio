import { AwardTimeline } from "@/components/AwardTimeline";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProfileLinks } from "@/components/ProfileLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationCard } from "@/components/PublicationCard";
import { ResearchCard } from "@/components/ResearchCard";
import { Section } from "@/components/Section";
import { SkillGroup } from "@/components/SkillGroup";
import { awards } from "@/data/awards";
import {
  contactDetails,
  profile,
  researchFocus,
} from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { ongoingResearch } from "@/data/research";
import { skillGroups } from "@/data/skills";

export default function HomePage() {
  return (
    <>
      <Header items={profile.navigation} />
      <main>
        <Hero profile={profile} />

        <Section
          id="about"
          eyebrow="About"
          title="About"
          description=""
        >
          <div className="about-block">
            {researchFocus.map((item) => (
              <article key={item.title} className="panel">
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="research"
          eyebrow="Research"
          title="Research & Current Work"
          description="Current work across remote-sensing change detection, dataset preparation, and signal-processing-based sensing."
        >
          <div className="card-grid current-work-grid">
            {ongoingResearch.map((item) => (
              <ResearchCard key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="publications"
          eyebrow="Publications"
          title="Publications & Manuscripts"
          description="Accepted and under-review research outputs."
          action={
            <ProfileLinks
              links={[profile.links.googleScholar]}
              variant="secondary"
              compact
            />
          }
        >
          <div className="stack-lg">
            {publications.map((publication) => (
              <PublicationCard key={publication.title} publication={publication} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected Projects"
          title="Selected Projects"
          description="Research projects are listed above. This section includes other technical work kept in compact form."
          action={
            <ProfileLinks
              links={[
                {
                  label: "View more on GitHub",
                  href: "https://github.com/Dineth14",
                },
              ]}
              variant="secondary"
              compact
            />
          }
        >
          <p className="placeholder-note">Research projects are listed above.</p>
          <div className="card-grid project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Skills"
          description="Grouped technical skills and research tools."
        >
          <div className="card-grid skills-grid">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} group={group} />
            ))}
          </div>
        </Section>

        <Section
          id="awards"
          eyebrow="Awards"
          title="Awards"
          description="Selected academic prizes, examination results, and competition outcomes."
        >
          <AwardTimeline items={awards} />
        </Section>

        <Section
          id="cv"
          eyebrow="CV & Links"
          title="CV & Research Links"
          description="For research internship opportunities and collaborations, please refer to my CV and research profiles."
        >
          <div className="panel">
            <ProfileLinks links={profile.profileSectionLinks} />
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Contact"
          description="Direct contact information and research profiles."
        >
          <ContactCTA details={contactDetails} />
        </Section>
      </main>
      <Footer links={profile.footerLinks} />
    </>
  );
}
