import { useEffect, useState } from 'react';

type CodeBlockPanelProps = {
  eyebrow: string;
  title: string;
  code: string;
  copyLabel?: string;
};

export function CodeBlockPanel({
  eyebrow,
  title,
  code,
  copyLabel = 'Copy',
}: CodeBlockPanelProps) {
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
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch (error) {
      console.error('Unable to copy code', error);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-[1.85rem] border border-slate-200 bg-white/92 p-5 shadow-soft sm:p-6">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">{eyebrow}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {copied ? 'Copied' : copyLabel}
        </button>
      </div>

      <pre className="mt-5 min-h-[260px] flex-1 overflow-x-auto rounded-[1.5rem] border border-slate-800/80 bg-slate-950 p-4 font-mono text-sm leading-7 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
        <code className="block whitespace-pre-wrap break-words">{code}</code>
      </pre>
    </div>
  );
}
