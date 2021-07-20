const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
		fontFamily: {
			'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
		},
    extend: {
			colors: {
				'proprietary': '#006599',
				'gray-transparent': '#6B7280A7'
			},
			backgroundImage: theme => ({
				'cover-image': "url('../img/cover-image.jpeg')",
			}),
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
