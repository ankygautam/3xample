export type DocSlug =
  | 'introduction'
  | 'animation-basics'
  | 'easing'
  | 'css-output'
  | 'faq';

export type DocsGroup = 'Getting Started' | 'Guides' | 'Workflow' | 'Support';

export type DocsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: string;
};

export type DocsPage = {
  slug: DocSlug;
  group: DocsGroup;
  label: string;
  title: string;
  description: string;
  sections: DocsSection[];
};

export const docsPages: DocsPage[] = [
  {
    slug: 'introduction',
    group: 'Getting Started',
    label: 'Introduction',
    title: 'Introduction',
    description:
      '3xample is a focused UI animation playground for testing motion, previewing timing, and generating reusable CSS without leaving the browser.',
    sections: [
      {
        title: 'What 3xample is',
        paragraphs: [
          '3xample is a frontend-only tool for trying UI animation presets in a fast, visual workspace. It gives you a controlled place to switch between motion patterns, adjust timing values, and inspect the generated CSS before bringing it into a product interface.',
          'The experience is intentionally lightweight. You do not need a backend, a database, or a design system setup to experiment with motion. Open the playground, select an animation, tune the settings, and copy the CSS when it feels right.',
        ],
      },
      {
        title: 'What it helps you do',
        bullets: [
          'Preview entrance, emphasis, exit, and hover animations in one place.',
          'Compare different durations, delays, easing values, and iteration counts.',
          'Generate reusable keyframes and animation declarations for real interface work.',
          'Keep experimentation simple enough for fast iteration during product design or frontend development.',
        ],
      },
    ],
  },
  {
    slug: 'animation-basics',
    group: 'Guides',
    label: 'Animation Basics',
    title: 'Animation Basics',
    description:
      'Good interface motion is easier to design when each animation has a clear job. 3xample groups presets by how they are typically used in a UI.',
    sections: [
      {
        title: 'Entrance animations',
        paragraphs: [
          'Entrance motion is used when something appears on screen for the first time. These animations help new content arrive with context, especially for cards, panels, notices, and onboarding moments.',
        ],
        bullets: [
          'Use for first-load content, overlays, drawers, and newly inserted UI.',
          'Keep the distance and duration modest so the interface stays calm.',
        ],
      },
      {
        title: 'Emphasis animations',
        paragraphs: [
          'Emphasis motion draws temporary attention to something important that is already on screen. It works well for validation states, highlighted actions, or subtle prompts.',
        ],
        bullets: [
          'Use sparingly for badges, status updates, and important UI feedback.',
          'Avoid repeating too many emphasis effects at once.',
        ],
      },
      {
        title: 'Exit and hover animations',
        paragraphs: [
          'Exit animations help content leave smoothly without feeling abrupt, while hover-style motion adds a responsive layer to interactive surfaces. Together they make interfaces feel more intentional and polished.',
        ],
        bullets: [
          'Use exit motion for dismissals, notifications, and temporary surfaces.',
          'Use hover motion for cards, buttons, and affordances that benefit from a subtle reactive feel.',
        ],
      },
    ],
  },
  {
    slug: 'easing',
    group: 'Guides',
    label: 'Easing',
    title: 'Easing',
    description:
      'Easing shapes how motion accelerates and slows down. Even with the same keyframes and duration, easing can make an animation feel soft, crisp, or mechanical.',
    sections: [
      {
        title: 'Common easing options',
        bullets: [
          '`ease` is a balanced default for many interface transitions.',
          '`linear` moves at a constant speed and is useful when you want neutral, even motion.',
          '`ease-in` starts slowly and finishes faster, which can work for exits or anticipation.',
          '`ease-out` starts faster and slows near the end, making entrances feel natural and readable.',
          '`ease-in-out` is smoother across the full motion path and works well for loops or hover effects.',
        ],
      },
      {
        title: 'How to choose quickly',
        paragraphs: [
          'If you are unsure, start with ease-out for entrances and ease-in for exits. Use ease-in-out when the motion loops or needs to feel more even from start to finish.',
          'The playground is useful here because you can swap easing values without changing the rest of the animation. That makes it easy to compare feel instead of guessing from code alone.',
        ],
      },
    ],
  },
  {
    slug: 'css-output',
    group: 'Workflow',
    label: 'CSS Output',
    title: 'CSS Output',
    description:
      'Every preset in 3xample produces reusable CSS so you can take what you tested visually and drop it into a real component with minimal cleanup.',
    sections: [
      {
        title: 'What gets generated',
        paragraphs: [
          'The output panel combines the selected keyframes with a ready-to-use animation declaration. That means you get both the motion definition and a practical example of how to apply it to an element.',
        ],
        code: `@keyframes three-xample-fade-up {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-element {
  animation: three-xample-fade-up 650ms ease-out 0ms 1 both;
}`,
      },
      {
        title: 'How to use it',
        bullets: [
          'Click Copy Code in the playground.',
          'Paste the output into a stylesheet, CSS module, or design system token layer.',
          'Apply the generated class or reuse the keyframes inside your existing component styles.',
          'Tune the values in the playground again whenever you want to compare another variation.',
        ],
      },
    ],
  },
  {
    slug: 'faq',
    group: 'Support',
    label: 'FAQ',
    title: 'FAQ',
    description:
      'A few quick answers to the most common questions when using 3xample as a UI motion tool.',
    sections: [
      {
        title: 'Does 3xample store my presets?',
        paragraphs: [
          'No. The current app keeps everything local in the browser session so the workflow stays fast and simple.',
        ],
      },
      {
        title: 'Can I use the generated CSS in a production app?',
        paragraphs: [
          'Yes. The generated keyframes and animation declarations are written to be copied into a real frontend project and adjusted further if needed.',
        ],
      },
      {
        title: 'When should I use infinite iteration counts?',
        paragraphs: [
          'Reserve infinite loops for subtle hover or ambient motion. For most entrance and emphasis patterns, a single iteration is the clearer choice.',
        ],
      },
      {
        title: 'Do I need a backend or CMS for the docs section?',
        paragraphs: [
          'No. The docs are hardcoded in reusable data structures and React components so the section stays frontend-only and easy to maintain.',
        ],
      },
    ],
  },
];

export const docsGroups = [
  {
    title: 'Getting Started' as DocsGroup,
    pages: docsPages.filter((page) => page.group === 'Getting Started'),
  },
  {
    title: 'Guides' as DocsGroup,
    pages: docsPages.filter((page) => page.group === 'Guides'),
  },
  {
    title: 'Workflow' as DocsGroup,
    pages: docsPages.filter((page) => page.group === 'Workflow'),
  },
  {
    title: 'Support' as DocsGroup,
    pages: docsPages.filter((page) => page.group === 'Support'),
  },
];

export const docsLookup = Object.fromEntries(docsPages.map((page) => [page.slug, page])) as Record<
  DocSlug,
  DocsPage
>;

export function isDocSlug(value: string | undefined): value is DocSlug {
  return Boolean(value && value in docsLookup);
}
