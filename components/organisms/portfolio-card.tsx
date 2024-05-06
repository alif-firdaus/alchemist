import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
			<div className="group w-full flex flex-col h-auto relative cursor-pointer">
				<div className="absolute z-50 flex gap-[10px] h-fit justify-end inset-0 px-4 py-4">
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

				<Link href={link}>
					<Image
						src={imageSrc}
						alt={alt}
						priority={true}
						className="w-full h-auto rounded-xl"
					/>
				</Link>
			</div>

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
