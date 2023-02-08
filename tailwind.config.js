/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  darkMode: 'class',
  theme: {
    colors: {
      primary:'#14248A',
      secondary:'#F9F5FF',
      ternary:'#f1f5f9',
      error: '#dc2626',
      bg: '#28262C',
      whiteColor: '#ffffff',
    }
  },
};