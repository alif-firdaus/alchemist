import Link from "next/link";
import Image from "next/image";

// Import Components //
import Navbar from "@/components/molecules/navbar";
import MainButton from "@/components/atoms/main-button";

// Import Icons //
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Rocket } from "lucide-react";

// Import Assets //
import sparkle from "@/assets/images/sparkle.svg";
import graphic from "@/assets/images/graphic.png";

export default function Home() {
	return (
		<>
			{/* <-- ==== Navbar Start ==== --> */}
			<Navbar />
			{/* <-- ==== Navbar End ==== --> */}

			{/* <-- ==== Hero Section Start ==== --> */}
			<section className="px-sectionpxsm pt-32 flex flex-col">
				<div className="flex flex-col justify-center">
					<div className="border border-white border-opacity-15 w-fit rounded-full flex gap-[14px] pl-[6px] pr-5 py-[6px] items-center justify-center">
						<div className="bg-secondary py-[5px] pl-[10px] pr-3 flex items-center justify-center gap-[6px] rounded-full">
							<Image
								src={sparkle}
								alt="Sparkle"
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
							designs that not only look good but also function
							seamlessly and flawlessly.
						</p>
					</div>
				</div>
				<div className="w-full mt-28">
					<Image
						src={graphic}
						alt="Graphic"
						priority={true}
						className="w-full h-auto"
					/>
				</div>
			</section>
			{/* <-- ==== Hero Section End ==== --> */}

			{/* <-- ==== Expertise Section Start ==== --> */}
			{/* <-- ==== Expertise Section End ==== --> */}
		</>
	);
}
