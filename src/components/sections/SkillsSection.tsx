import React from 'react';
import { Section, Badge } from '../common';
import { SKILL_GROUPS } from '@/constants/data';

export const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
          <article
            key={title}
            className="rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-cyan-400/40 hover:shadow-[0_0_18px_rgba(74,144,226,0.2)]"
            role="region"
            aria-label={`${title} skills`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
                <Icon size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="text-xs text-slate-400">Selected capabilities</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} variant="default">
                  {item}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
