import type { CSSProperties } from 'react';
import type { AnimationCategory, AnimationIntensity } from '../data/animations';
import { CodeBlockPanel } from './CodeBlockPanel';
import { CodeTabs, type CodeTabId } from './CodeTabs';
import { PresetMetaCard } from './PresetMetaCard';
import { StatusChip } from './ui/StatusChip';

type MobileUsagePanelProps = {
  animationName: string;
  animationCategory: AnimationCategory;
  description: string;
  recommendedFor: string;
  intensity: AnimationIntensity;
  animationStyle: CSSProperties;
  previewKey: string;
  activeTab: CodeTabId;
  onTabChange: (tab: CodeTabId) => void;
  css: string;
  tailwindExample: string;
  reactExample: string;
};

export function MobileUsagePanel({
  animationName,
  animationCategory,
  description,
  recommendedFor,
  intensity,
  animationStyle,
  previewKey,
  activeTab,
  onTabChange,
  css,
  tailwindExample,
  reactExample,
}: MobileUsagePanelProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-panel md:hidden">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">Usage</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
            {animationName}
          </h2>
        </div>
        <StatusChip className="px-3 py-1.5 text-xs" tone="blue">
          {intensity}
        </StatusChip>
      </div>

      <div className="mt-5">
        <CodeTabs activeTab={activeTab} onChange={onTabChange} />
      </div>

      <div className="mt-5 space-y-4">
        {activeTab === 'preview' ? (
          <>
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
                    <StatusChip className="px-3 py-1 text-xs" tone="neutral">
                      {animationCategory}
                    </StatusChip>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    This example shows how the selected preset feels on a compact interface block.
                  </p>
                </div>
              </div>
            </div>

            <PresetMetaCard
              category={animationCategory}
              description={description}
              recommendedFor={recommendedFor}
              intensity={intensity}
            />
          </>
        ) : null}

        {activeTab === 'css' ? (
          <>
            <CodeBlockPanel
              eyebrow="CSS snippet"
              title="Copy production-ready output"
              code={css}
              copyLabel="Copy CSS"
            />
            <PresetMetaCard
              category={animationCategory}
              description={description}
              recommendedFor={recommendedFor}
              intensity={intensity}
            />
          </>
        ) : null}

        {activeTab === 'tailwind' ? (
          <>
            <CodeBlockPanel
              eyebrow="Tailwind usage"
              title="Utility-style example"
              code={tailwindExample}
              copyLabel="Copy Tailwind"
            />
            <PresetMetaCard
              category={animationCategory}
              description={description}
              recommendedFor={recommendedFor}
              intensity={intensity}
            />
          </>
        ) : null}

        {activeTab === 'react' ? (
          <>
            <CodeBlockPanel
              eyebrow="React usage"
              title="JSX snippet"
              code={reactExample}
              copyLabel="Copy React"
            />
            <PresetMetaCard
              category={animationCategory}
              description={description}
              recommendedFor={recommendedFor}
              intensity={intensity}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}
