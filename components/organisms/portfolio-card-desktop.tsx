import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Import Icons //
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface PortfolioCardDesktopProps {
	platform: string;
	category: string;
	link: string;
	imageSrc: StaticImport;
	alt: string;
	year: number;
	role1: string;
	role2: string;
	portfolioTitle: string;
}

const PortfolioCardDesktop = ({
	platform,
	category,
	link,
	imageSrc,
	alt,
	year,
	role1,
	role2,
	portfolioTitle,
}: PortfolioCardDesktopProps) => {
	return (
		<div className="hidden w-full lg:flex flex-col h-auto">
			<div className="group w-full flex flex-col h-auto relative cursor-pointer">
				<div className="absolute z-50 flex gap-[10px] h-fit justify-end inset-0 px-5 py-5">
					<div className="py-2 rounded-full px-[18px] bg-white bg-opacity-10">
						<p className="text-sm text-white font-light">
							{platform}
						</p>
					</div>
					<div className="py-2 rounded-full px-[18px] bg-white bg-opacity-10">
						<p className="text-sm text-white font-light">
							{category}
						</p>
					</div>
				</div>
				<div className="absolute z-40 w-full h-full inset-0 m-auto block group-hover:backdrop-blur-sm duration-200 transition-all ease-in-out">
					<Link href={link}>
						<div className="absolute hidden group-hover:flex items-center justify-center z-50 w-24 h-24 rounded-full bg-secondary m-auto inset-0 duration-300 ease-in transition-all">
							<ArrowTopRightIcon className="text-black w-10 h-10" />
						</div>
					</Link>
				</div>

				<Image
					src={imageSrc}
					alt={alt}
					priority={true}
					className="w-full h-auto rounded-3xl"
				/>
			</div>

			<div className="flex flex-col mt-7 gap-3">
				<div className="flex items-center justify-start gap-2">
					<p className="text-grey text-[17px]">{year}</p>
					<div className="w-1 h-1 rounded-full bg-grey"></div>
					<p className="text-grey text-[17px]">{role1}</p>
					<div className="w-1 h-1 rounded-full bg-grey"></div>
					<p className="text-grey text-[17px]">{role2}</p>
				</div>
				<h2 className="text-white text-2xl">{portfolioTitle}</h2>
			</div>
		</div>
	);
};

export default PortfolioCardDesktop;
