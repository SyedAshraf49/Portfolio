import React, { useState } from 'react';
import { CERTIFICATIONS } from '@/constants/data';
import { Button } from '@/components/common';
import './CertificationsPage.css';

export const CertificationsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  // Get unique issuers for filtering
  const issuers = Array.from(new Set(CERTIFICATIONS.map(cert => cert.issuer))).sort();

  const filteredCerts = filter === 'all' 
    ? CERTIFICATIONS 
    : CERTIFICATIONS.filter(cert => cert.issuer === filter);

  const handleBackHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="certifications-page pixel-scanline">
      {/* Header */}
      <header className="certifications-header">
        <div className="certifications-header-content">
          <Button 
            variant="tertiary" 
            size="sm"
            onClick={handleBackHome}
            className="back-button"
          >
            ← Back to Home
          </Button>
          
          <h1 className="certifications-page-title" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            All Certifications
          </h1>
          
          <p className="certifications-page-subtitle" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            {CERTIFICATIONS.length} Professional Certifications
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="certifications-filter">
        <div className="filter-container">
          <label className="filter-label" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Filter by Issuer:
          </label>
          <div className="filter-buttons">
            <button
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              All ({CERTIFICATIONS.length})
            </button>
            {issuers.map(issuer => {
              const count = CERTIFICATIONS.filter(c => c.issuer === issuer).length;
              return (
                <button
                  key={issuer}
                  className={`filter-button ${filter === issuer ? 'active' : ''}`}
                  onClick={() => setFilter(issuer)}
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  {issuer} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <main className="certifications-main">
        <div className="certifications-full-grid">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id}
              className="certification-full-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="certification-full-card-inner">
                {/* Featured badge */}
                {cert.featured && (
                  <div className="featured-badge" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    FEATURED
                  </div>
                )}

                {/* Logo */}
                <div className="certification-full-logo">
                  <img 
                    src={`https://cdn.simpleicons.org/${cert.logo}/white`}
                    alt={`${cert.issuer} logo`}
                    className="certification-full-logo-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <span className="certification-full-logo-fallback hidden">
                    {cert.issuer.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Content */}
                <div className="certification-full-content">
                  <h3 className="certification-full-title" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    {cert.title}
                  </h3>
                  <p className="certification-full-issuer" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    {cert.issuer}
                  </p>
                </div>

                {/* Decorative corner pixels */}
                <div className="certification-corners" aria-hidden="true">
                  <span className="corner corner-tl"></span>
                  <span className="corner corner-tr"></span>
                  <span className="corner corner-bl"></span>
                  <span className="corner corner-br"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="no-results" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            No certifications found for this filter.
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="certifications-footer">
        <Button 
          variant="primary" 
          size="lg"
          onClick={handleBackHome}
          className="footer-back-button"
        >
          ← Back to Portfolio
        </Button>
      </footer>
    </div>
  );
};
