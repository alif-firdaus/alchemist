import Marquee from "react-fast-marquee";

export default function TextMarquee() {
	return (
		<>
			<Marquee
				direction="right"
				speed={50}
				className="flex flex-shrink-0 h-fit whitespace-nowrap items-center pb-2"
			>
				<div className="w-fit mx-3">
					<h1 className="text-[80px] leading-none text-white font-medium">
						Crafting beauty in pixels.
					</h1>
				</div>
				<div className="w-fit mx-3">
					<h1 className="text-[80px] leading-none text-white font-medium">
						Crafting beauty in pixels.
					</h1>
				</div>
			</Marquee>

			<Marquee
				direction="left"
				speed={50}
				className="flex flex-shrink-0 h-fit whitespace-nowrap items-center mt-5 pb-2"
			>
				<div className="w-fit mx-3">
					<h1 className="text-[80px] leading-none text-white font-medium">
						Weaving magic in code
					</h1>
				</div>
				<div className="w-fit mx-3">
					<h1 className="text-[80px] leading-none text-white font-medium">
						Weaving magic in code
					</h1>
				</div>
			</Marquee>
		</>
	);
}
