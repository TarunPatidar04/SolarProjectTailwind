/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      s: "320px",
      m: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1440px",
      "2xl": "1536px",
      "2lg": "2560px",
    },
    extend: {
      colors: {
        bluee: "rgba(30, 60, 103, 1)",
        iid: "rgba(128, 144, 161, 1)",
        pd: "rgba(0, 0, 0, 0.6)",
        bluue: "rgba(35, 86, 136, 1)",
        ornge: "rgba(255, 164, 28, 1)",
        bt: " rgba(223, 232, 239, 1)",
        grayy: "rgba(138, 143, 147, 1)",
        lightgrayy: "rgba(0, 0,0, 0.4)",
        lightgy: "rgba(0, 0,0, 0.7)",
        lightgrayyy: "rgba(35, 86,136, 0.2)",
      },
    },
  },
  plugins: [],
};
