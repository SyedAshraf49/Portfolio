import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import './breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: 'chevron' | 'slash' | 'dot';
  showHome?: boolean;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = 'chevron',
  showHome = true,
  className = '',
}) => {
  const renderSeparator = () => {
    switch (separator) {
      case 'slash':
        return <span className="breadcrumb-separator">/</span>;
      case 'dot':
        return <span className="breadcrumb-separator">•</span>;
      case 'chevron':
      default:
        return (
          <span className="breadcrumb-separator" aria-hidden="true">
            <ChevronRight size={16} />
          </span>
        );
    }
  };

  const allItems = showHome
    ? [{ label: 'Home', href: '#about', active: false }, ...items]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumb-nav ${className}`}>
      <ol className="breadcrumb-list">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isActive = item.active || isLast;

          return (
            <li key={`${item.label}-${index}`} className="breadcrumb-item">
              {showHome && index === 0 && (
                <span className="breadcrumb-home-icon" aria-hidden="true">
                  <Home size={14} />
                </span>
              )}
              {item.href && !isActive ? (
                <a
                  href={item.href}
                  className="breadcrumb-link"
                  onClick={(e) => {
                    if (item.href?.startsWith('#')) {
                      e.preventDefault();
                      const section = document.querySelector(item.href);
                      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`breadcrumb-text ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && renderSeparator()}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
