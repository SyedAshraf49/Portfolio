import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { CERTIFICATIONS } from '@/constants/data';
import './skill-detail-modal.css';

interface Project {
  title: string;
  description: string;
  image?: string;
  href?: string;
  liveLink?: string;
  techStack?: string;
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  logo: string;
}

interface SkillDetailModalProps {
  skillName: string;
  skillCategory: string;
  skillColor: string;
  projects: Project[];
  certifications: Certification[];
  onClose: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  skillName,
  skillCategory,
  skillColor,
  projects,
  certifications,
  onClose,
}) => {
  // No scanning delay - show content immediately
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Just trigger entrance animation
    setIsVisible(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const hasProjects = projects.length > 0;
  const hasCertifications = certifications.length > 0;

  return (
    <div className="skill-modal-backdrop" onClick={handleBackdropClick}>
      <div className={`skill-modal ${isVisible ? 'visible' : ''}`} style={{ '--skill-color': skillColor } as React.CSSProperties}>
        {/* Header */}
        <div className="skill-modal-header">
          <div className="skill-modal-title-group">
            <h2 className="skill-modal-title">{skillName}</h2>
            <span className="skill-modal-category">{skillCategory}</span>
          </div>
          <button 
            className="skill-modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="skill-modal-body">
              {/* Projects Section */}
              {hasProjects ? (
                <div className="skill-modal-section">
                  <h3 className="skill-modal-section-title">
                    <span className="section-icon">🚀</span>
                    Projects ({projects.length})
                  </h3>
                  <div className="skill-modal-grid">
                    {projects.map((project, index) => (
                      <div 
                        key={index} 
                        className="skill-modal-card"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {project.image && (
                          <div className="skill-card-image-wrapper">
                            <img 
                              src={project.image}
                              alt={project.title}
                              className="skill-card-image"
                            />
                          </div>
                        )}
                        <div className="skill-card-content">
                          <h4 className="skill-card-title">{project.title}</h4>
                          <p className="skill-card-description">{project.description}</p>
                          {project.techStack && (
                            <p className="skill-card-tech">{project.techStack}</p>
                          )}
                          <div className="skill-card-links">
                            {project.href && (
                              <a 
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                className="skill-card-link"
                              >
                                <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                GitHub
                              </a>
                            )}
                            {project.liveLink && (
                              <a 
                                href={project.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="skill-card-link skill-card-link--live"
                              >
                                <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                                  <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                  <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg>
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="skill-modal-section">
                  <h3 className="skill-modal-section-title">
                    <span className="section-icon">🚀</span>
                    Projects
                  </h3>
                  <div className="skill-modal-empty">
                    <p>No projects mapped to this skill yet.</p>
                  </div>
                </div>
              )}

              {/* Certifications Section */}
              {hasCertifications ? (
                <div className="skill-modal-section">
                  <h3 className="skill-modal-section-title">
                    <span className="section-icon">🏆</span>
                    Certifications ({certifications.length})
                  </h3>
                  <div className="skill-modal-grid skill-modal-grid--certs">
                    {certifications.map((cert, index) => (
                      <div 
                        key={cert.id} 
                        className="skill-modal-cert-card"
                        style={{ animationDelay: `${(hasProjects ? projects.length : 0) * 0.05 + index * 0.05}s` }}
                      >
                        <div className="skill-cert-logo">
                          <img 
                            src={cert.logo.startsWith('/') ? cert.logo : `https://cdn.simpleicons.org/${cert.logo}/white`}
                            alt={`${cert.issuer} logo`}
                            className="skill-cert-logo-img"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="skill-cert-content">
                          <h4 className="skill-cert-title">{cert.title}</h4>
                          <p className="skill-cert-issuer">{cert.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="skill-modal-section">
                  <h3 className="skill-modal-section-title">
                    <span className="section-icon">🏆</span>
                    Certifications
                  </h3>
                  <div className="skill-modal-empty">
                    <p>No certifications mapped to this skill yet.</p>
                  </div>
                </div>
              )}
            </div>
      </div>
    </div>
  );
};
