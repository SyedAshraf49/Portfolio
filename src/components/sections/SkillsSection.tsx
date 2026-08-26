import { useState } from 'react';
import { Section } from '../common';
import { SKILL_GROUPS } from '@/constants/data';
import './SkillsSection.css';

const getSkillGlyph = (skill: string) => {
  const skillLower = skill.toLowerCase();

  if (skillLower.includes('javascript')) return 'JS';
  if (skillLower.includes('typescript')) return 'TS';
  if (skillLower.includes('html')) return '</>';
  if (skillLower.includes('detection')) return 'TGT';
  if (skillLower.includes('sentiment')) return 'SA';
  if (skillLower.includes('fine-tuning')) return 'FT';
  if (skillLower.includes('rest') || skillLower.includes('api')) return 'API';
  if (skillLower.includes('mysql') || skillLower.includes('postgresql')) return 'DB';
  if (skillLower.includes('oop')) return 'OOP';
  if (skillLower.includes('data structures')) return 'DS';
  if (skillLower.includes('algorithms')) return 'ALG';
  if (skillLower.includes('sdl')) return 'SDL';
  if (skillLower.includes('responsive')) return 'RWD';
  if (skillLower.includes('integration')) return 'API';
  if (skillLower.includes('moderation')) return 'MOD';
  if (skillLower.includes('risk')) return 'RISK';
  if (skillLower.includes('quality')) return 'Q';
  if (skillLower.includes('audience')) return 'AUD';

  return '◆';
};

const SIMPLE_ICON_SLUGS: Record<string, string> = {
  'scikit-learn': 'scikitlearn',
  transformers: 'huggingface',
  tensorflow: 'tensorflow',
  keras: 'keras',
  pytorch: 'pytorch',
  nlp: 'spacy',
  pandas: 'pandas',
  numpy: 'numpy',
  'computer vision': 'opencv',
  'fine-tuning': 'huggingface',
  python: 'python',
  javascript: 'javascript',
  typescript: 'typescript',
  java: 'java',
  flask: 'flask',
  'flask-cors': 'flask',
  'node.js': 'nodedotjs',
  'rest api design': 'postman',
  mysql: 'mysql',
  postgresql: 'postgresql',
  'react 18': 'react',
  html5: 'html5',
  css3: 'css3',
  'api integration': 'postman',
  git: 'git',
  github: 'github',
  'vs code': 'visualstudiocode',
  linux: 'linux',
  render: 'render',
  'github copilot': 'githubcopilot',
  chatgpt: 'openai',
};

const getSkillLogo = (skill: string) => SIMPLE_ICON_SLUGS[skill.toLowerCase()];

type Skill = {
  name: string;
  category: string;
  categoryName: string;
};

const allSkills: Skill[] = SKILL_GROUPS.flatMap(({ title, items }) =>
  items.map((name) => ({
    name,
    category: getCategoryColor(title),
    categoryName: title,
  })),
);

const SKILL_ROW_LENGTHS = [9, 9, 9, 9, 6];
const skillRows = SKILL_ROW_LENGTHS.reduce<Skill[][]>((rows, rowLength) => {
  const start = rows.reduce((total, row) => total + row.length, 0);
  rows.push(allSkills.slice(start, start + rowLength));
  return rows;
}, []);

const legendItems = [
  { className: 'ai', label: 'Machine Learning & AI' },
  { className: 'backend', label: 'Backend Development' },
  { className: 'frontend', label: 'Frontend Development' },
  { className: 'systems', label: 'Systems & DevOps' },
  { className: 'safety', label: 'Safety & Intelligence' },
];

interface SkillsSectionProps {
  activeSkill?: string | null;
  onSelectSkill?: (skill: string | null) => void;
}

export const SkillsSection = ({ activeSkill = null, onSelectSkill }: SkillsSectionProps) => {
  const [internalSkill, setInternalSkill] = useState<string | null>(null);
  const selectedSkill = onSelectSkill ? activeSkill : internalSkill;

  const selectSkill = (skill: string) => {
    const nextSkill = selectedSkill === skill ? null : skill;
    if (onSelectSkill) {
      onSelectSkill(nextSkill);
    } else {
      setInternalSkill(nextSkill);
    }

    if (nextSkill) {
      window.setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 40);
    }
  };

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Select a skill to explore the projects where I have applied it."
    >
      <div className="skills-honeycomb-container">
        <div className="honeycomb-grid" role="list" aria-label="Skills and technologies">
          {skillRows.map((row, rowIndex) => (
            <div
              className={`honeycomb-row ${rowIndex % 2 === 1 ? 'honeycomb-row--offset' : ''}`}
              key={`skill-row-${rowIndex}`}
            >
              {row.map((skill, index) => {
                const logo = getSkillLogo(skill.name);
                const isSelected = selectedSkill === skill.name;
                return (
                  <div className="hexagon-cell" role="listitem" key={`${skill.name}-${index}`}>
                    <button
                      type="button"
                      className={`hexagon hexagon--${skill.category} ${isSelected ? 'hexagon--selected' : ''}`}
                      title={`${skill.name} — ${skill.categoryName}`}
                      aria-label={`${skill.name}, ${skill.categoryName}. Select to filter projects.`}
                      aria-pressed={isSelected}
                      onClick={() => selectSkill(skill.name)}
                    >
                      <span className="hexagon-inner">
                        <span className="hexagon-content">
                          <span className="skill-icon" aria-hidden="true">
                            {logo ? (
                              <span className="skill-logo-shell">
                                <img
                                  className="skill-logo"
                                  src={`https://cdn.simpleicons.org/${logo}`}
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  onError={(event) => {
                                    event.currentTarget.parentElement?.setAttribute('data-logo-failed', 'true');
                                  }}
                                />
                                <span className="skill-logo-fallback">{getSkillGlyph(skill.name)}</span>
                              </span>
                            ) : (
                              getSkillGlyph(skill.name)
                            )}
                          </span>
                          <span className="skill-name">{skill.name}</span>
                        </span>
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {selectedSkill && (
          <div className="skills-selection" role="status" aria-live="polite">
            <span>
              Showing projects connected to <strong>{selectedSkill}</strong>
            </span>
            <button type="button" onClick={() => selectSkill(selectedSkill)}>
              Clear filter
            </button>
          </div>
        )}

        <div className="skills-legend" aria-label="Skill categories">
          {legendItems.map((item) => (
            <div className={`legend-item legend-item--${item.className}`} key={item.className}>
              <span className="legend-dot" aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

function getCategoryColor(title: string) {
  if (title.includes('Machine Learning') || title.includes('AI')) return 'ai';
  if (title.includes('Backend')) return 'backend';
  if (title.includes('Frontend')) return 'frontend';
  if (title.includes('Data') || title.includes('DevOps') || title.includes('Systems')) return 'systems';
  if (title.includes('Safety') || title.includes('Intelligence')) return 'safety';
  return 'default';
}
