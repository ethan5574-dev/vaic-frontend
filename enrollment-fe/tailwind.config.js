/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep blue — primary brand / action color
        primary: {
          50: '#EAF1FB',
          100: '#D0E1F6',
          200: '#A1C3ED',
          300: '#72A5E4',
          400: '#3D7FD4',
          500: '#0D47A1', // brand base
          600: '#0B3C89',
          700: '#093070',
          800: '#072558',
          900: '#051A3F',
        },
        // Teal — secondary accent (positive / success actions)
        teal: {
          50: '#E0F5F3',
          100: '#B3E6E1',
          200: '#80D5CC',
          300: '#4DC3B7',
          400: '#26B6A7',
          500: '#009688', // brand base
          600: '#00897B',
          700: '#00796B',
          800: '#00695C',
          900: '#004D40',
        },
        // Soft aqua — supporting accent (info, highlights, chart fills)
        aqua: {
          50: '#F1FAFC',
          100: '#DEF3F7',
          200: '#C4EAF1',
          300: '#8ED3E6', // brand base
          400: '#6FC3DB',
          500: '#4FADC9',
        },
        // Warm gold — warning accent
        warning: {
          50: '#FEF6E0',
          100: '#FDE9B3',
          300: '#F8CC5C',
          500: '#F5B300', // brand base
          600: '#CC9500',
          700: '#A37700',
        },
        // Soft red — error / critical accent
        danger: {
          50: '#FDEEEE',
          100: '#FBD4D5',
          300: '#F08083',
          500: '#E5484D', // brand base
          600: '#C93B40',
          700: '#A62F33',
        },
        // Cool gray background system
        surface: {
          bg: '#F2F5F8',
          bgAlt: '#E9EEF3',
          line: '#DCE3EA',
          ink: '#0F1B2D',
          mute: '#5B6B7F',
          faint: '#8B99AA',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        panel: '22px',
        card: '18px',
        control: '12px',
        pill: '999px',
      },
      boxShadow: {
        glass: '0 8px 30px -8px rgba(13, 71, 161, 0.12), 0 2px 8px -2px rgba(13, 71, 161, 0.06)',
        'glass-sm': '0 4px 16px -6px rgba(13, 71, 161, 0.10)',
        'glass-lift': '0 16px 40px -12px rgba(13, 71, 161, 0.18)',
        'inner-glass': 'inset 0 1px 0 0 rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse 75% 65% at 5% -10%, rgba(13,71,161,0.30), transparent 58%),' +
          'radial-gradient(ellipse 65% 60% at 95% 5%, rgba(0,150,136,0.22), transparent 58%),' +
          'radial-gradient(ellipse 85% 75% at 100% 105%, rgba(245,179,0,0.34), transparent 60%),' +
          'radial-gradient(ellipse 70% 60% at 5% 100%, rgba(142,211,230,0.26), transparent 58%),' +
          'linear-gradient(135deg, #DCEAFA 0%, #F2F5F8 45%, #FBE9C6 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '70%': { opacity: '0' },
          '100%': { transform: 'scale(1.45)', opacity: '0' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}
