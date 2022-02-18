module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        merd: "#E9E5D6"
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
