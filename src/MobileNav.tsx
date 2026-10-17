import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import './MobileNav.css';

interface NavItem {
  label: string;
  href: string;
  isResume?: boolean;
}

interface MobileNavProps {
  items: NavItem[];
  initialActiveIndex?: number;
}

const MobileNav: React.FC<MobileNavProps> = ({ items, initialActiveIndex = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (href: string, index: number, isResume?: boolean) => {
    setActiveIndex(index);
    setIsOpen(false);

    if (isResume) {
      // Let the browser handle the download/open
      return;
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
        <span className="mobile-nav-toggle-text">Menu</span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <h2 className="mobile-nav-title">Navigation</h2>
          <button
            className="mobile-nav-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {items.map((item, index) => (
              <li key={item.label} className="mobile-nav-item">
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeIndex === index ? 'active' : ''}`}
                  onClick={(e) => {
                    if (!item.isResume && item.href.startsWith('#')) {
                      e.preventDefault();
                    }
                    handleNavClick(item.href, index, item.isResume);
                  }}
                >
                  <span className="mobile-nav-link-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="mobile-nav-link-text">{item.label}</span>
                  <span className="mobile-nav-link-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Decorative Elements */}
        <div className="mobile-nav-decoration">
          <div className="mobile-nav-scan-line" />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
