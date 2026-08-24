import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import './LegalPage.css';

type LegalPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  pageTitle: string;
  children: React.ReactNode;
};

export const LegalPage: React.FC<LegalPageProps> = ({
  title,
  eyebrow,
  description,
  pageTitle,
  children,
}) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${pageTitle} | Syed Ashraf S.N`;
    return () => {
      document.title = previousTitle;
    };
  }, [pageTitle]);

  return (
    <div className="legal-page-shell">
      <div className="legal-page-shell__glow" aria-hidden="true" />
      <header className="legal-page-header">
        <div className="legal-page-header__inner">
          <a className="legal-page-brand" href="/" aria-label="Return to Syed Ashraf S.N portfolio">
            <span className="legal-page-brand__mark">&gt;_</span>
            <span>Syed Ashraf S.N</span>
          </a>
          <a className="legal-page-back" href="/">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to portfolio
          </a>
        </div>
      </header>

      <main className="legal-page-main">
        <article className="legal-page-card">
          <div className="legal-page-card__intro">
            <p className="legal-page-eyebrow">
              <ShieldCheck size={15} aria-hidden="true" />
              {eyebrow}
            </p>
            <h1>{title}</h1>
            <p className="legal-page-description">{description}</p>
            <p className="legal-page-updated">Last updated: August 24, 2026</p>
          </div>

          <div className="legal-page-content">{children}</div>

          <aside className="legal-page-note">
            <strong>Questions?</strong>
            <span>
              Contact <a href="mailto:galladeashraf@gmail.com">galladeashraf@gmail.com</a> about this policy or these terms.
            </span>
          </aside>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export const ExternalPolicyLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a className="legal-page-external-link" href={href} target="_blank" rel="noreferrer">
    {children}
    <ExternalLink size={13} aria-hidden="true" />
  </a>
);
