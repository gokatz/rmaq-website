module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#303789',
        'brand-red': '#d84133'
      }
    },
  },
  variants: {},
  plugins: [],
}
