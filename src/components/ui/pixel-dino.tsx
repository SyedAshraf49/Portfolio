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
        width="88"
        height="94"
        viewBox="0 0 88 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dino body - Chrome style */}
        <g className="dino-body">
          {/* Head */}
          <rect x="48" y="0" width="8" height="8" fill="var(--pixel-cyan)" />
          <rect x="40" y="8" width="24" height="8" fill="var(--pixel-cyan)" />
          <rect x="32" y="16" width="32" height="8" fill="var(--pixel-cyan)" />
          
          {/* Eye */}
          <rect x="40" y="16" width="8" height="8" fill="var(--pixel-bg-dark)" />
          
          {/* Mouth area */}
          <rect x="24" y="24" width="40" height="8" fill="var(--pixel-cyan)" />
          <rect x="16" y="32" width="48" height="8" fill="var(--pixel-cyan)" />
          <rect x="16" y="40" width="48" height="8" fill="var(--pixel-cyan)" />
          
          {/* Body */}
          <rect x="16" y="48" width="56" height="8" fill="var(--pixel-cyan)" />
          <rect x="16" y="56" width="56" height="8" fill="var(--pixel-cyan)" />
          <rect x="16" y="64" width="40" height="8" fill="var(--pixel-cyan)" />
          
          {/* Tail */}
          <rect x="64" y="40" width="8" height="8" fill="var(--pixel-cyan)" />
          <rect x="72" y="32" width="8" height="8" fill="var(--pixel-cyan)" />
          <rect x="80" y="24" width="8" height="8" fill="var(--pixel-cyan)" />
          
          {/* Arms */}
          <rect x="24" y="48" width="8" height="8" fill="var(--pixel-cyan)" />
          <rect x="24" y="56" width="8" height="8" fill="var(--pixel-cyan)" />
          
          {/* Legs - Animated */}
          <g className="dino-leg-left">
            <rect x="24" y="72" width="8" height="8" fill="var(--pixel-cyan)" />
            <rect x="24" y="80" width="8" height="8" fill="var(--pixel-cyan)" />
            <rect x="16" y="88" width="16" height="6" fill="var(--pixel-cyan)" />
          </g>
          
          <g className="dino-leg-right">
            <rect x="40" y="72" width="8" height="8" fill="var(--pixel-cyan)" />
            <rect x="40" y="80" width="8" height="8" fill="var(--pixel-cyan)" />
            <rect x="32" y="88" width="16" height="6" fill="var(--pixel-cyan)" />
          </g>
        </g>
      </svg>
    </div>
  );
};
