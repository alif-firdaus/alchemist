import Image from "next/image";
import Marquee from "react-fast-marquee";

// Import Icons //
import figma from "@/assets/icons/icon-figma.webp";
import html from "@/assets/icons/icon-html.webp";
import css from "@/assets/icons/icon-css.webp";
import react from "@/assets/icons/icon-react.webp";
import next from "@/assets/icons/icon-next.webp";
import tailwind from "@/assets/icons/icon-tailwind.webp";
import xd from "@/assets/icons/icon-xd.webp";
import framer from "@/assets/icons/icon-framer.webp";
import webflow from "@/assets/icons/icon-webflow.webp";
import zeplin from "@/assets/icons/icon-zeplin.webp";
import flutterflow from "@/assets/icons/icon-flutterflow.webp";
import miro from "@/assets/icons/icon-miro.webp";

export default function ToolsMarqueeDesktop() {
	return (
		<>
			<div className="hidden lg:block">
				{/* <-- ==== Marquee Row 1 Start ==== --> */}
				<div className="w-full px-48">
					<div className="w-full pl-52">
						<Marquee
							direction="right"
							speed={30}
							className="flex flex-shrink-0 h-fit whitespace-nowrap items-center"
							style={{
								maskImage:
									"linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0)",
							}}
						>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={figma}
									alt="Figma"
									title="Figma"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={html}
									alt="HTML"
									title="HTML"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={css}
									alt="CSS"
									title="CSS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={react}
									alt="React JS"
									title="React JS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={figma}
									alt="Figma"
									title="Figma"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={html}
									alt="HTML"
									title="HTML"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={css}
									alt="CSS"
									title="CSS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={react}
									alt="React JS"
									title="React JS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={figma}
									alt="Figma"
									title="Figma"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={html}
									alt="HTML"
									title="HTML"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={css}
									alt="CSS"
									title="CSS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={react}
									alt="React JS"
									title="React JS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={figma}
									alt="Figma"
									title="Figma"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={html}
									alt="HTML"
									title="HTML"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={css}
									alt="CSS"
									title="CSS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={react}
									alt="React JS"
									title="React JS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
						</Marquee>
					</div>
				</div>
				{/* <-- ==== Marquee Row 1 End ==== --> */}

				{/* <-- ==== Marquee Row 2 Start ==== --> */}
				<div className="w-full px-48">
					<div className="w-full pr-52">
						<Marquee
							direction="left"
							speed={30}
							className="flex flex-shrink-0 h-fit whitespace-nowrap items-center mt-5"
							style={{
								maskImage:
									"linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0)",
							}}
						>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={next}
									alt="Next JS"
									title="Next JS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={tailwind}
									alt="Tailwind CSS"
									title="Tailwind CSS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={xd}
									alt="Adobe XD"
									title="Adobe XD"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={framer}
									alt="Framer"
									title="Framer"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={next}
									alt="Next JS"
									title="Next JS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={tailwind}
									alt="Tailwind CSS"
									title="Tailwind CSS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={xd}
									alt="Adobe XD"
									title="Adobe XD"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={framer}
									alt="Framer"
									title="Framer"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={next}
									alt="Next JS"
									title="Next JS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={tailwind}
									alt="Tailwind CSS"
									title="Tailwind CSS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={xd}
									alt="Adobe XD"
									title="Adobe XD"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={framer}
									alt="Framer"
									title="Framer"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={next}
									alt="Next JS"
									title="Next JS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={tailwind}
									alt="Tailwind CSS"
									title="Tailwind CSS"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={xd}
									alt="Adobe XD"
									title="Adobe XD"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={framer}
									alt="Framer"
									title="Framer"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
						</Marquee>
					</div>
				</div>
				{/* <-- ==== Marquee Row 2 End ==== --> */}

				{/* <-- ==== Marquee Row 3 Start ==== --> */}
				<div className="w-full px-48">
					<div className="w-full pl-52">
						<Marquee
							direction="right"
							speed={30}
							className="flex flex-shrink-0 h-fit whitespace-nowrap items-center mt-5"
							style={{
								maskImage:
									"linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0)",
							}}
						>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={webflow}
									alt="Webflow"
									title="Webflow"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={zeplin}
									alt="Zeplin"
									title="Zeplin"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={flutterflow}
									alt="Flutterflow"
									title="Flutterflow"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={miro}
									alt="Miro"
									title="Miro"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={webflow}
									alt="Webflow"
									title="Webflow"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={zeplin}
									alt="Zeplin"
									title="Zeplin"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={flutterflow}
									alt="Flutterflow"
									title="Flutterflow"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={miro}
									alt="Miro"
									title="Miro"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={webflow}
									alt="Webflow"
									title="Webflow"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={zeplin}
									alt="Zeplin"
									title="Zeplin"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={flutterflow}
									alt="Flutterflow"
									title="Flutterflow"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={miro}
									alt="Miro"
									title="Miro"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>

							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={webflow}
									alt="Webflow"
									title="Webflow"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={zeplin}
									alt="Zeplin"
									title="Zeplin"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={flutterflow}
									alt="Flutterflow"
									title="Flutterflow"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
							<div className="flex items-center justify-center mx-2 p-[38px] rounded-xl border border-white border-opacity-10">
								<Image
									src={miro}
									alt="Miro"
									title="Miro"
									priority={true}
									className="h-8 w-auto"
								/>
							</div>
						</Marquee>
					</div>
				</div>
				{/* <-- ==== Marquee Row 2 End ==== --> */}
			</div>
		</>
	);
}
