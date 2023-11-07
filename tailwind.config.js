/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      's' : '320px',
      'm' : '375px',
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xl2' : '1440px',
      '2xl': '1536px',
      '2lg':'2560px'
    },
    extend: {
      colors:{
            bluee:"rgba(30, 60, 103, 1)",
            iid:"rgba(128, 144, 161, 1)"
      },
    },
  },
  plugins: [],
}

