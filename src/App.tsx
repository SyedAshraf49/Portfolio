import { Section, Badge, ThemeToggle } from '@/components/common';
import { CosmicParallaxBg } from '@/components/ui/parallax-cosmic-background';
import HeroDock from '@/components/ui/dock';
import AnimeScrollbar from '@/components/ui/anime-scrollbar';
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
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
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
        <header className="mx-auto mt-4 flex w-[min(95%,72rem)] flex-col items-center gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/70 via-sky-500/50 to-fuchsia-500/60 p-6 text-center shadow-xl md:mt-8 relative">
          <div className="absolute right-6 top-6">
            <ThemeToggle variant="icon" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Syed Ashraf S.N
            </h1>
            <p className="mt-2 text-sm text-slate-100 md:text-base">
              Computer Science Student | Cybersecurity and AI Enthusiast
            </p>
          </div>
          <HeroDock />
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
              <strong className="text-white">BSc Computer Science</strong> - Pursuing
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
              glowColor="132, 0, 255"
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
