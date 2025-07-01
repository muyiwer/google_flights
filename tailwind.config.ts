import defineConfig from 'tailwindcss';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // Change this to your desired primary color
      },
    },
  },
  plugins: [],
});
