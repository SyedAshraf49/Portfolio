/**
 * Theme Configuration
 * Defines light and dark theme colors and system preferences
 */

export type Theme = 'light' | 'dark' | 'system';

// Dark mode color overrides (transitions from root/light defaults)
export const DARK_THEME_COLORS = {
  // Override semantic colors for dark mode
  background: '#0a0a1a',
  foreground: '#f0f0f5',
  primary: '#22d3ee',
  card: '#16213e',
  muted: '#b0b0c0',
  
  // Neutral overrides for better contrast in dark mode
  'neutral-950': '#000000',
  'neutral-900': '#0f0f1a',
  'neutral-800': '#1a1a2e',
  'neutral-700': '#2d2d47',
  
  // Primary adjustments for better legibility
  'primary-500': '#06b6d4', // Brighter cyan in dark mode
  'primary-400': '#22d3ee',
  'primary-200': '#7ff5ff',
  
  // Accent adjustments
  'accent-500': '#818cf8', // Brighter indigo in dark mode
  'accent-400': '#a5b4fc',
  
  // Semantic color adjustments
  'success-500': '#34d399',
  'error-500': '#f87171',
  'warning-500': '#fbbf24',
  'info-500': '#38bdf8',
} as const;

// Light mode color overrides (from design tokens)
export const LIGHT_THEME_COLORS = {
  background: '#f8f8fb',
  foreground: '#1a1a2e',
  primary: '#0e7490',
  card: '#ffffff',
  muted: '#71717a',
  
  'neutral-950': '#ffffff',
  'neutral-900': '#f8f8fb',
  'neutral-800': '#f0f0f5',
  'neutral-700': '#e5e5f0',
  
  'primary-500': '#0891b2',
  'primary-400': '#06b6d4',
  'primary-200': '#cffafe',
  
  'accent-500': '#4f46e5',
  'accent-400': '#6366f1',
  
  'success-500': '#059669',
  'error-500': '#dc2626',
  'warning-500': '#d97706',
  'info-500': '#0284c7',
} as const;

export const THEME_CONFIG = {
  // Theme persistence key
  storageKey: 'portfolio-theme',

  // Default system preference detection
  prefersDark: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  // Get effective theme considering system preference
  getEffectiveTheme: (theme: Theme): 'light' | 'dark' => {
    if (theme === 'system') {
      return THEME_CONFIG.prefersDark() ? 'dark' : 'light';
    }
    return theme;
  },

  // CSS class applied to document element
  darkModeClass: 'dark-mode',
  lightModeClass: 'light-mode',

  // System preference media query
  darkModeMediaQuery: '(prefers-color-scheme: dark)',

  // Transition duration when switching themes
  transitionDuration: 200, // milliseconds

  // Available themes
  availableThemes: ['light', 'dark', 'system'] as const,
} as const;

// Color palettes for different themes
export const THEME_PALETTES = {
  dark: DARK_THEME_COLORS,
  light: LIGHT_THEME_COLORS,
} as const;

// Export type
export type ThemeColors = typeof DARK_THEME_COLORS;
export type ThemeKey = keyof ThemeColors;
