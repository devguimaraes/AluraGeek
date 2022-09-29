/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
		screens:{
			'tablet': '768px',
			'laptop': '1440px',
		},
    extend: {
			colors:{
				'background-input': "#FFF5EE",
				'azul-botao': '#2A7AE4'
			}
		},
		backgroundImage:{
			"headerImage" : "url('/img/header_mobile.png')",
			"headerImageTablet" : "url('/img/header_tablet.png')",

		},
  },
  plugins: [],
}
