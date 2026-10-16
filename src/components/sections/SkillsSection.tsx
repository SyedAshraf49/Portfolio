import React, { useState } from 'react';
import { Section } from '../common';
import { SKILLS_PERIODIC_TABLE } from '@/constants/data';
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

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="periodic-table-container">
        <div className="periodic-table-grid">
          {SKILLS_PERIODIC_TABLE.map((skill, index) => {
            const colors = CATEGORY_COLORS[skill.category];
            const isLogo = skill.logo && !skill.logo.startsWith('http') && skill.logo.length > 2;
            const logoUrl = isLogo 
              ? `https://cdn.simpleicons.org/${skill.logo}/${skill.color.replace('#', '')}` 
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
    </Section>
  );
};
