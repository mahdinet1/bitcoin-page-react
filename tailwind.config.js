module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: "35.7rem",
      },
      width: {
        "4/7": "48.0%",
      },
      colors: {
        mysecoundColor: "--color-my-color",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
