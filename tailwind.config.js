/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            transform: "scale (1.6 )",
          },

          "50%": {
            transform: "scale(1.3)",
          },

          "100%": {
            transform: "scale(1)",
          },
        },
        pop: {
          "0%": {
            transform: "scale (0 )",
          },

          "60%": {
            transform: "scale(0.6)",
          },

          "100%": {
            transform: "scale(1)",
          },
        },
        navpop: {
          "0%": {
            transition:"",
          },

          "60%": {
            transition:"",
          },

          "100%": {
            transition:"",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out 1",
        pop: "pop 2s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
