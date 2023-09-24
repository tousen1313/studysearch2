/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '800px',
      },
      colors: {
        'orange-1': '#F70',
        'red-1': '#EE4422',
        'white-1': '#F9FAF9',
        'silver-1': '#CCCCCC',
        'gray-1': '#F6F6F6',
        'gray-2': '#666666',
        'gray-3': '#999999',
      },
      backgroundImage: {
        'toggle-right': "url('../public/gif/toggle-right.gif')",
        'toggle-right-hover': "url('../public/gif/toggle-right-hover.gif')",
        'toggle-left': "url('../public/gif/toggle-left.gif')",
        'toggle-left-hover': "url('../public/gif/toggle-left-hover.gif')",
      },
    },
  },
  plugins: [],
};
