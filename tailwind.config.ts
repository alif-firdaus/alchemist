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
			colors: {
				bgbase: "#0E0F11",
				primary: "#7B4DFC",
				secondary: "#CFFF71",
				black: "#171717",
				grey: "#7D7D7D",
				darkgrey: "#161718",
				white: "#F6F6F6",
			},
			padding: {
				// sm //
				sectionpxsm: "22px",
				// md //
				// lg //
				sectionpxlg: "90px",
			},
		},
	},
	plugins: [],
};
export default config;
