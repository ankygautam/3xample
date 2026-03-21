export type AnimationKey = 'fadeUp' | 'float' | 'pulseGlow' | 'slideIn';

export type AnimationConfig = {
  key: AnimationKey;
  name: string;
  description: string;
  keyframesName: string;
  keyframes: string;
  defaultDuration: number;
  defaultDelay: number;
  defaultTimingFunction: string;
  defaultIterationCount: string;
};

export const animationOptions: AnimationConfig[] = [
  {
    key: 'fadeUp',
    name: 'Fade Up',
    description: 'A smooth entrance animation for cards, buttons, and onboarding moments.',
    keyframesName: 'motionforgeFadeUp',
    keyframes: `@keyframes motionforgeFadeUp {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}`,
    defaultDuration: 700,
    defaultDelay: 0,
    defaultTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    defaultIterationCount: '1',
  },
  {
    key: 'float',
    name: 'Float',
    description: 'A looping hover-like motion that gives interface elements a soft lift.',
    keyframesName: 'motionforgeFloat',
    keyframes: `@keyframes motionforgeFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}`,
    defaultDuration: 2400,
    defaultDelay: 0,
    defaultTimingFunction: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    key: 'pulseGlow',
    name: 'Pulse Glow',
    description: 'A subtle pulse that works well for highlights, badges, and status moments.',
    keyframesName: 'motionforgePulseGlow',
    keyframes: `@keyframes motionforgePulseGlow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 18px 40px -24px rgba(29, 78, 216, 0.45);
  }
  50% {
    transform: scale(1.04);
    box-shadow: 0 26px 48px -18px rgba(29, 78, 216, 0.35);
  }
}`,
    defaultDuration: 1800,
    defaultDelay: 0,
    defaultTimingFunction: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    key: 'slideIn',
    name: 'Slide In',
    description: 'A crisp horizontal reveal suited for nav items, drawers, and feature lists.',
    keyframesName: 'motionforgeSlideIn',
    keyframes: `@keyframes motionforgeSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-24px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}`,
    defaultDuration: 650,
    defaultDelay: 0,
    defaultTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    defaultIterationCount: '1',
  },
];

export const animationLookup = Object.fromEntries(
  animationOptions.map((animation) => [animation.key, animation]),
) as Record<AnimationKey, AnimationConfig>;

export const timingOptions = [
  'ease',
  'linear',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'cubic-bezier(0.22, 1, 0.36, 1)',
  'cubic-bezier(0.16, 1, 0.3, 1)',
];
