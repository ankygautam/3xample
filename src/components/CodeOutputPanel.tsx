type CodeOutputPanelProps = {
  css: string;
};

export function CodeOutputPanel({ css }: CodeOutputPanelProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
        Generated CSS
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-950">Output</h2>

      <pre className="mt-6 overflow-x-auto rounded-[1.75rem] bg-slate-950 p-5 text-sm leading-7 text-slate-200">
        <code>{css}</code>
      </pre>
    </section>
  );
}
