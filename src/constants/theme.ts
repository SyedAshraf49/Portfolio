/**
 * Blue-only theme configuration for the portfolio's pixel-art interface.
 */

export type Theme = 'light' | 'dark' | 'system';

export const DARK_THEME_COLORS = {
  background: '#080d1b',
  foreground: '#e8f2ff',
  primary: '#4d8dff',
  card: '#111d36',
  muted: '#9fb5d1',

  'neutral-950': '#030711',
  'neutral-900': '#080d1b',
  'neutral-800': '#111d36',
  'neutral-700': '#192b4a',

  'primary-500': '#4d8dff',
  'primary-400': '#8cc6ff',
  'primary-200': '#b7d8ff',

  'accent-500': '#2f5f9e',
  'accent-400': '#60a5fa',

  'success-500': '#3b82f6',
  'error-500': '#1e40af',
  'warning-500': '#60a5fa',
  'info-500': '#8cc6ff',
} as const;

export const LIGHT_THEME_COLORS = {
  background: '#eaf2ff',
  foreground: '#132340',
  primary: '#1d4ed8',
  card: '#f5f9ff',
  muted: '#526985',

  'neutral-950': '#ffffff',
  'neutral-900': '#eaf2ff',
  'neutral-800': '#dbeafe',
  'neutral-700': '#bfdbfe',

  'primary-500': '#2563eb',
  'primary-400': '#3b82f6',
  'primary-200': '#bfdbfe',

  'accent-500': '#1d4ed8',
  'accent-400': '#4d8dff',

  'success-500': '#2f5f9e',
  'error-500': '#1e3a8a',
  'warning-500': '#3b82f6',
  'info-500': '#1d4ed8',
} as const;

export const THEME_CONFIG = {
  storageKey: 'portfolio-theme',
  prefersDark: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },
  getEffectiveTheme: (theme: Theme): 'light' | 'dark' => {
    if (theme === 'system') {
      return THEME_CONFIG.prefersDark() ? 'dark' : 'light';
    }
    return theme;
  },
  darkModeClass: 'dark-mode',
  lightModeClass: 'light-mode',
  darkModeMediaQuery: '(prefers-color-scheme: dark)',
  transitionDuration: 200,
  availableThemes: ['light', 'dark', 'system'] as const,
} as const;

export const THEME_PALETTES = {
  dark: DARK_THEME_COLORS,
  light: LIGHT_THEME_COLORS,
} as const;

export type ThemeColors = typeof DARK_THEME_COLORS;
export type ThemeKey = keyof ThemeColors;
