import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import './dock.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/SyedAshraf49', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-ashraf49', Icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/asher49_', Icon: Instagram },
  { label: 'Email', href: 'mailto:galladeashraf@gmail.com', Icon: Mail },
];

export default function HeroDock() {
  return (
    <nav className="pixel-dock" aria-label="Social links">
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          className="pixel-dock__link"
          href={href}
          aria-label={label}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
        >
          <Icon className="pixel-dock__icon" aria-hidden="true" strokeWidth={2} />
          <span className="pixel-dock__tooltip" aria-hidden="true">{label}</span>
        </a>
      ))}
    </nav>
  );
}
