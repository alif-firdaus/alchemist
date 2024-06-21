import Link from "next/link";
import Image from "next/image";

// Import Components //
import MainButton from "../atoms/main-button";
import TextButton from "../atoms/text-button";

// Import Icons //
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { CheckIcon } from "@radix-ui/react-icons";

// Import Assets //
import logo from "@/assets/images/img-logotype.webp";
import dribbble from "@/assets/images/img-dribbble.webp";
import linkedin from "@/assets/images/img-linkedin.webp";
import twitter from "@/assets/images/img-twitter.webp";
import github from "@/assets/images/img-github.webp";

export default function FooterDesktop() {
	return (
		<>
			<div className="hidden lg:block px-8 pb-8">
				<section className="bg-darkgrey lg:px-[68px] 2xl:px-[108px] pt-[74px] lg:pt-[68px] pb-16 rounded-[30px]">
					<div className="w-full flex justify-between items-start">
						<div className="flex flex-col">
							<h1 className="text-[42px] leading-[1.20] bg-clip-text bg-gradient-to-br from-white from-10% to-[#949494] text-transparent">
								Turning your ideas
								<br /> into{" "}
								<span className="text-secondary">
									real-life
								</span>{" "}
								products
								<br />
								is my calling
							</h1>
							<div className="mt-14 flex">
								<div className="flex gap-[36px]">
									<Link
										href="https://calendly.com/aliffirdaus-discussion/project-discussion"
										target="_blank"
										rel="noopener noreferrer"
									>
										<MainButton
											text="Schedule a call"
											bgColor=""
											textColor=""
										/>
									</Link>

									<Link
										href="./aliffirdaus-resume.pdf"
										download="aliffirdaus-resume"
										target="_blank"
										rel="noopener noreferrer"
									>
										<TextButton
											text="Download Resume"
											textColor=""
											fontWeight=""
										/>
									</Link>
								</div>
								<div className="block lg:hidden">
									<MainButton
										text="Download Resume"
										bgColor=""
										textColor=""
									/>
								</div>
							</div>
						</div>

						<div className="flex gap-40">
							<div className="flex flex-col gap-5 justify-start">
								<p className="text-base text-white">Explore</p>
								<div className="flex flex-col gap-3">
									<Link href="/about">
										<p className="text-base text-grey hover:text-[#d3d3d3] duration-300">
											About
										</p>
									</Link>

									<Link href="/expertise">
										<p className="text-base text-grey hover:text-[#d3d3d3] duration-300">
											Expertise
										</p>
									</Link>

									<Link href="/case-study">
										<p className="text-base text-grey hover:text-[#d3d3d3] duration-300">
											Case Study
										</p>
									</Link>

									<Link
										href="https://dribbble.com/aliffirdaus"
										target="_blank"
										rel="noopener noreferrer"
									>
										<p className="text-base text-grey hover:text-[#d3d3d3] duration-300">
											Portfolio
										</p>
									</Link>

									<Link href="/connect">
										<p className="text-base text-grey hover:text-[#d3d3d3] duration-300">
											Connect
										</p>
									</Link>
								</div>
							</div>

							<div className="flex flex-col gap-5 justify-start">
								<p className="text-base text-white">Connect</p>
								<div className="flex flex-col gap-3">
									<div className="flex items-center gap-4">
										<Phone
											color="#818181"
											size={14}
											strokeWidth={1.8}
										/>
										<p className="text-base text-grey font-number">
											+62 8133 666 4586
										</p>
									</div>

									<div className="flex items-center gap-4">
										<Mail
											color="#818181"
											size={14}
											strokeWidth={1.8}
										/>
										<p className="text-base text-grey">
											aliffirdaus@petaniweb.com
										</p>
									</div>

									<div className="flex items-center gap-4">
										<Globe
											color="#818181"
											size={14}
											strokeWidth={1.8}
										/>
										<p className="text-base text-grey">
											aliffirdaus.com
										</p>
									</div>

									<div className="flex items-center gap-4">
										<MapPin
											color="#818181"
											size={16}
											strokeWidth={1.8}
										/>
										<p className="text-base text-grey">
											Malang, Indonesia
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-36 w-full flex justify-between items-center">
						<div className="flex items-center gap-7">
							<div className="flex items-center justify-center gap-4">
								<CheckIcon className="w-5 h-auto text-grey" />
								<p className="text-base text-white font-light">
									Collaborative
								</p>
							</div>
							<div className="flex items-center justify-center gap-4">
								<CheckIcon className="w-5 h-auto text-grey" />
								<p className="text-base text-white font-light">
									Result-oriented
								</p>
							</div>
							<div className="flex items-center justify-center gap-4">
								<CheckIcon className="w-5 h-auto text-grey" />
								<p className="text-base text-white font-light">
									Adaptive
								</p>
							</div>
							<div className="flex items-center justify-center gap-4">
								<CheckIcon className="w-5 h-auto text-grey" />
								<p className="text-base text-white font-light">
									Pixel Perfectionist
								</p>
							</div>
						</div>

						<div className="flex items-center gap-[15px]">
							<Link
								href="https://www.linkedin.com/in/aliffirdaus97/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="py-[15px] px-[15px] bg-white bg-opacity-5 hover:bg-opacity-10 duration-300 rounded-lg">
									<Image
										src={linkedin}
										alt="Linkedin"
										priority={true}
										className="h-[18px] w-auto"
									/>
								</div>
							</Link>

							<Link
								href="https://dribbble.com/aliffirdaus"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="py-[15px] px-[15px] bg-white bg-opacity-5 hover:bg-opacity-10 duration-300 rounded-lg">
									<Image
										src={dribbble}
										alt="Dribbble"
										priority={true}
										className="h-[18px] w-auto"
									/>
								</div>
							</Link>

							<Link
								href="https://github.com/alif-firdaus"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="py-[15px] px-[15px] bg-white bg-opacity-5 hover:bg-opacity-10 duration-300 rounded-lg">
									<Image
										src={github}
										alt="Github"
										priority={true}
										className="h-[18px] w-auto"
									/>
								</div>
							</Link>

							<Link
								href="https://twitter.com/whereisalif"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="py-[15px] px-[15px] bg-white bg-opacity-5 hover:bg-opacity-10 duration-300 rounded-lg">
									<Image
										src={twitter}
										alt="Twitter"
										priority={true}
										className="h-[18px] w-auto"
									/>
								</div>
							</Link>
						</div>
					</div>

					<div className="mt-20 w-full flex justify-between items-center">
						<div className="flex items-center gap-4">
							<div className="w-fit pb-1">
								<Link href="/">
									<Image
										src={logo}
										alt="Alchemist"
										priority={true}
										className="h-[18px] w-auto"
									/>
								</Link>
							</div>
							<p className="text-base text-grey text-right">
								&copy; Alchemist 2024 · All rights reserved.
							</p>
						</div>

						<p className="text-base text-grey text-right">
							Designed and developed by{" "}
							<span className="text-white">Alif Firdaus.</span>
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
