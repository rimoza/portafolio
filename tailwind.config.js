/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    colors: {
      primary:'#14248A',
      secondary:'#F9F5FF',
      ternary:'#D4C2FC',
      error: '#dc2626',
      dark: '#28262C',
      whiteColor: '#ffffff',
    }
  },
};