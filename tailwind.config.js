/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cx-blue':     '#2563EB',
        'cx-blue-l':   '#3B82F6',
        'cx-green':    '#10B981',
        'cx-green-l':  '#34D399',
        'cx-bg':       '#FAFAF8',
        'cx-section':  '#F0F4FF',
        'cx-dark':     '#0F172A',
        'cx-mid':      '#334155',
        'cx-muted':    '#94A3B8',
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}