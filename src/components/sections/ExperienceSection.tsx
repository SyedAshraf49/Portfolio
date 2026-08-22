import React, { useEffect, useRef } from 'react';
import { Card, Section, Badge } from '../common';
import { EXPERIENCE_DATA } from '@/constants/data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.experience-card');

    gsap.from(cards, {
      y: 60,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <Section id="experience" title="Experience">
      <div ref={containerRef} className="mx-auto max-w-4xl space-y-6">
        {EXPERIENCE_DATA.map((experience) => (
          <Card key={experience.id} variant="experience" className="experience-card">
            <div className="mb-4">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300" role="heading" aria-level={3}>
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {experience.company} | {experience.location}
                    {experience.period && ` • ${experience.period}`}
                  </p>
                </div>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-cyan-400" aria-hidden="true">
                    ●
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
