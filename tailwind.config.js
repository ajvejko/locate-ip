/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        // Light theme
        textLight: "#1d2b35",
        bgLight: "#eff0f1",
        primaryLight: "#b64a02",
        secondaryLight: "#c8e8fe",
        accentLight: "#f76402",

        // Dark theme
        textDark: "#c9d8e2",
        bgDark: "#0F1011",
        primaryDark: "#fd9149",
        secondaryDark: "#012238",
        accentDark: "#fd6a08",
      },
    },
  },
  plugins: [],
};
