"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Components //
import MainButton from "../atoms/main-button";
import SecondaryButtonDesktop from "../atoms/secondary-button-desktop";

// Import Radix Icons //
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

// Import Assets //
import logo from "@/assets/images/img-logo.webp";
import dribbble from "@/assets/images/img-dribbble.webp";
import linkedin from "@/assets/images/img-linkedin.webp";
import twitter from "@/assets/images/img-twitter.webp";
import github from "@/assets/images/img-github.webp";

function Navbar() {
	// Navbar Links //
	const navLinks = [
		{
			text: "About",
			path: "/about",
		},
		{
			text: "Expertise",
			path: "/expertise",
		},
		{
			text: "Case Study",
			path: "/case-study",
		},
		{
			text: "Portfolio",
			path: "https://dribbble.com/aliffirdaus",
		},
	];

	// Navbar Mobile View //
	const [isOpen, setOpen] = useState(false);

	// Navbar Toggle //
	const toggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	// External Link Path //
	interface NavItemProps {
		text: string;
		path: string;
	}

	const NavItem = ({ text, path }: NavItemProps) => {
		const isExternalLink = path.startsWith("http");

		if (isExternalLink) {
			return (
				<Link href={path} target="_blank" rel="noopener noreferrer">
					{text}
				</Link>
			);
		} else {
			return <Link href={path}>{text}</Link>;
		}
	};

	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav className="fixed flex w-full z-50 lg:hidden">
				<div className="flex items-center w-full justify-between px-sectionpxsm py-4 bg-bgbase bg-opacity-20 backdrop-blur-xl">
					<Link href="/">
						<Image
							src={logo}
							alt="Alchemist Logo"
							title="Alchemist Logo"
							priority={true}
							className="h-7 w-auto"
						/>
					</Link>

					{/* <-- === Navbar Toggle === --> */}
					<div
						onClick={toggleMenu}
						className="w-fit h-fit flex items-center justify-center rounded-md px-2 py-2 border border-white border-opacity-10 cursor-pointer"
					>
						{isOpen ? (
							<Cross2Icon className="w-[22px] h-[22px] text-white" />
						) : (
							<HamburgerMenuIcon className="w-[22px] h-[22px] text-white" />
						)}
					</div>
					{/* <-- === Navbar Toggle === --> */}
				</div>
			</nav>

			{/* <-- ==== Navbar Open Start ==== --> */}
			<div
				className={`fixed w-full h-screen z-40
            ${
				isOpen
					? "top-0 left-0 transition-all duration-700 ease-in-out"
					: "-top-full left-0 transition-all duration-700 ease-in-out"
			}`}
			>
				<div className="w-full flex flex-col h-full bg-bgbase bg-opacity-60 backdrop-blur-xl px-sectionpxsm pb-20 pt-32 justify-between items-start">
					<div className="flex flex-col w-full">
						<div className="mb-6 flex items-center gap-[14px]">
							<div className="w-[6px] h-[6px] bg-secondary rounded-full"></div>
							<p className="text-sm text-white">
								Have a look around...
							</p>
						</div>
						{/* <-- === Navbar Links Start === --> */}
						{navLinks.map((link, index) => (
							<div
								key={index}
								className="w-full py-[6px] text-4xl text-white"
							>
								<NavItem
									key={index}
									text={link.text}
									path={link.path}
								/>
							</div>
						))}
						{/* <-- === Navbar Links End === --> */}

						{/* <-- === Connect Button Start === --> */}
						<Link href="/connect">
							<div className="mt-12">
								<MainButton
									text="Connect"
									bgColor=""
									textColor=""
									fontWeight=""
								/>
							</div>
						</Link>
						{/* <-- === Connect Button End === --> */}
					</div>

					<div className="flex flex-col items-start justify-center">
						<div className="flex flex-col gap-1">
							<p className="text-sm text-grey">
								For any inquiries
							</p>
							<div className="border-b pb-1 border-white border-opacity-25 w-fit">
								<p className="text-white text-lg">
									aliffirdaus@petaniweb.com
								</p>
							</div>
						</div>
						<div className="flex gap-10 mt-14 items-center justify-start">
							<Link
								href="https://dribbble.com/aliffirdaus"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={dribbble}
									alt="Dribbble"
									priority={true}
									className="h-5 w-auto"
								/>
							</Link>

							<Link
								href="https://www.linkedin.com/in/aliffirdaus97/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={linkedin}
									alt="Linkedin"
									priority={true}
									className="h-5 w-auto"
								/>
							</Link>

							<Link
								href="https://twitter.com/whereisalif"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={twitter}
									alt="Twitter"
									priority={true}
									className="h-5 w-auto"
								/>
							</Link>

							<Link
								href="https://github.com/alif-firdaus"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={github}
									alt="Github"
									priority={true}
									className="h-5 w-auto"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <-- ==== Navbar Open End ==== --> */}
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}
			<nav className="hidden lg:flex fixed w-full px-sectionpxlg bg-bgbase bg-opacity-25 backdrop-blur-2xl z-50 py-[22px] items-center justify-between">
				<Link href="/">
					<Image
						src={logo}
						alt="Alchemist Logo"
						title="Alchemist Logo"
						priority={true}
						className="h-7 w-auto"
					/>
				</Link>
				{/* <-- === Navbar Desktop Links Start === --> */}
				<div className="flex items-center justify-center gap-9">
					{navLinks.map((link, index) => (
						<div
							key={index}
							className="text-[15px] hover:text-secondary duration-300 transition-all ease-in-out text-white"
						>
							<NavItem
								key={index}
								text={link.text}
								path={link.path}
							/>
						</div>
					))}
				</div>
				{/* <-- === Navbar Desktop Links End === --> */}
				<Link href="/connect">
					<SecondaryButtonDesktop text="Connect" />
				</Link>
			</nav>
			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
