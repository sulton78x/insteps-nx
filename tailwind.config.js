module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			textColor: {
				lighterGreen: "#F7FFF9",
				lightGreen: "#E5FFEC",
				darkGreen: "#35A151",
				gray: "#B1B1B1",
				midGray: "#7E7B7B",
				darkGray: "#3A3A3A",
				offGray: "#646464",
				blue: "#4611F9",
				black: "#000000",
			},
			backgroundColor: {
				lighterGreen: "#F7FFF9",
				lightGreen: "#E5FFEC",
				darkGreen: "#35A151",
				gray: "#B1B1B1",
				midGray: "#7E7B7B",
				darkGray: "#3A3A3A",
				offGray: "#646464",
				blue: "#4611F9",
				instagram: "#FE5A3E",
				linkedIn: "#007AB9",
				twitter: "#55ACEE",
				black: "#000000",
			},
			borderColor: {
				lightGreen: "#E5FFEC",
				darkGreen: "#35A151",
			},
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: theme => ({
				bannerImg: "url('/images/bannerImg.png')",
			}),
			height: {
				heroHeight: "768px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
