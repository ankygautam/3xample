import type { ReactNode } from 'react';

type ControlFieldProps = {
  label: string;
  meta?: string;
  children: ReactNode;
};

export function ControlField({ label, meta, children }: ControlFieldProps) {
  return (
    <label className="block">
      <div className="mb-2.5 flex items-center justify-between text-sm font-medium text-slate-300">
        <span>{label}</span>
        {meta ? <span className="text-slate-400">{meta}</span> : null}
      </div>
      {children}
    </label>
  );
}
