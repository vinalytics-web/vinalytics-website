/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
extend: {
  colors: {
    foreground: "rgb(var(--foreground))",
    "muted-foreground": "rgb(var(--muted-foreground))",
    "primary-foreground": "rgb(var(--primary-foreground))",
  },
},
  },
  plugins: [],
};
