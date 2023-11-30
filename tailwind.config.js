/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      colors: {
        "primary-bg-color": "var(--primary-bg-color)",
        "secondary-bg-color": "var(--secondary-bg-color)",
        "tertiary-bg-color": "var(--tertiary-bg-color)",
        "highlight-text-color": "var(--highlight-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
      },

      animation: {
        borderWobble: 'borderWobble 10s ease-in-out infinite alternate',
      },

      keyframes: {
        borderWobble: {
          '0%': {
            borderRadius: '750px 200px 750px 250px / 250px 800px 350px 750px'
          },
          '50%': {
            borderRadius: '850px 550px 350px 750px / 550px 750px 550px 450px'
          },
          '100%': {
            borderRadius: '750px 250px 750px 250px / 250px 750px 250px 750px'
          },
        }
      }
    },

    darkMode: 'class',
  },
  plugins: [],
}

