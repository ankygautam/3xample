export type AnimationCategory = 'Entrance' | 'Emphasis' | 'Exit' | 'Hover';
export type AnimationIntensity = 'Subtle' | 'Medium' | 'Strong';

export type AnimationId =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'slideIn'
  | 'scaleIn'
  | 'zoomIn'
  | 'popIn'
  | 'riseIn'
  | 'dropIn'
  | 'bounce'
  | 'pulse'
  | 'pulseSoft'
  | 'wiggle'
  | 'shake'
  | 'nudge'
  | 'flash'
  | 'swing'
  | 'fadeOut'
  | 'fadeUpOut'
  | 'fadeDownOut'
  | 'slideOut'
  | 'slideLeftOut'
  | 'slideRightOut'
  | 'scaleOut'
  | 'zoomOut'
  | 'lift'
  | 'liftSoft'
  | 'glow'
  | 'glowSoft'
  | 'tilt'
  | 'tiltLeft'
  | 'tiltRight'
  | 'scaleHover'
  | 'shadowPop';

export type AnimationConfig = {
  id: AnimationId;
  name: string;
  category: AnimationCategory;
  description: string;
  recommendedFor: string;
  intensity: AnimationIntensity;
  keyframes: string;
  defaultDuration: number;
  defaultDelay: number;
  defaultEasing: string;
  defaultIterationCount: string;
};

type BaseAnimationConfig = Omit<AnimationConfig, 'description' | 'recommendedFor' | 'intensity'>;

export type AnimationGroup = {
  category: AnimationCategory;
  animations: AnimationConfig[];
};

const baseAnimationOptions: BaseAnimationConfig[] = [
  {
    id: 'fadeUp',
    name: 'Fade Up',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-fade-up {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    defaultDuration: 650,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'fadeDown',
    name: 'Fade Down',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-fade-down {
  0% {
    opacity: 0;
    transform: translateY(-18px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    defaultDuration: 650,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'fadeLeft',
    name: 'Fade Left',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-fade-left {
  0% {
    opacity: 0;
    transform: translateX(18px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}`,
    defaultDuration: 650,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'fadeRight',
    name: 'Fade Right',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-fade-right {
  0% {
    opacity: 0;
    transform: translateX(-18px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}`,
    defaultDuration: 650,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'slideIn',
    name: 'Slide In',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-slide-in {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
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
    category: 'Entrance',
    keyframes: `@keyframes three-xample-scale-in {
  0% {
    opacity: 0;
    transform: scale(0.9);
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
    id: 'zoomIn',
    name: 'Zoom In',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-zoom-in {
  0% {
    opacity: 0;
    transform: scale(0.78);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`,
    defaultDuration: 680,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'popIn',
    name: 'Pop In',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-pop-in {
  0% {
    opacity: 0;
    transform: scale(0.92);
  }
  65% {
    opacity: 1;
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`,
    defaultDuration: 560,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'riseIn',
    name: 'Rise In',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-rise-in {
  0% {
    opacity: 0;
    transform: translateY(28px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}`,
    defaultDuration: 720,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'dropIn',
    name: 'Drop In',
    category: 'Entrance',
    keyframes: `@keyframes three-xample-drop-in {
  0% {
    opacity: 0;
    transform: translateY(-28px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}`,
    defaultDuration: 720,
    defaultDelay: 0,
    defaultEasing: 'ease-out',
    defaultIterationCount: '1',
  },
  {
    id: 'bounce',
    name: 'Bounce',
    category: 'Emphasis',
    keyframes: `@keyframes three-xample-bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-14px);
  }
  70% {
    transform: translateY(-6px);
  }
  90% {
    transform: translateY(-2px);
  }
}`,
    defaultDuration: 900,
    defaultDelay: 0,
    defaultEasing: 'ease',
    defaultIterationCount: '1',
  },
  {
    id: 'pulse',
    name: 'Pulse',
    category: 'Emphasis',
    keyframes: `@keyframes three-xample-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.84;
  }
}`,
    defaultDuration: 900,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: '1',
  },
  {
    id: 'pulseSoft',
    name: 'Pulse Soft',
    category: 'Emphasis',
    keyframes: `@keyframes three-xample-pulse-soft {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.025);
    opacity: 0.92;
  }
}`,
    defaultDuration: 1100,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: '1',
  },
  {
    id: 'wiggle',
    name: 'Wiggle',
    category: 'Emphasis',
    keyframes: `@keyframes three-xample-wiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-2deg);
  }
  75% {
    transform: rotate(2deg);
  }
}`,
    defaultDuration: 650,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: '1',
  },
  {
    id: 'shake',
    name: 'Shake',
    category: 'Emphasis',
    keyframes: `@keyframes three-xample-shake {
  0%, 100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-8px);
  }
  40% {
    transform: translateX(7px);
  }
  60% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(4px);
  }
}`,
    defaultDuration: 650,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: '1',
  },
  {
    id: 'nudge',
    name: 'Nudge',
    category: 'Emphasis',
    keyframes: `@keyframes three-xample-nudge {
  0%, 100% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(6px);
  }
  65% {
    transform: translateX(-3px);
  }
}`,
    defaultDuration: 520,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: '1',
  },
  {
    id: 'flash',
    name: 'Flash',
    category: 'Emphasis',
    keyframes: `@keyframes three-xample-flash {
  0%, 100% {
    opacity: 1;
  }
  45% {
    opacity: 0.42;
  }
}`,
    defaultDuration: 600,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: '1',
  },
  {
    id: 'swing',
    name: 'Swing',
    category: 'Emphasis',
    keyframes: `@keyframes three-xample-swing {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-4deg);
  }
  75% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(0deg);
  }
}`,
    defaultDuration: 760,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: '1',
  },
  {
    id: 'fadeOut',
    name: 'Fade Out',
    category: 'Exit',
    keyframes: `@keyframes three-xample-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}`,
    defaultDuration: 550,
    defaultDelay: 0,
    defaultEasing: 'ease-in',
    defaultIterationCount: '1',
  },
  {
    id: 'fadeUpOut',
    name: 'Fade Up Out',
    category: 'Exit',
    keyframes: `@keyframes three-xample-fade-up-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-18px);
  }
}`,
    defaultDuration: 560,
    defaultDelay: 0,
    defaultEasing: 'ease-in',
    defaultIterationCount: '1',
  },
  {
    id: 'fadeDownOut',
    name: 'Fade Down Out',
    category: 'Exit',
    keyframes: `@keyframes three-xample-fade-down-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(18px);
  }
}`,
    defaultDuration: 560,
    defaultDelay: 0,
    defaultEasing: 'ease-in',
    defaultIterationCount: '1',
  },
  {
    id: 'slideOut',
    name: 'Slide Out',
    category: 'Exit',
    keyframes: `@keyframes three-xample-slide-out {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(24px);
  }
}`,
    defaultDuration: 600,
    defaultDelay: 0,
    defaultEasing: 'ease-in',
    defaultIterationCount: '1',
  },
  {
    id: 'slideLeftOut',
    name: 'Slide Left Out',
    category: 'Exit',
    keyframes: `@keyframes three-xample-slide-left-out {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-24px);
  }
}`,
    defaultDuration: 600,
    defaultDelay: 0,
    defaultEasing: 'ease-in',
    defaultIterationCount: '1',
  },
  {
    id: 'slideRightOut',
    name: 'Slide Right Out',
    category: 'Exit',
    keyframes: `@keyframes three-xample-slide-right-out {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(24px);
  }
}`,
    defaultDuration: 600,
    defaultDelay: 0,
    defaultEasing: 'ease-in',
    defaultIterationCount: '1',
  },
  {
    id: 'scaleOut',
    name: 'Scale Out',
    category: 'Exit',
    keyframes: `@keyframes three-xample-scale-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.94);
  }
}`,
    defaultDuration: 520,
    defaultDelay: 0,
    defaultEasing: 'ease-in',
    defaultIterationCount: '1',
  },
  {
    id: 'zoomOut',
    name: 'Zoom Out',
    category: 'Exit',
    keyframes: `@keyframes three-xample-zoom-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}`,
    defaultDuration: 560,
    defaultDelay: 0,
    defaultEasing: 'ease-in',
    defaultIterationCount: '1',
  },
  {
    id: 'lift',
    name: 'Lift',
    category: 'Hover',
    keyframes: `@keyframes three-xample-lift {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}`,
    defaultDuration: 1200,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    id: 'liftSoft',
    name: 'Lift Soft',
    category: 'Hover',
    keyframes: `@keyframes three-xample-lift-soft {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}`,
    defaultDuration: 1400,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    id: 'glow',
    name: 'Glow',
    category: 'Hover',
    keyframes: `@keyframes three-xample-glow {
  0%, 100% {
    box-shadow: 0 0 0 rgba(59, 130, 246, 0);
    filter: saturate(1);
  }
  50% {
    box-shadow: 0 0 28px rgba(59, 130, 246, 0.28);
    filter: saturate(1.08);
  }
}`,
    defaultDuration: 1500,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    id: 'glowSoft',
    name: 'Glow Soft',
    category: 'Hover',
    keyframes: `@keyframes three-xample-glow-soft {
  0%, 100% {
    box-shadow: 0 0 0 rgba(59, 130, 246, 0);
    filter: saturate(1);
  }
  50% {
    box-shadow: 0 0 16px rgba(59, 130, 246, 0.16);
    filter: saturate(1.04);
  }
}`,
    defaultDuration: 1600,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    id: 'tilt',
    name: 'Tilt',
    category: 'Hover',
    keyframes: `@keyframes three-xample-tilt {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(3deg);
  }
}`,
    defaultDuration: 950,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    id: 'tiltLeft',
    name: 'Tilt Left',
    category: 'Hover',
    keyframes: `@keyframes three-xample-tilt-left {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-3deg);
  }
}`,
    defaultDuration: 900,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    id: 'tiltRight',
    name: 'Tilt Right',
    category: 'Hover',
    keyframes: `@keyframes three-xample-tilt-right {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(3deg);
  }
}`,
    defaultDuration: 900,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    id: 'scaleHover',
    name: 'Scale Hover',
    category: 'Hover',
    keyframes: `@keyframes three-xample-scale-hover {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}`,
    defaultDuration: 1100,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
  {
    id: 'shadowPop',
    name: 'Shadow Pop',
    category: 'Hover',
    keyframes: `@keyframes three-xample-shadow-pop {
  0%, 100% {
    transform: translateY(0);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  }
  50% {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.14);
  }
}`,
    defaultDuration: 1200,
    defaultDelay: 0,
    defaultEasing: 'ease-in-out',
    defaultIterationCount: 'infinite',
  },
];

const animationMetadata: Record<
  AnimationId,
  Pick<AnimationConfig, 'description' | 'recommendedFor' | 'intensity'>
> = {
  fadeUp: {
    description: 'A clean upward fade that introduces UI blocks with soft vertical motion.',
    recommendedFor: 'Best for cards and stacked content',
    intensity: 'Subtle',
  },
  fadeDown: {
    description: 'A gentle top-down reveal for headers, banners, and compact interface rows.',
    recommendedFor: 'Best for hero content',
    intensity: 'Subtle',
  },
  fadeLeft: {
    description: 'A horizontal fade that feels polished on supporting labels and side content.',
    recommendedFor: 'Best for side panels',
    intensity: 'Subtle',
  },
  fadeRight: {
    description: 'A soft right-origin reveal that keeps directional motion calm and readable.',
    recommendedFor: 'Best for supporting UI',
    intensity: 'Subtle',
  },
  slideIn: {
    description: 'A crisp entrance with stronger movement for drawers and list panels.',
    recommendedFor: 'Best for panels and menus',
    intensity: 'Medium',
  },
  scaleIn: {
    description: 'A compact scale reveal that helps product cards feel responsive and premium.',
    recommendedFor: 'Best for cards',
    intensity: 'Subtle',
  },
  zoomIn: {
    description: 'A more noticeable scale reveal designed for featured moments and focal UI.',
    recommendedFor: 'Best for hero content',
    intensity: 'Medium',
  },
  popIn: {
    description: 'A quick overshoot entrance that adds a little energy without feeling playful.',
    recommendedFor: 'Best for buttons',
    intensity: 'Medium',
  },
  riseIn: {
    description: 'A deeper upward entrance useful for blocks that need a bit more presence.',
    recommendedFor: 'Good for onboarding panels',
    intensity: 'Medium',
  },
  dropIn: {
    description: 'A top-origin reveal that lands neatly for banners, toasts, and alert surfaces.',
    recommendedFor: 'Good for alerts',
    intensity: 'Medium',
  },
  bounce: {
    description: 'A classic emphasis bounce that highlights selected elements with clear motion.',
    recommendedFor: 'Best for feature highlights',
    intensity: 'Strong',
  },
  pulse: {
    description: 'A scale-and-opacity pulse for drawing attention without changing layout.',
    recommendedFor: 'Best for badges',
    intensity: 'Medium',
  },
  pulseSoft: {
    description: 'A softer pulse that works well for status cues and subtle emphasis.',
    recommendedFor: 'Good for alerts',
    intensity: 'Subtle',
  },
  wiggle: {
    description: 'A restrained rotate-based emphasis for playful-but-still-product UI moments.',
    recommendedFor: 'Best for buttons',
    intensity: 'Medium',
  },
  shake: {
    description: 'A directional shake suited for warnings, validation, and attention cues.',
    recommendedFor: 'Good for alerts',
    intensity: 'Strong',
  },
  nudge: {
    description: 'A compact lateral nudge that helps prompts and helper actions stand out.',
    recommendedFor: 'Best for buttons',
    intensity: 'Subtle',
  },
  flash: {
    description: 'A quick opacity-based emphasis for labels, tags, and compact status UI.',
    recommendedFor: 'Best for badges',
    intensity: 'Medium',
  },
  swing: {
    description: 'A rotational emphasis that adds character to feature chips and callouts.',
    recommendedFor: 'Best for feature highlights',
    intensity: 'Medium',
  },
  fadeOut: {
    description: 'A clean fade away for dismissing elements without abrupt movement.',
    recommendedFor: 'Best for alerts',
    intensity: 'Subtle',
  },
  fadeUpOut: {
    description: 'An upward fade-out that feels natural for stacked content leaving view.',
    recommendedFor: 'Best for cards',
    intensity: 'Subtle',
  },
  fadeDownOut: {
    description: 'A downward dismiss transition useful for temporary notifications and banners.',
    recommendedFor: 'Good for alerts',
    intensity: 'Subtle',
  },
  slideOut: {
    description: 'A directional exit with more presence for panels, drawers, and flyouts.',
    recommendedFor: 'Best for panels and menus',
    intensity: 'Medium',
  },
  slideLeftOut: {
    description: 'A leftward dismiss motion for side content and off-canvas style elements.',
    recommendedFor: 'Best for side panels',
    intensity: 'Medium',
  },
  slideRightOut: {
    description: 'A rightward dismiss that feels clean on utility panels and inline drawers.',
    recommendedFor: 'Best for side panels',
    intensity: 'Medium',
  },
  scaleOut: {
    description: 'A soft shrink-out transition that keeps cards and dialogs feeling refined.',
    recommendedFor: 'Best for modals',
    intensity: 'Subtle',
  },
  zoomOut: {
    description: 'A stronger scale exit for more dramatic hero or feature dismissals.',
    recommendedFor: 'Best for hero content',
    intensity: 'Medium',
  },
  lift: {
    description: 'A looping hover lift that adds clear depth to elevated product surfaces.',
    recommendedFor: 'Best for cards',
    intensity: 'Medium',
  },
  liftSoft: {
    description: 'A gentler hover lift for subtle motion on chips, tags, and buttons.',
    recommendedFor: 'Best for buttons',
    intensity: 'Subtle',
  },
  glow: {
    description: 'A stronger ambient glow for focus states and highlighted interactive surfaces.',
    recommendedFor: 'Best for feature highlights',
    intensity: 'Medium',
  },
  glowSoft: {
    description: 'A low-contrast glow that works well for refined hover and active states.',
    recommendedFor: 'Best for badges',
    intensity: 'Subtle',
  },
  tilt: {
    description: 'A balanced tilt loop that adds motion personality to showcase elements.',
    recommendedFor: 'Best for cards',
    intensity: 'Medium',
  },
  tiltLeft: {
    description: 'A directional tilt that feels useful for asymmetric hover treatments.',
    recommendedFor: 'Best for buttons',
    intensity: 'Subtle',
  },
  tiltRight: {
    description: 'A mirrored tilt variant for alternate hover emphasis on interactive items.',
    recommendedFor: 'Best for buttons',
    intensity: 'Subtle',
  },
  scaleHover: {
    description: 'A subtle looping scale motion for premium hover and ambient states.',
    recommendedFor: 'Best for buttons',
    intensity: 'Subtle',
  },
  shadowPop: {
    description: 'A depth-forward hover preset that boosts elevation with motion and shadow.',
    recommendedFor: 'Best for cards',
    intensity: 'Medium',
  },
};

export const animationOptions: AnimationConfig[] = baseAnimationOptions.map((animation) => ({
  ...animation,
  ...animationMetadata[animation.id],
}));

export const animationLookup = Object.fromEntries(
  animationOptions.map((animation) => [animation.id, animation]),
) as Record<AnimationId, AnimationConfig>;

export const animationCategories: AnimationCategory[] = [
  'Entrance',
  'Emphasis',
  'Exit',
  'Hover',
];

export const animationGroups: AnimationGroup[] = [
  {
    category: 'Entrance',
    animations: animationOptions.filter((animation) => animation.category === 'Entrance'),
  },
  {
    category: 'Emphasis',
    animations: animationOptions.filter((animation) => animation.category === 'Emphasis'),
  },
  {
    category: 'Exit',
    animations: animationOptions.filter((animation) => animation.category === 'Exit'),
  },
  {
    category: 'Hover',
    animations: animationOptions.filter((animation) => animation.category === 'Hover'),
  },
];

export const timingOptions = ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'];

type AnimationRuntimeOptions = {
  duration: number;
  delay: number;
  easing: string;
  iterationCount: string;
};

export function buildAnimationCss(animation: AnimationConfig, options: AnimationRuntimeOptions) {
  const animationName = getAnimationKeyframesName(animation.id);

  return `${animation.keyframes}

.animated-element {
  animation: ${animationName} ${options.duration}ms ${options.easing} ${options.delay}ms ${options.iterationCount} both;
}`;
}

export function buildTailwindExample(
  animation: AnimationConfig,
  options: AnimationRuntimeOptions,
) {
  const animationName = getAnimationKeyframesName(animation.id);

  return `<div
  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
  style={{
    animation: '${animationName} ${options.duration}ms ${options.easing} ${options.delay}ms ${options.iterationCount} both',
  }}
>
  ${animation.name} example
</div>`;
}

export function buildReactExample(animation: AnimationConfig, options: AnimationRuntimeOptions) {
  const animationName = getAnimationKeyframesName(animation.id);

  return `export function ExampleCard() {
  return (
    <div
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
      style={{
        animation: '${animationName} ${options.duration}ms ${options.easing} ${options.delay}ms ${options.iterationCount} both',
      }}
    >
      <h3 className="text-lg font-semibold text-slate-950">${animation.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        ${animation.description}
      </p>
    </div>
  );
}`;
}

export function getAnimationKeyframesName(id: AnimationId) {
  const keyframesNames: Record<AnimationId, string> = {
    fadeUp: 'three-xample-fade-up',
    fadeDown: 'three-xample-fade-down',
    fadeLeft: 'three-xample-fade-left',
    fadeRight: 'three-xample-fade-right',
    slideIn: 'three-xample-slide-in',
    scaleIn: 'three-xample-scale-in',
    zoomIn: 'three-xample-zoom-in',
    popIn: 'three-xample-pop-in',
    riseIn: 'three-xample-rise-in',
    dropIn: 'three-xample-drop-in',
    bounce: 'three-xample-bounce',
    pulse: 'three-xample-pulse',
    pulseSoft: 'three-xample-pulse-soft',
    wiggle: 'three-xample-wiggle',
    shake: 'three-xample-shake',
    nudge: 'three-xample-nudge',
    flash: 'three-xample-flash',
    swing: 'three-xample-swing',
    fadeOut: 'three-xample-fade-out',
    fadeUpOut: 'three-xample-fade-up-out',
    fadeDownOut: 'three-xample-fade-down-out',
    slideOut: 'three-xample-slide-out',
    slideLeftOut: 'three-xample-slide-left-out',
    slideRightOut: 'three-xample-slide-right-out',
    scaleOut: 'three-xample-scale-out',
    zoomOut: 'three-xample-zoom-out',
    lift: 'three-xample-lift',
    liftSoft: 'three-xample-lift-soft',
    glow: 'three-xample-glow',
    glowSoft: 'three-xample-glow-soft',
    tilt: 'three-xample-tilt',
    tiltLeft: 'three-xample-tilt-left',
    tiltRight: 'three-xample-tilt-right',
    scaleHover: 'three-xample-scale-hover',
    shadowPop: 'three-xample-shadow-pop',
  };

  return keyframesNames[id];
}
