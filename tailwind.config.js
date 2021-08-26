const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
		fontFamily: {
			'sans': ['Inter', ...defaultTheme.fontFamily.sans],
			'serif': ['Besley', ...defaultTheme.fontFamily.serif]
		},
    extend: {
			colors: {
				'proprietary': {
					lightest: '#6cf',
					lighter: '#47c2ff',
					light: '#008bd1',
					DEFAULT: '#006599',
					dark: '#005580',
					darker: '#046',
					darkest: '#00334d'
				},
				'gray-transparent': '#6B7280A7'
			},
			backgroundImage: theme => ({
				'cover-image': "url('../img/cover-image.jpeg')",
			}),
			minHeight: {
				'80': '20rem/* 320px */',
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp')
	],
}
