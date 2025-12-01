/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          cyan: '#00D9FF',
          violet: '#A78BFA',
        },
        dark: {
          bg: '#0A0E27',
          card: 'rgba(255, 255, 255, 0.05)',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00D9FF 0%, #A78BFA 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0E27 0%, #1A1B3F 50%, #2D1B4E 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 217, 255, 0.1)',
        'glass-hover': '0 12px 48px 0 rgba(0, 217, 255, 0.2)',
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-violet': '0 0 20px rgba(167, 139, 250, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.6), 0 0 60px rgba(167, 139, 250, 0.4)',
          },
        },
      },
    },
  },
  plugins: [],
}