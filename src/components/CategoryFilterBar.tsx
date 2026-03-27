type CategoryFilterBarProps<T extends string> = {
  options: T[];
  active: T;
  onChange: (value: T) => void;
  compact?: boolean;
};

export function CategoryFilterBar<T extends string>({
  options,
  active,
  onChange,
  compact = false,
}: CategoryFilterBarProps<T>) {
  return (
    <div
      className={`flex flex-wrap gap-2 rounded-[1.3rem] border border-white/8 bg-white/[0.025] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
        compact ? '' : 'pt-2'
      }`.trim()}
    >
      {options.map((option) => {
        const isActive = option === active;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`inline-flex items-center justify-center rounded-full border px-3.5 py-2 text-[0.72rem] font-semibold tracking-[0.12em] transition-[background-color,border-color,color,box-shadow] duration-200 ${
              isActive
                ? 'border-blue-400/24 bg-blue-500/14 text-blue-100 shadow-[0_18px_28px_-22px_rgba(59,130,246,0.75),inset_0_1px_0_rgba(255,255,255,0.04)]'
                : 'border-white/8 bg-white/[0.03] text-slate-400 hover:border-blue-400/18 hover:bg-blue-500/10 hover:text-slate-100'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
