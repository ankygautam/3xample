import { useEffect, useMemo, useState } from 'react';
import { animationLookup, animationOptions, type AnimationKey, timingOptions } from '../data/animations';

const PREVIEW_BASE = 'rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft';

type CopyState = 'idle' | 'copied';

export function PlaygroundPage() {
  const [selectedAnimation, setSelectedAnimation] = useState<AnimationKey>('fadeUp');
  const [duration, setDuration] = useState(700);
  const [delay, setDelay] = useState(0);
  const [iterationCount, setIterationCount] = useState('1');
  const [timingFunction, setTimingFunction] = useState('cubic-bezier(0.22, 1, 0.36, 1)');
  const [copyState, setCopyState] = useState<CopyState>('idle');

  const animation = animationLookup[selectedAnimation];

  useEffect(() => {
    setDuration(animation.defaultDuration);
    setDelay(animation.defaultDelay);
    setIterationCount(animation.defaultIterationCount);
    setTimingFunction(animation.defaultTimingFunction);
    setCopyState('idle');
  }, [animation]);

  useEffect(() => {
    if (copyState !== 'copied') {
      return;
    }

    const timeout = window.setTimeout(() => setCopyState('idle'), 1800);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const animationStyle = useMemo(
    () => ({
      animation: `${animation.keyframesName} ${duration}ms ${timingFunction} ${delay}ms ${iterationCount} both`,
    }),
    [animation.keyframesName, delay, duration, iterationCount, timingFunction],
  );

  const generatedCss = useMemo(
    () => `${animation.keyframes}

.motionforge-target {
  animation-name: ${animation.keyframesName};
  animation-duration: ${duration}ms;
  animation-timing-function: ${timingFunction};
  animation-delay: ${delay}ms;
  animation-iteration-count: ${iterationCount};
  animation-fill-mode: both;
}`,
    [animation, delay, duration, iterationCount, timingFunction],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCss);
      setCopyState('copied');
    } catch (error) {
      console.error('Unable to copy CSS', error);
    }
  };

  return (
    <div className="space-y-8 pb-8 pt-8 sm:space-y-10 sm:pt-12">
      <section className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-[0.24em] text-blue-700 uppercase">
          Animation playground
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Tune interface motion and copy the CSS when it feels right
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Pick an animation preset, adjust the timing, and preview the motion live before
              dropping the CSS into your project.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm text-blue-900 shadow-soft">
            Frontend only, intentionally small, and ready for portfolio presentation.
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <aside className={`${PREVIEW_BASE} space-y-6`}>
          <div>
            <p className="text-sm font-semibold text-slate-900">Animation preset</p>
            <div className="mt-3 grid gap-3">
              {animationOptions.map((option) => {
                const isActive = option.key === selectedAnimation;
                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setSelectedAnimation(option.key)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      isActive
                        ? 'border-blue-500 bg-blue-50 shadow-soft'
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-base font-semibold text-slate-950">{option.name}</h2>
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          isActive ? 'bg-blue-600' : 'bg-slate-300'
                        }`}
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{option.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <label className="block">
              <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                <span>Duration</span>
                <span>{duration}ms</span>
              </div>
              <input
                type="range"
                min="200"
                max="4000"
                step="50"
                value={duration}
                onChange={(event) => setDuration(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600"
              />
            </label>

            <label className="block">
              <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                <span>Delay</span>
                <span>{delay}ms</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={delay}
                onChange={(event) => setDelay(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Timing function</span>
              <select
                value={timingFunction}
                onChange={(event) => setTimingFunction(event.target.value)}
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
                onChange={(event) => setIterationCount(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="infinite">infinite</option>
              </select>
            </label>
          </div>
        </aside>

        <div className="grid gap-6">
          <section className={`${PREVIEW_BASE} overflow-hidden`}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
                  Live preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">{animation.name}</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600">{animation.description}</p>
            </div>

            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 sm:p-6">
              <div className="grid min-h-[320px] place-items-center rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_36%),linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(241,245,249,0.92))] p-6">
                <div
                  key={`${selectedAnimation}-${duration}-${delay}-${iterationCount}-${timingFunction}`}
                  style={animationStyle}
                  className="w-full max-w-sm rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-blue-700">Prototype card</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">Motion preview</h3>
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-slate-950" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Fine-tune timing, delay, and iteration count while keeping the result clean and
                    UI-focused.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                      {duration}ms
                    </span>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                      {timingFunction}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${PREVIEW_BASE}`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
                  Generated CSS
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Copy and use it anywhere</h2>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {copyState === 'copied' ? 'Copied CSS' : 'Copy CSS'}
              </button>
            </div>

            <pre className="mt-6 overflow-x-auto rounded-[1.75rem] bg-slate-950 p-5 text-sm leading-7 text-slate-200">
              <code>{generatedCss}</code>
            </pre>
          </section>
        </div>
      </section>
    </div>
  );
}
