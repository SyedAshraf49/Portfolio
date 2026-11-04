import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

export type PixelProjectIconKind = 'transport' | 'attendance' | 'shield' | 'monitor';

export interface BentoCardProps {
  title?: string;
  description?: string;
  label?: string;
  href?: string;
  liveLink?: string;
  image?: string;
  pixelIcon?: PixelProjectIconKind;
  techStack?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const ProjectPixelIcon: React.FC<{ kind: PixelProjectIconKind }> = ({ kind }) => (
  <svg
    className="magic-bento-card__pixel-icon"
    viewBox="0 0 32 32"
    aria-hidden="true"
    focusable="false"
    shapeRendering="crispEdges"
  >
    {kind === 'transport' && (
      <>
        <rect x="5" y="4" width="22" height="17" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="8" y="7" width="7" height="6" fill="var(--pixel-bg-dark, #080d1b)" />
        <rect x="17" y="7" width="7" height="6" fill="var(--pixel-bg-dark, #080d1b)" />
        <rect x="8" y="8" width="2" height="2" fill="var(--pixel-white, #e8f2ff)" />
        <rect x="19" y="8" width="2" height="2" fill="var(--pixel-white, #e8f2ff)" />
        <rect x="5" y="17" width="22" height="4" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="2" y="21" width="28" height="3" fill="var(--pixel-bg-dark, #080d1b)" />
        <rect x="7" y="23" width="6" height="6" fill="var(--pixel-bg-dark, #080d1b)" />
        <rect x="20" y="23" width="6" height="6" fill="var(--pixel-bg-dark, #080d1b)" />
        <rect x="9" y="25" width="2" height="2" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="22" y="25" width="2" height="2" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="2" y="14" width="3" height="3" fill="var(--pixel-white, #e8f2ff)" />
        <rect x="27" y="14" width="3" height="3" fill="var(--pixel-white, #e8f2ff)" />
      </>
    )}
    {kind === 'attendance' && (
      <>
        <rect x="10" y="3" width="12" height="4" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="6" y="6" width="20" height="24" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="9" y="9" width="14" height="18" fill="var(--pixel-bg-dark, #080d1b)" />
        <rect x="11" y="12" width="3" height="3" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="12" y="13" width="2" height="2" fill="var(--pixel-white, #e8f2ff)" />
        <rect x="16" y="12" width="5" height="2" fill="var(--pixel-white, #e8f2ff)" />
        <rect x="11" y="18" width="3" height="3" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="12" y="19" width="2" height="2" fill="var(--pixel-white, #e8f2ff)" />
        <rect x="16" y="18" width="5" height="2" fill="var(--pixel-white, #e8f2ff)" />
        <rect x="11" y="24" width="3" height="2" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="16" y="24" width="5" height="2" fill="var(--pixel-white, #e8f2ff)" />
      </>
    )}
    {kind === 'shield' && (
      <>
        <rect x="11" y="3" width="10" height="4" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="6" y="7" width="20" height="6" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="8" y="13" width="16" height="6" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="11" y="19" width="10" height="5" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="14" y="24" width="4" height="5" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="12" y="10" width="8" height="8" fill="var(--pixel-bg-dark, #080d1b)" />
        <rect x="14" y="12" width="2" height="3" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="16" y="14" width="4" height="2" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="20" y="13" width="2" height="2" fill="var(--pixel-cyan, #8cc6ff)" />
      </>
    )}
    {kind === 'monitor' && (
      <>
        <rect x="3" y="4" width="26" height="19" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="6" y="7" width="20" height="13" fill="var(--pixel-bg-dark, #080d1b)" />
        <rect x="9" y="15" width="3" height="3" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="14" y="12" width="3" height="6" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="19" y="9" width="3" height="9" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="13" y="23" width="6" height="4" fill="var(--pixel-blue, #4d8dff)" />
        <rect x="9" y="27" width="14" height="3" fill="var(--pixel-cyan, #8cc6ff)" />
        <rect x="23" y="24" width="6" height="5" fill="var(--pixel-white, #e8f2ff)" />
        <rect x="25" y="22" width="2" height="2" fill="var(--pixel-white, #e8f2ff)" />
      </>
    )}
  </svg>
);

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '77, 141, 255';
const MOBILE_BREAKPOINT = 768;
const INITIAL_PROJECT_COUNT = 3;

const cardData: BentoCardProps[] = [
  {
    title: 'HateShieldAI',
    description: 'AI safety tool focused on toxicity detection, moderation checks, and safer content workflows.',
    label: 'AI Safety',
    href: 'https://github.com/SyedAshraf49/HateSheildAI-CLI',
    liveLink: 'https://hatesheildai-v3.onrender.com/',
    image: '/project-images/HateShieldAI.png',
    techStack: 'Python · Flask · Flask-CORS · scikit-learn · Joblib · Pillow · Transformers · PyTorch · HTML5 · CSS3 · JavaScript',
  },
  {
    title: 'Career Path Predictor',
    description: 'Machine learning project that analyzes profile inputs to recommend suitable career paths.',
    label: 'Machine Learning',
    href: 'https://github.com/SyedAshraf49/Carrer-Path-Predictor-FI',
    liveLink: 'https://carrer-path-predictor-fi.onrender.com/',
    image: '/project-images/Career-Path-Predictor.png',
    techStack: 'Python · Flask · scikit-learn · NumPy · pandas · HTML5 · CSS3 · JavaScript · Bootstrap · FPDF · BeautifulSoup',
  },
  {
    title: 'Local Vendor',
    description: 'Platform concept for connecting local vendors with customers through streamlined discovery and interactions.',
    label: 'Platform',
    href: 'https://github.com/SyedAshraf49/Local-Vendor__',
    liveLink: 'https://local-vendor-v2.vercel.app/',
    image: '/project-images/Local-Vendor.png',
    techStack: 'React.js · TypeScript · Vite · React Context API · JavaScript · CSS · Vercel',
  },
  {
    title: 'College Transport Tracker',
    description: 'Role-based transport prototype with student bus and ETA views, simulated driver trip controls, and administrator fleet and route analytics.',
    label: 'College Transport',
    href: 'https://github.com/SyedAshraf49/College-Transport-Tracking-',
    pixelIcon: 'transport',
    techStack: 'React · TypeScript · Vite · Tailwind CSS · Recharts',
  },
  {
    title: 'Student Attendance Management System',
    description: 'Role-based attendance frontend for administrators, teachers, students, and parents, covering attendance, leave workflows, timetables, and reports. Uses sample data and demo authentication.',
    label: 'Education',
    href: 'https://github.com/SyedAshraf49/Student-Attendance-Management-System',
    pixelIcon: 'attendance',
    techStack: 'React · TypeScript · Vite · Tailwind CSS · Recharts',
  },
  {
    title: 'ScreenGuard',
    description: 'Local-first screen-time and digital-wellbeing app with a PyQt6 desktop client and FastAPI dashboard for usage tracking, trends, recovery tools, and per-app limits.',
    label: 'Digital Wellbeing',
    href: 'https://github.com/SyedAshraf49/ScreenGuard',
    pixelIcon: 'shield',
    techStack: 'Python · PyQt6 · FastAPI · SQLite · psutil',
  },
  {
    title: 'System Monitor',
    description: 'Python desktop dashboard for live CPU, memory, disk, network, and process activity, with resource charts, process controls, configurable alerts, and optional sensor readings.',
    label: 'System Monitoring',
    href: 'https://github.com/SyedAshraf49/System-Monitor',
    pixelIcon: 'monitor',
    techStack: 'Python · PyQt5 · psutil · Qt Charts · SQLite',
  },
];

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR,
): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number,
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) {
      return;
    }

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor),
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) {
      return;
    }

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) {
          return;
        }

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' },
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) {
      return;
    }

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height),
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        },
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) {
      return;
    }

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) {
        return;
      }

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
        cards.forEach((card) => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach((card) => {
        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement>;
}> = ({ children, gridRef }) => (
  <div id="project-card-grid" className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const MagicBento: React.FC<BentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const visibleProjects = showMoreProjects
    ? cardData
    : cardData.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {visibleProjects.map((card, index) => {
          const baseClassName = `magic-bento-card ${
            textAutoHide ? 'magic-bento-card--text-autohide' : ''
          } ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''}`;
          const cardContent = (
            <>
              {card.image && (
                <div className="magic-bento-card__image-wrapper">
                  <img 
                    src={card.image} 
                    alt={`${card.title} preview`}
                    className="magic-bento-card__image"
                    loading="lazy"
                  />
                  <div className="magic-bento-card__image-overlay" />
                </div>
              )}
              {card.pixelIcon && (
                <div className="magic-bento-card__pixel-icon-wrapper" aria-hidden="true">
                  <ProjectPixelIcon kind={card.pixelIcon} />
                </div>
              )}
              <div className="magic-bento-card__header">
                <div className="magic-bento-card__label">{card.label}</div>
              </div>
              <div className="magic-bento-card__content">
                <h2 className="magic-bento-card__title">{card.title}</h2>
                <p className="magic-bento-card__description">{card.description}</p>
                {card.techStack && (
                  <div className="magic-bento-card__tech-stack">
                    {card.techStack}
                  </div>
                )}
                <div className="magic-bento-card__links">
                  {card.href && (
                    <a 
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="magic-bento-card__link-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="magic-bento-card__link-icon" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {card.liveLink && (
                    <a 
                      href={card.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="magic-bento-card__link-button magic-bento-card__link-button--live"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="magic-bento-card__link-icon" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </>
          );
          const cardProps = {
            className: baseClassName,
            style: {
              '--glow-color': glowColor,
            } as React.CSSProperties,
          };

          if (enableStars) {
            return (
              <ParticleCard
                key={card.href ?? `${card.title}-${index}`}
                {...cardProps}
                disableAnimations={shouldDisableAnimations}
                particleCount={particleCount}
                glowColor={glowColor}
                enableTilt={enableTilt}
                clickEffect={clickEffect}
                enableMagnetism={enableMagnetism}
              >
                {cardContent}
              </ParticleCard>
            );
          }

          return (
            <div key={card.href ?? `${card.title}-${index}`} {...cardProps}>
              {cardContent}
            </div>
          );
        })}
      </BentoCardGrid>
      {cardData.length > INITIAL_PROJECT_COUNT && (
        <div className="magic-bento-card__more-actions">
          <button
            type="button"
            className="magic-bento-card__more-button"
            aria-expanded={showMoreProjects}
            aria-controls="project-card-grid"
            onClick={() => setShowMoreProjects((expanded) => !expanded)}
          >
            {showMoreProjects ? 'View less' : 'View more'}
          </button>
        </div>
      )}
    </>
  );
};

export default MagicBento;
