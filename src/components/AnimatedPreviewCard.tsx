import type { CSSProperties } from 'react';

type AnimatedPreviewCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  animationStyle: CSSProperties;
  accentClassName?: string;
};

export function AnimatedPreviewCard({
  eyebrow,
  title,
  description,
  animationStyle,
  accentClassName = 'from-blue-500/20 via-white to-cyan-400/20',
}: AnimatedPreviewCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-gradient-to-br ${accentClassName} p-6 shadow-panel transition hover:-translate-y-1 hover:shadow-lift`}
      style={animationStyle}
    >
      <div className="absolute inset-x-6 top-0 h-16 rounded-b-full bg-white/60 blur-2xl" />
      <p className="text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase">{eyebrow}</p>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
