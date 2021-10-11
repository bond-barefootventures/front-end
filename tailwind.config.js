module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Montserrat'],
			roboto: ['Roboto', 'sans-serif'],
		},
		extend: {
			colors: {
				brand: {
					blue: '#185adb',
					yellow: '#ffc947',
					gray: '#efefef',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
