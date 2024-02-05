/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      ms: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "content-color": "#67696E",
        "logo-text": "#1F2022",
        "second-logo-text": "#FAFBFC",
        "user-color": "#333437",
        "second-logo-color": "#F2F4F6",
        "unactive-color": "#9A9EA5",
        "sub-text": "#9B127D",
        "card2-color": "#00703C",
        "menuicon-color": "#0F172A",
        "plain-white": "#ffffff",
      },
      fontFamily: {
        roboto: ["Roboto", "san-serif"],
        Helvetica: ["Helvetica"],
        "nunito Sans": ["Nunito Sans", "sans-serif"],
        risque: ["Risque", "serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", " sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
