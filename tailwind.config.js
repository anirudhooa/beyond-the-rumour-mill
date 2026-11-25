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
        apple: {
          bg: '#000000',
          surface: '#121214',
          card: '#1c1c1e',
          cardHover: '#2c2c2e',
          subtext: '#86868b',
          muted: '#636366',
          text: '#f5f5f7',
          blue: '#0a84ff',
          blueHover: '#0071e3',
          indigo: '#5e5ce6',
          orange: '#ff9f0a',
          green: '#30d158',
          red: '#ff453a',
          purple: '#bf5af2',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)'
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
