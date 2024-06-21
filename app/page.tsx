import Link from "next/link";
import Image from "next/image";

// Import Components //
import MainButton from "@/components/atoms/main-button";
import TextButton from "@/components/atoms/text-button";
import PortfolioCard from "@/components/organisms/portfolio-card";
import PortfolioCardDesktop from "@/components/organisms/portfolio-card-desktop";
import ToolsMarquee from "@/components/molecules/tools-marquee";
import ToolsMarqueeDesktop from "@/components/molecules/tools-marquee-desktop";

// Import Icons //
import { Rocket } from "lucide-react";

// Import Assets //
import sparkle from "@/assets/images/img-sparkle.svg";
import graphic from "@/assets/images/img-graphic.png";
import uiux from "@/assets/images/img-uiux.webp";
import frontend from "@/assets/images/img-frontend.webp";
import nocode from "@/assets/images/img-nocode.webp";
import quote from "@/assets/images/img-quote.svg";
import memoji from "@/assets/images/img-memoji.webp";
import petaniweb from "@/assets/images/img-petaniweb.webp";
import fixit from "@/assets/images/img-fixit.webp";
import reportify from "@/assets/images/img-reportify.webp";

export default function Home() {
	return (
		<>
			{/* <-- ==== Hero Section Start ==== --> */}
			<section className="relative px-sectionpxsm lg:px-sectionpxlg 2xl:px-sectionpx2xl pt-36 lg:pt-48 flex flex-col lg:flex-row lg:h-fit">
				<div className="flex flex-col justify-center lg:w-full lg:justify-between">
					<div className="lg:h-full lg:flex lg:flex-col">
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
						<h1 className="text-[46px] lg:text-7xl leading-[1.14] lg:leading-[1.16] mt-7 lg:mt-8 bg-clip-text bg-gradient-to-br from-white from-10% to-[#949494] text-transparent">
							Stand out as
							<span className="font-number"></span> <br />
							your passionate
							<br />
							pixel crafter
						</h1>
						{/* <-- === CTA Button Start === --> */}
						<div className="mt-12 lg:mt-14 flex items-center gap-6 lg:gap-[36px]">
							<Link
								href="https://calendly.com/aliffirdaus-discussion/project-discussion"
								target="_blank"
								rel="noopener noreferrer"
							>
								<MainButton
									text="Schedule a call"
									bgColor=""
									textColor=""
									fontWeight=""
								/>
							</Link>

							<div className="hidden lg:block">
								<Link
									href="https://dribbble.com/aliffirdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<TextButton
										text="Works quality"
										textColor=""
										fontWeight=""
									/>
								</Link>
							</div>
						</div>
					</div>
					{/* <-- === CTA Button End === --> */}

					<div className="mt-24 lg:mt-auto">
						<Rocket color="#F6F6F6" size={28} strokeWidth={1} />
						<p className="text-grey text-lg font-light mt-5 lg:leading-[1.8]">
							On a mission to create stunning digital products
							that not only <br className="hidden lg:block" />
							<span className="text-white">
								look good but also function seamlessly and
								flawlessly.
							</span>
						</p>
					</div>
				</div>
				<div className="w-full mt-28 lg:h-full lg:mt-0 lg:flex lg:justify-end">
					<Image
						src={graphic}
						alt="Graphic"
						title="Graphic"
						priority={true}
						className="w-full h-auto lg:w-3/4"
					/>
				</div>
			</section>
			{/* <-- ==== Hero Section End ==== --> */}

			{/* <-- ==== Expertise Section Start ==== --> */}
			<section className="px-sectionpxsm lg:px-sectionpxlg 2xl:px-sectionpx2xl pt-52 lg:pt-[340px]">
				<div className="flex flex-col items-center justify-center">
					<div className="bg-secondary py-[5px] lg:py-[6px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
						<p className="text-sm font-medium tracking-tight text-black">
							What do I do
						</p>
					</div>
					<h1 className="text-4xl lg:text-[54px] lg:leading-[1.15] text-center mt-7 lg:mt-10 bg-clip-text bg-gradient-to-br from-white from-10% to-[#949494] text-transparent">
						No limitation. No stagnation.
						<br className="hidden lg:block" /> No comfort-zone.
					</h1>
					<p className="text-grey text-base lg:text-[19px] font-light text-center mt-7 lg:mt-10">
						Looking for an artsy and techie pal? Search no further!
						I am your go-to Product Designer.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-5 mt-14 lg:mt-24">
					<div className="w-full rounded-xl lg:rounded-2xl  bg-darkgrey flex flex-col px-7 lg:px-8 pt-6 pb-7 lg:pt-7 lg:pb-8 h-fit">
						<h1 className="text-white text-xl lg:text-[22px]">
							UI/UX Designer
						</h1>
						<p className="text-grey text-[15px] lg:text-base mt-4 leading-relaxed lg:leading-[1.7]">
							From strategy to delivering results, I am the
							architect of crafting digital products.
						</p>
						<Image
							src={uiux}
							alt="UI/UX Designer"
							priority={true}
							className="w-full h-auto mt-10 lg:mt-11"
						/>
					</div>
					<div className="w-full rounded-xl lg:rounded-2xl  bg-darkgrey flex flex-col px-7 lg:px-8 pt-6 pb-7 lg:pt-7 lg:pb-8 h-fit">
						<h1 className="text-white text-xl lg:text-[22px]">
							Front-end Developer
						</h1>
						<p className="text-grey text-[15px] lg:text-base mt-4 leading-relaxed lg:leading-[1.7]">
							I might not be an expert. But, I am able to
							translate design into living web magic.
						</p>
						<Image
							src={frontend}
							alt="Front End Developer"
							priority={true}
							className="w-full h-auto mt-10 lg:mt-11"
						/>
					</div>
					<div className="w-full rounded-xl lg:rounded-2xl  bg-darkgrey flex flex-col px-7 lg:px-8 pt-6 pb-7 lg:pt-7 lg:pb-8 h-fit">
						<h1 className="text-white text-xl lg:text-[22px]">
							No-code Developer
						</h1>
						<p className="text-grey text-[15px] lg:text-base mt-4 leading-relaxed lg:leading-[1.7]">
							Anything can be built with seamless user-interface
							and its functions in one canvas.
						</p>
						<Image
							src={nocode}
							alt="No-code Developer"
							priority={true}
							className="w-full h-auto mt-10 lg:mt-11"
						/>
					</div>
				</div>
			</section>
			{/* <-- ==== Expertise Section End ==== --> */}

			{/* <-- ==== About Section Start ==== --> */}
			<section className="px-sectionpxsm lg:px-sectionpxlg 2xl:px-sectionpx2xl mt-44 lg:mt-64 pt-[70px] lg:pt-32 pb-32 lg:pb-48 bg-darkgrey rounded-t-3xl lg:rounded-t-[34px]">
				<div className="bg-secondary py-[5px] lg:py-[6px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
					<p className="text-sm font-medium tracking-tight text-black">
						Who I am
					</p>
				</div>
				<div className="flex flex-col lg:flex-row lg:mt-10 items-start justify-center">
					<div className="flex flex-col lg:w-full">
						<h1 className="text-3xl lg:text-[42px] mt-7 lg:mt-0 lg:leading-[1.22] text-grey">
							A passionate Product
							<br className="hidden lg:block" /> Designer
							who&apos;s been{" "}
							<span className="text-white">
								crafting
								<br className="hidden lg:block" /> pixels for
								over 3 years
							</span>
						</h1>
						{/* <-- ==== CTA Button About Start ==== --> */}
						<div className="mt-10 lg:mt-14 flex">
							<div className="hidden lg:flex lg:gap-[36px]">
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
								<Link
									href="./aliffirdaus-resume.pdf"
									download="aliffirdaus-resume"
									target="_blank"
									rel="noopener noreferrer"
								>
									<MainButton
										text="Download Resume"
										bgColor=""
										textColor=""
									/>
								</Link>
							</div>
						</div>
						{/* <-- ==== CTA Button About Start ==== --> */}
					</div>
					<div className="flex flex-col mt-14 lg:mt-0 lg:w-full lg:items-end">
						<div className="lg:w-5/6">
							<div className="flex gap-6 flex-col">
								<p className="text-grey text-lg">
									<span className="text-white">
										I am Alif Firdaus, a Product Designer
										crafting creativity into every pixel.
									</span>{" "}
									My journey in design began with a
									fascination for blending form and function,
									crafting experiences that resonate with
									users on a deeper level.
								</p>
								<p className="text-grey text-lg">
									My skillset consists of UI/UX design and a
									small touch of front-end development,{" "}
									<span className="text-white">
										driven by a passion for innovation and a
										relentless pursuit of perfection.
									</span>
								</p>
							</div>
							<div className="bg-secondary items-start flex flex-col mt-12 rounded-2xl px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-7">
								<Image
									src={quote}
									alt="Quote Icon"
									title="Quote Icon"
									priority={true}
									className="h-6 w-auto lg:w-8"
								/>
								<p className="text-black mt-4 text-xl lg:text-[21px] font-medium leading-snug">
									Blending artistry and functionality;
									Crafting beauty in pixels, weaving magic in
									code.
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
				</div>
			</section>
			{/* <-- ==== About Section End ==== --> */}

			{/* <-- ==== Portfolio Section Start ==== --> */}
			<section className="px-sectionpxsm lg:px-sectionpxlg 2xl:px-sectionpx2xl pt-44 lg:pt-56">
				<div className="flex flex-col items-center justify-center">
					<div className="bg-secondary py-[5px] lg:py-[6px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
						<p className="text-sm font-medium tracking-tight text-black">
							Selected works
						</p>
					</div>
					<h1 className="text-4xl lg:text-[54px] lg:leading-[1.15] text-center mt-7 lg:mt-10 bg-clip-text bg-gradient-to-br from-white from-10% to-[#949494] text-transparent">
						Driven by creating the
						<br className="hidden lg:block" /> next-level digital
						products
					</h1>
					<p className="text-grey text-base lg:text-[19px] font-light text-center mt-7 lg:mt-10">
						Whether it&apos;s a vibrant website or mobile app you
						seek, I deliver exceptional quality.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-16 lg:gap-7 mt-14 lg:mt-24">
					{/* <-- === Portfolio PetaniWeb Start === --> */}
					<PortfolioCard
						platform="Website"
						category="Agency"
						imageSrc={petaniweb}
						alt="PetaniWeb Mockup"
						link="/case-study/petaniweb"
						year={2024}
						role1="UI/UX Design"
						role2="Development"
						portfolioTitle="PetaniWeb Website"
					/>

					<PortfolioCardDesktop
						platform="Website"
						category="Agency"
						imageSrc={petaniweb}
						alt="PetaniWeb Mockup"
						link="/case-study/petaniweb"
						year={2024}
						role1="UI/UX Design"
						role2="Development"
						portfolioTitle="PetaniWeb Website"
					/>
					{/* <-- === Portfolio PetaniWeb End === --> */}

					{/* <-- === Portfolio Fixit Start === --> */}
					<PortfolioCard
						platform="Mobile App"
						category="Branding"
						imageSrc={fixit}
						alt="Fixit Mockup"
						link="/case-study/fixit"
						year={2023}
						role1="UI/UX Design"
						role2="Research"
						portfolioTitle="Fixit Mobile App"
					/>

					<div className="lg:pt-32 lg:w-full">
						<PortfolioCardDesktop
							platform="Mobile App"
							category="Branding"
							imageSrc={fixit}
							alt="Fixit Mockup"
							link="/case-study/fixit"
							year={2023}
							role1="UI/UX Design"
							role2="Research"
							portfolioTitle="Fixit Mobile App"
						/>
					</div>
					{/* <-- === Portfolio Fixit End === --> */}
				</div>

				<div className="flex flex-col lg:flex-row gap-16 lg:gap-7 mt-0 lg:mt-16">
					{/* <-- === Portfolio Reportify Start === --> */}
					<PortfolioCard
						platform="Website"
						category="SAAS"
						imageSrc={reportify}
						alt="Reportify Mockup"
						link="/case-study/reportify"
						year={2023}
						role1="UI/UX Design"
						role2="Development"
						portfolioTitle="Reportify Website"
					/>

					<PortfolioCardDesktop
						platform="Website"
						category="SAAS"
						imageSrc={reportify}
						alt="Reportify Mockup"
						link="/case-study/reportify"
						year={2023}
						role1="UI/UX Design"
						role2="Development"
						portfolioTitle="Reportify Website"
					/>
					{/* <-- === Portfolio Reportify End === --> */}

					{/* <-- === Portfolio Aqua Start === --> */}
					<PortfolioCard
						platform="Mobile App"
						category="Crypto"
						imageSrc={fixit}
						alt="AQUA Mockup"
						link="/case-study/aqua"
						year={2022}
						role1="UI/UX Design"
						role2="Research"
						portfolioTitle="AQUA Mobile App"
					/>

					<div className="lg:pt-32 lg:w-full">
						<PortfolioCardDesktop
							platform="Mobile App"
							category="Crypto"
							imageSrc={fixit}
							alt="AQUA Mockup"
							link="/case-study/aqua"
							year={2022}
							role1="UI/UX Design"
							role2="Research"
							portfolioTitle="AQUA Mobile App"
						/>
					</div>
					{/* <-- === Portfolio Aqua End === --> */}
				</div>
			</section>
			{/* <-- ==== Portfolio Section End ==== --> */}

			{/* <-- ==== Tech-stack Section Start ==== --> */}
			<section className="px-sectionpxsm lg:px-sectionpxlg 2xl:px-sectionpx2xl pt-52 lg:pt-72">
				<div className="flex flex-col items-center justify-center">
					<div className="bg-secondary py-[5px] lg:py-[6px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
						<p className="text-sm font-medium tracking-tight text-black">
							Tools & Tech-stacks
						</p>
					</div>
					<h1 className="text-4xl lg:text-[54px] lg:leading-[1.15] text-center mt-7 lg:mt-10 bg-clip-text bg-gradient-to-br from-white from-10% to-[#949494] text-transparent">
						Crafting beauty in pixels, weaving
						<br className="hidden lg:block" />
						magic in code
					</h1>
					<p className="text-grey text-base lg:text-[19px] font-light text-center mt-7 lg:mt-10">
						Agile and adaptable, from project planning, crafting
						interfaces to diving into intricade code.
					</p>
				</div>
			</section>
			<div className="mt-14 lg:hidden">
				<ToolsMarquee />
			</div>
			<div className="mt-20 hidden lg:block lg:px-sectionpxlg 2xl:px-sectionpx2xl">
				<ToolsMarqueeDesktop />
			</div>
			<section className="px-sectionpxsm pt-20 lg:pt-24 mb-44 lg:mb-72">
				<div className="flex items-center justify-center gap-5">
					<div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-neutral-500"></div>
					<p className="text-base text-grey font-light text-center">
						To infinity and beyond
					</p>
					<div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-neutral-500"></div>
				</div>
			</section>
			{/* <-- ==== Tech-stack Section End ==== --> */}
		</>
	);
}
