import { useEffect, useState } from 'react';
import { AnimationList } from '../components/AnimationList';
import { CodeOutputPanel } from '../components/CodeOutputPanel';
import { type CodeTabId } from '../components/CodeTabs';
import { ControlPanel } from '../components/ControlPanel';
import { MobileUsagePanel } from '../components/MobileUsagePanel';
import { PreviewPanel } from '../components/PreviewPanel';
import {
  animationLookup,
  buildAnimationCss,
  buildReactExample,
  buildTailwindExample,
  animationGroups,
  animationOptions,
  getAnimationKeyframesName,
  timingOptions,
  type AnimationConfig,
  type AnimationId,
} from '../data/animations';

const initialAnimation = animationOptions[0];
const favoritesStorageKey = 'three-xample-favorites';

export function PlaygroundPage() {
  const [selectedAnimationId, setSelectedAnimationId] = useState<AnimationId>(initialAnimation.id);
  const [duration, setDuration] = useState(initialAnimation.defaultDuration);
  const [delay, setDelay] = useState(initialAnimation.defaultDelay);
  const [easing, setEasing] = useState(initialAnimation.defaultEasing);
  const [iterationCount, setIterationCount] = useState(initialAnimation.defaultIterationCount);
  const [replayCount, setReplayCount] = useState(0);
  const [favorites, setFavorites] = useState<AnimationId[]>([]);
  const [activeTab, setActiveTab] = useState<CodeTabId>('preview');

  const selectedAnimation = animationLookup[selectedAnimationId];
  const animationKeyframesName = getAnimationKeyframesName(selectedAnimation.id);
  const runtimeOptions = {
    duration,
    delay,
    easing,
    iterationCount,
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedValue = window.localStorage.getItem(favoritesStorageKey);

    if (!storedValue) {
      return;
    }

    try {
      const parsed = JSON.parse(storedValue) as AnimationId[];
      setFavorites(parsed);
    } catch (error) {
      console.error('Unable to parse stored favorites', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(favoritesStorageKey, JSON.stringify(favorites));
  }, [favorites]);

  const animationStyle = {
    animation: `${animationKeyframesName} ${duration}ms ${easing} ${delay}ms ${iterationCount} both`,
  };

  const generatedCss = buildAnimationCss(selectedAnimation, runtimeOptions);
  const tailwindExample = buildTailwindExample(selectedAnimation, runtimeOptions);
  const reactExample = buildReactExample(selectedAnimation, runtimeOptions);

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

  const handleToggleFavorite = (animationId: AnimationId) => {
    setFavorites((current) =>
      current.includes(animationId)
        ? current.filter((item) => item !== animationId)
        : [...current, animationId],
    );
  };

  return (
    <div className="space-y-6 pb-10 pt-8 sm:space-y-8 sm:pt-12">
      <section className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-[0.24em] text-blue-700 uppercase">
          Animation playground
        </p>
        <div className="max-w-5xl">
          <div className="max-w-4xl">
            <h1 className="text-[2.35rem] font-semibold tracking-tight text-slate-950 sm:text-5xl xl:text-[4.35rem] xl:leading-[1.02]">
              Build and preview clean UI motion with 3xample
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-xl sm:leading-8">
              Pick an animation, adjust the core settings, and inspect the generated CSS in a
              layout built for fast visual iteration.
            </p>
          </div>
        </div>
      </section>

      <section className="md:hidden">
        <AnimationList
          groups={animationGroups}
          selectedAnimationId={selectedAnimationId}
          onSelect={handleAnimationSelect}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      </section>

      <section className="md:hidden">
        <MobileUsagePanel
          animationName={selectedAnimation.name}
          animationCategory={selectedAnimation.category}
          description={selectedAnimation.description}
          recommendedFor={selectedAnimation.recommendedFor}
          intensity={selectedAnimation.intensity}
          animationStyle={animationStyle}
          previewKey={`${selectedAnimationId}-${duration}-${delay}-${easing}-${iterationCount}-${replayCount}`}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          css={generatedCss}
          tailwindExample={tailwindExample}
          reactExample={reactExample}
        />
      </section>

      <section className="hidden gap-5 md:grid lg:grid-cols-[292px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1.55fr)_272px] 2xl:grid-cols-[316px_minmax(0,1.68fr)_284px]">
        <div className="lg:row-span-2">
          <AnimationList
            groups={animationGroups}
            selectedAnimationId={selectedAnimationId}
            onSelect={handleAnimationSelect}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        <div className="min-w-0">
          <PreviewPanel
            animationName={selectedAnimation.name}
            animationCategory={selectedAnimation.category}
            description={selectedAnimation.description}
            recommendedFor={selectedAnimation.recommendedFor}
            intensity={selectedAnimation.intensity}
            animationStyle={animationStyle}
            previewKey={`${selectedAnimationId}-${duration}-${delay}-${easing}-${iterationCount}-${replayCount}`}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            css={generatedCss}
            tailwindExample={tailwindExample}
            reactExample={reactExample}
          />
        </div>

        <div className="min-w-0 lg:col-span-2 xl:col-span-1 xl:self-start">
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

        <div className="min-w-0 lg:col-start-2 xl:col-span-2 xl:col-start-2">
          <CodeOutputPanel css={generatedCss} />
        </div>
      </section>
    </div>
  );
}
