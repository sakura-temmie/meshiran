module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          450: "ff8c00",
        },
        red: {
          450: "#f00a00",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
