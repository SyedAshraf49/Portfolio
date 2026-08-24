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
import { ContactSection } from '@/components/sections/ContactSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';

// Layout
import { Footer } from '@/components/layout/Footer';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsAndConditions } from '@/pages/TermsAndConditions';
import { NotFound } from '@/pages/NotFound';

// Accessibility
import { SkipLink } from '@/components/accessibility';

// Constants
import { NAVIGATION_ITEMS } from '@/constants/data';

export default function App() {
  // Initialize theme system
  useThemeSafe();

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  if (pathname === '/privacy-policy') {
    return <PrivacyPolicy />;
  }
  if (pathname === '/terms-and-conditions') {
    return <TermsAndConditions />;
  }
  if (pathname !== '/') {
    return <NotFound />;
  }

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
          <AnimatedHero className="hero-original mx-auto mt-4 flex w-[min(95%,72rem)] flex-col items-center gap-4 rounded-3xl border border-amber-200/15 bg-gradient-to-br from-black/90 via-[#071a33]/88 to-[#102d52]/88 p-6 text-center shadow-xl shadow-black/35 md:mt-8">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-amber-100/90 md:text-4xl">
                Syed Ashraf S.N
              </h1>
              <p className="mt-2 text-sm text-slate-200/85 md:text-base">
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

          {/* Certifications Section */}
          <CertificationsSection />
          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
