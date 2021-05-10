const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [require('@tailwindcss/forms')],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors,
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible", "hover"],
    },
  },
};
