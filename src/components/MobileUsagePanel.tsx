import { useEffect, useState, type CSSProperties } from 'react';

type MobileUsagePanelProps = {
  animationName: string;
  animationStyle: CSSProperties;
  previewKey: string;
  css: string;
};

type UsageTab = 'preview' | 'code';

export function MobileUsagePanel({
  animationName,
  animationStyle,
  previewKey,
  css,
}: MobileUsagePanelProps) {
  const [activeTab, setActiveTab] = useState<UsageTab>('preview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
    } catch (error) {
      console.error('Unable to copy CSS', error);
    }
  };

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-panel md:hidden">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">Usage</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
            {animationName}
          </h2>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
          Mobile
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 rounded-full border border-slate-200 bg-slate-50 p-1">
        <button
          type="button"
          onClick={() => setActiveTab('preview')}
          className={`h-10 rounded-full px-4 text-sm font-medium transition-colors ${
            activeTab === 'preview' ? 'bg-white text-slate-950 shadow-soft' : 'text-slate-500'
          }`}
        >
          Preview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('code')}
          className={`h-10 rounded-full px-4 text-sm font-medium transition-colors ${
            activeTab === 'code' ? 'bg-white text-slate-950 shadow-soft' : 'text-slate-500'
          }`}
        >
          Code
        </button>
      </div>

      <div className="mt-5 min-h-[290px]">
        {activeTab === 'preview' ? (
          <div className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,_rgba(248,250,252,0.95),_rgba(241,245,249,0.9))] p-3">
            <div className="grid min-h-[230px] place-items-center rounded-[1.3rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_36%),linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.96))] p-3">
              <div
                key={previewKey}
                style={animationStyle}
                className="w-full rounded-[1.3rem] border border-slate-200 bg-white p-4 shadow-[0_18px_36px_rgba(148,163,184,0.14)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-blue-700 uppercase">
                      Preview
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                      Motion ready alert
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Live
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  This example shows how the selected preset feels on a compact interface block.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    {animationName}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    UI example
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between gap-3 rounded-[1.1rem] border border-slate-200 bg-white px-3 py-2.5">
              <span className="text-xs font-medium text-slate-500">Generated CSS</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex h-9 items-center justify-center rounded-full bg-slate-950 px-4 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <pre className="mt-3 max-w-full overflow-x-auto rounded-[1.2rem] border border-slate-200 bg-white p-4 font-mono text-[0.78rem] leading-6 text-slate-700">
              <code className="block whitespace-pre-wrap break-words">{css}</code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
