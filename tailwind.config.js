/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mystic-purple": "#6D28D9",
        "midnight-blue": "#1E3A8A",
        "dark-red": "#B91C1C",
        "golden-yellow": "#FBBF24",
        "deep-black": "#111827",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "swipe-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "swipe-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-in-1s": "fade-in 1s ease-in-out",
        "fade-in-2s": "fade-in 2s ease-in-out",
        "fade-in-3s": "fade-in 3s ease-in-out",
        "swipe-right": "swipe-right 0.5s ease-in-out",
        "swipe-left": "swipe-left 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
