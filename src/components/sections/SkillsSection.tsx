import React, { useState } from 'react';
import { Section } from '../common';
import { SKILL_GROUPS } from '@/constants/data';
import './SkillsSection.css';

// Skill icons mapping
const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();
  
  // Languages
  if (skillLower.includes('python')) return '🐍';
  if (skillLower.includes('javascript')) return 'JS';
  if (skillLower.includes('typescript')) return 'TS';
  if (skillLower.includes('java') && !skillLower.includes('javascript')) return '☕';
  if (skillLower.includes('html')) return '<>';
  if (skillLower.includes('css')) return '🎨';
  
  // Frontend
  if (skillLower.includes('react')) return '⚛️';
  
  // Backend & Databases
  if (skillLower.includes('flask')) return '🌶️';
  if (skillLower.includes('node')) return '🟢';
  if (skillLower.includes('rest') || skillLower.includes('api')) return '🔌';
  if (skillLower.includes('mysql') || skillLower.includes('postgresql')) return '🗄️';
  
  // ML & Data
  if (skillLower.includes('pytorch')) return '🔥';
  if (skillLower.includes('tensorflow') || skillLower.includes('keras')) return '🧠';
  if (skillLower.includes('transformers')) return '🤖';
  if (skillLower.includes('scikit') || skillLower.includes('sklearn')) return '📊';
  if (skillLower.includes('pandas')) return '🐼';
  if (skillLower.includes('numpy')) return '🔢';
  if (skillLower.includes('nlp')) return '💬';
  if (skillLower.includes('vision')) return '👁️';
  if (skillLower.includes('detection')) return '🎯';
  if (skillLower.includes('sentiment')) return '😊';
  if (skillLower.includes('fine-tuning')) return '🎛️';
  
  // Tools & DevOps
  if (skillLower.includes('git') && !skillLower.includes('copilot')) return '📦';
  if (skillLower.includes('github')) return '🐙';
  if (skillLower.includes('vs code')) return '💻';
  if (skillLower.includes('linux')) return '🐧';
  if (skillLower.includes('render')) return '☁️';
  if (skillLower.includes('copilot')) return '🤝';
  if (skillLower.includes('chatgpt')) return '💡';
  
  // Concepts
  if (skillLower.includes('oop')) return '📐';
  if (skillLower.includes('data structures')) return '🗂️';
  if (skillLower.includes('algorithms')) return '⚙️';
  if (skillLower.includes('sdl')) return '🔒';
  if (skillLower.includes('responsive')) return '📱';
  if (skillLower.includes('integration')) return '🔗';
  
  // Safety & Intelligence
  if (skillLower.includes('moderation')) return '🛡️';
  if (skillLower.includes('risk')) return '⚠️';
  if (skillLower.includes('quality')) return '✓';
  if (skillLower.includes('audience')) return '👥';
  
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
