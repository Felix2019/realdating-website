/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#222224",
        accent: "#3d5af1",
      },
    },
  },
  plugins: [],
};
