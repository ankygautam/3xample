import type { AnimationCategory, AnimationIntensity } from '../data/animations';
import { StatusChip } from './ui/StatusChip';

type PresetMetaCardProps = {
  category: AnimationCategory;
  description: string;
  recommendedFor: string;
  intensity: AnimationIntensity;
};

export function PresetMetaCard({
  category,
  description,
  recommendedFor,
  intensity,
}: PresetMetaCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-5">
      <div>
        <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
          Preset details
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          <StatusChip className="px-3 py-1.5 text-xs" tone="neutral">
            {category}
          </StatusChip>
          <StatusChip className="px-3 py-1.5 text-xs" tone="blue">
            {intensity}
          </StatusChip>
        </div>
      </div>

      <div className="mt-6 rounded-[1.35rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        {recommendedFor}
      </div>
    </div>
  );
}
