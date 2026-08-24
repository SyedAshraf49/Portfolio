import { useEffect } from 'react';

const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT?.replace(/\/$/, '');
const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

export const PrivacyFriendlyAnalytics = () => {
  useEffect(() => {
    if (!analyticsEndpoint || !websiteId || document.querySelector('[data-portfolio-analytics]')) {
      return;
    }

    const script = document.createElement('script');
    script.defer = true;
    script.src = `${analyticsEndpoint}/script.js`;
    script.dataset.websiteId = websiteId;
    script.dataset.portfolioAnalytics = 'true';
    document.head.appendChild(script);
  }, []);

  return null;
};
