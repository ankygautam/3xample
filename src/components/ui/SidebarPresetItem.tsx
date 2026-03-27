import { FavoriteToggleButton } from '../FavoriteToggleButton';

type SidebarPresetItemProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  favorite: boolean;
  onToggleFavorite: () => void;
};

export function SidebarPresetItem({
  label,
  active,
  onClick,
  favorite,
  onToggleFavorite,
}: SidebarPresetItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-[1.15rem] px-3.5 py-2.5 text-left text-[0.94rem] leading-6 transition-[background-color,color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 ${
        active
          ? 'bg-[linear-gradient(180deg,rgba(37,99,235,0.24),rgba(37,99,235,0.15))] text-white shadow-[0_20px_28px_-22px_rgba(59,130,246,0.85),inset_0_0_0_1px_rgba(96,165,250,0.24)]'
          : 'text-slate-400 hover:bg-blue-500/10 hover:text-slate-100'
      }`}
    >
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-[0.72rem] font-semibold tracking-[0.08em] transition ${
          active
            ? 'border-blue-300/30 bg-blue-400/20 text-blue-50'
            : 'border-white/8 bg-white/[0.02] text-slate-500 group-hover:border-blue-400/18 group-hover:text-slate-300'
        }`}
      >
        {active ? <span className="h-2 w-2 rounded-full bg-blue-100" /> : label.slice(0, 1)}
      </span>
      <span className="block min-w-0 flex-1 truncate font-medium">{label}</span>
      {active ? (
        <span className="inline-flex h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.95)]" />
      ) : null}
      <span className={active ? 'ml-1' : ''}>
        <FavoriteToggleButton active={favorite} onClick={onToggleFavorite} tone="dark" />
      </span>
    </button>
  );
}
