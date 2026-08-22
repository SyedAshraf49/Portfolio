import React from 'react';

interface AnimatedHeroProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedHero: React.FC<AnimatedHeroProps> = ({ children, className = '' }) => {
  return (
    <div className={`animated-hero ${className}`}>
      {children}
    </div>
  );
};
