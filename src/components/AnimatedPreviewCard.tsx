import type { CSSProperties } from 'react';

type AnimatedPreviewCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  animationStyle: CSSProperties;
  demoVariant: 'entrance' | 'loop' | 'highlight';
  accentClassName?: string;
};

export function AnimatedPreviewCard({
  eyebrow,
  title,
  description,
  animationStyle,
  demoVariant,
  accentClassName = 'from-blue-500/20 via-white to-cyan-400/20',
}: AnimatedPreviewCardProps) {
  const renderDemo = () => {
    if (demoVariant === 'entrance') {
      return (
        <div className="rounded-[1.45rem] border border-white/70 bg-white/80 p-3 shadow-[0_18px_36px_rgba(148,163,184,0.14)] backdrop-blur-sm sm:p-4">
          <div
            className="rounded-[1.1rem] border border-slate-200/90 bg-white p-3 shadow-[0_10px_24px_rgba(148,163,184,0.12)] sm:p-4"
            style={{ animation: 'three-xample-fade-up 1.05s ease-out both' }}
          >
            <div className="h-2.5 w-16 rounded-full bg-blue-100" />
            <div className="mt-3 h-3.5 w-28 rounded-full bg-slate-900/90" />
            <div className="mt-2 h-2.5 w-24 rounded-full bg-slate-200" />
          </div>
        </div>
      );
    }

    if (demoVariant === 'loop') {
      return (
        <div className="flex h-[6.75rem] items-center justify-center rounded-[1.45rem] border border-white/70 bg-white/78 shadow-[0_18px_36px_rgba(148,163,184,0.14)] backdrop-blur-sm sm:h-[7.75rem]">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-[0_14px_30px_rgba(125,211,252,0.18)]"
            style={{ animation: 'three-xample-lift-soft 1.8s ease-in-out infinite' }}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Floating chip
          </div>
        </div>
      );
    }

    return (
      <div className="flex h-[6.75rem] items-center justify-center rounded-[1.45rem] border border-white/70 bg-white/78 shadow-[0_18px_36px_rgba(148,163,184,0.14)] backdrop-blur-sm sm:h-[7.75rem]">
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-[0_14px_30px_rgba(148,163,184,0.14)]">
          <span
            className="h-3 w-3 rounded-full bg-emerald-400"
            style={{ animation: 'three-xample-pulse-soft 1.5s ease-in-out infinite' }}
          />
          <span className="text-sm font-medium text-slate-700">Status active</span>
        </div>
      </div>
    );
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-gradient-to-br ${accentClassName} p-5 shadow-panel transition hover:-translate-y-1 hover:shadow-lift sm:p-6`}
      style={animationStyle}
    >
      <div className="absolute inset-x-6 top-0 h-16 rounded-b-full bg-white/60 blur-2xl" />
      <p className="text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase">{eyebrow}</p>
      <h3 className="mt-5 text-[1.45rem] font-semibold tracking-tight text-slate-950 sm:mt-6 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 sm:leading-7">{description}</p>
      <div className="mt-5 sm:mt-6">{renderDemo()}</div>
    </article>
  );
}
