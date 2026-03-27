type CodeTabId = 'preview' | 'css' | 'tailwind' | 'react';

type CodeTabsProps = {
  activeTab: CodeTabId;
  onChange: (tab: CodeTabId) => void;
};

const tabs: Array<{ id: CodeTabId; label: string }> = [
  { id: 'preview', label: 'Preview' },
  { id: 'css', label: 'CSS' },
  { id: 'tailwind', label: 'Tailwind' },
  { id: 'react', label: 'React' },
];

export function CodeTabs({ activeTab, onChange }: CodeTabsProps) {
  return (
    <div className="inline-flex w-full max-w-[34rem] items-center rounded-[1.2rem] border border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-1.5 shadow-[0_18px_36px_-28px_rgba(15,23,42,0.24),inset_0_1px_0_rgba(255,255,255,0.95)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`flex-1 rounded-[1rem] px-3 py-2.5 text-sm font-medium transition-[background-color,color,box-shadow] duration-200 ${
              isActive
                ? 'bg-slate-950 text-white shadow-[0_16px_26px_-18px_rgba(15,23,42,0.42),inset_0_1px_0_rgba(255,255,255,0.06)]'
                : 'text-slate-500 hover:bg-white hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export type { CodeTabId };
