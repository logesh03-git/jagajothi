// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default { // Changed 'module.exports =' to 'export default'
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Your reusable font variable is defined here
        'mincho': ['"Sawarabi Mincho"', 'serif'],
      },
    },
  },
  // plugins: [], // Plugins array is technically optional in v4 but good practice
}