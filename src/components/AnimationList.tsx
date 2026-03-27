import { useEffect, useState } from 'react';
import type {
  AnimationCategory,
  AnimationConfig,
  AnimationGroup,
  AnimationId,
} from '../data/animations';
import { animationCategories } from '../data/animations';
import { CategoryFilterBar } from './CategoryFilterBar';
import { EmptyState } from './EmptyState';
import { PlaygroundSearch } from './PlaygroundSearch';
import { SidebarHeader } from './ui/SidebarHeader';
import { SidebarShell } from './ui/SidebarShell';
import { SidebarPresetItem } from './ui/SidebarPresetItem';
import { SidebarSection } from './ui/SidebarSection';

type SidebarFilter = 'All' | 'Favorites' | AnimationCategory;

type AnimationListProps = {
  groups: AnimationGroup[];
  selectedAnimationId: AnimationId;
  onSelect: (animation: AnimationConfig) => void;
  favorites: AnimationId[];
  onToggleFavorite: (animationId: AnimationId) => void;
};

function getInitialExpandedState(groups: AnimationGroup[]) {
  return Object.fromEntries(groups.map((group) => [group.category, true])) as Record<
    AnimationCategory,
    boolean
  >;
}

export function AnimationList({
  groups,
  selectedAnimationId,
  onSelect,
  favorites,
  onToggleFavorite,
}: AnimationListProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<AnimationCategory, boolean>>(
    getInitialExpandedState(groups),
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<SidebarFilter>('All');

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

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredGroups = groups
    .filter((group) => activeFilter === 'All' || activeFilter === 'Favorites' || group.category === activeFilter)
    .map((group) => ({
      ...group,
      animations: group.animations.filter((animation) => {
        const matchesSearch = normalizedQuery
          ? animation.name.toLowerCase().includes(normalizedQuery)
          : true;
        const matchesFavorites = activeFilter === 'Favorites' ? favorites.includes(animation.id) : true;

        return matchesSearch && matchesFavorites;
      }),
    }))
    .filter((group) => group.animations.length > 0);

  const visibleCount = filteredGroups.reduce((total, group) => total + group.animations.length, 0);
  const favoriteCount = favorites.length;

  const emptyState =
    activeFilter === 'Favorites' && favoriteCount === 0
      ? {
          title: 'No favorites yet',
          description: 'Star presets you want to revisit quickly.',
        }
      : {
          title: 'No animations found for this search',
          description: 'Try a different keyword or reset the current filter.',
        };

  return (
    <SidebarShell className="xl:sticky xl:top-24 xl:max-h-[calc(100vh-6.75rem)]">
      <SidebarHeader
        visibleCount={visibleCount}
        favoriteCount={favoriteCount}
        favoritesMode={activeFilter === 'Favorites'}
      />

      <div className="relative px-4 py-4 sm:px-5">
        <div className="space-y-3 pb-3">
          <PlaygroundSearch value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilterBar
            options={['All', 'Favorites', ...animationCategories]}
            active={activeFilter}
            onChange={(value) => setActiveFilter(value as SidebarFilter)}
          />
        </div>
      </div>

      <div className="relative max-h-[24rem] overflow-y-auto px-4 pb-4 sm:px-5 xl:max-h-[calc(100vh-22rem)] [scrollbar-color:rgba(100,116,139,0.35)_transparent] [scrollbar-width:thin]">
        <div className="pointer-events-none sticky top-0 z-10 -mx-1 h-5 bg-gradient-to-b from-[#030712] to-transparent" />

        {filteredGroups.length === 0 ? (
          <EmptyState title={emptyState.title} description={emptyState.description} tone="dark" />
        ) : (
          <nav aria-label="Animation presets" className="space-y-3">
            {filteredGroups.map((group) => {
              const isExpanded = expandedGroups[group.category];

              return (
                <SidebarSection
                  key={group.category}
                  label={group.category}
                  shortLabel={group.category.slice(0, 2).toUpperCase()}
                  expanded={isExpanded}
                  onToggle={() => toggleGroup(group.category)}
                >
                  {group.animations.map((animation) => (
                    <SidebarPresetItem
                      key={animation.id}
                      label={animation.name}
                      active={animation.id === selectedAnimationId}
                      favorite={favorites.includes(animation.id)}
                      onClick={() => onSelect(animation)}
                      onToggleFavorite={() => onToggleFavorite(animation.id)}
                    />
                  ))}
                </SidebarSection>
              );
            })}
          </nav>
        )}

        <div className="pointer-events-none sticky bottom-0 z-10 -mx-1 h-8 bg-gradient-to-t from-[#020617] to-transparent" />
      </div>
    </SidebarShell>
  );
}
