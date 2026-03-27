import { ControlField } from './ui/ControlField';
import { PlaygroundPanel } from './ui/PlaygroundPanel';
import { SectionHeader } from './ui/SectionHeader';

type ControlPanelProps = {
  duration: number;
  delay: number;
  easing: string;
  iterationCount: string;
  timingOptions: string[];
  onReplay: () => void;
  onReset: () => void;
  onDurationChange: (value: number) => void;
  onDelayChange: (value: number) => void;
  onEasingChange: (value: string) => void;
  onIterationCountChange: (value: string) => void;
};

export function ControlPanel({
  duration,
  delay,
  easing,
  iterationCount,
  timingOptions,
  onReplay,
  onReset,
  onDurationChange,
  onDelayChange,
  onEasingChange,
  onIterationCountChange,
}: ControlPanelProps) {
  return (
    <PlaygroundPanel className="rounded-[2.15rem] p-5 shadow-[0_24px_56px_-38px_rgba(15,23,42,0.24)] sm:p-6 lg:p-7">
      <div className="rounded-[1.9rem] border border-slate-200/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.9))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-6">
        <SectionHeader
          eyebrow="Controls"
          title="Adjust settings"
          description="Tune timing, easing, and repetition with production-friendly defaults."
        />

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={onReplay}
            className="inline-flex items-center justify-center rounded-[1.1rem] bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_20px_34px_-22px_rgba(15,23,42,0.48),inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0"
          >
            Replay Animation
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center rounded-[1.1rem] border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:translate-y-0"
          >
            Reset
          </button>
        </div>

        <div className="mt-6 space-y-5 border-t border-slate-200 pt-5">
          <ControlField label="Duration" meta={`${duration}ms`}>
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_120px] sm:items-center">
              <div className="rounded-[1.15rem] border border-slate-200 bg-slate-50 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                <input
                  type="range"
                  min="200"
                  max="4000"
                  step="50"
                  value={duration}
                  onChange={(event) => onDurationChange(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent accent-blue-500"
                />
              </div>
              <input
                type="number"
                min="200"
                max="4000"
                step="50"
                value={duration}
                onChange={(event) => onDurationChange(Number(event.target.value))}
                className="w-full rounded-[1.15rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition focus:border-blue-400/70 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </ControlField>

          <ControlField label="Delay" meta={`${delay}ms`}>
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_120px] sm:items-center">
              <div className="rounded-[1.15rem] border border-slate-200 bg-slate-50 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={delay}
                  onChange={(event) => onDelayChange(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent accent-blue-500"
                />
              </div>
              <input
                type="number"
                min="0"
                max="2000"
                step="50"
                value={delay}
                onChange={(event) => onDelayChange(Number(event.target.value))}
                className="w-full rounded-[1.15rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition focus:border-blue-400/70 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </ControlField>

          <ControlField label="Easing">
            <select
              value={easing}
              onChange={(event) => onEasingChange(event.target.value)}
              className="w-full rounded-[1.15rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition focus:border-blue-400/70 focus:ring-2 focus:ring-blue-100"
            >
              {timingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </ControlField>

          <ControlField label="Iteration count">
            <select
              value={iterationCount}
              onChange={(event) => onIterationCountChange(event.target.value)}
              className="w-full rounded-[1.15rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition focus:border-blue-400/70 focus:ring-2 focus:ring-blue-100"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="infinite">infinite</option>
            </select>
          </ControlField>
        </div>
      </div>
    </PlaygroundPanel>
  );
}
