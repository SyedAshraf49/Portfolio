/**
 * Design Tokens - Centralized design system
 * This file serves as the single source of truth for all design values
 * Used across components for consistent spacing, colors, typography, etc.
 */

// ============================================================================
// SPACING SCALE (based on 4px grid system)
// ============================================================================
export const SPACING = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
} as const;

// ============================================================================
// TYPOGRAPHY SCALE
// ============================================================================
export const TYPOGRAPHY = {
  // Font families
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"Fira Code", "Courier New", monospace',

  // Font sizes (mobile-first, scales at breakpoints)
  sizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },

  // Font weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.05em',
    wider: '0.1em',
    widest: '0.2em',
  },
} as const;

// ============================================================================
// COLOR PALETTE (Consolidated)
// ============================================================================
export const COLORS = {
  // Neutrals (grayscale)
  neutral: {
    '950': '#0f0f1a', // darkest
    '900': '#1a1a2e',
    '800': '#2d2d47',
    '700': '#404056',
    '600': '#525266',
    '500': '#6b6b7f',
    '400': '#858599',
    '300': '#a0a0b3',
    '200': '#b8b8cc',
    '100': '#d1d1e0',
    '50': '#e5e5f0', // lightest
  },

  // Primary (Cyan/Blue gradient)
  primary: {
    '950': '#001d2e', // darkest
    '900': '#003d4d',
    '800': '#005d6b',
    '700': '#007d89',
    '600': '#0099a8',
    '500': '22d3ee', // tailwind cyan-400 (main)
    '400': '#34e4f7', // lighter
    '300': '#4beeff',
    '200': '#7cf5ff',
    '50': '#b3fdff', // lightest
  },

  // Accent (Purple/Indigo)
  accent: {
    '950': '#1f0d33', // darkest
    '900': '#3d1a66',
    '800': '#5b2799',
    '700': '#7934cc',
    '600': '#9741ff', // vibrant purple
    '500': '#6366f1', // indigo-500 (main)
    '400': '#818cf8', // lighter
    '300': '#a5b4fc',
    '200': '#c7d2fe',
    '50': '#e0e7ff', // lightest
  },

  // Success (Emerald/Teal)
  success: {
    '950': '#021c1d',
    '900': '#04553a',
    '800': '#065d56',
    '700': '#087e72',
    '600': '#0ba58d',
    '500': '#10b981', // emerald-500 (main)
    '400': '#6ee7b7',
    '300': '#a7f3d0',
    '200': '#d1fae5',
    '50': '#ecfdf5', // lightest
  },

  // Warning (Amber)
  warning: {
    '950': '#251d0f',
    '900': '#4a391e',
    '800': '#6f4e1f',
    '700': '#945719',
    '600': '#b86c13',
    '500': '#f59e0b', // amber-500 (main)
    '400': '#fbbf24',
    '300': '#fcd34d',
    '200': '#fde68a',
    '50': '#fffbeb', // lightest
  },

  // Error (Red/Rose)
  error: {
    '950': '#18050f',
    '900': '#401622',
    '800': '#6b1423',
    '700': '#95182a',
    '600': '#c8232f',
    '500': '#ef4444', // red-500 (main)
    '400': '#f87171',
    '300': '#fca5a5',
    '200': '#fecaca',
    '50': '#fee2e2', // lightest
  },

  // Info (Sky/Blue)
  info: {
    '950': '#082849',
    '900': '#0c4a93',
    '800': '#0f66cc',
    '700': '#1488ff',
    '600': '0ea5e9', // sky-500 (main)
    '500': '#0ea5e9',
    '400': '#38bdf8',
    '300': '#7dd3fc',
    '200': '#bae6fd',
    '50': '#e0f2fe', // lightest
  },

  // Semantic
  text: {
    primary: '#f5f5f7',
    secondary: '#c8d1e0',
    muted: '#a0a0b3',
    inverse: '#0f0f1a',
  },

  background: {
    primary: '#0f0f1a',
    secondary: '#1a1a2e',
    tertiary: '#2d2d47',
    overlay: 'rgba(15, 15, 26, 0.8)',
  },

  border: '#ffffff',
  border_opacity: 0.1,
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.375rem', // 6px
  base: '0.5rem', // 8px
  md: '0.75rem', // 12px
  lg: '1rem', // 16px
  xl: '1.5rem', // 24px
  '2xl': '2rem', // 32px
  full: '9999px', // pill shape
} as const;

// ============================================================================
// SHADOWS
// ============================================================================
export const SHADOWS = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  // Glow effects (premium)
  cyan_glow: '0 0 16px rgba(34, 211, 238, 0.4), 0 0 32px rgba(34, 211, 238, 0.2)',
  purple_glow: '0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(147, 51, 234, 0.15)',
  accent_glow: '0 0 24px rgba(99, 102, 241, 0.3), 0 0 48px rgba(99, 102, 241, 0.15)',
} as const;

// ============================================================================
// ANIMATIONS & TRANSITIONS
// ============================================================================
export const ANIMATIONS = {
  // Transition durations
  durations: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '1000ms',
  },

  // Easing functions (GSAP format)
  easing: {
    linear: 'none',
    ease_in: 'power1.in',
    ease_out: 'power1.out',
    ease_in_out: 'power1.inOut',
    ease_in_quad: 'power2.in',
    ease_out_quad: 'power2.out',
    ease_in_out_quad: 'power2.inOut',
    ease_in_cubic: 'power3.in',
    ease_out_cubic: 'power3.out',
    ease_in_out_cubic: 'power3.inOut',
    ease_in_quart: 'power4.in',
    ease_out_quart: 'power4.out',
    ease_out_back: 'back.out(1.7)',
  },

  // CSS transitions
  transition_property: {
    all: 'all',
    colors: 'color, background-color, border-color',
    opacity: 'opacity',
    transform: 'transform',
    shadow: 'box-shadow',
  },
} as const;

// ============================================================================
// BREAKPOINTS (Mobile-first)
// ============================================================================
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ============================================================================
// Z-INDEX LAYERS
// ============================================================================
export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  toast: 1000,
  tooltip: 1100,
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================
export const COMPONENT_TOKENS = {
  button: {
    padding_sm: `${SPACING.sm} ${SPACING.md}`,
    padding_md: `${SPACING.md} ${SPACING.lg}`,
    padding_lg: `${SPACING.lg} ${SPACING.xl}`,
    min_height: '44px', // Touch-friendly
    border_radius: BORDER_RADIUS.lg,
    font_weight: TYPOGRAPHY.weights.semibold,
    transition: `all ${ANIMATIONS.durations.base} ease`,
  },

  input: {
    padding: `${SPACING.md} ${SPACING.md}`,
    min_height: '44px', // Touch-friendly
    border_radius: BORDER_RADIUS.lg,
    border_width: '1px',
    font_size: TYPOGRAPHY.sizes.sm,
    transition: `all ${ANIMATIONS.durations.base} ease`,
  },

  card: {
    padding: SPACING.lg,
    border_radius: BORDER_RADIUS.xl,
    border_width: '1px',
    shadow: SHADOWS.base,
    transition: `all ${ANIMATIONS.durations.base} ease`,
  },

  section: {
    padding_mobile: SPACING.lg,
    padding_desktop: SPACING.xl,
    margin_vertical: `${SPACING.xl} 0`,
  },

  badge: {
    padding: `${SPACING.sm} ${SPACING.lg}`,
    border_radius: BORDER_RADIUS.full,
    font_size: TYPOGRAPHY.sizes.xs,
    font_weight: TYPOGRAPHY.weights.medium,
  },
} as const;

// ============================================================================
// EXPORT TYPE HELPERS
// ============================================================================
export type SpacingKey = keyof typeof SPACING;
export type ColorKey = keyof typeof COLORS;
export type BorderRadiusKey = keyof typeof BORDER_RADIUS;
export type ShadowKey = keyof typeof SHADOWS;
export type AnimationDurationKey = keyof typeof ANIMATIONS.durations;
export type EasingKey = keyof typeof ANIMATIONS.easing;
export type BreakpointKey = keyof typeof BREAKPOINTS;
export type ZIndexKey = keyof typeof Z_INDEX;
