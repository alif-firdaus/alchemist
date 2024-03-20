"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Components //

// Import Radix Icons //
import {
	HamburgerMenuIcon,
	Cross2Icon,
	ArrowRightIcon,
} from "@radix-ui/react-icons";

// Import Assets //
import logo from "@/assets/images/logo.webp";

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
			<nav className="fixed flex w-full z-50">
				<div className="flex items-center w-full justify-between px-sectionpxsm py-4 bg-bgbase bg-opacity-15 backdrop-blur-lg">
					<Image
						src={logo}
						alt="Alchemist Logo"
						priority={true}
						className="h-7 w-auto"
					/>

					{/* <-- === Navbar Toggle === --> */}
					<div
						onClick={toggleMenu}
						className="w-fit h-fit flex items-center justify-center rounded-md px-2 py-2 border border-white border-opacity-15 cursor-pointer"
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
				className={`fixed w-full z-40
            ${
				isOpen
					? "top-0 left-0 transition-all duration-700 ease-in-out"
					: "-top-full left-0 transition-all duration-700 ease-in-out"
			}`}
			>
				<div className="w-full flex flex-col h-full bg-bgbase bg-opacity-15 backdrop-blur-lg px-sectionpxsm pb-12 pt-28 justify-center items-center">
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
						<div className="mt-12">
							<div className="border border-white border-opacity-15 flex w-fit items-center justify-center pt-3 pb-[14px] rounded-md pl-8 pr-7 gap-3 cursor-pointer">
								<p className="text-base text-white">Connect</p>
								<ArrowRightIcon className="h-4 w-4 text-white" />
							</div>
						</div>
						{/* <-- === Connect Button End === --> */}
					</div>
				</div>
			</div>
			{/* <-- ==== Navbar Open End ==== --> */}
			{/* <-- ==== Navbar Mobile End ==== --> */}
		</>
	);
}

export default Navbar;
