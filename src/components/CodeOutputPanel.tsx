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
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
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
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {copied ? 'Copied Code' : 'Copy Code'}
        </button>
      </div>

      <pre className="mt-6 overflow-x-auto rounded-[1.75rem] bg-slate-950 p-5 text-sm leading-7 text-slate-200">
        <code>{css}</code>
      </pre>
    </section>
  );
}
