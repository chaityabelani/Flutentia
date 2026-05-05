/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':  '475px',
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg: {
          primary:   '#0f172a',
          secondary: '#1e293b',
          card:      '#27354d',
        },
        accent: {
          primary:   '#6366f1',
          secondary: '#8b5cf6',
          cyan:      '#06b6d4',
          emerald:   '#10b981',
          rose:      '#f43f5e',
          amber:     '#f59e0b',
        },
        border: {
          subtle: 'rgba(99,102,241,0.15)',
          card:   'rgba(99,102,241,0.20)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne',  'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.7rem',
        'xs':  '0.75rem',
      },
      backgroundImage: {
        'gradient-hero':  'linear-gradient(135deg,#6366f1 0%,#8b5cf6 50%,#06b6d4 100%)',
        'gradient-text':  'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)',
        'gradient-card':  'linear-gradient(145deg,rgba(99,102,241,0.08),rgba(139,92,246,0.04))',
        'grid-pattern':   'linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glow':    '0 0 40px rgba(99,102,241,0.20)',
        'glow-lg': '0 0 60px rgba(99,102,241,0.35)',
        'card':    '0 4px 24px rgba(0,0,0,0.4)',
        'xl-dark': '0 20px 60px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        'xl2': '20px',
        'xl3': '32px',
      },
      animation: {
        'orb-float':      'orb-float 8s ease-in-out infinite',
        'orb-float-2':    'orb-float 8s ease-in-out infinite 3s',
        'orb-float-3':    'orb-float 8s ease-in-out infinite 5s',
        'chip-float':     'chip-float 4s ease-in-out infinite',
        'marquee':        'marquee 30s linear infinite',
        'scroll-bounce':  'scroll-bounce 1.8s ease-in-out infinite',
        'pulse-glow':     'pulse-glow 2s ease-in-out infinite',
        'spin-slow':      'spin-slow 0.8s linear infinite',
        'fade-up':        'fade-up 0.6s ease both',
        'fade-in':        'fade-in 0.5s ease both',
        'fade-up-d1':     'fade-up 0.6s ease 0.1s both',
        'fade-up-d2':     'fade-up 0.6s ease 0.2s both',
        'fade-up-d3':     'fade-up 0.6s ease 0.35s both',
        'fade-up-d4':     'fade-up 0.6s ease 0.5s both',
        'fade-up-d5':     'fade-up 0.6s ease 0.65s both',
      },
      keyframes: {
        'orb-float': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%':     { transform: 'translate(-20px,30px) scale(0.95)' },
        },
        'chip-float': {
          '0%,100%': { transform: 'translateX(0)' },
          '50%':     { transform: 'translateX(-8px)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'scroll-bounce': {
          '0%,100%': { transform: 'translateX(-50%) translateY(0)',    opacity: '1' },
          '80%':     { transform: 'translateX(-50%) translateY(16px)', opacity: '0' },
        },
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '50%':     { boxShadow: '0 0 40px rgba(99,102,241,0.6)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      })
    },
  ],
}
