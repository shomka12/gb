const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const primary = "#E30B13";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      yellow: {
        700: "#f5c521",
      },
      gray: {
        300: "#d9dae8",
        500: "#999aa5",
        600: "#66676e",
        700: "#39393f",
        800: "#242529",
        900: "#191b1f",
        950: "#101215",
      },
    },
    extend: {
      spacing: {
        0.5: "0.12rem",
        layout: "2.75rem",
      },
      fontSize: {
        "2lg": "1.38rem",
      },
      borderRadius: {
        image: "0.5rem",
        layout: "0.8rem",
      },
      transitionTimingFunction: {
        default: "easy-in-out",
      },
      transitionDuration: {
        default: "200ms",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {},
      },
    },
  },
  plugins: [],
};
