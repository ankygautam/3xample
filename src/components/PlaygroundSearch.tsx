type PlaygroundSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function PlaygroundSearch({ value, onChange }: PlaygroundSearchProps) {
  return (
    <label className="block">
      <span className="sr-only">Search animation presets</span>
      <div className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_34px_-28px_rgba(2,6,23,0.8)] transition-[border-color,background-color,box-shadow] duration-200 focus-within:border-blue-400/40 focus-within:bg-blue-500/[0.08] focus-within:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_36px_-26px_rgba(37,99,235,0.35)]">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4 text-slate-500 transition-colors group-focus-within:text-blue-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8.5" cy="8.5" r="4.75" />
          <path d="m12.1 12.1 4.15 4.15" />
        </svg>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search animations"
          className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
        />
      </div>
    </label>
  );
}
