const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				topography: "url('/assets/topography.svg')", // Adjust path based on your setup
			},
			colors: {
				base: "#222222",
				primary: "#7580F0",
				accent: "#BABFF7",
				header: "#DDDDDD",
				subtext: "#999999",
			},
			fontFamily: {
				SpaceLight: [
					"SpaceGroteskLight",
					...defaultTheme.fontFamily.sans,
				],
				SpaceBase: [
					"SpaceGroteskRegular",
					...defaultTheme.fontFamily.sans,
				],
				SpaceMed: [
					"SpaceGroteskMedium",
					...defaultTheme.fontFamily.sans,
				],
				SpaceBold: [
					"SpaceGroteskBold",
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
	plugins: [],
};
