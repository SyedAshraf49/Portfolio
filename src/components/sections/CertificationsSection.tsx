import { Award, CalendarDays, Hash } from 'lucide-react';
import { Section } from '../common';
import { CERTIFICATIONS_DATA } from '@/constants/data';
import './CertificationsSection.css';

export const CertificationsSection: React.FC = () => {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Continuous learning across artificial intelligence, generative AI, and practical engineering."
    >
      <div className="certifications-grid" role="list" aria-label="Professional certifications">
        {CERTIFICATIONS_DATA.map((certification) => (
          <article className="certification-card" key={certification.id} role="listitem">
            <div className="certification-card__topline">
              <div
                className={`certification-card__issuer-mark certification-card__issuer-mark--${certification.issuer.toLowerCase()}`}
                aria-label={`${certification.issuer} certificate`}
              >
                {certification.issuerMark}
              </div>
              <div className="certification-card__issuer-copy">
                <span>Issued by</span>
                <strong>{certification.issuer}</strong>
              </div>
              <Award className="certification-card__award" size={20} aria-hidden="true" />
            </div>

            <h3>{certification.title}</h3>

            <div className="certification-card__date">
              <CalendarDays size={14} aria-hidden="true" />
              <span>Issued {certification.issued}</span>
            </div>

            <div className="certification-card__credential">
              <Hash size={14} aria-hidden="true" />
              <span className="certification-card__credential-label">Credential ID</span>
              <code>{certification.credentialId}</code>
            </div>

            <div className="certification-card__skills">
              <span className="certification-card__skills-label">Skills</span>
              <div className="certification-card__skill-list">
                {certification.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
                {certification.additionalSkills > 0 && (
                  <span>+{certification.additionalSkills} more</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
