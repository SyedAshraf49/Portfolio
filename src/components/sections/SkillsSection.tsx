import React, { useState } from 'react';
import { Section } from '../common';
import { SKILL_GROUPS } from '@/constants/data';
import './SkillsSection.css';

// Skill icons mapping
const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();
  
  if (skillLower.includes('python')) return '🐍';
  if (skillLower.includes('javascript')) return 'JS';
  if (skillLower.includes('typescript')) return 'TS';
  if (skillLower.includes('html')) return '<>';
  if (skillLower.includes('css')) return '🎨';
  if (skillLower.includes('react')) return '⚛️';
  if (skillLower.includes('flask')) return '🌶️';
  if (skillLower.includes('pytorch')) return '🔥';
  if (skillLower.includes('transformers')) return '🤖';
  if (skillLower.includes('api')) return '🔌';
  if (skillLower.includes('nlp')) return '💬';
  if (skillLower.includes('vision')) return '👁️';
  if (skillLower.includes('detection')) return '🎯';
  if (skillLower.includes('sentiment')) return '😊';
  if (skillLower.includes('cli')) return '⌨️';
  if (skillLower.includes('testing')) return '✓';
  if (skillLower.includes('deployment')) return '🚀';
  if (skillLower.includes('documentation')) return '📄';
  if (skillLower.includes('moderation')) return '🛡️';
  
  return '◆';
};

// Get category color
const getCategoryColor = (title: string) => {
  if (title.includes('Machine Learning') || title.includes('AI')) return 'ai';
  if (title.includes('Backend')) return 'backend';
  if (title.includes('Frontend')) return 'frontend';
  if (title.includes('Data') || title.includes('DevOps') || title.includes('Systems')) return 'systems';
  if (title.includes('Safety') || title.includes('Intelligence')) return 'safety';
  return 'default';
};

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Flatten all skills with their categories into one array
  const allSkills = SKILL_GROUPS.flatMap(({ title, items }) =>
    items.map(item => ({
      name: item,
      category: getCategoryColor(title),
      categoryName: title
    }))
  );

  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="skills-honeycomb-container">
        <div className="honeycomb-grid">
          {allSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`hexagon-cell ${hoveredSkill === skill.name ? 'hexagon-cell--active' : ''}`}
              style={{ 
                animationDelay: `${index * 0.03}s`,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`hexagon hexagon--${skill.category}`}>
                <div className="hexagon-inner">
                  <div className="hexagon-content">
                    <span className="skill-icon">{getSkillIcon(skill.name)}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              </div>
              
              {hoveredSkill === skill.name && (
                <div className={`skill-tooltip skill-tooltip--${skill.category}`}>
                  <span className="skill-tooltip-category">{skill.categoryName}</span>
                  <span className="skill-tooltip-text">{skill.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="skills-legend">
          <div className="legend-item legend-item--ai">
            <span className="legend-dot"></span>
            <span>Machine Learning & AI</span>
          </div>
          <div className="legend-item legend-item--backend">
            <span className="legend-dot"></span>
            <span>Backend Development</span>
          </div>
          <div className="legend-item legend-item--frontend">
            <span className="legend-dot"></span>
            <span>Frontend Development</span>
          </div>
          <div className="legend-item legend-item--systems">
            <span className="legend-dot"></span>
            <span>Systems & DevOps</span>
          </div>
          <div className="legend-item legend-item--safety">
            <span className="legend-dot"></span>
            <span>Safety & Intelligence</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
