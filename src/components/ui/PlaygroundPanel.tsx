import type { ReactNode } from 'react';

type PlaygroundPanelProps = {
  children: ReactNode;
  className?: string;
  tone?: 'light' | 'dark';
};

export function PlaygroundPanel({
  children,
  className = '',
  tone = 'light',
}: PlaygroundPanelProps) {
  const baseClassName =
    tone === 'dark'
      ? 'overflow-hidden rounded-[2rem] border border-slate-900/90 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.14),_rgba(15,23,42,0.98)_34%),linear-gradient(180deg,_rgba(15,23,42,0.99),_rgba(2,6,23,1))] text-slate-100 shadow-[0_26px_65px_-36px_rgba(2,6,23,0.52)]'
      : 'overflow-hidden rounded-[2rem] border border-slate-200/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] text-slate-950 shadow-panel';

  return <section className={`${baseClassName} ${className}`.trim()}>{children}</section>;
}
