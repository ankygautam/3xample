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
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-panel sm:p-6">
      <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">Controls</p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-950">Adjust settings</h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onReplay}
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lift active:translate-y-0"
        >
          Replay Animation
        </button>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-950 active:translate-y-0"
        >
          Reset
        </button>
      </div>

      <div className="mt-7 space-y-6">
        <label className="block">
          <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
            <span>Duration</span>
            <span>{duration}ms</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_112px] sm:items-center">
            <input
              type="range"
              min="200"
              max="4000"
              step="50"
              value={duration}
              onChange={(event) => onDurationChange(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600"
            />
            <input
              type="number"
              min="200"
              max="4000"
              step="50"
              value={duration}
              onChange={(event) => onDurationChange(Number(event.target.value))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </div>
        </label>

        <label className="block">
          <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
            <span>Delay</span>
            <span>{delay}ms</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_112px] sm:items-center">
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={delay}
              onChange={(event) => onDelayChange(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600"
            />
            <input
              type="number"
              min="0"
              max="2000"
              step="50"
              value={delay}
              onChange={(event) => onDelayChange(Number(event.target.value))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Easing</span>
          <select
            value={easing}
            onChange={(event) => onEasingChange(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
          >
            {timingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Iteration count</span>
          <select
            value={iterationCount}
            onChange={(event) => onIterationCountChange(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="infinite">infinite</option>
          </select>
        </label>
      </div>
    </section>
  );
}
