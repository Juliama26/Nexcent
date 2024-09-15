/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#28CB8B",
        brandSecondary: "#263238",
        neutralDarkGray: "#4D4D4D",
        neutralSilver: "#F5F7FA",
        neutralGray: "#717171",
        neutralWhite: "#FFFFFF",

        // gray900: "#f5f5f5",
        // shade5: "#103E13",
        // tinT4: "#C8E6C9",
        // tinT5: "#E8F5E9",
      },
    },
  },
  plugins: [],
};
