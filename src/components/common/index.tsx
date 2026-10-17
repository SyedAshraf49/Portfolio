import React, { ReactNode } from 'react';
import clsx from 'clsx';

// Badge Component - Pixel Art Style
interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'border-[var(--pixel-green)] bg-[var(--pixel-bg-mid)] text-[var(--pixel-white)]',
    primary: 'border-[var(--pixel-cyan)] bg-[var(--pixel-bg-mid)] text-[var(--pixel-cyan)]',
    secondary: 'border-[var(--pixel-magenta)] bg-[var(--pixel-bg-mid)] text-[var(--pixel-magenta)]',
  };

  return (
    <span
      className={clsx(
        'border-4 px-3 py-1.5 text-xs font-normal',
        'focus:outline-none focus-visible:outline-4 focus-visible:outline-dotted focus-visible:outline-[var(--pixel-green)]',
        'shadow-[4px_4px_0_var(--pixel-bg-dark)]',
        variants[variant],
        className
      )}
      style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}
    >
      {children}
    </span>
  );
};

// Input Component with Accessibility - Pixel Art Style
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ error, label, className, id, ...props }) => {
  const inputId = id || props.name;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="text-sm font-normal text-[var(--pixel-green)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'border-4 bg-[var(--pixel-bg-mid)] px-3 py-2.5 text-sm text-[var(--pixel-white)]',
          'outline-none min-h-[44px]',
          'focus:border-[var(--pixel-cyan)] focus:shadow-[4px_4px_0_var(--pixel-cyan)]',
          error
            ? 'border-[var(--pixel-red)] shadow-[4px_4px_0_var(--pixel-red)]'
            : 'border-[var(--pixel-green)] shadow-[4px_4px_0_var(--pixel-bg-dark)]',
          className
        )}
        style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-xs text-[var(--pixel-red)]" role="alert" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}>
          {error}
        </span>
      )}
    </div>
  );
};

// Textarea Component with Accessibility - Pixel Art Style
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ error, label, className, id, ...props }) => {
  const textareaId = id || props.name;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-normal text-[var(--pixel-green)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={clsx(
          'border-4 bg-[var(--pixel-bg-mid)] px-3 py-2.5 text-sm text-[var(--pixel-white)]',
          'outline-none resize-none min-h-[100px]',
          'focus:border-[var(--pixel-cyan)] focus:shadow-[4px_4px_0_var(--pixel-cyan)]',
          error
            ? 'border-[var(--pixel-red)] shadow-[4px_4px_0_var(--pixel-red)]'
            : 'border-[var(--pixel-green)] shadow-[4px_4px_0_var(--pixel-bg-dark)]',
          className
        )}
        style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${textareaId}-error`} className="text-xs text-[var(--pixel-red)]" role="alert" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}>
          {error}
        </span>
      )}
    </div>
  );
};

// Button Component with Accessibility - Pixel Art Style
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const variants = {
    primary: 'bg-[var(--pixel-green)] text-[var(--pixel-bg-dark)] border-[var(--pixel-green)] hover:bg-[var(--pixel-cyan)] hover:border-[var(--pixel-cyan)]',
    secondary: 'bg-[var(--pixel-magenta)] text-[var(--pixel-white)] border-[var(--pixel-magenta)] hover:bg-[var(--pixel-cyan)] hover:border-[var(--pixel-cyan)]',
    tertiary: 'border-[var(--pixel-green)] bg-[var(--pixel-bg-mid)] text-[var(--pixel-white)] hover:border-[var(--pixel-cyan)] hover:text-[var(--pixel-cyan)]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs min-h-[32px]',
    md: 'px-4 py-2 text-sm min-h-[44px]',
    lg: 'px-6 py-2.5 text-base min-h-[48px]',
  };

  return (
    <button
      className={clsx(
        'border-4 font-normal',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus-visible:outline-4 focus-visible:outline-dotted focus-visible:outline-[var(--pixel-green)]',
        'active:translate-x-[2px] active:translate-y-[2px]',
        'shadow-[4px_4px_0_var(--pixel-bg-dark)]',
        'active:shadow-[2px_2px_0_var(--pixel-bg-dark)]',
        variants[variant],
        sizes[size],
        className
      )}
      style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-[spin_1s_steps(8)_infinite] border-2 border-current border-t-transparent" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

// Card Component - Pixel Art Style
interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'experience';
}

export const Card: React.FC<CardProps> = ({ children, className, variant = 'default' }) => {
  const variants = {
    default: 'border-4 border-[var(--pixel-green)] bg-[var(--pixel-bg-mid)] p-5 shadow-[8px_8px_0_var(--pixel-bg-dark),8px_8px_0_0_var(--pixel-green)]',
    experience: 'border-4 border-[var(--pixel-cyan)] bg-[var(--pixel-bg-mid)] p-6 shadow-[8px_8px_0_var(--pixel-bg-dark),8px_8px_0_0_var(--pixel-cyan)]',
  };

  return (
    <div
      className={clsx(
        'hover:border-[var(--pixel-cyan)] hover:shadow-[8px_8px_0_var(--pixel-bg-dark),8px_8px_0_0_var(--pixel-cyan)]',
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
};

// Section Wrapper with Accessibility - Pixel Art Style
interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, subtitle }) => {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-6 md:py-8 section-fade-in">
      <Card variant="default">
        <div className="mb-4">
          <h2 className="text-center text-2xl font-normal text-[var(--pixel-green)] md:text-3xl" style={{ fontFamily: "'Press Start 2P', cursive", textShadow: "2px 2px 0 var(--pixel-bg-dark)", lineHeight: "1.6" }}>{title}</h2>
          {subtitle && <p className="mt-4 text-center text-sm leading-relaxed text-[var(--pixel-cyan)] md:text-base" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.8" }}>{subtitle}</p>}
        </div>
        {children}
      </Card>
    </section>
  );
};

// Re-export theme toggle from separate file
export { ThemeToggle, ThemeToggleIcon, ThemeToggleDropdown } from './theme-toggle';
