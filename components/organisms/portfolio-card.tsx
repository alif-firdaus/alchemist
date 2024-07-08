import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Import Icons //
import { ArrowUpRightIcon } from "lucide-react";

interface PortfolioCardProps {
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

const PortfolioCard = ({
	platform,
	category,
	link,
	imageSrc,
	alt,
	year,
	role1,
	role2,
	portfolioTitle,
}: PortfolioCardProps) => {
	return (
		<div className="w-full flex lg:hidden flex-col h-auto">
			<Link href={link}>
				<div className="group w-full flex flex-col h-auto relative cursor-pointer">
					<div className="absolute z-50 flex h-fit justify-between items-center inset-0 pr-3 pl-[18px] py-3">
						<div className="flex gap-[10px]">
							<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
								<p className="text-sm text-white font-light">
									{platform}
								</p>
							</div>
							<div className="py-[6px] rounded-full px-4 bg-white bg-opacity-10">
								<p className="text-sm text-white font-light">
									{category}
								</p>
							</div>
						</div>

						<div className="w-fit h-fit">
							<ArrowUpRightIcon
								className="text-secondary w-12 h-12 p-0 opacity-90"
								strokeWidth={0.8}
							/>
						</div>
					</div>

					<Image
						src={imageSrc}
						alt={alt}
						priority={true}
						className="w-full h-auto rounded-xl"
					/>
				</div>
			</Link>

			<div className="flex flex-col mt-6 gap-2">
				<div className="flex items-center justify-start gap-2">
					<p className="text-grey text-[15px]">{year}</p>
					<div className="w-1 h-1 rounded-full bg-grey"></div>
					<p className="text-grey text-[15px]">{role1}</p>
					<div className="w-1 h-1 rounded-full bg-grey"></div>
					<p className="text-grey text-[15px]">{role2}</p>
				</div>
				<h2 className="text-white text-xl">{portfolioTitle}</h2>
			</div>
		</div>
	);
};

export default PortfolioCard;
