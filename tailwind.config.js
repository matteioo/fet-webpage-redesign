const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // darkMode: 'class',
  content: [
	'./build/**/*.html'
  ],
  theme: {
		fontFamily: {
			'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
			'serif': ['Besley', ...defaultTheme.fontFamily.serif],
			'mono': ['Fira Code', ...defaultTheme.fontFamily.mono]
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
				'cover-image': "url('../img/cover-image.webp')",
			}),
			minHeight: {
				'12': '3rem/* 48px */',
				'80': '20rem/* 320px */',
			}
		},
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp')
	],
}
