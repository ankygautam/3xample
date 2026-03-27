import type { ReactNode } from 'react';

type SidebarShellProps = {
  children: ReactNode;
  className?: string;
};

export function SidebarShell({ children, className = '' }: SidebarShellProps) {
  return (
    <aside
      className={`relative self-start overflow-hidden rounded-[2.1rem] border border-slate-900/95 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_rgba(15,23,42,0.98)_30%),linear-gradient(180deg,_#0f172a_0%,_#030712_52%,_#020617_100%)] text-slate-100 shadow-[0_34px_82px_-42px_rgba(2,6,23,0.72)] ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-[1px] rounded-[2rem] border border-white/[0.06]" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-20 rounded-b-full bg-white/[0.06] blur-2xl" />
      <div className="pointer-events-none absolute -left-8 top-24 h-28 w-28 rounded-full bg-blue-500/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-16 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl" />
      {children}
    </aside>
  );
}
