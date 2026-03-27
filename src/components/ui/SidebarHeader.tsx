type SidebarHeaderProps = {
  visibleCount: number;
  favoriteCount: number;
  favoritesMode: boolean;
};

export function SidebarHeader({
  visibleCount,
  favoriteCount,
  favoritesMode,
}: SidebarHeaderProps) {
  return (
    <div className="relative border-b border-white/10 px-5 pb-4 pt-5 sm:px-6">
      <div className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold tracking-[0.24em] text-slate-400 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        Animation presets
      </div>
      <h2 className="mt-3 text-lg font-semibold tracking-tight text-white">Browse by category</h2>
      <p className="mt-1.5 text-sm leading-6 text-slate-400">
        Explore polished motion patterns and save the ones you want to reuse.
      </p>
      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
        <span className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          {visibleCount} visible
        </span>
        <span className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          {favoriteCount} saved
        </span>
        {favoritesMode ? (
          <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/12 px-3 py-1.5 text-blue-100 shadow-[0_12px_24px_-18px_rgba(59,130,246,0.8)]">
            Favorites
          </span>
        ) : null}
      </div>
    </div>
  );
}
