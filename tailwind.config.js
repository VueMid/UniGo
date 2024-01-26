/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': '#FFFDF6',
        'white': '#FFFFFF',
        'black': '#000000',
        'grey': '#D3D3D3',
        'darker-gray': '#283033',
        'yellow': '#F4CA33',
        'tailwind-dark': '#1E293B',
      }
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        'sm': '640px',
        'md': '768px',
        'md2': '820px',
        'lg': '1024px',
        'xl': '1280px',

      }
    },
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'md2': '820px',
        'lg': '1024px',
        'xl': '1280px',

      }
    }
  },
  plugins: [],
}