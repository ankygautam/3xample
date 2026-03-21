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
  const [replayCount, setReplayCount] = useState(0);

  const selectedAnimation = animationLookup[selectedAnimationId];
  const animationName = getAnimationKeyframesName(selectedAnimation.id);

  const animationStyle = {
    animation: `${animationName} ${duration}ms ${easing} ${delay}ms ${iterationCount} both`,
  };

  const generatedCss = `${selectedAnimation.keyframes}

.animated-element {
  animation: ${animationName} ${duration}ms ${easing} ${delay}ms ${iterationCount} both;
}`;

  const applyAnimationDefaults = (animation: AnimationConfig) => {
    setDuration(animation.defaultDuration);
    setDelay(animation.defaultDelay);
    setEasing(animation.defaultEasing);
    setIterationCount(animation.defaultIterationCount);
  };

  const handleAnimationSelect = (animation: AnimationConfig) => {
    setSelectedAnimationId(animation.id);
    applyAnimationDefaults(animation);
    setReplayCount((current) => current + 1);
  };

  const handleReplay = () => {
    setReplayCount((current) => current + 1);
  };

  const handleReset = () => {
    applyAnimationDefaults(selectedAnimation);
    setReplayCount((current) => current + 1);
  };

  return (
    <div className="space-y-8 pb-10 pt-8 sm:space-y-10 sm:pt-12">
      <section className="flex flex-col gap-4">
        <p className="text-sm font-semibold tracking-[0.24em] text-blue-700 uppercase">
          Animation playground
        </p>
        <div className="max-w-5xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl xl:text-[4.35rem] xl:leading-[1.02]">
              Build and preview clean UI motion with 3xample
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Pick an animation, adjust the core settings, and inspect the generated CSS in a
              layout built for fast visual iteration.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1.75fr)_260px] 2xl:grid-cols-[360px_minmax(0,1.9fr)_280px]">
        <AnimationList
          animations={animationOptions}
          selectedAnimationId={selectedAnimationId}
          onSelect={handleAnimationSelect}
        />

        <PreviewPanel
          animationName={selectedAnimation.name}
          animationStyle={animationStyle}
          previewKey={`${selectedAnimationId}-${duration}-${delay}-${easing}-${iterationCount}-${replayCount}`}
        />

        <div className="lg:col-span-2 xl:col-span-1 xl:content-start">
          <ControlPanel
            duration={duration}
            delay={delay}
            easing={easing}
            iterationCount={iterationCount}
            timingOptions={timingOptions}
            onReplay={handleReplay}
            onReset={handleReset}
            onDurationChange={setDuration}
            onDelayChange={setDelay}
            onEasingChange={setEasing}
            onIterationCountChange={setIterationCount}
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="hidden lg:block" />
        <CodeOutputPanel css={generatedCss} />
      </section>
    </div>
  );
}
