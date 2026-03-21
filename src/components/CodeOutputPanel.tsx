import { useEffect, useState } from 'react';

type CodeOutputPanelProps = {
  css: string;
};

export function CodeOutputPanel({ css }: CodeOutputPanelProps) {
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
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-panel sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Generated CSS
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Output</h2>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lift active:translate-y-0"
        >
          {copied ? 'Copied' : 'Copy Code'}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-500">
        <span>Live output updates from your current animation settings.</span>
        {copied ? <span className="text-blue-700">Copied</span> : <span>Ready to paste</span>}
      </div>

      <pre className="mt-4 min-h-[320px] overflow-x-auto rounded-[1.75rem] border border-slate-800/80 bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <code>{css}</code>
      </pre>
    </section>
  );
}
