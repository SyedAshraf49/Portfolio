import React from 'react';
import { Moon, Sun, MonitorPlay } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import type { Theme } from '@/constants/theme';

interface ThemeToggleProps {
  variant?: 'icon' | 'button';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  className = '',
}) => {
  const { theme, effectiveTheme, setTheme } = useTheme();

  const themeOptions: Array<{ value: Theme; label: string; icon: React.ReactNode }> = [
    { value: 'light', label: 'Light', icon: <Sun size={18} /> },
    { value: 'dark', label: 'Dark', icon: <Moon size={18} /> },
    { value: 'system', label: 'System', icon: <MonitorPlay size={18} /> },
  ];

  if (variant === 'icon') {
    return (
      <button
        onClick={() => setTheme(effectiveTheme === 'dark' ? 'light' : 'dark')}
        aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
        className={`
          inline-flex items-center justify-center p-2 rounded-lg
          text-slate-400 hover:text-cyan-400
          hover:bg-slate-900/50
          transition-all duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
          min-w-10 min-h-10
          ${className}
        `}
        title={`Current theme: ${theme}`}
      >
        {effectiveTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    );
  }

  // Dropdown button variant
  return (
    <div
      className={`
        flex gap-1 p-1 rounded-lg
        bg-slate-950/50 border border-cyan-300/20
        ${className}
      `}
    >
      {themeOptions.map(({ value, label, icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={`Switch to ${label} theme`}
          title={label}
          className={`
            inline-flex items-center justify-center p-2 rounded-md
            transition-all duration-200
            focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400
            min-w-9 min-h-9 text-sm font-medium
            ${theme === value
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-300/40'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
            }
          `}
        >
          {icon}
          <span className="ml-1 hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
};

// Export icon-only for header/nav placement
export const ThemeToggleIcon = (props: ThemeToggleProps) => (
  <ThemeToggle variant="icon" {...props} />
);

// Export dropdown for settings
export const ThemeToggleDropdown = (props: ThemeToggleProps) => (
  <ThemeToggle variant="button" {...props} />
);
