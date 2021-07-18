module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				'proprietary': '#006599'
			},
			backgroundImage: theme => ({
				'cover-image': "url('../img/cover-image.jpeg')",
			})
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
