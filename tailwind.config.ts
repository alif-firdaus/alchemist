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
				white: "#F6F6F6",
			},
			padding: {
				// sm //
				sectionpxsm: "22px",
				// md //
				// lg //
				sectionpxlg: "90px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
