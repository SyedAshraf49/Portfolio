import React from 'react';
import { Section, Button } from '../common';
import { CERTIFICATIONS } from '@/constants/data';
import './CertificationsSection.css';

export const CertificationsSection: React.FC = () => {
  const featuredCerts = CERTIFICATIONS.filter(cert => cert.featured);

  const handleViewAll = () => {
    // Navigate to certifications page
    window.location.href = '/certifications';
  };

  return (
    <Section id="certifications" title="Certifications">
      <div className="certifications-preview">
        <p className="certifications-intro" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          Top Featured Certifications
        </p>
        
        <div className="certifications-grid">
          {featuredCerts.map((cert, index) => (
            <div
              key={cert.id}
              className="certification-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="certification-card-inner">
                {/* Logo */}
                <div className="certification-logo">
                  <img 
                    src={`https://cdn.simpleicons.org/${cert.logo}/white`}
                    alt={`${cert.issuer} logo`}
                    className="certification-logo-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <span className="certification-logo-fallback hidden">
                    {cert.issuer.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Content */}
                <div className="certification-content">
                  <h3 className="certification-title" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    {cert.title}
                  </h3>
                  <p className="certification-issuer" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    {cert.issuer}
                  </p>
                </div>

                {/* Badge decoration */}
                <div className="certification-badge" aria-hidden="true">
                  ★
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-actions">
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleViewAll}
            className="view-all-button"
          >
            View All Certifications ({CERTIFICATIONS.length})
          </Button>
        </div>
      </div>
    </Section>
  );
};
