/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
  ],
  corePlugins: {
    preflight: false, // This is a workaround to avoid overriding some default styling
  },
}

