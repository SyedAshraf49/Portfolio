import React, { useState } from 'react';
import { Section } from '../common';
import { SKILLS_PERIODIC_TABLE, getSkillMapping, CERTIFICATIONS } from '@/constants/data';
import { SkillDetailModal } from '@/components/ui/skill-detail-modal';
import './SkillsSection.css';

// Category colors matching periodic table groups
const CATEGORY_COLORS = {
  language: { bg: '#3B82F6', text: '#DBEAFE', border: '#60A5FA' },
  frontend: { bg: '#06B6D4', text: '#CFFAFE', border: '#22D3EE' },
  backend: { bg: '#10B981', text: '#D1FAE5', border: '#34D399' },
  database: { bg: '#8B5CF6', text: '#EDE9FE', border: '#A78BFA' },
  ml: { bg: '#F59E0B', text: '#FEF3C7', border: '#FBBF24' },
  cloud: { bg: '#EF4444', text: '#FEE2E2', border: '#F87171' },
  tool: { bg: '#6366F1', text: '#E0E7FF', border: '#818CF8' },
  concept: { bg: '#EC4899', text: '#FCE7F3', border: '#F472B6' },
};

const CATEGORY_LABELS = {
  language: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Databases',
  ml: 'ML & Data',
  cloud: 'Cloud',
  tool: 'Tools',
  concept: 'Concepts',
};

// Project data
const PROJECT_DATA = [
  {
    title: 'HateShieldAI',
    description: 'AI safety tool focused on toxicity detection, moderation checks, and safer content workflows.',
    image: '/project-images/HateShieldAI.png',
    href: 'https://github.com/SyedAshraf49/HateSheildAI-CLI',
    liveLink: 'https://hatesheildai-v3.onrender.com/',
    techStack: 'Python · Flask · Flask-CORS · scikit-learn · Joblib · Pillow · Transformers · PyTorch · HTML5 · CSS3 · JavaScript',
  },
  {
    title: 'Career Path Predictor',
    description: 'Machine learning project that analyzes profile inputs to recommend suitable career paths.',
    image: '/project-images/Career-Path-Predictor.png',
    href: 'https://github.com/SyedAshraf49/Carrer-Path-Predictor-FI',
    liveLink: 'https://carrer-path-predictor-fi.onrender.com/',
    techStack: 'Python · Flask · scikit-learn · NumPy · pandas · HTML5 · CSS3 · JavaScript · Bootstrap · FPDF · BeautifulSoup',
  },
  {
    title: 'Local Vendor',
    description: 'Platform concept for connecting local vendors with customers through streamlined discovery and interactions.',
    image: '/project-images/Local-Vendor.png',
    href: 'https://github.com/SyedAshraf49/Local-Vendor__',
    liveLink: 'https://local-vendor-v2.vercel.app/',
    techStack: 'React.js · TypeScript · Vite · React Context API · JavaScript · CSS · Vercel',
  },
];

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
    color: string;
  } | null>(null);

  const handleSkillClick = (skillName: string, category: string, color: string) => {
    setSelectedSkill({ name: skillName, category, color });
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  // Get mapped data for selected skill
  const getSkillData = () => {
    if (!selectedSkill) return { projects: [], certifications: [] };

    const mapping = getSkillMapping(selectedSkill.name);
    if (!mapping) return { projects: [], certifications: [] };

    const projects = PROJECT_DATA.filter(p => mapping.projects.includes(p.title));
    const certifications = CERTIFICATIONS.filter(c => mapping.certifications.includes(c.id));

    return { projects, certifications };
  };

  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="periodic-table-container">
        <div className="periodic-table-grid">
          {SKILLS_PERIODIC_TABLE.map((skill, index) => {
            const colors = CATEGORY_COLORS[skill.category];
            const isLogo = skill.logo && !skill.logo.startsWith('http') && skill.logo.length > 2;
            // Use white logos for better visibility on dark backgrounds
            const logoUrl = isLogo 
              ? `https://cdn.simpleicons.org/${skill.logo}/white` 
              : null;

            return (
              <div
                key={`${skill.name}-${index}`}
                className={`periodic-card periodic-card--${skill.category}`}
                style={{ 
                  animationDelay: `${index * 0.02}s`,
                  '--card-bg': colors.bg,
                  '--card-text': colors.text,
                  '--card-border': colors.border,
                } as React.CSSProperties}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => handleSkillClick(skill.name, CATEGORY_LABELS[skill.category], colors.bg)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSkillClick(skill.name, CATEGORY_LABELS[skill.category], colors.bg);
                  }
                }}
                aria-label={`View ${skill.name} projects and certifications`}
              >
                <div className="periodic-card-inner">
                  {/* Category Label (like atomic number) */}
                  <div className="periodic-category-label">
                    {CATEGORY_LABELS[skill.category]}
                  </div>

                  {/* Logo/Icon */}
                  <div className="periodic-logo">
                    {logoUrl ? (
                      <img 
                        src={logoUrl} 
                        alt={skill.name}
                        className="periodic-logo-img"
                        onError={(e) => {
                          // Fallback to emoji or text if logo fails
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <span className={`periodic-logo-fallback ${logoUrl ? 'hidden' : ''}`}>
                      {skill.logo && skill.logo.length <= 2 ? skill.logo : skill.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div className="periodic-skill-name">{skill.name}</div>
                </div>

                {/* Hover Tooltip */}
                {hoveredSkill === skill.name && (
                  <div className="periodic-tooltip" style={{ background: colors.bg }}>
                    <span className="periodic-tooltip-name">{skill.name}</span>
                    <span className="periodic-tooltip-category">{CATEGORY_LABELS[skill.category]}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Info Text */}
        <div className="periodic-info-text">
          <p style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', lineHeight: '1.8', margin: '1.5rem 0' }}>
            Click on any skill to see related projects and certifications
          </p>
        </div>

        {/* Legend - Periodic Table Style */}
        <div className="periodic-legend">
          <div className="periodic-legend-title">Legend</div>
          <div className="periodic-legend-grid">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
              const colors = CATEGORY_COLORS[key as keyof typeof CATEGORY_COLORS];
              return (
                <div key={key} className="periodic-legend-item">
                  <div 
                    className="periodic-legend-box"
                    style={{ 
                      background: colors.bg,
                      borderColor: colors.border,
                    }}
                  />
                  <span className="periodic-legend-label">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <SkillDetailModal
          skillName={selectedSkill.name}
          skillCategory={selectedSkill.category}
          skillColor={selectedSkill.color}
          projects={getSkillData().projects}
          certifications={getSkillData().certifications}
          onClose={handleCloseModal}
        />
      )}
    </Section>
  );
};
