/**
 * Analytics Integration Guide
 * 
 * This document outlines how to integrate analytics tracking into your portfolio
 * to understand visitor behavior, traffic sources, and user engagement.
 */

export const ANALYTICS_INTEGRATION_GUIDE = {
  // =========================================================================
  // 1. RECOMMENDED ANALYTICS OPTIONS
  // =========================================================================
  options: {
    vercelAnalytics: {
      name: 'Vercel Analytics',
      description: 'Built-in analytics from Vercel hosting platform',
      pros: [
        'Zero-configuration setup (just enable in dashboard)',
        'Automatic Web Vitals tracking',
        'Performance insights included',
        'Seamless integration with existing Vercel deployment',
        'Privacy-focused (no third-party cookies)',
        'Real-time data',
      ],
      cons: [
        'Limited to Vercel-hosted projects',
        'Less granular event tracking',
        'Reports are more generic',
      ],
      pricing: 'Free tier available, paid plans available',
      setupTime: '5 minutes',
      recommendation: 'BEST for portfolio site (already on Vercel)',
    },

    googleAnalytics: {
      name: 'Google Analytics 4 (GA4)',
      description: 'Industry-standard analytics from Google',
      pros: [
        'Comprehensive event tracking',
        'Detailed user journey analysis',
        'Conversion funnel tracking',
        'Integration with Google Ads',
        'Cross-platform tracking',
        'Free tier covers most sites',
      ],
      cons: [
        'Requires configuration',
        'Privacy concerns (third-party tracking)',
        'Interface is complex for beginners',
        'Cookie consent required in EU',
      ],
      pricing: 'Free for most websites',
      setupTime: '15-20 minutes',
      recommendation: 'Good for detailed insights but requires compliance',
    },

    plausible: {
      name: 'Plausible Analytics',
      description: 'Privacy-first alternative to Google Analytics',
      pros: [
        'Privacy-focused (no cookies, GDPR compliant)',
        'Simple, clean interface',
        'Real-time data',
        'No cookie consent needed',
        'Lightweight script',
        'Fair pricing',
      ],
      cons: [
        'Paid plans only (no free tier)',
        'Less detailed event tracking',
        'Smaller ecosystem',
      ],
      pricing: '$29/month starting',
      setupTime: '10 minutes',
      recommendation: 'Great for privacy-conscious sites',
    },

    mixpanel: {
      name: 'Mixpanel',
      description: 'Product analytics focused on user behavior',
      pros: [
        'Excellent event tracking',
        'Cohort analysis',
        'User journey funnels',
        'Very granular tracking',
      ],
      cons: [
        'Expensive for small sites',
        'More complex setup',
        'Overkill for simple portfolios',
      ],
      pricing: '$999/month+',
      setupTime: '30 minutes',
      recommendation: 'Overkill for portfolio, better for products',
    },
  },

  // =========================================================================
  // 2. VERCEL ANALYTICS SETUP (RECOMMENDED)
  // =========================================================================
  vercelSetup: {
    steps: [
      {
        number: 1,
        title: 'Enable in Vercel Dashboard',
        description: 'Go to Vercel Dashboard > Project Settings > Analytics > Enable',
      },
      {
        number: 2,
        title: 'Install Analytics SDK',
        command: 'npm install @vercel/analytics @vercel/web-vitals',
      },
      {
        number: 3,
        title: 'Add to main.tsx',
        code: `
import { inject } from '@vercel/analytics';

// Initialize analytics
inject();
        `,
      },
      {
        number: 4,
        title: 'Deploy and Monitor',
        description: 'Deploy your site and view analytics in Vercel dashboard within a few minutes',
      },
    ],
    metricsTracked: [
      'Page views',
      'Unique visitors',
      'Web Vitals (LCP, FID, CLS)',
      'Browser information',
      'Country/City data',
      'Device type',
      'Page performance',
    ],
    setupTime: '5-10 minutes',
  },

  // =========================================================================
  // 3. GOOGLE ANALYTICS 4 SETUP
  // =========================================================================
  ga4Setup: {
    steps: [
      {
        number: 1,
        title: 'Create GA4 Property',
        description: 'Go to Google Analytics > Create New Property > Choose Web > Setup',
      },
      {
        number: 2,
        title: 'Get Measurement ID',
        description: 'After setup, get your Measurement ID (format: G-XXXXXXXXXX)',
      },
      {
        number: 3,
        title: 'Install gtag.js',
        command: 'npm install @react-ga/core @react-ga/event-handler',
      },
      {
        number: 4,
        title: 'Configure in main.tsx',
        code: `
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your Measurement ID
        `,
      },
      {
        number: 5,
        title: 'Track Events',
        code: `
import { event } from 'react-ga4';

// Track custom events
event('project_click', {
  'project_name': 'HateShieldAI',
  'timestamp': new Date().toISOString(),
});

event('section_view', {
  'section': 'projects',
});
        `,
      },
    ],
    eventsToDck: [
      'page_view (automatic)',
      'scroll_depth',
      'section_view',
      'project_click',
      'download_resume',
      'contact_submit',
      'theme_switch',
    ],
    setupTime: '20-30 minutes',
  },

  // =========================================================================
  // 4. PRIVACY & COMPLIANCE
  // =========================================================================
  compliance: {
    gdpr: {
      required: true,
      description: 'If your site is accessed by EU users',
      requirements: [
        'Cookie consent banner',
        'Privacy policy explaining tracking',
        'Option to opt-out of analytics',
        'Data retention policies',
      ],
      recommended: 'Vercel Analytics or Plausible (privacy-first)',
    },
    ccpa: {
      required: false,
      description: 'California Consumer Privacy Act - if California users',
      requirements: [
        'Disclose data collection',
        'Option to opt-out',
        'Data access requests process',
      ],
    },
    implementation: `
// Example of privacy-respecting consent
if (userHasConsented) {
  // Initialize analytics only after consent
  inject(); // Vercel Analytics
}
    `,
  },

  // =========================================================================
  // 5. CUSTOM EVENTS TO TRACK
  // =========================================================================
  customEvents: {
    userEngagement: [
      {
        event: 'section_view',
        triggers: 'User scrolls to section (About, Projects, etc.)',
        payload: { section: 'string', scrollDepth: 'number' },
      },
      {
        event: 'project_click',
        triggers: 'User clicks on a project card',
        payload: { projectName: 'string', projectUrl: 'string' },
      },
      {
        event: 'github_click',
        triggers: 'User clicks GitHub/LinkedIn/resume link',
        payload: { linkType: 'string', label: 'string' },
      },
    ],
    conversions: [
      {
        event: 'download_resume',
        triggers: 'User downloads resume PDF',
        payload: { fileName: 'string', timestamp: 'string' },
      },
      {
        event: 'contact_submit',
        triggers: 'User submits contact form',
        payload: { formType: 'string', timestamp: 'string' },
      },
    ],
    uiInteractions: [
      {
        event: 'theme_switch',
        triggers: 'User toggles between light/dark mode',
        payload: { theme: 'light|dark', previousTheme: 'string' },
      },
      {
        event: 'nav_click',
        triggers: 'User clicks navigation item',
        payload: { navItem: 'string' },
      },
    ],
  },

  // =========================================================================
  // 6. IMPLEMENTATION EXAMPLE (REACT COMPONENT)
  // =========================================================================
  implementationExample: `
import { useEffect } from 'react';
import { event } from 'react-ga4';

export const useAnalytics = () => {
  // Track section views onscroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          event('section_view', {
            'section': section.id,
            'scroll_depth': Math.round((window.scrollY / document.documentElement.scrollHeight) * 100),
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track project clicks
  const trackProjectClick = (projectName: string, projectUrl: string) => {
    event('project_click', {
      'project_name': projectName,
      'project_url': projectUrl,
      'timestamp': new Date().toISOString(),
    });
  };

  // Track downloads
  const trackDownload = (fileName: string) => {
    event('download_resume', {
      'file_name': fileName,
      'timestamp': new Date().toISOString(),
    });
  };

  return {
    trackProjectClick,
    trackDownload,
  };
};
  `,

  // =========================================================================
  // 7. DASHBOARD METRICS TO MONITOR
  // =========================================================================
  keyMetrics: {
    topLevelMetrics: [
      'Monthly Unique Visitors',
      'Total Page Views',
      'Average Session Duration',
      'Bounce Rate',
      'Traffic Source Breakdown (direct, organic, referral)',
    ],
    engagementMetrics: [
      'Most Visited Pages',
      'Average Time on Each Section',
      'Most Clicked Projects',
      'Form Submission Rate',
      'Resume Download Count',
    ],
    performanceMetrics: [
      'Core Web Vitals (LCP, FID, CLS)',
      'Page Load Time by Device',
      'Bounce Rate by Device',
      'Mobile vs Desktop Traffic Split',
    ],
    conversionMetrics: [
      'Resume Downloads',
      'Contact Form Submissions',
      'External Link Clicks (GitHub, LinkedIn)',
      'Project Clicks',
    ],
  },

  // =========================================================================
  // 8. PERFORMANCE MONITORING
  // =========================================================================
  performanceMonitoring: {
    tools: [
      'Chrome DevTools Performance tab',
      'Lighthouse scores',
      'Web Vitals in analytics',
      'Vercel Analytics dashboard',
      'Google PageSpeed Insights',
    ],
    metricsToTrack: [
      'First Contentful Paint (FCP)',
      'Largest Contentful Paint (LCP)',
      'Cumulative Layout Shift (CLS)',
      'First Input Delay (FID)',
      'First Byte Time (TTFB)',
    ],
    targetThresholds: {
      lcp: '<2.5s',
      fid: '<100ms',
      cls: '<0.1',
      loadTime: '<3s on 4G',
    },
  },

  // =========================================================================
  // 9. RECOMMENDED SETUP FOR PORTFOLIO
  // =========================================================================
  recommendedSetup: {
    option1_minimal: {
      name: 'Minimal (Recommended)',
      tools: ['Vercel Analytics'],
      cost: 'Free',
      setupTime: '5 minutes',
      features: [
        'Page views tracking',
        'Web Vitals monitoring',
        'Geographic data',
        'Device/Browser info',
      ],
      why: 'Already hosted on Vercel, zero configuration needed, provides essential insights',
    },
    option2_comprehensive: {
      name: 'Comprehensive',
      tools: ['Vercel Analytics', 'Google Analytics 4'],
      cost: 'Free',
      setupTime: '30 minutes',
      features: [
        'All from Minimal',
        'Custom event tracking',
        'Detailed user journeys',
        'Conversion funnel analysis',
      ],
      why: 'Best insights into how users interact with your portfolio',
    },
    option3_privacyFirst: {
      name: 'Privacy-First',
      tools: ['Plausible Analytics or GoAccess'],
      cost: '$29/month (Plausible) or Free (GoAccess)',
      setupTime: '10-20 minutes',
      features: [
        'GDPR compliant',
        'No cookie consent needed',
        'Simple interface',
        'Basic traffic stats',
      ],
      why: 'Best for European audiences or privacy-conscious setup',
    },
  },

  // =========================================================================
  // 10. QUICK START
  // =========================================================================
  quickStart: `
## Fastest Setup (Vercel Analytics)

1. Go to https://vercel.com/dashboard
2. Select your portfolio project
3. Settings > Analytics > Enable
4. Install SDK: npm install @vercel/analytics
5. In src/main.tsx, add:
   
   import { inject } from '@vercel/analytics';
   inject();

6. Deploy with: git push (or vercel deploy)
7. Check dashboard in 5 minutes for data

## Expected Data Timeline
- First few hours: Initial visitors loading
- 1 day: Traffic pattern emerges
- 1 week: Meaningful traffic data
- 1 month: Trend analysis possible

## Common Questions

Q: Will analytics slow down my site?
A: No, Vercel Analytics is ~3KB and lazy-loaded

Q: Do I need user consent for Vercel Analytics?
A: No, it's privacy-focused and doesn't use cookies

Q: Can I track which projects visitors click most?
A: Yes, with GA4 custom events

Q: How often should I check analytics?
A: Weekly for trends, daily first week after launch
  `,
};

// ============================================================================
// EXPORT TYPE HELPERS
// ============================================================================
export type AnalyticsProvider = 'vercel' | 'ga4' | 'plausible' | 'mixpanel';
export type EventType = keyof typeof ANALYTICS_INTEGRATION_GUIDE.customEvents;
