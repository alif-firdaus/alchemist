import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Import Icons //
import { ArrowUpRightIcon } from "lucide-react";

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
			<Link href={link}>
				<div className="group w-full flex flex-col h-auto relative overflow-hidden cursor-pointer rounded-3xl">
					<div className="absolute z-50 flex h-fit justify-between items-center inset-0 pr-4 pl-7 py-4">
						<div className="flex gap-[10px]">
							<div className="py-2 h-fit rounded-full px-[18px] bg-white bg-opacity-[0.09]">
								<p className="text-sm text-white font-light">
									{platform}
								</p>
							</div>
							<div className="py-2 h-fit rounded-full px-[18px] bg-white bg-opacity-[0.09]">
								<p className="text-sm text-white font-light">
									{category}
								</p>
							</div>
						</div>

						<div className="w-fit h-fit">
							<ArrowUpRightIcon
								className="text-secondary w-16 h-16 p-0 opacity-30 group-hover:opacity-100 duration-300"
								strokeWidth={0.8}
							/>
						</div>
					</div>

					<Image
						src={imageSrc}
						alt={alt}
						priority={true}
						className="w-full h-auto group-hover:scale-110 transition-transform duration-300 group-hover:grayscale-[60%]"
					/>
				</div>
			</Link>

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
