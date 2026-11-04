import React, { useEffect, useState, useRef } from 'react';
import './pixel-dino.css';

interface PixelDinoProps {
  className?: string;
  animate?: boolean;
}

export const PixelDino: React.FC<PixelDinoProps> = ({ className = '', animate = true }) => {
  const [isStopped, setIsStopped] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Footer is visible, stop the shark
            setTimeout(() => {
              setIsStopped(true);
              // Show message after shark stops
              setTimeout(() => {
                setShowMessage(true);
              }, 500);
            }, 100);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of footer is visible
      }
    );

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`pixel-dino-wrapper ${isStopped ? 'stopped' : ''}`} style={{ opacity: 0.7 }}>
      <div className={`pixel-dino-container ${className} ${isStopped ? 'stopped' : ''}`}>
        <svg
          className="pixel-shark"
          width="60"
          height="40"
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pixel Art Shark */}
          <g className="shark-body" fill="var(--pixel-cyan)">
            {/* Tail */}
            <rect x="0" y="16" width="4" height="8" />
            <rect x="4" y="12" width="4" height="4" />
            <rect x="4" y="24" width="4" height="4" />
            
            {/* Back body */}
            <rect x="8" y="12" width="8" height="16" />
            
            {/* Top fin */}
            <rect x="12" y="4" width="4" height="8" />
            <rect x="16" y="0" width="4" height="4" />
            
            {/* Main body */}
            <rect x="16" y="12" width="20" height="16" />
            
            {/* Head/Nose */}
            <rect x="36" y="16" width="8" height="12" />
            <rect x="44" y="20" width="4" height="8" />
            
            {/* Eye */}
            <rect x="32" y="16" width="4" height="4" fill="var(--pixel-bg-dark)" />
            
            {/* Bottom fin */}
            <rect x="20" y="28" width="8" height="4" />
            <rect x="24" y="32" width="4" height="4" />
            
            {/* Gills (detail) */}
            <rect x="24" y="16" width="2" height="2" fill="var(--pixel-bg-dark)" opacity="0.3" />
            <rect x="28" y="16" width="2" height="2" fill="var(--pixel-bg-dark)" opacity="0.3" />
          </g>
        </svg>
        
        {/* Speech bubble */}
        {showMessage && (
          <div className="dino-speech-bubble">
            <div className="speech-content">
              Hello, have a nice day! 👋
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
