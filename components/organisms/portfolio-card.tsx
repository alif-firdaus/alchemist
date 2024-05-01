import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Import Icons //
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface PortfolioCardProps {
	platform: string;
	category: string;
	imageSrc: StaticImport;
	alt: string;
	priority?: boolean;
	year: number;
	role1: string;
	role2: string;
	portfolioTitle: string;
	link: string;
}

const PortfolioCard = ({
	platform,
	category,
	imageSrc,
	alt,
	priority,
	year,
	role1,
	role2,
	portfolioTitle,
	link,
}: PortfolioCardProps) => {
	return (
		<div className="flex lg:hidden flex-col w-full h-auto">
			<div className="group w-full flex flex-col h-auto relative lg:cursor-pointer">
				<div className="absolute z-50 flex gap-[10px] h-fit justify-end inset-0 px-4 lg:px-5 py-4 lg:py-5">
					<div className="py-[6px] lg:py-2 rounded-full px-4 lg:px-[18px] bg-white bg-opacity-10">
						<p className="text-sm text-white font-light">
							{platform}
						</p>
					</div>
					<div className="py-[6px] lg:py-2 rounded-full px-4 lg:px-[18px] bg-white bg-opacity-10">
						<p className="text-sm text-white font-light">
							{category}
						</p>
					</div>
				</div>
				<div className="hidden absolute z-40 w-full h-full inset-0 m-auto lg:group-hover:block lg:group-hover:backdrop-blur-sm duration-300 transition-all ease-in-out">
					<div className="absolute flex items-center justify-center z-50 w-24 h-24 rounded-full bg-secondary m-auto inset-0">
						<ArrowTopRightIcon className="text-black w-10 h-10" />
					</div>
				</div>
				<Image
					src={imageSrc}
					alt={alt}
					priority={priority}
					className="w-full h-auto rounded-xl lg:rounded-3xl"
				/>
			</div>

			<div className="flex flex-col mt-6 lg:mt-7 gap-2 lg:gap-3">
				<div className="flex items-center justify-start gap-2">
					<p className="text-grey text-[15px] lg:text-[17px]">
						{year}
					</p>
					<div className="w-1 h-1 rounded-full bg-grey"></div>
					<p className="text-grey text-[15px] lg:text-[17px]">
						{role1}
					</p>
					<div className="w-1 h-1 rounded-full bg-grey"></div>
					<p className="text-grey text-[15px] lg:text-[17px]">
						{role2}
					</p>
				</div>
				<h2 className="text-white text-xl lg:text-2xl">
					{portfolioTitle}
				</h2>
			</div>
		</div>
	);
};

export default PortfolioCard;
