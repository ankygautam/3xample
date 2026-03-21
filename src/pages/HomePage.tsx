import { Link } from 'react-router-dom';
import { AnimatedPreviewCard } from '../components/AnimatedPreviewCard';

const previewAnimations = [
  {
    eyebrow: 'Entrance',
    title: 'Launch polished reveals',
    description: 'Preview smooth intro motion for product cards, CTAs, and onboarding UI.',
    animationStyle: {
      animation: 'motionforgeFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
    },
    accentClassName: 'from-blue-500/15 via-white to-sky-400/20',
  },
  {
    eyebrow: 'Loop',
    title: 'Add subtle floating depth',
    description: 'Create micro-motions that feel premium without overpowering the interface.',
    animationStyle: {
      animation: 'motionforgeFloat 2.8s ease-in-out infinite',
    },
    accentClassName: 'from-cyan-500/15 via-white to-emerald-400/20',
  },
  {
    eyebrow: 'Highlight',
    title: 'Emphasize key moments',
    description: 'Use glow and pulse patterns to draw attention to status updates or feature chips.',
    animationStyle: {
      animation: 'motionforgePulseGlow 2s ease-in-out infinite',
    },
    accentClassName: 'from-indigo-500/15 via-white to-blue-300/25',
  },
];

export function HomePage() {
  return (
    <div className="space-y-20 pb-8 pt-8 sm:space-y-24 sm:pt-12">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-soft sm:px-10 lg:px-12 lg:py-16">
        <div className="absolute inset-0 bg-grid-fade bg-grid-pattern opacity-60" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Motion system starter
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Build and preview UI animations instantly
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              MotionForge gives you a lightweight space to test polished interface motion, tune the
              timing, and copy production-friendly CSS in seconds.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/playground"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Open Playground
              </Link>
              <Link
                to="/playground"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
              >
                Start with presets
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
              <p className="text-sm text-slate-300">Live tuning</p>
              <div className="mt-5 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div
                  className="h-28 rounded-2xl border border-white/20 bg-gradient-to-br from-blue-500 to-cyan-400"
                  style={{ animation: 'motionforgeFloat 2.6s ease-in-out infinite' }}
                />
              </div>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span>Duration</span>
                  <span>700ms</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span>Easing</span>
                  <span>ease-out</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span>CSS ready</span>
                  <span>Copy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-blue-700 uppercase">Preview presets</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              Explore motion patterns that feel polished from the start
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Start with a focused set of UI-friendly animations designed for cards, alerts, hero
            content, and interface highlights.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewAnimations.map((card) => (
            <AnimatedPreviewCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
