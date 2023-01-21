/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#F53A45",
        accent: "#3d5af1",
      },
    },
  },
  plugins: [],
};
