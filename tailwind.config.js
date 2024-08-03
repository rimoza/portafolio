/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#F9F5FF',
        ternary: '#f1f5f9',
        error: '#dc2626',
        bg: '#F3F4F6',
        whiteColor: '#ffffff',
      }
    }
  },
  plugins: [require("daisyui")],
};