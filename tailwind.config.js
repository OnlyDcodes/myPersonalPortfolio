/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 👈 this makes Tailwind scan your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        tealbrand: {
          DEFAULT: "#0ABAB5",
          50: "#E1FAF9",
          100: "#C5F6F4",
          200: "#8EECE9",
          300: "#57E2DE",
          400: "#29D5D1",
          500: "#0ABAB5",
          600: "#089A96",
          700: "#077F7B",
          800: "#066A67",
          900: "#04514F",
        },
        surface: {
          900: "#0a0a0a",
          800: "#111214",
          700: "#17181c",
          600: "#1f2126",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,0.25), 0 8px 30px rgba(99,102,241,0.15)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms ease-out both',
        blink: 'blink 1s steps(2, start) infinite',
      },
      borderRadius: {
        xl: '1rem',
      }
    },
  },
  plugins: [],
}

