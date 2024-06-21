import Link from "next/link";
import Image from "next/image";

// Import Components //
import MainButton from "../atoms/main-button";
import FooterMarquee from "../molecules/footer-marquee";

// Import Icons //
import { Phone, Mail, Globe, MapPin } from "lucide-react";

// Import Assets //
import logo from "@/assets/images/img-logotype.webp";

export default function Footer() {
	return (
		<>
			<div className="lg:hidden px-sectionpxsm pb-5">
				<section className="bg-darkgrey rounded-2xl pt-8 pb-9 px-7">
					<h1 className="text-[32px] leading-[1.15] text-left bg-clip-text bg-gradient-to-br from-white from-20% to-[#949494] text-transparent">
						Turning your ideas into{" "}
						<span className="text-secondary">real-life</span>{" "}
						products is my calling
					</h1>
					<div className="mt-9">
						<Link
							href="https://calendly.com/aliffirdaus-discussion/project-discussion"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MainButton text="Schedule a call" />
						</Link>
					</div>

					<div className="flex mt-16 gap-16 flex-wrap">
						<div className="flex gap-4 flex-col">
							<p className="text-[17px] text-white">Explore</p>
							<div className="flex flex-col gap-[10px]">
								<Link href="/about">
									<p className="text-[17px] text-grey">
										About
									</p>
								</Link>

								<Link href="/expertise">
									<p className="text-[17px] text-grey">
										Expertise
									</p>
								</Link>

								<Link href="/case-study">
									<p className="text-[17px] text-grey">
										Case Study
									</p>
								</Link>

								<Link
									href="https://dribbble.com/aliffirdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-[17px] text-grey">
										Portfolio
									</p>
								</Link>
							</div>
						</div>
						<div className="flex gap-4 flex-col">
							<p className="text-[17px] text-white">
								Check out my
							</p>
							<div className="flex flex-col gap-[10px]">
								<Link
									href="https://www.linkedin.com/in/aliffirdaus97/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-[17px] text-grey">
										Linkedin
									</p>
								</Link>

								<Link
									href="https://dribbble.com/aliffirdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-[17px] text-grey">
										Dribbble
									</p>
								</Link>

								<Link
									href="https://github.com/alif-firdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-[17px] text-grey">
										Github
									</p>
								</Link>

								<Link
									href="https://twitter.com/whereisalif"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="text-[17px] text-grey">
										Twitter
									</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col mt-12 gap-4">
						<p className="text-[17px] text-white">Connect</p>
						<div className="flex flex-col gap-[10px]">
							<div className="flex gap-5 items-center">
								<Phone
									color="#818181"
									size={14}
									strokeWidth={1.8}
								/>
								<p className="text-[17px] text-grey font-number">
									+62 8133 666 4586
								</p>
							</div>
							<div className="flex gap-5 items-center">
								<Mail
									color="#818181"
									size={15}
									strokeWidth={1.8}
								/>
								<p className="text-[17px] text-grey font-number">
									aliffirdaus@petaniweb.com
								</p>
							</div>
							<div className="flex gap-5 items-center">
								<Globe
									color="#818181"
									size={15}
									strokeWidth={1.8}
								/>
								<p className="text-[17px] text-grey font-number">
									aliffirdaus.com
								</p>
							</div>
							<div className="flex gap-5 items-center">
								<MapPin
									color="#818181"
									size={17}
									strokeWidth={1.8}
								/>
								<p className="text-[17px] text-grey font-number">
									Malang, Indonesia
								</p>
							</div>
						</div>
					</div>

					<div className="mt-[74px]">
						<FooterMarquee />
					</div>

					<div className="flex flex-col mt-[74px]">
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
						<div className="flex flex-col gap-1 mt-[30px]">
							<p className="text-base text-grey">
								&copy; Alchemist 2024 · All rights reserved.
							</p>
							<p className="text-base text-grey">
								Designed and developed by{" "}
								<span className="text-white">
									Alif Firdaus.
								</span>
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
