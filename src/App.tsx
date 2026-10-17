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
    <div className="retro-scanline relative min-h-screen overflow-hidden bg-slate-950">
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
        <header className="px-2 sm:px-4">
          <AnimatedHero className="mx-auto mt-2 flex w-full max-w-[95%] sm:w-[min(95%,72rem)] flex-col items-center gap-3 sm:gap-4 border-4 border-[var(--pixel-green)] bg-[var(--pixel-bg-mid)] p-4 sm:p-6 text-center shadow-[4px_4px_0_var(--pixel-bg-dark),4px_4px_0_0_var(--pixel-green)] sm:shadow-[8px_8px_0_var(--pixel-bg-dark),8px_8px_0_0_var(--pixel-green)] sm:mt-4 md:mt-8">
            <div className="w-full">
              <h1 className="text-base sm:text-2xl md:text-4xl font-normal tracking-tight text-[var(--pixel-green)] break-words" style={{ fontFamily: "'Press Start 2P', cursive", textShadow: "2px 2px 0 var(--pixel-cyan), 4px 4px 0 var(--pixel-bg-dark)", lineHeight: "1.8" }}>
                Syed Ashraf S.N
              </h1>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-[var(--pixel-cyan)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.8" }}>
                Software Developer | Full-Stack Developer and Tech Enthusiast
              </p>
            </div>
            <HeroDock />
          </AnimatedHero>
        </header>

        {/* Navigation */}
        <div className="sticky top-0 z-20 mt-2 sm:mt-4 px-2 sm:px-0">
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
        <main id="main-content" className="flex-1 pb-4 sm:pb-8 px-2 sm:px-4">
          {/* About Section */}
          <Section id="about" title="About Me">
            <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4 text-center text-xs sm:text-sm md:text-base leading-loose text-[var(--pixel-white)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "2" }}>
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
            <p className="text-center text-xs sm:text-sm md:text-base leading-loose text-[var(--pixel-white)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "2" }}>
              <strong className="text-[var(--pixel-green)]">BSc Computer Science</strong>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> — </span>
              Graduated 2026
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
