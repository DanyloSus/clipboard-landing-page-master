/** @type {import('tailwindcss')",.config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",

        "dark-grayish-blue": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)",
      },
    },
  },
  plugins: [],
};
