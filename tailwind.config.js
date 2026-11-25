/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          900: '#06141B', // Canvas base
          800: '#11212D', // Card surface
          700: '#253745', // Elevated pill / hover / inner card
          600: '#4A5C6A', // Border / muted
          300: '#9BA8AB', // Secondary text
          100: '#CCD0CF', // Primary text
        },
        apple: {
          bg: '#06141B',
          surface: '#11212D',
          card: '#11212D',
          cardHover: '#253745',
          subtext: '#9BA8AB',
          muted: '#4A5C6A',
          text: '#CCD0CF',
          blue: '#0a84ff',
          blueHover: '#0071e3',
          indigo: '#5e5ce6',
          orange: '#ff9f0a',
          green: '#30d158',
          red: '#ff453a',
          purple: '#bf5af2',
          border: 'rgba(74, 92, 106, 0.4)',
          borderHover: 'rgba(155, 168, 171, 0.4)'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          'Inter',
          'system-ui',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}
