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
        primaryLight: "#9bd1f8",
        secondaryLight: "#fff5d6",
        accentLight: "#cb1524",

        // Dark theme
        textDark: "#cad8e2",
        bgDark: "#0e0f10",
        primaryDark: "#073d64",
        secondaryDark: "#1c2121",
        accentDark: "#ea3443",
      },
    },
  },
  plugins: [],
};
