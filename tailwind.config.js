/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     DEFAULT: '#4F46E5', // Indigo-600
      //     dark: '#4338CA',    // Indigo-700
      //     light: '#6366F1',   // Indigo-500
      //   },
      //   secondary: '#F9F5FF',
      //   ternary: '#f1f5f9',
      //   error: '#dc2626',
      //   bg: {
      //     DEFAULT: '#F3F4F6',
      //     dark: '#1F2937',
      //   },
      //   white: '#ffffff',
      //   black: '#000000',
      //   gray: {
      //     50: '#F9FAFB',
      //     100: '#F3F4F6',
      //     200: '#E5E7EB',
      //     300: '#D1D5DB',
      //     400: '#9CA3AF',
      //     500: '#6B7280',
      //     600: '#4B5563',
      //     700: '#374151',
      //     800: '#1F2937',
      //     900: '#111827',
      //   },
      // },
    },
  },
  plugins: [require("daisyui")],
};