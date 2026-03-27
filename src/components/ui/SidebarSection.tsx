import type { ReactNode } from 'react';

type SidebarSectionProps = {
  label: string;
  shortLabel: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export function SidebarSection({
  label,
  shortLabel,
  expanded,
  onToggle,
  children,
}: SidebarSectionProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.55rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_22px_38px_-34px_rgba(2,6,23,0.95)]">
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-white/[0.08]" />
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 rounded-[1.15rem] px-3 py-2.5 text-left transition-[background-color,color] duration-200 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] text-[0.72rem] font-semibold tracking-[0.14em] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            {shortLabel}
          </span>
          <span className="text-[0.96rem] font-semibold tracking-tight text-slate-100">{label}</span>
        </div>
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[transform,background-color,color] duration-200 ${
            expanded ? 'rotate-180 bg-blue-500/10 text-blue-200' : ''
          }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 12 12"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 4.5 6 8l3.5-3.5" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          expanded ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-65'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1.5 pb-1 pt-1.5">{children}</div>
        </div>
      </div>
    </div>
  );
}
