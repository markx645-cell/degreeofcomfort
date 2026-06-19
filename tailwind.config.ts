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
        // Primary brand blue/teal — the cloned palette
        brand: {
          50: '#eefbfd',
          100: '#d4f4f9',
          200: '#aee9f2',
          300: '#76d7e8',
          400: '#36bcd6',
          500: '#199fbc',
          600: '#177f9f',
          700: '#196781',
          800: '#1d556a',
          900: '#1d475a',
          950: '#0d2e3d',
        },
        // Warm accent used sparingly for offers / badges
        accent: {
          400: '#ff8a4c',
          500: '#f97316',
          600: '#e85d04',
        },
        ink: '#0f2430',
        cream: '#f7fbfc',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #199fbc 0%, #36bcd6 50%, #76d7e8 100%)',
        'brand-gradient-deep': 'linear-gradient(135deg, #0d2e3d 0%, #196781 55%, #199fbc 100%)',
        'hero-radial': 'radial-gradient(1200px 600px at 75% -10%, rgba(118,215,232,0.45), transparent 60%)',
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(13, 46, 61, 0.18)',
        'card-hover': '0 24px 60px -18px rgba(13, 46, 61, 0.32)',
        cta: '0 12px 30px -8px rgba(25, 159, 188, 0.55)',
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
