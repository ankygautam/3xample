import { useState } from 'react';
import { AnimationList } from '../components/AnimationList';
import { CodeOutputPanel } from '../components/CodeOutputPanel';
import { ControlPanel } from '../components/ControlPanel';
import { PreviewPanel } from '../components/PreviewPanel';
import {
  animationLookup,
  animationOptions,
  getAnimationKeyframesName,
  timingOptions,
  type AnimationConfig,
  type AnimationId,
} from '../data/animations';

const initialAnimation = animationOptions[0];

export function PlaygroundPage() {
  const [selectedAnimationId, setSelectedAnimationId] = useState<AnimationId>(initialAnimation.id);
  const [duration, setDuration] = useState(initialAnimation.defaultDuration);
  const [delay, setDelay] = useState(initialAnimation.defaultDelay);
  const [easing, setEasing] = useState(initialAnimation.defaultEasing);
  const [iterationCount, setIterationCount] = useState(initialAnimation.defaultIterationCount);

  const selectedAnimation = animationLookup[selectedAnimationId];
  const animationName = getAnimationKeyframesName(selectedAnimation.id);

  const animationStyle = {
    animation: `${animationName} ${duration}ms ${easing} ${delay}ms ${iterationCount} both`,
  };

  const generatedCss = `${selectedAnimation.keyframes}

.three-xample-demo {
  animation-name: ${animationName};
  animation-duration: ${duration}ms;
  animation-timing-function: ${easing};
  animation-delay: ${delay}ms;
  animation-iteration-count: ${iterationCount};
  animation-fill-mode: both;
}`;

  const handleAnimationSelect = (animation: AnimationConfig) => {
    setSelectedAnimationId(animation.id);
    setDuration(animation.defaultDuration);
    setDelay(animation.defaultDelay);
    setEasing(animation.defaultEasing);
    setIterationCount(animation.defaultIterationCount);
  };

  return (
    <div className="space-y-8 pb-8 pt-8 sm:space-y-10 sm:pt-12">
      <section className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-[0.24em] text-blue-700 uppercase">
          Animation playground
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Build and preview clean UI motion with 3xample
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Pick an animation, adjust the core settings, and inspect the generated CSS in a
              layout built for fast visual iteration.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_340px]">
        <AnimationList
          animations={animationOptions}
          selectedAnimationId={selectedAnimationId}
          onSelect={handleAnimationSelect}
        />

        <PreviewPanel
          animationName={selectedAnimation.name}
          animationStyle={animationStyle}
          previewKey={`${selectedAnimationId}-${duration}-${delay}-${easing}-${iterationCount}`}
        />

        <div className="grid gap-6">
          <ControlPanel
            duration={duration}
            delay={delay}
            easing={easing}
            iterationCount={iterationCount}
            timingOptions={timingOptions}
            onDurationChange={setDuration}
            onDelayChange={setDelay}
            onEasingChange={setEasing}
            onIterationCountChange={setIterationCount}
          />
          <CodeOutputPanel css={generatedCss} />
        </div>
      </section>
    </div>
  );
}
