import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1D4ED8',
          soft: '#DBEAFE',
          deep: '#0F172A',
        },
      },
      boxShadow: {
        soft: '0 18px 38px -24px rgba(15, 23, 42, 0.16)',
        panel: '0 26px 60px -34px rgba(15, 23, 42, 0.18)',
        lift: '0 30px 70px -34px rgba(29, 78, 216, 0.24)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at top, rgba(29, 78, 216, 0.12), transparent 32%), linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '100% 100%, 36px 36px, 36px 36px',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
