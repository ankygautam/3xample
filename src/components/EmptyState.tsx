type EmptyStateProps = {
  title: string;
  description: string;
  tone?: 'light' | 'dark';
};

export function EmptyState({
  title,
  description,
  tone = 'light',
}: EmptyStateProps) {
  const toneClassName =
    tone === 'dark'
      ? 'border-white/8 bg-white/[0.03] text-slate-300'
      : 'border-slate-200 bg-slate-50 text-slate-600';

  return (
    <div
      className={`rounded-[1.4rem] border px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${toneClassName}`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 opacity-85">{description}</p>
    </div>
  );
}
