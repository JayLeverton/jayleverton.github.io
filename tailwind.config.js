/** @type {import('tailwindcss').Config} */

export default {
  content: [
    // "./index.html",
    "./src/**/*.{html,js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
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
  },
  plugins: [],
}

