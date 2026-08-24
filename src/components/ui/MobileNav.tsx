import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/constants/data';
import './MobileNav.css';

type MobileNavItem = (typeof NAVIGATION_ITEMS)[number];

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(() => window.location.hash || '#about');

  useEffect(() => {
    const updateActiveHref = () => setActiveHref(window.location.hash || '#about');
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('hashchange', updateActiveHref);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('hashchange', updateActiveHref);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const handleItemClick = (item: MobileNavItem) => {
    setIsOpen(false);
    if (item.href.startsWith('#')) setActiveHref(item.href);
  };

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <div className="mobile-nav__bar">
        <span className="mobile-nav__label">Navigate portfolio</span>
        <button
          type="button"
          className="mobile-nav__toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-nav__menu ${isOpen ? 'mobile-nav__menu--open' : ''}`} id="mobile-nav-menu">
        <div className="mobile-nav__links">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = !item.isResume && activeHref === item.href;
            return (
              <a
                className={`mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                href={item.href}
                key={item.label}
                onClick={() => handleItemClick(item)}
              >
                <span>{item.label}</span>
                {item.isResume && <span className="mobile-nav__resume-note">PDF</span>}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
