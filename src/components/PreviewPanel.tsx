import type { CSSProperties } from 'react';
import type { AnimationCategory, AnimationIntensity } from '../data/animations';
import { CodeBlockPanel } from './CodeBlockPanel';
import { CodeTabs, type CodeTabId } from './CodeTabs';
import { PresetMetaCard } from './PresetMetaCard';
import { PlaygroundPanel } from './ui/PlaygroundPanel';
import { SectionHeader } from './ui/SectionHeader';
import { StatusChip } from './ui/StatusChip';

type PreviewPanelProps = {
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

export function PreviewPanel({
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
}: PreviewPanelProps) {
  return (
    <PlaygroundPanel className="rounded-[2.25rem] p-5 shadow-[0_28px_72px_-42px_rgba(15,23,42,0.28)] sm:p-6 lg:p-7">
      <div className="rounded-[1.9rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.9))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-6">
        <div className="flex flex-col gap-5">
          <SectionHeader
            eyebrow="Live Preview"
            title={animationName}
            description={description}
            className="gap-4"
            actions={
              <>
                <StatusChip>Selected animation</StatusChip>
                <StatusChip tone="blue">{animationCategory}</StatusChip>
                <StatusChip>{intensity} intensity</StatusChip>
              </>
            }
          />

          <CodeTabs activeTab={activeTab} onChange={onTabChange} />
        </div>
      </div>

      <div className="mt-6 rounded-[2.05rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(241,245,249,0.92))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] sm:p-5 lg:p-6">
        {activeTab === 'preview' ? (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.9fr)]">
            <div className="relative grid min-h-[440px] rounded-[2rem] border border-slate-200/85 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.12),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(241,245,249,0.88))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] sm:min-h-[500px] sm:p-6 lg:p-7">
              <div className="pointer-events-none absolute inset-5 rounded-[1.75rem] border border-white/60" />
              <div className="pointer-events-none absolute left-1/2 top-5 h-24 w-56 -translate-x-1/2 rounded-full bg-blue-200/35 blur-3xl" />
              <div className="grid place-items-center">
                <div
                  key={previewKey}
                  style={animationStyle}
                  className="relative w-full max-w-lg rounded-[2rem] border border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,252,0.94))] p-6 shadow-[0_32px_60px_-34px_rgba(37,99,235,0.35),0_24px_44px_-34px_rgba(15,23,42,0.36)] sm:p-8"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/90" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold tracking-[0.16em] text-blue-700 uppercase">
                        Preview card
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
                        3xample motion demo
                      </h3>
                    </div>
                    <div className="rounded-[1.45rem] border border-slate-900/10 bg-slate-950 p-3 shadow-[0_18px_30px_rgba(15,23,42,0.18)]">
                      <div className="h-8 w-8 rounded-[1rem] bg-white/90 sm:h-9 sm:w-9" />
                    </div>
                  </div>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                    Test how this animation feels on a clean interface card before using the CSS in
                    a production component.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <StatusChip className="px-4 py-2 text-xs" tone="blue">
                      {animationCategory}
                    </StatusChip>
                    <StatusChip className="px-4 py-2 text-xs">Live preview</StatusChip>
                  </div>
                </div>
              </div>
            </div>

            <PresetMetaCard
              category={animationCategory}
              description={description}
              recommendedFor={recommendedFor}
              intensity={intensity}
            />
          </div>
        ) : null}

        {activeTab === 'css' ? (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.9fr)]">
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
          </div>
        ) : null}

        {activeTab === 'tailwind' ? (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.9fr)]">
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
          </div>
        ) : null}

        {activeTab === 'react' ? (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.9fr)]">
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
          </div>
        ) : null}
      </div>
    </PlaygroundPanel>
  );
}
