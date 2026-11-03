/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafcff',
        foreground: '#0f172a',
        muted: '#f1f5f9',
        border: '#e2e8f0',
        primary: {
          50: '#eff7ff',
          100: '#dbeefe',
          200: '#bfe0fe',
          300: '#93cbfd',
          400: '#60adfa',
          500: '#3b8df6',
          600: '#0b5cab',
          700: '#0a4e93',
          800: '#0c4179',
          900: '#062e5b',
          950: '#041d3a',
        },
        accent: {
          50: '#ecfdf3',
          100: '#d2f9e1',
          200: '#a9f0c9',
          300: '#71e3a8',
          400: '#37cd83',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(6 46 91 / 0.05), 0 8px 24px -8px rgb(6 46 91 / 0.1)',
        float: '0 2px 4px rgb(6 46 91 / 0.06), 0 24px 48px -12px rgb(6 46 91 / 0.18)',
      },
      borderRadius: {
        card: '1rem',
        btn: '0.5rem',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        drift: 'drift 9s ease-in-out infinite',
        'drift-slow': 'drift 14s ease-in-out infinite reverse',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        'spin-slow': 'spin-slow 9s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(28px, -22px) scale(1.12)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.75)', opacity: '0.55' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}