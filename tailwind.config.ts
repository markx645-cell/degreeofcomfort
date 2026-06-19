import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Royal blue (section backgrounds) — the cloned palette
        brand: {
          50: '#eef3ff',
          100: '#dbe5ff',
          200: '#b8cbff',
          300: '#8ba7ff',
          400: '#5b7cf5',
          500: '#2f54e0',
          600: '#1f48c8',
          700: '#1a3aa6',
          800: '#16307f',
          900: '#0f2266',
          950: '#0a1747',
        },
        // Orange — primary CTAs, hero (kept the "pink" key so all existing
        // pink-* classes recolor at once)
        pink: {
          light: '#ffe7d3',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        // Lime green — "Get Instant Estimate", logo roof
        lime: {
          400: '#a3d65a',
          500: '#8cc63f',
          600: '#74ad32',
        },
        // Gold/amber — "Book Appointment"
        gold: {
          400: '#fbbd4f',
          500: '#f9a826',
          600: '#e08e10',
        },
        // Bright royal blue used on the promo banner
        cobalt: {
          DEFAULT: '#1763c6',
          dark: '#1250a0',
        },
        ink: '#0f1b3d',
        cream: '#f6f8ff',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pink': 'linear-gradient(115deg, #f97316 0%, #ea580c 60%, #c2410c 100%)',
        'blue-section': 'linear-gradient(180deg, #1f48c8 0%, #1a3aa6 100%)',
        'navy-bar': 'linear-gradient(90deg, #0f2266 0%, #16307f 100%)',
      },
      boxShadow: {
        card: '0 12px 40px -12px rgba(10, 23, 71, 0.25)',
        'card-hover': '0 24px 60px -16px rgba(10, 23, 71, 0.4)',
        cta: '0 10px 24px -8px rgba(249, 115, 22, 0.55)',
        pill: '0 6px 18px -6px rgba(10, 23, 71, 0.3)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
