/**
 * useTheme Hook
 * Manages theme state, persistence, and media query listeners
 */

import { useEffect, useState, useCallback } from 'react';
import { THEME_CONFIG, DARK_THEME_COLORS, LIGHT_THEME_COLORS, type Theme } from '@/constants/theme';

interface UseThemeReturn {
  theme: Theme;
  effectiveTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('dark');
  const [isMounted, setIsMounted] = useState(false);

  // Update CSS custom properties based on theme
  const updateThemeVariables = useCallback((selectedEffectiveTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    const colors = selectedEffectiveTheme === 'dark' ? DARK_THEME_COLORS : LIGHT_THEME_COLORS;

    // Update root CSS variables
    Object.entries(colors as Record<string, string>).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });
  }, []);

  // Apply theme to document and CSS variables
  const applyTheme = useCallback(
    (selectedTheme: Theme) => {
      const effective = THEME_CONFIG.getEffectiveTheme(selectedTheme);
      setEffectiveTheme(effective);

      // Apply class to document element for CSS cascade
      const isDark = effective === 'dark';
      document.documentElement.classList.toggle(THEME_CONFIG.darkModeClass, isDark);
      document.documentElement.classList.toggle(THEME_CONFIG.lightModeClass, !isDark);

      // Add transition class for smooth color changes
      document.documentElement.style.transition = `background-color ${THEME_CONFIG.transitionDuration}ms ease, color ${THEME_CONFIG.transitionDuration}ms ease`;

      // Update CSS variables for dynamic theming
      updateThemeVariables(effective);

      // Store preference
      try {
        localStorage.setItem(THEME_CONFIG.storageKey, selectedTheme);
      } catch (error) {
        // localStorage not available, continue without storing
      }
    },
    [updateThemeVariables]
  );

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    setIsMounted(true);

    try {
      // Get stored theme or default to 'system'
      const storedTheme = localStorage.getItem(THEME_CONFIG.storageKey) as Theme | null;
      const initialTheme: Theme = storedTheme && THEME_CONFIG.availableThemes.includes(storedTheme)
        ? storedTheme
        : 'system';

      setThemeState(initialTheme);
      applyTheme(initialTheme);
    } catch (error) {
      // localStorage not available, use default
      applyTheme('system');
    }
  }, [applyTheme]);

  // Handle system preference changes
  useEffect(() => {
    if (!isMounted) return;

    const mediaQuery = window.matchMedia(THEME_CONFIG.darkModeMediaQuery);
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, isMounted, applyTheme]);

  // Update theme with persistence
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  }, [applyTheme]);

  // Toggle between light and dark, skip 'system'
  const toggleTheme = useCallback(() => {
    setTheme(effectiveTheme === 'dark' ? 'light' : 'dark');
  }, [effectiveTheme, setTheme]);

  return {
    theme,
    effectiveTheme,
    setTheme,
    toggleTheme,
  };
};

// Server-side rendering safe hook
export const useThemeSafe = (): UseThemeReturn => {
  // Always call useTheme - it handles client-side detection internally
  const themeReturn = useTheme();
  
  return themeReturn;
};
