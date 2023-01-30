/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/assets/bgDesktop.png')",
        'mobile': "url('/assets/bgMobile.png')",
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'Primary-gray': '#404040',
        'Primary-white': '#F2F2F2',
      },
    },
  },
  plugins: [],
}