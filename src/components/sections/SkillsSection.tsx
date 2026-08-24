import React, { useState } from 'react';
import { Section } from '../common';
import { SKILL_GROUPS } from '@/constants/data';
import './SkillsSection.css';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
          <article
            key={title}
            className={`skill-category-card ${hoveredCategory === title ? 'skill-category-card--active' : ''}`}
            onMouseEnter={() => setHoveredCategory(title)}
            onMouseLeave={() => setHoveredCategory(null)}
            role="region"
            aria-label={`${title} skills`}
          >
            <div className="skill-category-card__glow" />
            <div className="skill-category-card__header">
              <div className="skill-category-icon-wrapper">
                <div className="skill-category-icon-bg" />
                <Icon className="skill-category-icon" size={24} aria-hidden="true" />
              </div>
              <div className="skill-category-info">
                <h3 className="skill-category-title">{title}</h3>
                <p className="skill-category-subtitle">{items.length} technologies</p>
              </div>
            </div>
            
            <div className="skills-hexagon-grid">
              {items.map((item, index) => (
                <div
                  key={item}
                  className={`skill-hexagon ${hoveredSkill === item ? 'skill-hexagon--active' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onMouseEnter={() => setHoveredSkill(item)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="skill-hexagon__inner">
                    <div className="skill-hexagon__glow" />
                    <span className="skill-hexagon__text">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
