import Link from "next/link";
import Image from "next/image";

// Import Components //
import MainButton from "@/components/atoms/main-button";
import SecondaryButton from "@/components/atoms/secondary-button";
import ToolsMarquee from "@/components/molecules/tools-marquee";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";

// Import Icons //
import { Rocket } from "lucide-react";

// Import Assets //
import sparkle from "@/assets/images/img-sparkle.svg";
import graphic from "@/assets/images/img-graphic.png";
import quote from "@/assets/images/img-quote.svg";
import memoji from "@/assets/images/img-memoji.webp";
import petaniweb from "@/assets/images/img-petaniweb.webp";
import fixit from "@/assets/images/img-fixit.webp";
import reportify from "@/assets/images/img-reportify.webp";

export default function Home() {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Hero Section Start ==== --> */}
			<section className="px-sectionpxsm pt-36 flex flex-col">
				<div className="flex flex-col justify-center">
					<div className="border border-white border-opacity-15 w-fit rounded-full flex gap-[14px] pl-[6px] pr-5 py-[6px] items-center justify-center">
						<div className="bg-secondary py-[5px] pl-[10px] pr-3 flex items-center justify-center gap-[6px] rounded-full">
							<Image
								src={sparkle}
								alt="Sparkle"
								title="Sparkle"
								priority={true}
								className="h-[14px] w-auto"
							/>
							<p className="text-sm font-medium tracking-tight text-black">
								Mission
							</p>
						</div>
						<p className="text-sm tracking-tight text-white">
							Elevating products into perfection
						</p>
					</div>
					<h1 className="text-[46px] leading-[1.15] mt-7 text-white">
						Stand out as
						<br />
						your passionate
						<br />
						pixel crafter
					</h1>
					{/* <-- === Schedule a Call Button Start === --> */}
					<div className="mt-12">
						<MainButton
							text="Schedule a call"
							bgColor=""
							textColor=""
							fontWeight=""
						/>
					</div>
					{/* <-- === Schedule a Call Button End === --> */}

					<div className="mt-24">
						<Rocket color="#F6F6F6" size={28} strokeWidth={1} />
						<p className="text-grey text-lg font-light mt-5">
							I am on a mission to create visually stunning
							designs that not only{" "}
							<span className="text-white">
								look good but also function seamlessly and
								flawlessly.
							</span>
						</p>
					</div>
				</div>
				<div className="w-full mt-28">
					<Image
						src={graphic}
						alt="Graphic"
						title="Graphic"
						priority={true}
						className="w-full h-auto"
					/>
				</div>
			</section>
			{/* <-- ==== Hero Section End ==== --> */}

			{/* <-- ==== Expertise Section Start ==== --> */}
			<section className="px-sectionpxsm pt-52">
				<div className="flex flex-col items-center justify-center">
					<div className="bg-secondary py-[5px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
						<p className="text-sm font-medium tracking-tight text-black">
							What do I do
						</p>
					</div>
					<h1 className="text-4xl text-center mt-7 text-white">
						No limitation. No stagnation. No comfort-zone.
					</h1>
					<p className="text-grey text-base font-light text-center mt-7">
						Looking for an artsy and techie pal? Search no further!
						I am your go-to Product Designer.
					</p>
				</div>
				<div className="flex flex-col gap-5 mt-14">
					<div className="w-full rounded-xl bg-darkgrey flex flex-col px-7 py-6 h-fit">
						<h1 className="text-white text-xl font-medium">
							UI/UX Designer
						</h1>
						<p className="text-grey text-sm mt-3 leading-relaxed">
							From strategy to delivering results, I am the
							architect of captivating digital products.
						</p>
					</div>
					<div className="w-full rounded-xl bg-darkgrey flex flex-col px-7 py-6 h-fit">
						<h1 className="text-white text-xl font-medium">
							Front-end Developer
						</h1>
						<p className="text-grey text-sm mt-3 leading-relaxed">
							I might not be an expert. But, I am able to
							translate design into living web magic.
						</p>
					</div>
					<div className="w-full rounded-xl bg-darkgrey flex flex-col px-7 py-6 h-fit">
						<h1 className="text-white text-xl font-medium">
							No-code Developer
						</h1>
						<p className="text-grey text-sm mt-3 leading-relaxed">
							Anything can be built with seamless user-interface
							and its functions in one canvas.
						</p>
					</div>
				</div>
			</section>
			{/* <-- ==== Expertise Section End ==== --> */}

			{/* <-- ==== About Section Start ==== --> */}
			<section className="px-sectionpxsm mt-44 pt-28 pb-32 bg-darkgrey">
				<div className="flex flex-col items-start justify-center">
					<div className="flex flex-col">
						<div className="bg-secondary py-[5px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
							<p className="text-sm font-medium tracking-tight text-black">
								Who I am
							</p>
						</div>
						<h1 className="text-3xl mt-7 text-grey">
							A passionate Product Designer who's been{" "}
							<span className="text-white">
								crafting pixels for over 3 years
							</span>
						</h1>
						<div className="mt-10 flex flex-col gap-4">
							<MainButton
								text="Schedule a call"
								bgColor=""
								textColor=""
							/>
							<SecondaryButton
								text="Download Resume"
								fontWeight=""
							/>
						</div>
					</div>
					<div className="flex flex-col mt-14">
						<div className="flex gap-6 flex-col">
							<p className="text-grey text-lg">
								<span className="text-white">
									I am Alif Firdaus, a Product Designer
									crafting creativity into every pixel.
								</span>{" "}
								My journey in design began with a fascination
								for blending form and function, crafting
								experiences that resonate with users on a deeper
								level.
							</p>
							<p className="text-grey text-lg">
								My skillset consists of UI/UX design and a small
								touch of front-end development,{" "}
								<span className="text-white">
									driven by a passion for innovation and a
									relentless pursuit of perfection.
								</span>
							</p>
						</div>
						<div className="bg-secondary items-start flex flex-col mt-12 rounded-2xl px-5 pt-5 pb-6">
							<Image
								src={quote}
								alt="Quote Icon"
								title="Quote Icon"
								priority={true}
								className="h-6 w-auto"
							/>
							<p className="text-black mt-4 text-xl font-medium leading-snug">
								Blending artistry and functionality; Crafting
								beauty in pixels, weaving magic in code.
							</p>
							<div className="flex mt-7 gap-5 items-center">
								<Image
									src={memoji}
									alt="Memoji"
									title="Memoji"
									priority={true}
									className="h-14 w-auto"
								/>
								<div className="flex flex-col">
									<p className="text-lg text-black font-medium">
										Alif Firdaus
									</p>
									<p className="text-base text-darkgrey">
										Product Designer
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <-- ==== About Section End ==== --> */}

			{/* <-- ==== Portfolio Section Start ==== --> */}
			<section className="px-sectionpxsm pt-44">
				<div className="flex flex-col items-center justify-center">
					<div className="bg-secondary py-[5px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
						<p className="text-sm font-medium tracking-tight text-black">
							Selected works
						</p>
					</div>
					<h1 className="text-4xl text-center mt-7 text-white">
						Driven by creating next-level digital products
					</h1>
					<p className="text-grey text-base font-light text-center mt-7">
						Whether it&apos;s a vibrant website or mobile app you
						seek, I deliver exceptional quality.
					</p>
				</div>
				<div className="flex flex-col gap-16 mt-14">
					<div className="w-full flex flex-col h-auto">
						<div className="w-full flex flex-col h-auto relative">
							<div className="absolute flex gap-[10px] h-fit justify-end inset-0 px-4 py-4">
								<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
									<p className="text-sm text-white font-light">
										Website
									</p>
								</div>
								<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
									<p className="text-sm text-white font-light">
										Agency
									</p>
								</div>
							</div>
							<Image
								src={petaniweb}
								alt="Petaniweb Mockup"
								title="Petaniweb Mockup"
								priority={true}
								className="w-full h-auto rounded-xl"
							/>
						</div>
						<div className="flex flex-col mt-6 gap-2">
							<div className="flex items-center justify-start gap-2">
								<p className="text-grey text-[15px]">2024</p>
								<div className="w-1 h-1 rounded-full bg-grey"></div>
								<p className="text-grey text-[15px]">
									UI/UX Design
								</p>
								<div className="w-1 h-1 rounded-full bg-grey"></div>
								<p className="text-grey text-[15px]">
									Development
								</p>
							</div>
							<h2 className="text-white text-xl">
								Petaniweb Website
							</h2>
						</div>
					</div>
					<div className="w-full flex flex-col h-auto">
						<div className="w-full flex flex-col h-auto relative">
							<div className="absolute flex gap-[10px] h-fit justify-end inset-0 px-4 py-4">
								<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
									<p className="text-sm text-white font-light">
										Mobile App
									</p>
								</div>
								<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
									<p className="text-sm text-white font-light">
										Branding
									</p>
								</div>
							</div>
							<Image
								src={fixit}
								alt="Fixit Mockup"
								title="Fixit Mockup"
								priority={true}
								className="w-full h-auto rounded-xl"
							/>
						</div>
						<div className="flex flex-col mt-6 gap-2">
							<div className="flex items-center justify-start gap-2">
								<p className="text-grey text-[15px]">2023</p>
								<div className="w-1 h-1 rounded-full bg-grey"></div>
								<p className="text-grey text-[15px]">
									UI/UX Design
								</p>
								<div className="w-1 h-1 rounded-full bg-grey"></div>
								<p className="text-grey text-[15px]">
									Research
								</p>
							</div>
							<h2 className="text-white text-xl">
								Fixit Mobile App
							</h2>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-16 mt-16">
					<div className="w-full flex flex-col h-auto">
						<div className="w-full flex flex-col h-auto relative">
							<div className="absolute flex gap-[10px] h-fit justify-end inset-0 px-4 py-4">
								<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
									<p className="text-sm text-white font-light">
										Website
									</p>
								</div>
								<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
									<p className="text-sm text-white font-light">
										SAAS
									</p>
								</div>
							</div>
							<Image
								src={reportify}
								alt="Reportify Mockup"
								title="Reportify Mockup"
								priority={true}
								className="w-full h-auto rounded-xl"
							/>
						</div>
						<div className="flex flex-col mt-6 gap-2">
							<div className="flex items-center justify-start gap-2">
								<p className="text-grey text-[15px]">2023</p>
								<div className="w-1 h-1 rounded-full bg-grey"></div>
								<p className="text-grey text-[15px]">
									UI/UX Design
								</p>
								<div className="w-1 h-1 rounded-full bg-grey"></div>
								<p className="text-grey text-[15px]">
									Development
								</p>
							</div>
							<h2 className="text-white text-xl">
								Reportify Website
							</h2>
						</div>
					</div>
					<div className="w-full flex flex-col h-auto">
						<div className="w-full flex flex-col h-auto relative">
							<div className="absolute flex gap-[10px] h-fit justify-end inset-0 px-4 py-4">
								<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
									<p className="text-sm text-white font-light">
										Mobile App
									</p>
								</div>
								<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
									<p className="text-sm text-white font-light">
										Crypto
									</p>
								</div>
							</div>
							<Image
								src={fixit}
								alt="Fixit Mockup"
								title="Fixit Mockup"
								priority={true}
								className="w-full h-auto rounded-xl"
							/>
						</div>
						<div className="flex flex-col mt-6 gap-2">
							<div className="flex items-center justify-start gap-2">
								<p className="text-grey text-[15px]">2022</p>
								<div className="w-1 h-1 rounded-full bg-grey"></div>
								<p className="text-grey text-[15px]">
									UI/UX Design
								</p>
								<div className="w-1 h-1 rounded-full bg-grey"></div>
								<p className="text-grey text-[15px]">
									Research
								</p>
							</div>
							<h2 className="text-white text-xl">
								AQUA Mobile App
							</h2>
						</div>
					</div>
				</div>
			</section>
			{/* <-- ==== Portfolio Section End ==== --> */}

			{/* <-- ==== Tech-stack Section Start ==== --> */}
			<section className="px-sectionpxsm pt-60">
				<div className="flex flex-col items-center justify-center">
					<div className="bg-secondary py-[5px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
						<p className="text-sm font-medium tracking-tight text-black">
							Tools & Tech-stacks
						</p>
					</div>
					<h1 className="text-4xl text-center mt-7 text-white">
						Crafting beauty in pixels, weaving magic in code
					</h1>
					<p className="text-grey text-base font-light text-center mt-7">
						Agile and adaptable, from project planning, crafting
						interfaces to diving into intricade code.
					</p>
				</div>
			</section>
			<div className="mt-14">
				<ToolsMarquee />
			</div>
			<section className="px-sectionpxsm pt-20">
				<div className="flex items-center justify-center gap-5">
					<div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-neutral-500"></div>
					<p className="text-base text-grey font-light text-center">
						To infinity and beyond
					</p>
					<div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-neutral-500"></div>
				</div>
			</section>
			{/* <-- ==== Tech-stack Section End ==== --> */}

			{/* <-- ==== Footer Start ==== --> */}
			<section className="mt-44">
				<Footer />
			</section>
			{/* <-- ==== Footer End ==== --> */}
		</>
	);
}
