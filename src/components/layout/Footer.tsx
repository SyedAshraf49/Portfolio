import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/SyedAshraf49',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/syed-ashraf49',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/asher49_',
      icon: Instagram,
    },
  ];

  return (
    <footer className="border-t-4 border-[var(--pixel-green)] bg-[var(--pixel-bg-mid)] py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-[var(--pixel-white)] text-center md:text-left" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.8" }}>
            © {year} Syed Ashraf S.N
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            Built with React & Tailwind CSS
          </p>

          <nav
            className="flex gap-3"
            aria-label="Social links"
          >
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 border-4 border-[var(--pixel-cyan)] bg-[var(--pixel-bg-light)] text-[var(--pixel-cyan)] hover:bg-[var(--pixel-cyan)] hover:text-[var(--pixel-bg-dark)] hover:border-[var(--pixel-green)] shadow-[4px_4px_0_var(--pixel-bg-dark)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--pixel-bg-dark)] min-w-12 min-h-12"
                aria-label={`Visit my ${name} profile`}
              >
                <Icon size={20} />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-[var(--pixel-gray)] md:flex-row" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}>
          <p>Deployed on Vercel</p>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
};
