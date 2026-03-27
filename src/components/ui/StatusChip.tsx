import type { ReactNode } from 'react';

type StatusChipProps = {
  children: ReactNode;
  tone?: 'neutral' | 'blue' | 'dark';
  className?: string;
};

export function StatusChip({
  children,
  tone = 'neutral',
  className = '',
}: StatusChipProps) {
  const toneClassName =
    tone === 'blue'
      ? 'border-blue-200 bg-blue-50 text-blue-700'
      : tone === 'dark'
        ? 'border-white/10 bg-white/[0.05] text-slate-200'
        : 'border-slate-200 bg-white/80 text-slate-600';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ${toneClassName} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
