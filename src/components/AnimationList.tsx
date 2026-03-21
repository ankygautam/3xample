import { useEffect, useState } from 'react';
import type {
  AnimationCategory,
  AnimationConfig,
  AnimationGroup,
  AnimationId,
} from '../data/animations';

type AnimationListProps = {
  groups: AnimationGroup[];
  selectedAnimationId: AnimationId;
  onSelect: (animation: AnimationConfig) => void;
};

function getInitialExpandedState(groups: AnimationGroup[]) {
  return Object.fromEntries(groups.map((group) => [group.category, true])) as Record<
    AnimationCategory,
    boolean
  >;
}

export function AnimationList({ groups, selectedAnimationId, onSelect }: AnimationListProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<AnimationCategory, boolean>>(
    getInitialExpandedState(groups),
  );

  useEffect(() => {
    const selectedGroup = groups.find((group) =>
      group.animations.some((animation) => animation.id === selectedAnimationId),
    );

    if (!selectedGroup) {
      return;
    }

    setExpandedGroups((current) => ({
      ...current,
      [selectedGroup.category]: true,
    }));
  }, [groups, selectedAnimationId]);

  const toggleGroup = (category: AnimationCategory) => {
    setExpandedGroups((current) => ({
      ...current,
      [category]: !current[category],
    }));
  };

  return (
    <aside className="overflow-hidden rounded-[1.85rem] border border-slate-800/80 bg-[radial-gradient(circle_at_top,_rgba(29,78,216,0.14),_rgba(2,6,23,0.98)_28%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(2,6,23,1))] text-slate-100 shadow-sm xl:sticky xl:top-28 xl:max-h-[calc(100vh-8rem)]">
      <div className="border-b border-white/10 px-5 py-5 sm:px-6">
        <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-slate-500 uppercase">
          Navigation
        </p>
        <h2 className="mt-3 text-[1.05rem] font-semibold tracking-tight text-white">
          Animation presets
        </h2>
      </div>

      <div className="max-h-[28rem] overflow-y-auto px-4 py-4 sm:px-5 xl:max-h-[calc(100vh-13rem)]">
        <nav aria-label="Animation presets" className="space-y-4">
          {groups.map((group) => {
            const isExpanded = expandedGroups[group.category];

            return (
              <div key={group.category}>
                <button
                  type="button"
                  onClick={() => toggleGroup(group.category)}
                  className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-left transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                >
                  <span className="text-[0.95rem] font-semibold tracking-tight text-slate-100">
                    {group.category}
                  </span>
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 12"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 4.5 6 8l3.5-3.5" />
                    </svg>
                  </span>
                </button>

                {isExpanded ? (
                  <div className="ml-2 mt-2 space-y-0.5 border-l border-white/8 pl-3">
                    {group.animations.map((animation) => {
                      const isActive = animation.id === selectedAnimationId;

                      return (
                        <button
                          key={animation.id}
                          type="button"
                          onClick={() => onSelect(animation)}
                          className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-[0.95rem] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 ${
                            isActive
                              ? 'bg-blue-500/12 text-white'
                              : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full transition ${
                              isActive ? 'bg-blue-400' : 'bg-slate-600 group-hover:bg-slate-400'
                            }`}
                          />
                          <span className="block font-medium">{animation.name}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
