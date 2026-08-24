import React, { useState } from 'react';
import { Section } from '../common';
import { SKILL_GROUPS } from '@/constants/data';
import './SkillsSection.css';

// Skill icons mapping - using simple SVG shapes for now, can be replaced with actual logos
const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();
  
  // Programming Languages
  if (skillLower.includes('python')) return '🐍';
  if (skillLower.includes('javascript')) return 'JS';
  if (skillLower.includes('typescript')) return 'TS';
  if (skillLower.includes('html')) return '<>';
  if (skillLower.includes('css')) return '🎨';
  
  // Frameworks & Libraries
  if (skillLower.includes('react')) return '⚛️';
  if (skillLower.includes('flask')) return '🌶️';
  if (skillLower.includes('pytorch')) return '🔥';
  if (skillLower.includes('transformers')) return '🤖';
  
  // Tools & Concepts
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
  
  // Default
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

// Check if skills are related (for connection lines)
const areSkillsRelated = (skill1: string, skill2: string) => {
  const related = [
    ['Python', 'Flask', 'PyTorch', 'scikit-learn'],
    ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    ['NLP', 'Transformers', 'Sentiment Analysis', 'Toxicity Detection'],
    ['RESTful APIs', 'Flask', 'Microservices', 'CORS'],
    ['Testing', 'End-to-end Testing', 'Documentation'],
  ];
  
  return related.some(group => 
    group.some(s => skill1.includes(s)) && group.some(s => skill2.includes(s))
  );
};

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="skills-container">
        {SKILL_GROUPS.map(({ icon: Icon, title, items }) => {
          const categoryColor = getCategoryColor(title);
          
          return (
            <div
              key={title}
              className={`skill-category ${hoveredCategory === title ? 'skill-category--active' : ''}`}
              onMouseEnter={() => setHoveredCategory(title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`skill-category-header skill-category-header--${categoryColor}`}>
                <div className="skill-category-icon-container">
                  <Icon className="skill-category-icon" size={28} />
                </div>
                <div className="skill-category-title-wrapper">
                  <h3 className="skill-category-title">{title}</h3>
                  <p className="skill-category-count">{items.length} skills</p>
                </div>
              </div>

              <div className="hexagon-grid">
                <svg className="hexagon-connections" aria-hidden="true">
                  {items.map((skill1, i) => 
                    items.slice(i + 1).map((skill2, j) => {
                      if (areSkillsRelated(skill1, skill2) && (hoveredSkill === skill1 || hoveredSkill === skill2)) {
                        const x1 = (i % 4) * 110 + 55;
                        const y1 = Math.floor(i / 4) * 95 + (i % 2 === 1 ? 47.5 : 0) + 47.5;
                        const x2 = ((i + j + 1) % 4) * 110 + 55;
                        const y2 = Math.floor((i + j + 1) / 4) * 95 + ((i + j + 1) % 2 === 1 ? 47.5 : 0) + 47.5;
                        
                        return (
                          <line
                            key={`${i}-${j}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            className={`connection-line connection-line--${categoryColor}`}
                            strokeWidth="2"
                            strokeDasharray="5,5"
                          />
                        );
                      }
                      return null;
                    })
                  )}
                </svg>

                {items.map((item, index) => (
                  <div
                    key={item}
                    className={`hexagon-wrapper ${hoveredSkill === item ? 'hexagon-wrapper--active' : ''}`}
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      gridColumn: (index % 4) + 1,
                      gridRow: Math.floor(index / 4) + 1,
                      marginTop: index % 2 === 1 ? '47.5px' : '0'
                    }}
                    onMouseEnter={() => setHoveredSkill(item)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`hexagon hexagon--${categoryColor}`}>
                      <div className="hexagon-inner">
                        <div className="hexagon-content">
                          <span className="skill-icon">{getSkillIcon(item)}</span>
                          <span className="skill-name">{item}</span>
                        </div>
                      </div>
                    </div>
                    
                    {hoveredSkill === item && (
                      <div className={`skill-tooltip skill-tooltip--${categoryColor}`}>
                        <span className="skill-tooltip-text">{item}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
