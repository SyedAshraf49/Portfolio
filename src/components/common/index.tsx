import React, { ReactNode } from 'react';
import clsx from 'clsx';

// Badge Component
interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'border-white/10 bg-white/5 text-slate-200',
    primary: 'border-cyan-300/30 bg-sky-950/35 text-cyan-100/90',
    secondary: 'border-cyan-300/30 bg-sky-950/35 text-cyan-100/90',
  };

  return (
    <span
      className={clsx(
        'rounded-full border px-3 py-1.5 text-xs font-medium transition',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-950',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

// Input Component with Accessibility
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ error, label, className, id, ...props }) => {
  const inputId = id || props.name;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'rounded-xl border bg-slate-950/50 px-3 py-2.5 text-sm text-slate-100',
          'outline-none transition min-h-[44px]',
          'focus:border-cyan-300/65 focus:ring-1 focus:ring-cyan-300/30',
          error
            ? 'border-red-500/50 focus:border-red-400 focus:ring-red-400/30'
            : 'border-cyan-300/25',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-xs text-red-400" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

// Textarea Component with Accessibility
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ error, label, className, id, ...props }) => {
  const textareaId = id || props.name;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={clsx(
          'rounded-xl border bg-slate-950/50 px-3 py-2.5 text-sm text-slate-100',
          'outline-none transition resize-none min-h-[100px]',
          'focus:border-cyan-300/65 focus:ring-1 focus:ring-cyan-300/30',
          error
            ? 'border-red-500/50 focus:border-red-400 focus:ring-red-400/30'
            : 'border-cyan-300/25',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${textareaId}-error`} className="text-xs text-red-400" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

// Button Component with Accessibility
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
    primary: 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 hover:brightness-110',
    secondary: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:brightness-110',
    tertiary: 'border border-cyan-300/25 bg-slate-950/50 text-slate-100 hover:border-cyan-300/65',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs min-h-[32px]',
    md: 'px-4 py-2 text-sm min-h-[44px]',
    lg: 'px-6 py-2.5 text-base min-h-[48px]',
  };

  return (
    <button
      className={clsx(
        'rounded-xl font-semibold transition',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        'active:scale-95 transition-transform',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

// Card Component
interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'experience';
}

export const Card: React.FC<CardProps> = ({ children, className, variant = 'default' }) => {
  const variants = {
    default: 'rounded-2xl border border-white/10 bg-black/25 p-5',
    experience: 'rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-slate-950/50 to-slate-950/50 p-6',
  };

  return (
    <div
      className={clsx(
        'transition hover:border-cyan-400/40 hover:shadow-[0_0_18px_rgba(74,144,226,0.2)]',
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
};

// Section Wrapper with Accessibility
interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, subtitle }) => {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-6 md:py-8">
      <Card variant="default">
        <div className="mb-4">
          <h2 className="text-center text-2xl font-semibold text-[var(--primary)]">{title}</h2>
          {subtitle && <p className="mt-2 text-center text-sm text-[var(--muted)]">{subtitle}</p>}
        </div>
        {children}
      </Card>
    </section>
  );
};

// Re-export theme toggle from separate file
export { ThemeToggle, ThemeToggleIcon, ThemeToggleDropdown } from './theme-toggle';
