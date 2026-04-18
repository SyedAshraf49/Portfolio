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
      href: 'https://linkedin.com/in/syedashraf49',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/syedashraf49',
      icon: Instagram,
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/65 py-6 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-400">
            © {year} Syed Ashraf S.N | Built with React & Tailwind CSS
          </p>

          <nav
            className="flex gap-2"
            aria-label="Social links"
          >
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 transition hover:text-cyan-400 hover:bg-slate-900/50 min-w-12 min-h-12"
                aria-label={`Visit my ${name} profile`}
              >
                <Icon size={24} />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 md:flex-row">
          <p>Deployed on Vercel</p>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
};
