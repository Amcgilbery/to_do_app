/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tachi: {
          // backgrounds
          ink: '#0b0d11',
          panel: '#171c22',
          layer: '#202831',

          // soft teals (signature SAC)
          teal: '#6ed7d7',
          cyan: '#a0f4f4',
          signal: '#3fcaca',

          // accents
          yellow: '#e8d37c',
          orange: '#d9893d',

          // lines
          line: '#0d1014',
          grayline: '#30363f',
        },
      },

      borderRadius: {
        tachi: '1.25rem', // soft rounded corners for Tachikoma look
      },

      boxShadow: {
        'tachi-soft': '0 0 12px rgba(110, 215, 215, 0.25)',
        'tachi-panel': '0 0 0 2px #0d1014, 0px 6px 12px rgba(0,0,0,0.35)',
      },

      backgroundImage: {
        'tachi-gradient': 'linear-gradient(135deg, #0b0d11, #171c22)',
      },
      keyframes: {
        'hud-bar': {
          '0%': { transform: 'translateX(-250%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 4px' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'hud-bar': 'hud-bar 2s linear infinite',
        scanlines: 'scanlines 0.6s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
