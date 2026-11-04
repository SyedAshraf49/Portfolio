import { useEffect, useRef, useState } from 'react';
import './pixel-shark.css';

type SharkPhase = 'waiting' | 'swimming' | 'greeting';

export const PixelShark = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<SharkPhase>('waiting');

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    if (typeof IntersectionObserver === 'undefined') {
      setPhase('swimming');
      return;
    }

    // Watch the whole footer so the greeting remains visible while the visitor is there.
    const target = stage.closest('footer') ?? stage;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPhase((current) => {
          if (entry.isIntersecting) return current === 'waiting' ? 'swimming' : current;
          return 'waiting';
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleSwimEnd = () => {
    setPhase((current) => (current === 'swimming' ? 'greeting' : current));
  };

  return (
    <div ref={stageRef} className="pixel-shark-stage">
      <div
        className={`pixel-shark-runner phase-${phase}`}
        onAnimationEnd={handleSwimEnd}
      >
        <svg
          className="pixel-shark-art"
          viewBox="0 0 144 88"
          role="img"
          aria-label="A pixel-art shark swimming across the footer"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="crispEdges"
        >
          <g transform="translate(144 0) scale(-1 1)">
            <g className="pixel-shark-tail" fill="var(--shark-body)">
              <rect x="0" y="16" width="8" height="16" />
              <rect x="8" y="24" width="8" height="16" />
              <rect x="0" y="48" width="8" height="16" />
              <rect x="8" y="40" width="8" height="16" />
              <rect x="16" y="32" width="16" height="16" />
            </g>

            <g fill="var(--shark-body)">
              <rect x="24" y="24" width="88" height="32" />
              <rect x="112" y="32" width="16" height="16" />
              <rect x="128" y="40" width="8" height="8" />

              {/* Dorsal fin */}
              <rect x="56" y="16" width="32" height="8" />
              <rect x="64" y="8" width="16" height="8" />
              <rect x="72" y="0" width="8" height="8" />

              {/* Pectoral and lower fins */}
              <rect x="40" y="56" width="16" height="8" />
              <rect x="40" y="64" width="8" height="8" />
              <rect x="72" y="56" width="16" height="8" />
              <rect x="80" y="64" width="8" height="8" />
              <rect x="80" y="72" width="8" height="8" />
            </g>

            {/* Pale belly and pixel teeth */}
            <g fill="var(--shark-belly)">
              <rect x="48" y="48" width="64" height="8" />
              <rect x="112" y="48" width="8" height="4" />
              <rect x="124" y="48" width="4" height="4" />
            </g>

            {/* Gills */}
            <g fill="var(--shark-shadow)">
              <rect x="88" y="32" width="4" height="16" />
              <rect x="96" y="32" width="4" height="16" />
              <rect x="104" y="32" width="4" height="16" />
              <rect x="124" y="52" width="8" height="4" />
            </g>

            {/* Eye and highlight */}
            <rect x="116" y="28" width="8" height="8" fill="var(--shark-eye)" />
            <rect x="120" y="28" width="4" height="4" fill="var(--shark-belly)" />
          </g>

          {/* A few tiny bubbles give the swim a little life. */}
          <g className="pixel-shark-bubbles" fill="var(--shark-belly)">
            <rect x="16" y="12" width="4" height="4" />
            <rect x="28" y="4" width="4" height="4" />
            <rect x="36" y="16" width="4" height="4" />
          </g>
        </svg>

        {phase === 'greeting' && (
          <div className="pixel-shark-greeting" role="status" aria-live="polite">
            Hello, have a nice day!
          </div>
        )}
      </div>
    </div>
  );
};
