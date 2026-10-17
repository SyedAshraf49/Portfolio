import React from 'react';
import { Card, Section } from '../common';
import { EXPERIENCE_DATA } from '@/constants/data';

export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="mx-auto max-w-4xl space-y-6">
        {EXPERIENCE_DATA.map((experience, index) => (
          <div 
            key={experience.id}
            className="experience-card"
            style={{ animationDelay: `${index * 0.15}s`, fontFamily: "'Press Start 2P', cursive" }}
          >
            <Card variant="experience">
              <div className="mb-4">
                <div className="flex flex-col justify-between gap-3">
                  <div>
                    <h3 className="text-base font-normal text-[var(--pixel-green)] leading-relaxed" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.8" }}>
                      {experience.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--pixel-cyan)] leading-relaxed" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.8" }}>
                      {experience.company} | {experience.location}
                    </p>
                    {experience.period && (
                      <p className="mt-2 text-xs text-[var(--pixel-yellow)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.8" }}>
                        {experience.period}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-sm leading-loose text-[var(--pixel-white)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "2" }}>
                {experience.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 text-[var(--pixel-green)]" aria-hidden="true" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                      ▶
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};
