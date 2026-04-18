import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="fixed left-0 top-0 z-40 -translate-y-full rounded-b-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
};

export const A11yAnnouncement: React.FC<{
  message: string;
  role?: 'status' | 'alert' | 'assertive';
}> = ({ message, role = 'status' }) => {
  return (
    <div
      role={role}
      aria-live={role === 'status' ? 'polite' : 'assertive'}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
};
