/** Central design tokens for the navy-and-blue pixel interface. */

// Spacing follows a 4px grid.
export const SPACING = {
  xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem',
  '2xl': '3rem', '3xl': '4rem', '4xl': '6rem',
} as const;

export const TYPOGRAPHY = {
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"Fira Code", "Courier New", monospace',
  sizes: {
    xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem',
    '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem',
  },
  weights: { normal: 400, medium: 500, semibold: 600, bold: 700 },
  lineHeights: { tight: 1.2, normal: 1.5, relaxed: 1.75, loose: 2 },
  letterSpacing: { tight: '-0.02em', normal: '0em', wide: '0.05em', wider: '0.1em', widest: '0.2em' },
} as const;

export const COLORS = {
  neutral: {
    '950': '#030711', '900': '#080d1b', '800': '#111d36', '700': '#192b4a',
    '600': '#2f4568', '500': '#526985', '400': '#7189a8', '300': '#9fb5d1',
    '200': '#b7d8ff', '100': '#dbeafe', '50': '#f5f9ff',
  },
  primary: {
    '950': '#08152e', '900': '#102a52', '800': '#1e3a8a', '700': '#1e40af',
    '600': '#1d4ed8', '500': '#2563eb', '400': '#3b82f6', '300': '#4d8dff',
    '200': '#8cc6ff', '50': '#b7d8ff',
  },
  accent: {
    '950': '#080d1b', '900': '#111d36', '800': '#192b4a', '700': '#2f5f9e',
    '600': '#3b82f6', '500': '#4d8dff', '400': '#60a5fa', '300': '#8cc6ff',
    '200': '#b7d8ff', '50': '#e8f2ff',
  },
  success: {
    '950': '#080d1b', '900': '#102a52', '800': '#1e3a8a', '700': '#1e40af',
    '600': '#1d4ed8', '500': '#2563eb', '400': '#3b82f6', '300': '#4d8dff',
    '200': '#8cc6ff', '50': '#dbeafe',
  },
  warning: {
    '950': '#080d1b', '900': '#102a52', '800': '#1e3a8a', '700': '#1e40af',
    '600': '#1d4ed8', '500': '#2563eb', '400': '#3b82f6', '300': '#4d8dff',
    '200': '#8cc6ff', '50': '#dbeafe',
  },
  error: {
    '950': '#080d1b', '900': '#102a52', '800': '#1e3a8a', '700': '#1e40af',
    '600': '#1d4ed8', '500': '#2563eb', '400': '#3b82f6', '300': '#4d8dff',
    '200': '#8cc6ff', '50': '#dbeafe',
  },
  info: {
    '950': '#080d1b', '900': '#102a52', '800': '#1e3a8a', '700': '#1e40af',
    '600': '#1d4ed8', '500': '#2563eb', '400': '#3b82f6', '300': '#4d8dff',
    '200': '#8cc6ff', '50': '#dbeafe',
  },
  text: { primary: '#e8f2ff', secondary: '#b7d8ff', muted: '#9fb5d1', inverse: '#080d1b' },
  background: {
    primary: '#080d1b', secondary: '#111d36', tertiary: '#192b4a', overlay: 'rgba(3, 7, 17, 0.88)',
  },
  border: '#2f5f9e',
  border_opacity: 1,
} as const;

// Square geometry is used consistently across the UI.
export const BORDER_RADIUS = {
  none: '0', sm: '0', base: '0', md: '0', lg: '0', xl: '0', '2xl': '0', full: '0',
} as const;

// Hard-offset shadows keep depth crisp rather than blurred.
export const SHADOWS = {
  none: 'none',
  sm: '2px 2px 0 rgba(3, 7, 17, 0.9)',
  base: '4px 4px 0 rgba(3, 7, 17, 0.95)',
  md: '6px 6px 0 rgba(3, 7, 17, 0.95)',
  lg: '8px 8px 0 rgba(3, 7, 17, 0.95)',
  xl: '10px 10px 0 rgba(3, 7, 17, 0.95)',
  '2xl': '12px 12px 0 rgba(3, 7, 17, 0.95)',
  cyan_glow: '4px 4px 0 #8cc6ff',
  purple_glow: '4px 4px 0 #4d8dff',
  accent_glow: '4px 4px 0 #4d8dff',
} as const;

export const ANIMATIONS = {
  durations: { fast: '150ms', base: '200ms', slow: '300ms', slower: '500ms', slowest: '1000ms' },
  easing: {
    linear: 'none', ease_in: 'power1.in', ease_out: 'power1.out', ease_in_out: 'power1.inOut',
    ease_in_quad: 'power2.in', ease_out_quad: 'power2.out', ease_in_out_quad: 'power2.inOut',
    ease_in_cubic: 'power3.in', ease_out_cubic: 'power3.out', ease_in_out_cubic: 'power3.inOut',
    ease_in_quart: 'power4.in', ease_out_quart: 'power4.out', ease_out_back: 'back.out(1.7)',
  },
  transition_property: {
    all: 'all', colors: 'color, background-color, border-color', opacity: 'opacity',
    transform: 'transform', shadow: 'box-shadow',
  },
} as const;

export const BREAKPOINTS = { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 } as const;
export const Z_INDEX = { hide: -1, base: 0, dropdown: 10, sticky: 20, fixed: 30, modal: 40, popover: 50, toast: 1000, tooltip: 1100 } as const;

export const COMPONENT_TOKENS = {
  button: {
    padding_sm: `${SPACING.sm} ${SPACING.md}`,
    padding_md: `${SPACING.md} ${SPACING.lg}`,
    padding_lg: `${SPACING.lg} ${SPACING.xl}`,
    min_height: '44px', border_radius: BORDER_RADIUS.none,
    font_weight: TYPOGRAPHY.weights.semibold, transition: `all ${ANIMATIONS.durations.base} steps(4, end)`,
  },
  input: {
    padding: `${SPACING.md} ${SPACING.md}`, min_height: '44px',
    border_radius: BORDER_RADIUS.none, border_width: '3px',
    font_size: TYPOGRAPHY.sizes.sm, transition: `all ${ANIMATIONS.durations.base} steps(4, end)`,
  },
  card: {
    padding: SPACING.lg, border_radius: BORDER_RADIUS.none,
    border_width: '4px', shadow: SHADOWS.base,
    transition: `all ${ANIMATIONS.durations.base} steps(4, end)`,
  },
  section: { padding_mobile: SPACING.lg, padding_desktop: SPACING.xl, margin_vertical: `${SPACING.xl} 0` },
  badge: {
    padding: `${SPACING.sm} ${SPACING.lg}`, border_radius: BORDER_RADIUS.none,
    font_size: TYPOGRAPHY.sizes.xs, font_weight: TYPOGRAPHY.weights.medium,
  },
} as const;

export type SpacingKey = keyof typeof SPACING;
export type ColorKey = keyof typeof COLORS;
export type BorderRadiusKey = keyof typeof BORDER_RADIUS;
export type ShadowKey = keyof typeof SHADOWS;
export type AnimationDurationKey = keyof typeof ANIMATIONS.durations;
export type EasingKey = keyof typeof ANIMATIONS.easing;
export type BreakpointKey = keyof typeof BREAKPOINTS;
export type ZIndexKey = keyof typeof Z_INDEX;
