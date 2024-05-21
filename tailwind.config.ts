import type { Config } from "tailwindcss";

const config: Config = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				number: "var(--number-font)",
			},

			colors: {
				bgbase: "#0E0F11",
				primary: "#7B4DFC",
				secondary: "#CFFF71",
				black: "#171717",
				grey: "#818181",
				darkgrey: "#19191C",
				white: "#F6F6F6",
			},
			padding: {
				// sm //
				sectionpxsm: "20px",
				// md //
				// lg //
				sectionpxlg: "120px",
				// 2xl //
				sectionpx2xl: "160px",
			},
			backgroundImage: {
				petaniweb: "url('../assets/images/img-petaniweb.webp')",
			},
		},
	},
	plugins: [],
};
export default config;
