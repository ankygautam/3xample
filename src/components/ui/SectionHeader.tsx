import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  tone = 'light',
  className = '',
}: SectionHeaderProps) {
  const eyebrowClassName = tone === 'dark' ? 'text-slate-500' : 'text-slate-500';
  const titleClassName = tone === 'dark' ? 'text-white' : 'text-slate-950';
  const descriptionClassName = tone === 'dark' ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between ${className}`.trim()}>
      <div>
        <p className={`text-sm font-semibold tracking-[0.18em] uppercase ${eyebrowClassName}`}>
          {eyebrow}
        </p>
        <h2 className={`mt-2 text-2xl font-semibold tracking-tight ${titleClassName}`}>{title}</h2>
        {description ? (
          <p className={`mt-3 max-w-2xl text-sm leading-7 ${descriptionClassName}`}>{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}
