import type { AnimationConfig, AnimationId } from '../data/animations';

type AnimationListProps = {
  animations: AnimationConfig[];
  selectedAnimationId: AnimationId;
  onSelect: (animation: AnimationConfig) => void;
};

export function AnimationList({
  animations,
  selectedAnimationId,
  onSelect,
}: AnimationListProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-panel sm:p-6 xl:sticky xl:top-28">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Animation List
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Choose a preset</h2>
        </div>
        <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {animations.length} options
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {animations.map((animation) => {
          const isActive = animation.id === selectedAnimationId;

          return (
            <button
              key={animation.id}
              type="button"
              onClick={() => onSelect(animation)}
              className={`rounded-[1.6rem] border px-4 py-4 text-left transition ${
                isActive
                  ? 'border-blue-500 bg-[linear-gradient(180deg,_rgba(239,246,255,0.9),_rgba(255,255,255,1))] shadow-lift'
                  : 'border-slate-200 bg-slate-50/90 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-soft'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[1.15rem] font-semibold tracking-tight text-slate-950">
                  {animation.name}
                </span>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isActive ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                />
              </div>
              <p className="mt-3 text-sm text-slate-500">
                {animation.defaultDuration}ms default duration
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
