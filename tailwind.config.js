/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F7',
        surface: 'rgba(255, 255, 255, 0.65)',
        surfaceOpaque: '#FFFFFF',
        accent: '#E5E5EA',
        textPrimary: '#1D1D1F',
        textSecondary: '#86868B',
        brand: '#0066CC', // Adding a subtle blue as an active state tint if needed, or stick to charcoal
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"San Francisco"', '"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 24px -2px rgba(0, 0, 0, 0.05)',
        'glass-hover': '0 8px 32px -4px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
