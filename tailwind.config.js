/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Garante que lê a pasta app
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Se você tiver uma pasta components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Caso use a pasta src
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FFBF00',
        dark: '#121212',
      },
    },
  },
  plugins: [],
}