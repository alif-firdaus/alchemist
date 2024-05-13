import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

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
		<html lang="en" className={`scroll-smooth ${raleway.className}`}>
			<body className="bg-bgbase">{children}</body>
		</html>
	);
}
