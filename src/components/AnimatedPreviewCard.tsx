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
      className={`rounded-3xl border border-slate-200 bg-gradient-to-br ${accentClassName} p-6 shadow-soft`}
      style={animationStyle}
    >
      <p className="text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase">{eyebrow}</p>
      <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
