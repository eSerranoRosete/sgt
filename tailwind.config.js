module.exports = {
  content: ["./views/**/*.html"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 45s linear infinite',
        'pulse-slow': 'pulse 5s linear infinite'
      } 
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
