/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{html,js,jsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        gridTemplateColumns: {
          'fluid': 'repeat(auto-fit, minmax(20rem, 1fr))',
        }
      },
   },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

