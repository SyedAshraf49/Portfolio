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
          inline-flex items-center justify-center border-2 border-[var(--pixel-border)] bg-[var(--pixel-bg-mid)] p-2
          text-[var(--pixel-gray)] shadow-[3px_3px_0_var(--pixel-bg-dark)] hover:border-[var(--pixel-cyan)] hover:bg-[var(--pixel-bg-light)] hover:text-[var(--pixel-cyan)]
          transition-colors duration-100
          focus:outline-none focus-visible:outline-2 focus-visible:outline-dotted focus-visible:outline-[var(--pixel-cyan)]
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
        flex gap-1 border-4 border-[var(--pixel-border)] bg-[var(--pixel-bg-mid)] p-1 shadow-[4px_4px_0_var(--pixel-bg-dark)]
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
            inline-flex items-center justify-center border-2 p-2
            transition-colors duration-100
            focus:outline-none focus-visible:outline-2 focus-visible:outline-dotted focus-visible:outline-[var(--pixel-cyan)]
            min-w-9 min-h-9 text-sm font-medium
            ${theme === value
              ? 'border-[var(--pixel-cyan)] bg-[var(--pixel-blue)] text-[var(--pixel-bg-dark)]'
              : 'border-[var(--pixel-border)] bg-[var(--pixel-bg-dark)] text-[var(--pixel-gray)] hover:text-[var(--pixel-cyan)] hover:bg-[var(--pixel-bg-light)]'
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
