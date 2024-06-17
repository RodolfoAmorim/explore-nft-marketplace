/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      gray: {
        100: '#FAFAFA',
        400: '#929293',
        700: '#232741',
        800: '#1C2137',
        900: '#121420',
      },
      blue: {
        300: '#0B9CDC',
        500: '#0A42FC',
      },
      purple: {
        500: '#7D28FB',
      },
      green: {
        500: '#36D062',
      },
      red: {
        500: '#EB5656',
      },
      yellow: {
        500: '#F8D417',
      },
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      borderRadius: {
        ssm: '4px',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(97deg, #0A42FC 0%, #0B9CDC 50.4%, #7D28FB 100%);',
        'line-blue': 'linear-gradient(97deg, #0A8FFC 0%, #120696 100%);',
        ellipse: 'url("./images/gradient/ellipse-gradient.png")',
      },
      boxShadow: {
        button: '0px 4px 40px 0px rgba(10, 66, 252, 0.33)',
      },
    },
  },
  plugins: [],
}
