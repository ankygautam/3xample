type FavoriteToggleButtonProps = {
  active: boolean;
  onClick: () => void;
  tone?: 'dark' | 'light';
};

export function FavoriteToggleButton({
  active,
  onClick,
  tone = 'dark',
}: FavoriteToggleButtonProps) {
  const baseClassName =
    tone === 'dark'
      ? active
        ? 'border-amber-300/25 bg-amber-400/16 text-amber-200 shadow-[0_14px_24px_-20px_rgba(251,191,36,0.9)]'
        : 'border-white/8 bg-white/[0.03] text-slate-500 hover:border-blue-400/18 hover:bg-blue-500/10 hover:text-slate-200'
      : active
        ? 'border-amber-200 bg-amber-50 text-amber-600'
        : 'border-slate-200 bg-white text-slate-400 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700';

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={active}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-[background-color,border-color,color,box-shadow] ${baseClassName}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-4 w-4"
        fill={active ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m10 2.9 2.18 4.42 4.87.71-3.52 3.43.83 4.84L10 14.9 5.64 16.3l.83-4.84L2.95 8.03l4.87-.71L10 2.9Z" />
      </svg>
    </button>
  );
}
