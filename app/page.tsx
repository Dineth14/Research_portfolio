import { AwardTimeline } from "@/components/AwardTimeline";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProfileLinks } from "@/components/ProfileLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationCard } from "@/components/PublicationCard";
import { Section } from "@/components/Section";
import { SkillGroup } from "@/components/SkillGroup";
import { awards } from "@/data/awards";
import {
  contactDetails,
  leadershipItems,
  ongoingResearch,
  profile,
  researchFocus,
} from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { skillGroups } from "@/data/skills";

export default function HomePage() {
  return (
    <>
      <Header items={profile.navigation} />
      <main>
        <Hero profile={profile} />

        <Section
          id="research"
          eyebrow="Research Focus"
          title="Current Areas of Work"
          description="Research experience in remote-sensing computer vision, visual state-space models, binary change detection, and signal-processing-based sensing systems."
        >
          <div className="card-grid focus-grid">
            {researchFocus.map((item) => (
              <article key={item.title} className="panel">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="publications"
          eyebrow="Publications & Manuscripts"
          title="Selected Research Outputs"
          description="Compact summaries of accepted and ongoing work, with emphasis on contribution, evaluation setting, and public research profiles."
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
          id="ongoing-research"
          eyebrow="Ongoing Research"
          title="Current Directions"
          description="Work currently being evaluated or developed for remote-sensing, signal processing, and field sensing applications."
        >
          <div className="stack-lg">
            {ongoingResearch.map((item) => (
              <article key={item.title} className="panel research-panel">
                <div className="panel-heading">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="status-chip neutral">{item.status}</span>
                </div>
                <ul className="detail-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected Projects"
          title="Research-Relevant Technical Projects"
          description="A focused set of projects related to sensing, remote-sensing segmentation, change detection, and signal/image processing."
        >
          <div className="card-grid project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Technical Skills"
          title="Methods, Tooling, and Experimental Workflow"
          description="Grouped skills across programming, machine learning, remote sensing, signal processing, embedded systems, and research tooling."
        >
          <div className="card-grid skills-grid">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} group={group} />
            ))}
          </div>
        </Section>

        <Section
          id="awards"
          eyebrow="Honors & Awards"
          title="Academic Recognition and Competitions"
          description="Selected academic prizes, examination results, and technical competition outcomes."
        >
          <AwardTimeline items={awards} />
        </Section>

        <Section
          id="cv"
          eyebrow="CV & Research Profiles"
          title="Research Materials and Profiles"
          description="I am interested in research internship opportunities in computer vision, remote sensing, generative AI, medical imaging, signal processing, and embedded AI."
        >
          <div className="panel">
            <ProfileLinks links={profile.profileSectionLinks} variant="primary" />
          </div>
        </Section>

        <Section
          id="leadership"
          eyebrow="Leadership & Beyond Research"
          title="Communication and Initiative"
          description="A short view of communication practice and independent initiative beyond formal research work."
        >
          <div className="card-grid leadership-grid">
            {leadershipItems.map((item) => (
              <article key={item.title} className="panel">
                <div className="eyebrow-label">{item.role}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Get in Touch"
          description="The portfolio is designed for professor outreach, lab applications, and research internship communication."
        >
          <ContactCTA details={contactDetails} />
        </Section>
      </main>
      <Footer links={profile.footerLinks} />
    </>
  );
}
