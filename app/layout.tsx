import type { Metadata } from "next";
import { Raleway, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Import Components //
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import FooterDesktop from "@/components/organisms/footer-desktop";
import { Toaster } from "@/components/ui/toaster";

const mainFont = Raleway({
	subsets: ["latin"],
	variable: "--main-font",
	weight: ["400", "700"],
	display: "swap",
});
const numberFont = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--number-font",
	weight: ["400", "700"],
	display: "swap",
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
			<body className="bg-bgbase">
				<Navbar />
				{children}
				<Toaster />
				<Footer />
				<FooterDesktop />
			</body>
		</html>
	);
}
