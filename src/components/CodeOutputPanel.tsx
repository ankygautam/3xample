import { useEffect, useState } from 'react';
import { PlaygroundPanel } from './ui/PlaygroundPanel';
import { SectionHeader } from './ui/SectionHeader';

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
    <PlaygroundPanel className="min-w-0 p-5 sm:p-6">
      <SectionHeader
        eyebrow="Generated CSS"
        title="Output"
        actions={
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lift active:translate-y-0"
          >
            {copied ? 'Copied' : 'Copy Code'}
          </button>
        }
      />

      <div className="mt-3 flex flex-col gap-2 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <span>Live output updates from your current animation settings.</span>
        {copied ? <span className="text-blue-700">Copied</span> : <span>Ready to paste</span>}
      </div>

      <pre className="mt-3 min-h-[260px] w-full max-w-full overflow-x-auto rounded-[1.75rem] border border-slate-800/80 bg-slate-950 p-4 font-mono text-sm leading-7 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-[320px] sm:p-5">
        <code className="block whitespace-pre-wrap break-words sm:whitespace-pre">
          {css}
        </code>
      </pre>
    </PlaygroundPanel>
  );
}
