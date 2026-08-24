import { Section } from '../common';
import { SKILL_GROUPS } from '@/constants/data';
import './SkillsSection.css';

const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();

  if (skillLower.includes('python')) return '🐍';
  if (skillLower.includes('javascript')) return 'JS';
  if (skillLower.includes('typescript')) return 'TS';
  if (skillLower.includes('java') && !skillLower.includes('javascript')) return '☕';
  if (skillLower.includes('html')) return '<>';
  if (skillLower.includes('css')) return '🎨';
  if (skillLower.includes('react')) return '⚛️';
  if (skillLower.includes('flask')) return '🌶️';
  if (skillLower.includes('node')) return '🟢';
  if (skillLower.includes('rest') || skillLower.includes('api')) return '🔌';
  if (skillLower.includes('mysql') || skillLower.includes('postgresql')) return '🗄️';
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
  if (skillLower.includes('git') && !skillLower.includes('copilot')) return '📦';
  if (skillLower.includes('github')) return '🐙';
  if (skillLower.includes('vs code')) return '💻';
  if (skillLower.includes('linux')) return '🐧';
  if (skillLower.includes('render')) return '☁️';
  if (skillLower.includes('copilot')) return '🤝';
  if (skillLower.includes('chatgpt')) return '💡';
  if (skillLower.includes('oop')) return '📐';
  if (skillLower.includes('data structures')) return '🗂️';
  if (skillLower.includes('algorithms')) return '⚙️';
  if (skillLower.includes('sdl')) return '🔒';
  if (skillLower.includes('responsive')) return '📱';
  if (skillLower.includes('integration')) return '🔗';
  if (skillLower.includes('moderation')) return '🛡️';
  if (skillLower.includes('risk')) return '⚠️';
  if (skillLower.includes('quality')) return '✓';
  if (skillLower.includes('audience')) return '👥';

  return '◆';
};

const getCategoryColor = (title: string) => {
  if (title.includes('Machine Learning') || title.includes('AI')) return 'ai';
  if (title.includes('Backend')) return 'backend';
  if (title.includes('Frontend')) return 'frontend';
  if (title.includes('Data') || title.includes('DevOps') || title.includes('Systems')) return 'systems';
  if (title.includes('Safety') || title.includes('Intelligence')) return 'safety';
  return 'default';
};

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

// Keeping rows explicit gives the cluster a predictable desktop honeycomb shape.
// The CSS turns each row into a responsive grid on smaller screens.
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

export const SkillsSection = () => {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="skills-honeycomb-container">
        <div className="honeycomb-grid" role="list" aria-label="Skills and technologies">
          {skillRows.map((row, rowIndex) => (
            <div
              className={`honeycomb-row ${rowIndex % 2 === 1 ? 'honeycomb-row--offset' : ''}`}
              key={`skill-row-${rowIndex}`}
            >
              {row.map((skill, index) => (
                <div className="hexagon-cell" role="listitem" key={`${skill.name}-${index}`}>
                  <button
                    type="button"
                    className={`hexagon hexagon--${skill.category}`}
                    title={`${skill.name} — ${skill.categoryName}`}
                    aria-label={`${skill.name}, ${skill.categoryName}`}
                  >
                    <span className="hexagon-inner">
                      <span className="hexagon-content">
                        <span className="skill-icon" aria-hidden="true">
                          {getSkillIcon(skill.name)}
                        </span>
                        <span className="skill-name">{skill.name}</span>
                      </span>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

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
