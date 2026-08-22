import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface AnimatedHeroProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedHero: React.FC<AnimatedHeroProps> = ({ children, className = '' }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Magnetic effect on hover
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate distance from center
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      // Apply subtle magnetic effect
      gsap.to(hero, {
        rotateY: deltaX * 3,
        rotateX: -deltaY * 3,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000,
      });

      setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
      gsap.to(hero, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={`animated-hero ${className}`}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      } as React.CSSProperties}
    >
      <div className="animated-hero__glow" />
      <div className="animated-hero__content">{children}</div>
    </div>
  );
};
