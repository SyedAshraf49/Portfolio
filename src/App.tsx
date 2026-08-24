import { Section } from '@/components/common';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { CosmicParallaxBg } from '@/components/ui/parallax-cosmic-background';
import HeroDock from '@/components/ui/dock';
import AnimeScrollbar from '@/components/ui/anime-scrollbar';
import { AnimatedHero } from '@/components/ui/animated-hero';
import '@/components/ui/animated-hero.css';
import '@/components/ui/portfolio-hero.css';
import GooeyNav from './GooeyNav';
import MagicBento from './MagicBento';
import { useThemeSafe } from '@/hooks/useTheme';

// Sections
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';

// Layout
import { Footer } from '@/components/layout/Footer';

// Accessibility
import { SkipLink } from '@/components/accessibility';

// Constants
import { NAVIGATION_ITEMS } from '@/constants/data';

export default function App() {
  // Initialize theme system
  useThemeSafe();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950">
      <SkipLink />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <CosmicParallaxBg head="" text="" loop={true} />
      </div>

      {/* Custom Scrollbar */}
      <AnimeScrollbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header>
          <AnimatedHero className="portfolio-hero mx-auto mt-4 w-[min(95%,72rem)] rounded-3xl border border-white/10 shadow-xl md:mt-8">
            <div className="portfolio-hero__content">
              <div className="portfolio-hero__copy">
                <div className="portfolio-hero__eyebrow">
                  <span className="portfolio-hero__status">
                    <span className="portfolio-hero__status-dot" aria-hidden="true" />
                    Available for opportunities
                  </span>
                  <span className="portfolio-hero__location">Chennai · Open to remote</span>
                </div>

                <h1 className="portfolio-hero__title">
                  Building intelligent products at the intersection of{' '}
                  <span>AI, systems, and user experience.</span>
                </h1>

                <p className="portfolio-hero__description">
                  I&apos;m Syed Ashraf, a full-stack developer who turns complex ideas into
                  production-ready applications, from AI/ML safety tools to dependable web systems.
                </p>

                <div className="portfolio-hero__actions">
                  <a className="portfolio-hero__action portfolio-hero__action--primary" href="#projects">
                    Explore my work
                    <ArrowDown aria-hidden="true" size={17} strokeWidth={2.4} />
                  </a>
                  <a
                    className="portfolio-hero__action portfolio-hero__action--secondary"
                    href="/resume/Syed Ashraf S N Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download résumé
                    <Download aria-hidden="true" size={16} strokeWidth={2.2} />
                  </a>
                </div>
              </div>

              <div className="portfolio-hero__signal" aria-label="Current technical focus">
                <div className="portfolio-hero__signal-icon" aria-hidden="true">
                  <Sparkles size={20} strokeWidth={1.8} />
                </div>
                <span className="portfolio-hero__signal-label">Current focus</span>
                <strong>AI/ML safety &amp; full-stack systems</strong>
                <div className="portfolio-hero__tags" aria-label="Primary technologies">
                  <span>Python</span>
                  <span>React</span>
                  <span>Flask</span>
                </div>
              </div>
            </div>

            <div className="portfolio-hero__socials">
              <span className="portfolio-hero__socials-label">Connect with me</span>
              <HeroDock />
            </div>
          </AnimatedHero>
        </header>

        {/* Navigation */}
        <div className="sticky top-0 z-20 mt-4">
          <div style={{ height: '78px', position: 'relative' }}>
            <GooeyNav
              items={NAVIGATION_ITEMS}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>

        {/* Main Content */}
        <main id="main-content" className="flex-1 pb-8">
          {/* About Section */}
          <Section id="about" title="About Me">
            <div className="mx-auto max-w-4xl space-y-4 text-center text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>
                I&apos;m <strong className="text-white">Syed Ashraf</strong>, a passionate developer
                building intelligent, production-ready applications at the intersection of machine
                learning, backend systems, and user experience.
              </p>
              <p>
                My work spans AI/ML safety tooling, system utilities, and intelligent prediction
                systems, with a focus on clear architecture, practical automation, and polished
                delivery.
              </p>
            </div>
          </Section>

          {/* Experience Section */}
          <ExperienceSection />

          {/* Education Section */}
          <Section id="education" title="Education">
            <p className="text-center text-lg text-[var(--muted)]">
              <strong className="text-white">BSc Computer Science</strong> — Graduated 2026
              <br />
              <span className="text-[var(--muted)]">CGPA: 8.44 / 10.0</span>
            </p>
          </Section>

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects Section */}
          <Section id="projects" title="Projects">
            <MagicBento
              textAutoHide={true}
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={400}
              particleCount={12}
              glowColor="25, 118, 210"
              disableAnimations={false}
            />
          </Section>

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
