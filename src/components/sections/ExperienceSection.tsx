import { CalendarDays, ExternalLink, Github, MapPin } from 'lucide-react';
import { Card, Section } from '../common';
import { EXPERIENCE_DATA } from '@/constants/data';
import './ExperienceSection.css';

export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-timeline">
        {EXPERIENCE_DATA.map((experience, index) => (
          <article
            key={experience.id}
            className="experience-timeline__item experience-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="experience-timeline__marker" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <Card variant="experience" className="experience-card-surface">
              <div className="experience-card__header">
                <div className="experience-card__heading">
                  <p className="experience-card__period">
                    <CalendarDays size={14} aria-hidden="true" />
                    {experience.period}
                  </p>
                  <h3>{experience.title}</h3>
                  <p className="experience-card__meta">
                    <span>{experience.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="experience-card__location">
                      <MapPin size={13} aria-hidden="true" />
                      {experience.location}
                    </span>
                  </p>
                </div>

                {experience.projectUrl && (
                  <a
                    className="experience-card__project-link"
                    href={experience.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${experience.title} project on GitHub`}
                  >
                    <Github size={15} aria-hidden="true" />
                    <span>View project</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
              </div>

              <ul className="experience-card__highlights">
                {experience.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>
                    <span className="experience-card__bullet" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {experience.techStack && (
                <div className="experience-card__footer">
                  <span className="experience-card__tech-label">Tech stack</span>
                  <div className="experience-card__tech-list" aria-label={`${experience.title} technology stack`}>
                    {experience.techStack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </article>
        ))}
      </div>
    </Section>
  );
};
