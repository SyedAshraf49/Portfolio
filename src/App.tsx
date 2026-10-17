import { Section, Badge } from '@/components/common';
import { CosmicParallaxBg } from '@/components/ui/parallax-cosmic-background';
import HeroDock from '@/components/ui/dock';
import AnimeScrollbar from '@/components/ui/anime-scrollbar';
import { AnimatedHero } from '@/components/ui/animated-hero';
import '@/components/ui/animated-hero.css';
import GooeyNav from './GooeyNav';
import MagicBento from './MagicBento';
import { useThemeSafe } from '@/hooks/useTheme';

// Sections
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 pixel-scanline">
      <SkipLink />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <CosmicParallaxBg head="" text="" loop={true} />
      </div>

      {/* Custom Scrollbar */}
      <AnimeScrollbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header - Pixel Art Style */}
        <header>
          <AnimatedHero className="mx-auto mt-4 flex w-[min(95%,72rem)] flex-col items-center gap-4 border-4 border-[var(--pixel-green)] bg-[var(--pixel-bg-mid)] p-6 text-center shadow-[8px_8px_0_var(--pixel-bg-dark),8px_8px_0_0_var(--pixel-green)] md:mt-8">
            <div>
              <h1 className="text-xl font-normal tracking-tight text-[var(--pixel-green)] md:text-2xl" style={{ fontFamily: "'Press Start 2P', cursive", textShadow: "2px 2px 0 var(--pixel-cyan), 4px 4px 0 var(--pixel-bg-dark)" }}>
                Syed Ashraf S.N
              </h1>
              <p className="mt-4 text-[0.5rem] leading-relaxed text-[var(--pixel-cyan)] md:text-[0.6rem]" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                Software Developer | Full-Stack Developer and Tech Enthusiast
              </p>
            </div>
            <HeroDock />
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
            <div className="mx-auto max-w-4xl space-y-4 text-center text-[0.55rem] leading-loose text-[var(--pixel-white)] md:text-[0.65rem]" style={{ fontFamily: "'Press Start 2P', cursive" }}>
              <p>
                I'm <strong className="text-[var(--pixel-green)]">Syed Ashraf</strong>, a passionate developer
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
            <p className="text-center text-[0.6rem] leading-loose text-[var(--pixel-white)] md:text-[0.7rem]" style={{ fontFamily: "'Press Start 2P', cursive" }}>
              <strong className="text-[var(--pixel-green)]">BSc Computer Science</strong> — Graduated 2026
              <br />
              <span className="text-[var(--pixel-cyan)]">CGPA: 8.44 / 10.0</span>
            </p>
          </Section>

          {/* Skills Section */}
          <SkillsSection />

          {/* Certifications Section */}
          <CertificationsSection />

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
