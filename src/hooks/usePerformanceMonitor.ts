/**
 * Performance Monitoring Hook
 * Tracks Web Vitals and performance metrics
 */

import { useEffect } from 'react';

interface WebVitals {
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
  FCP?: number; // First Contentful Paint
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEntryExt extends PerformanceEntry {
  renderTime?: number;
  loadTime?: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingDuration?: number;
}

const vitals: WebVitals = {};

/**
 * Hook to measure and report Web Vitals
 * Uses the Web Vitals library pattern
 */
export const useWebVitals = () => {
  useEffect(() => {
    // Measure LCP (Largest Contentful Paint)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as PerformanceEntryExt[];
        const lastEntry = entries[entries.length - 1];
        vitals.LCP = (lastEntry.renderTime || lastEntry.loadTime) || 0;
        console.debug('[LCP]', vitals.LCP);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.debug('LCP measurement not supported');
    }

    // Measure CLS (Cumulative Layout Shift)
    let clsValue = 0;
    try {
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as LayoutShiftEntry[];
        for (const entry of entries) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        vitals.CLS = clsValue;
        console.debug('[CLS]', vitals.CLS);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.debug('CLS measurement not supported');
    }

    // Measure FCP (First Contentful Paint)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          vitals.FCP = entries[0].startTime;
          console.debug('[FCP]', vitals.FCP);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.debug('FCP measurement not supported');
    }

    // Measure TTFB (Time to First Byte)
    try {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming && 'responseStart' in navigationTiming && 'requestStart' in navigationTiming) {
        vitals.TTFB = navigationTiming.responseStart - navigationTiming.requestStart;
        console.debug('[TTFB]', vitals.TTFB);
      }
    } catch (e) {
      console.debug('TTFB measurement not supported');
    }

    // FID via first-input
    let fidObserver: PerformanceObserver | null = null;
    try {
      fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as FirstInputEntry[];
        if (entries.length > 0) {
          const firstEntry = entries[0];
          vitals.FID = firstEntry.processingDuration || 0;
          console.debug('[FID]', vitals.FID);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.debug('First Input Delay not supported');
    }

    return () => {
      try {
        const lcpObserver = new PerformanceObserver(() => {});
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        lcpObserver.disconnect();
      } catch (e) {
        // Ignore
      }

      try {
        const clsObserver = new PerformanceObserver(() => {});
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        clsObserver.disconnect();
      } catch (e) {
        // Ignore
      }

      try {
        const fcpObserver = new PerformanceObserver(() => {});
        fcpObserver.observe({ entryTypes: ['paint'] });
        fcpObserver.disconnect();
      } catch (e) {
        // Ignore
      }

      if (fidObserver) {
        try {
          fidObserver.disconnect();
        } catch (e) {
          // Ignore
        }
      }
    };
  }, []);

  return vitals;
};

/**
 * Report Web Vitals to analytics service
 */
export const reportWebVitals = (callback: (metric: any) => void) => {
  if (typeof window === 'undefined') return;

  const vitals = useWebVitals();

  // Report after a delay to allow metrics to stabilize
  const timeout = setTimeout(() => {
    callback({
      name: 'Web-Vitals',
      value: vitals,
      timestamp: new Date().toISOString(),
    });
  }, 3000);

  return () => clearTimeout(timeout);
};

/**
 * Get performance summary
 */
export const getPerformanceSummary = (): Record<string, any> => {
  if (typeof window === 'undefined' || typeof performance === 'undefined') {
    return {};
  }

  try {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigationTiming) return {};

    const timing = performance.timing;

    return {
      // Navigation timings
      dns: timing.domainLookupEnd - timing.domainLookupStart,
      tcp: timing.connectEnd - timing.connectStart,
      ttfb: timing.responseStart - timing.requestStart,
      download: timing.responseEnd - timing.responseStart,
      domInteractive: timing.domInteractive - timing.navigationStart,
      domLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
      pageLoad: timing.loadEventEnd - timing.navigationStart,

      // Resource counts
      resources: performance.getEntriesByType('resource').length,
      scripts: performance
        .getEntriesByType('resource')
        .filter((r) => r.name.includes('.js')).length,
      stylesheets: performance
        .getEntriesByType('resource')
        .filter((r) => r.name.includes('.css')).length,
      images: performance
        .getEntriesByType('resource')
        .filter(
          (r) =>
            r.name.includes('.png') ||
            r.name.includes('.jpg') ||
            r.name.includes('.webp')
        ).length,

      // Size metrics
      totalSize: (performance.getEntriesByType('resource') as any[]).reduce(
        (sum, r) => sum + (r.transferSize || 0),
        0
      ),
    };
  } catch (e) {
    console.debug('Performance summary error:', e);
    return {};
  }
};

/**
 * Monitor performance issues
 */
export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Check for long tasks
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.duration > 50) {
            console.warn(`[Long Task] ${entry.name}: ${entry.duration}ms`);
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
      return () => observer.disconnect();
    } catch (e) {
      console.debug('Long Task API not available');
      return () => {};
    }
  }, []);
};

/**
 * Export performance metrics for analytics
 */
export const exportPerformanceMetrics = () => {
  return {
    vitals: useWebVitals(),
    summary: getPerformanceSummary(),
    timestamp: new Date().toISOString(),
  };
};
