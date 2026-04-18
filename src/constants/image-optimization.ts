/**
 * Image Optimization Strategy Documentation
 * 
 * This document outlines best practices and implementation patterns
 * for optimizing images across the portfolio site for performance
 * and user experience.
 */

export const IMAGE_OPTIMIZATION_STRATEGY = {
  // =========================================================================
  // 1. FORMAT SELECTION
  // =========================================================================
  formats: {
    heroImages: {
      primary: 'WebP',
      fallback: 'JPEG',
      reason: 'WebP provides 25-35% better compression than JPEG for photos',
      usage: 'High-quality hero backgrounds, project showcase images',
    },
    icons: {
      primary: 'SVG',
      fallback: 'PNG',
      reason: 'SVG is scalable, can be animated, and typically smaller than raster',
      usage: 'All UI icons, logos, navigation elements',
    },
    screenshots: {
      primary: 'WebP',
      fallback: 'PNG',
      reason: 'WebP with lossless compression reduces PNG size by 25-30%',
      usage: 'Project screenshots, step-by-step guides',
    },
    avatars: {
      primary: 'WebP',
      fallback: 'JPEG',
      reason: 'Smaller file size, faster loading of profile images',
      usage: 'Profile picture, team member photos',
    },
  },

  // =========================================================================
  // 2. SIZING & RESPONSIVE IMAGES
  // =========================================================================
  sizing: {
    guidelines: {
      maxHeroWidth: 1920,
      maxCardImageWidth: 800,
      maxAvatarWidth: 200,
      maxIconWidth: 64,
    },
    generateSrcset: {
      description: 'Create multiple sizes for responsive serving',
      pattern: '(mobile: 640w, tablet: 1024w, desktop: 1920w)',
      tools: ['imagemin', 'sharp', 'squoosh'],
    },
    implementation: `
      <picture>
        <source srcset="image.webp 1920w, image-tablet.webp 1024w, image-mobile.webp 640w" type="image/webp" />
        <source srcset="image.jpg 1920w, image-tablet.jpg 1024w, image-mobile.jpg 640w" type="image/jpeg" />
        <img src="image-tablet.jpg" alt="Descriptive alt text" loading="lazy" />
      </picture>
    `,
  },

  // =========================================================================
  // 3. COMPRESSION SETTINGS
  // =========================================================================
  compression: {
    webp: {
      quality: 75, // High quality at 75, perceptually lossless
      effort: 6, // Compression effort (0-6)
      preset: 'photo', // Or 'drawing', 'icon', 'text'
    },
    jpeg: {
      quality: 80,
      progressive: true, // Progressive JPEG for better perceived loading
    },
    png: {
      compressionLevel: 9,
      adaptiveFiltering: true,
    },
    svg: {
      plugins: ['preset-default', 'removeViewBox'],
      removeXMLNS: true,
    },
  },

  // =========================================================================
  // 4. LAZY LOADING STRATEGY
  // =========================================================================
  lazyLoading: {
    nativeImplementation: {
      syntax: 'loading="lazy"',
      compatibility: 'All modern browsers (Chrome 76+, Firefox 75+, Safari 15.1+)',
      fallback: 'Intersection Observer API polyfill for older browsers',
    },
    recommendations: {
      heroImages: 'eager (above fold)',
      belowFoldProjectCards: 'lazy',
      backgroundImages: 'lazy',
      avatars: 'eager or early-lazy (important for first impression)',
    },
    implementation: `
      // Native lazy loading
      <img src="project.webp" alt="Project" loading="lazy" />
      
      // With Intersection Observer fallback
      <img 
        src="project.webp" 
        alt="Project" 
        loading="lazy"
        data-src="project-large.webp"
        class="lazyload"
      />
    `,
  },

  // =========================================================================
  // 5. PERFORMANCE METRICS & TARGETS
  // =========================================================================
  performanceTargets: {
    lighthouse: {
      performance: '90+',
      cumulativeLayoutShift: '<0.1',
      largestContentfulPaint: '<2.5s',
      firstInputDelay: '<100ms',
    },
    fileSizes: {
      heroImagePerSize: '<200KB (WebP)',
      projectCardImage: '<100KB (WebP)',
      avatarImage: '<30KB',
      svgIcon: '<5KB',
      totalImagesPerPage: '<1MB',
    },
    loadingTimes: {
      mobileNetworkG4: '<3s to interactive',
      mobileNetworkG5: '<2s to interactive',
      desktopCable: '<1s to interactive',
    },
  },

  // =========================================================================
  // 6. IMPLEMENTATION TOOLS & WORKFLOW
  // =========================================================================
  tools: {
    imageOptimization: {
      imagemin: {
        description: 'CLI tool for batch image optimization',
        formats: ['JPEG', 'PNG', 'GIF', 'SVG'],
        output: 'Optimized images with up to 80% size reduction',
      },
      sharp: {
        description: 'High-performance image processing library',
        npmPackage: 'sharp',
        usage: 'Programmatic image resizing and format conversion',
      },
      squoosh: {
        description: 'Google\'s web-based image compression tool',
        webInterface: 'squoosh.app',
        usage: 'Visual quality control, side-by-side format comparison',
      },
      webp_converter: {
        description: 'Convert batch images to WebP',
        tools: ['cwebp', 'ImageMagick', 'FFmpeg'],
        recommendation: 'Use cwebp for best compression',
      },
    },
    buildIntegration: {
      vitePlugins: ['vite-plugin-compression', 'vite-plugin-imagemin'],
      automatedWorkflow: 'Process images during build, generate srcset variants',
    },
  },

  // =========================================================================
  // 7. DELIVERY OPTIMIZATION
  // =========================================================================
  delivery: {
    cdn: {
      recommendation: 'Use Vercel\'s built-in image optimization or Cloudinary',
      benefit: 'Automatic format negotiation, responsive sizing, geographic distribution',
    },
    caching: {
      staticImages: 'Cache-Control: public, max-age=31536000 (1 year)',
      dynamicImages: 'Cache-Control: public, max-age=86400 (1 day)',
      versioning: 'Include hash in filename for cache busting',
    },
    nextOptimization: 'Consider migrating to Next.js Image component for automatic optimization',
  },

  // =========================================================================
  // 8. SPECIFIC PORTFOLIO OPTIMIZATION CHECKLIST
  // =========================================================================
  portfolioChecklist: {
    heroBackground: {
      description: 'Parallax cosmic background image',
      action: 'Convert to WebP (1920px max width), lazy-load below fold if applicable',
      estimatedSavings: '40-50KB per page load',
    },
    projectCards: {
      description: 'Project thumbnail images in grid',
      action: 'Create 3 sizes (640w, 1024w, 1920w), use srcset, lazy-load',
      estimatedSavings: '200-300KB on mobile, proper sizing on desktop',
    },
    profileAvatar: {
      description: 'User profile picture',
      action: 'Optimize as 200×200px WebP (eager load), use as SVG if avatar',
      estimatedSavings: '10-20KB',
    },
    navIcons: {
      description: 'Navigation and UI icons',
      action: 'Keep as SVG (preferred) or use font icons, never bitmap',
      estimatedSavings: 'Already optimal if SVG',
    },
    resumePDF: {
      description: 'Resume download',
      action: 'Compress PDF, consider Web-optimized version',
      estimatedSavings: 'Depends on original source PDF',
    },
  },

  // =========================================================================
  // 9. MONITORING & MAINTENANCE
  // =========================================================================
  monitoring: {
    tools: ['Lighthouse', 'WebPageTest', 'Squoosh visualizer'],
    metrics: [
      'Lighthouse Performance score',
      'Cumulative Layout Shift (CLS)',
      'Largest Contentful Paint (LCP)',
      'Image file sizes in bundle',
      'Cache hit rates via CDN',
    ],
    frequency: 'Monthly audit, immediately after adding new images',
  },

  // =========================================================================
  // 10. RECOMMENDED BUILD SCRIPT (NPM)
  // =========================================================================
  buildScript: {
    description: 'Add to package.json scripts',
    command: 'npm run optimize:images',
    implementation: `
      "scripts": {
        "optimize:images": "imagemin public/images/** --out-dir=public/images-optimized --plugin=jpeg={quality:80} --plugin=webp={quality:75,effort:6} --plugin=png={compressionLevel:9}",
        "build": "vite build && npm run optimize:images"
      }
    `,
  },
};

// ============================================================================
// QUICK REFERENCE
// ============================================================================
export const IMAGE_OPTIMIZATION_QUICK_START = `
1. AUDIT CURRENT IMAGES
   - Use Squoosh (squoosh.app) to visualize compression trade-offs
   - Check current Lighthouse score baseline

2. PREPARE IMAGES
   - Hero: Save as WebP + JPEG, 1920px width max
   - Cards: Create srcset (640w, 1024w, 1920w) for each
   - Icons: Convert to SVG if possible

3. IMPLEMENT LAZY LOADING
   - Add loading="lazy" to below-fold images
   - Set width/height attributes to prevent layout shift

4. ADD TO BUILD PIPELINE
   - Install imagemin and plugins
   - Run optimization before deployment

5. VERIFY RESULTS
   - Run Lighthouse audit (target 90+ Performance)
   - Check Core Web Vitals in PageSpeed Insights
   - Monitor real-world CLS and LCP

EXPECTED IMPACT:
- 30-50% reduction in image bundle size
- 1-2s faster page load on mobile
- Improved Lighthouse Performance score by 10-20 points
- Smoother user experience with lazy loading
`;
