import React, { useEffect, useState } from 'react';
import './pixel-dino.css';

interface PixelDinoProps {
  className?: string;
  animate?: boolean;
}

export const PixelDino: React.FC<PixelDinoProps> = ({ className = '', animate = true }) => {
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    if (!animate) return;

    const jumpInterval = setInterval(() => {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }, 3000);

    return () => clearInterval(jumpInterval);
  }, [animate]);

  return (
    <div className={`pixel-dino-container ${className}`}>
      <svg
        className={`pixel-dino ${isJumping ? 'jumping' : ''}`}
        width="44"
        height="47"
        viewBox="0 0 44 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chrome T-Rex Dinosaur - Simplified and accurate */}
        <g className="dino-body" fill="var(--pixel-cyan)">
          {/* Head outline */}
          <rect x="24" y="0" width="4" height="4" />
          <rect x="20" y="4" width="12" height="4" />
          <rect x="16" y="8" width="16" height="4" />
          
          {/* Eye */}
          <rect x="20" y="8" width="4" height="4" fill="var(--pixel-bg-dark)" />
          
          {/* Mouth/Nose area */}
          <rect x="12" y="12" width="20" height="4" />
          <rect x="8" y="16" width="24" height="4" />
          <rect x="8" y="20" width="24" height="4" />
          
          {/* Body */}
          <rect x="8" y="24" width="28" height="4" />
          <rect x="8" y="28" width="28" height="4" />
          <rect x="8" y="32" width="20" height="4" />
          
          {/* Tail */}
          <rect x="32" y="20" width="4" height="4" />
          <rect x="36" y="16" width="4" height="4" />
          <rect x="40" y="12" width="4" height="4" />
          
          {/* Arms (small) */}
          <rect x="12" y="24" width="4" height="4" />
          <rect x="12" y="28" width="4" height="4" />
          
          {/* Legs - Animated */}
          <g className="dino-leg-left">
            <rect x="12" y="36" width="4" height="4" />
            <rect x="12" y="40" width="4" height="4" />
            <rect x="8" y="44" width="8" height="3" />
          </g>
          
          <g className="dino-leg-right">
            <rect x="20" y="36" width="4" height="4" />
            <rect x="20" y="40" width="4" height="4" />
            <rect x="16" y="44" width="8" height="3" />
          </g>
        </g>
      </svg>
    </div>
  );
};
