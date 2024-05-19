import type { Metadata } from "next";
import { Raleway, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const mainFont = Raleway({
	subsets: ["latin"],
	variable: "--main-font",
});
const numberFont = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--number-font",
});

export const metadata: Metadata = {
	title: "Alchemist",
	keywords: ["Personal", "Portfolio", "Designer", "UI", "UX"],
	description:
		"Personal Website; Crafting beauty in pixels, weaving magic in code.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`scroll-smooth ${mainFont.variable} ${numberFont.variable}`}
		>
			<body className="bg-bgbase">{children}</body>
		</html>
	);
}
