import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Home, Radio } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import './NotFound.css';

export const NotFound: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = '404 — Page Not Found | Syed Ashraf S.N';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="not-found-page">
      <div className="not-found-page__stars" aria-hidden="true" />

      <header className="not-found-header">
        <a className="not-found-brand" href="/" aria-label="Return to Syed Ashraf S.N portfolio">
          <span className="not-found-brand__mark">&gt;_</span>
          <span>Syed Ashraf S.N</span>
        </a>
        <span className="not-found-header__label">Route status: offline</span>
      </header>

      <main className="not-found-main">
        <section className="not-found-card" aria-labelledby="not-found-title">
          <div className="not-found-card__signal" aria-hidden="true">
            <Radio size={18} />
            <span>Signal not found</span>
          </div>
          <p className="not-found-card__code">ERROR_CODE: 404</p>
          <h1 id="not-found-title">This page drifted into deep space.</h1>
          <p className="not-found-card__description">
            The route you requested does not exist or may have moved. Let&apos;s get you back to something useful.
          </p>
          <div className="not-found-card__actions">
            <a className="not-found-card__action not-found-card__action--primary" href="/">
              <Home size={16} aria-hidden="true" />
              Back to home
            </a>
            <a className="not-found-card__action not-found-card__action--secondary" href="/#projects">
              Explore projects
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <a className="not-found-card__back" href="/">
            <ArrowLeft size={14} aria-hidden="true" />
            Return to the main portfolio
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};
