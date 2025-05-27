/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores básicas
        black: '#000000',
        white: '#FFFFFF',
        
        // Sua paleta dark (ótima estrutura)
        dark: {
          50: '#F5F5F6',
          100: '#E1E2E4',
          200: '#C9CACD',
          300: '#A9ABAF',
          400: '#7D7F84',
          500: '#292A2D',
          600: '#1F2022',
          700: '#17181A',
          800: '#0E0F10',
          900: '#050506',
          gtblack: '#000',  // Pode ser redundante com 'black'
          gtgreen: '#7ED957' // Melhor mover para cores de ação/sucesso
        },
        
        // Cores semânticas (otimizadas)
        primary: {
          DEFAULT: '#292A2D',  // Usando seu dark-500 como primary
            50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          900: '#292A2D',
          800: '#3A3B3F',
        },
        
        secondary: {
          DEFAULT: '#009688',
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#009688',
          600: '#00897B',
          700: '#00796B',
          800: '#00695C',
          900: '#004D40',
        },
        
        accent: {
          DEFAULT: '#FFC107',
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
           500: '#7ED957', // Substitua pela cor desejada (seu gtgreen)
        600: '#6bc04d',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        
        // Cores de estado (simplificadas)
        success: {
          DEFAULT: '#4CAF50',
          500: '#4CAF50',
          600: '#3D8B40',  // Tom mais escuro para hover
        },
        
        warning: {
          DEFAULT: '#FF9800',
          500: '#FF9800',
        },
        
        error: {
          DEFAULT: '#F44336',
          500: '#F44336',
        },
        
        // Cor adicional para ações (seu gtgreen)
        action: {
          DEFAULT: '#7ED957',
          500: '#7ED957',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};