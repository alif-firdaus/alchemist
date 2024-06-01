import type { Config } from "tailwindcss";

const config = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
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
				darkgrey: "#161718",
				white: "#F6F6F6",
			},
			padding: {
				// sm //
				sectionpxsm: "20px",
				// md //
				// lg //
				sectionpxlg: "100px",
				// 2xl //
				sectionpx2xl: "160px",
			},
			backgroundImage: {
				petaniweb: "url('../assets/images/img-petaniweb.webp')",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
