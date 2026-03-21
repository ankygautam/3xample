import type { CSSProperties } from 'react';

type PreviewPanelProps = {
  animationName: string;
  animationStyle: CSSProperties;
  previewKey: string;
};

export function PreviewPanel({
  animationName,
  animationStyle,
  previewKey,
}: PreviewPanelProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-panel sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Live Preview
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.4rem]">
            {animationName}
          </h2>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
          Selected animation: {animationName}
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,_rgba(248,250,252,0.9),_rgba(241,245,249,0.95))] p-4 sm:p-6">
        <div className="grid min-h-[360px] place-items-center rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(241,245,249,0.92))] p-6 sm:min-h-[420px]">
          <div
            key={previewKey}
            style={animationStyle}
            className="w-full max-w-md rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-lift"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-blue-700">Preview card</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  3xample motion demo
                </h3>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-slate-950" />
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Test how this animation feels on a clean UI element before using the CSS in your
              interface.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                {animationName}
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                Live
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
