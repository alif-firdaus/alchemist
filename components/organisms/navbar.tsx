"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Components //
import MainButton from "../atoms/main-button";
import SecondaryButtonDesktop from "../atoms/secondary-button-desktop";

// Import Radix Icons //
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

// Import Assets //
import logo from "@/assets/images/img-logotype.webp";
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

	// Store scroll position //
	let scrollPosition = 0;

	// Navbar Toggle //
	const toggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	// Close menu when navigating //
	const closeMenu = () => {
		setOpen(false);
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
				<Link
					href={path}
					target="_blank"
					rel="noopener noreferrer"
					onClick={closeMenu}
				>
					{text}
				</Link>
			);
		} else {
			return (
				<Link href={path} onClick={closeMenu}>
					{text}
				</Link>
			);
		}
	};

	// Navbar Background and Scroll Direction //
	const [scrolling, setScrolling] = useState(false);
	const [scrollDirection, setScrollDirection] = useState("up");

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > 0) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}

		if (currentScrollY > scrollPosition) {
			setScrollDirection("down");
		} else {
			setScrollDirection("up");
		}
		scrollPosition = currentScrollY;
	};

	useEffect(() => {
		let scrollPosition = 0;
		if (window.scrollY > 0) {
			setScrolling(true);
		}

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav className="fixed flex w-full z-[100] lg:hidden">
				<div
					className={`flex items-center w-full justify-between px-sectionpxsm py-4 ${
						scrolling
							? "bg-bgbase bg-opacity-20 backdrop-blur-2xl"
							: "bg-transparent"
					}`}
				>
					<Link href="/">
						<div className="w-fit h-fit pb-[2px]">
							<Image
								src={logo}
								alt="Alchemist Logo"
								title="Alchemist Logo"
								priority={true}
								className="h-5 w-auto"
							/>
						</div>
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
				className={`fixed w-full h-screen z-[80] lg:hidden
            ${
				isOpen
					? "top-0 left-0 transition-all duration-500 ease-in-out"
					: "-top-full left-0 transition-all duration-500 ease-in-out"
			}`}
			>
				<div className="w-full flex flex-col h-full bg-bgbase bg-opacity-60 backdrop-blur-xl px-sectionpxsm pb-24 pt-32 justify-between items-start">
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
							<Link href="/connect" onClick={closeMenu}>
								<MainButton
									text="Let's connect"
									bgColor=""
									textColor=""
									fontWeight=""
								/>
							</Link>
						</div>

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
			<nav
				className={`hidden lg:flex fixed w-full px-sectionpxlg 2xl:px-sectionpx2xl z-[100] py-5 items-center justify-between transition-all duration-300 ${
					scrolling
						? "bg-bgbase bg-opacity-25 backdrop-blur-2xl"
						: "bg-transparent"
				} ${
					scrollDirection === "down"
						? "-translate-y-full"
						: "translate-y-0"
				}`}
			>
				<Link href="/">
					<div className="w-fit h-fit pb-[2px]">
						<Image
							src={logo}
							alt="Alchemist Logo"
							title="Alchemist Logo"
							priority={true}
							className="h-5 w-auto"
						/>
					</div>
				</Link>

				{/* <-- === Navbar Desktop Links Start === --> */}
				<div className="flex items-center justify-center rounded-full border border-white border-opacity-10 gap-1 p-[6px]">
					<Link href="/about">
						<div className="flex items-center justify-center px-5 rounded-full bg-inherit py-[10px] hover:bg-white hover:bg-opacity-[0.07] duration-300 cursor-pointer">
							<p className="text-sm text-white">About</p>
						</div>
					</Link>

					<Link href="/expertise">
						<div className="flex items-center justify-center px-5 rounded-full bg-inherit py-[10px] hover:bg-white hover:bg-opacity-[0.07] duration-300 cursor-pointer">
							<p className="text-sm text-white">Expertise</p>
						</div>
					</Link>

					<Link href="/case-study">
						<div className="flex items-center justify-center px-5 rounded-full bg-inherit py-[10px] hover:bg-white hover:bg-opacity-[0.07] duration-300 cursor-pointer">
							<p className="text-sm text-white">Case Study</p>
						</div>
					</Link>

					<Link
						href="https://dribbble.com/aliffirdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center justify-center px-5 rounded-full bg-inherit py-[10px] hover:bg-white hover:bg-opacity-[0.07] duration-300 cursor-pointer">
							<p className="text-sm text-white">Portfolio</p>
						</div>
					</Link>
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
