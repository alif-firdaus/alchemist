import Link from "next/link";
import Image from "next/image";

// Import Components //
import MainButton from "../atoms/main-button";
import FooterMarquee from "../molecules/footer-marquee";

// Import Assets //
import logo from "@/assets/images/img-logo.webp";

export default function Footer() {
	return (
		<>
			<section className="px-sectionpxsm bg-darkgrey pt-24">
				<h1 className="text-[40px] leading-[1.15] text-left text-white">
					Turning your ideas into{" "}
					<span className="text-secondary">real-life</span> products
					is my calling
				</h1>
				<div className="mt-14">
					<MainButton text="Schedule a call" />
				</div>
			</section>

			<section className="pt-24 bg-darkgrey">
				<FooterMarquee />
			</section>

			<section className="pt-24 px-sectionpxsm pb-10 bg-darkgrey">
				<Image
					src={logo}
					alt="Alchemist Logo"
					title="Alchemist Logo"
					priority={true}
					className="h-8 w-auto"
				/>
				<p className="text-xl text-white mt-12">Explore</p>
				<div className="flex flex-col mt-6 gap-[10px]">
					<Link href="/about">
						<p className="text-xl text-grey">About</p>
					</Link>

					<Link href="/expertise">
						<p className="text-xl text-grey">Expertise</p>
					</Link>

					<Link href="/case-study">
						<p className="text-xl text-grey">Case Study</p>
					</Link>

					<Link
						href="https://dribbble.com/aliffirdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-xl text-grey">Portfolio</p>
					</Link>
				</div>
				<p className="text-xl text-white mt-11">Check out my</p>
				<div className="flex flex-col mt-6 gap-[10px]">
					<Link
						href="https://www.linkedin.com/in/aliffirdaus97/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-xl text-grey cursor-pointer">
							Linkedin
						</p>
					</Link>

					<Link
						href="https://dribbble.com/aliffirdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-xl text-grey cursor-pointer">
							Dribbble
						</p>
					</Link>

					<Link
						href="https://twitter.com/whereisalif"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-xl text-grey cursor-pointer">
							Twitter
						</p>
					</Link>

					<Link
						href="https://github.com/alif-firdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-xl text-grey cursor-pointer">
							Github
						</p>
					</Link>
				</div>
				<div className="mt-14 w-full h-[1px] bg-white bg-opacity-10"></div>
				<p className="text-base mt-6 text-grey">
					&copy; 2024 Alchemist. All rights reserved.
				</p>
			</section>
		</>
	);
}
