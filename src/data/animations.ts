export type AnimationId =
  | 'fadeIn'
  | 'slideUp'
  | 'slideDown'
  | 'scaleIn'
  | 'rotateIn'
  | 'bounce';

export type AnimationConfig = {
  id: AnimationId;
  name: string;
  keyframes: string;
  defaultDuration: number;
  defaultDelay: number;
  defaultEasing: string;
  defaultIterationCount: string;
};

export const animationOptions: AnimationConfig[] = [
  {
    id: 'fadeIn',
    name: 'Fade In',
    keyframes: `@keyframes three-xample-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`,
    defaultDuration: 650,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'slideUp',
    name: 'Slide Up',
    keyframes: `@keyframes three-xample-slide-up {
  0% {
    opacity: 0;
    transform: translateY(26px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    defaultDuration: 700,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'slideDown',
    name: 'Slide Down',
    keyframes: `@keyframes three-xample-slide-down {
  0% {
    opacity: 0;
    transform: translateY(-26px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    defaultDuration: 700,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'scaleIn',
    name: 'Scale In',
    keyframes: `@keyframes three-xample-scale-in {
  0% {
    opacity: 0;
    transform: scale(0.84);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`,
    defaultDuration: 600,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'rotateIn',
    name: 'Rotate In',
    keyframes: `@keyframes three-xample-rotate-in {
  0% {
    opacity: 0;
    transform: rotate(-8deg) scale(0.94);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}`,
    defaultDuration: 800,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'bounce',
    name: 'Bounce',
    keyframes: `@keyframes three-xample-bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-18px);
  }
  70% {
    transform: translateY(-8px);
  }
  90% {
    transform: translateY(-3px);
  }
}`,
    defaultDuration: 1200,
    defaultDelay: 0,
    defaultEasing: 'ease',
    defaultIterationCount: 'infinite',
  },
];

export const animationLookup = Object.fromEntries(
  animationOptions.map((animation) => [animation.id, animation]),
) as Record<AnimationId, AnimationConfig>;

export const timingOptions = [
  'ease',
  'linear',
  'ease-in',
  'ease-out',
  'ease-in-out',
];

export function getAnimationKeyframesName(id: AnimationId) {
  const keyframesNames: Record<AnimationId, string> = {
    fadeIn: 'three-xample-fade-in',
    slideUp: 'three-xample-slide-up',
    slideDown: 'three-xample-slide-down',
    scaleIn: 'three-xample-scale-in',
    rotateIn: 'three-xample-rotate-in',
    bounce: 'three-xample-bounce',
  };

  return keyframesNames[id];
}
