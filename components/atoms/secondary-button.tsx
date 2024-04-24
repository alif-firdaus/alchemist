// Import Icons //
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface SecondaryButtonProps {
	text: string;
	fontWeight?: string;
}

const SecondaryButton = ({ text, fontWeight }: SecondaryButtonProps) => {
	const fontWeightClass = fontWeight ? `font-${fontWeight}` : "";

	return (
		<button className="flex group w-full lg:w-fit items-center justify-center pt-3 lg:pt-[14px] pb-[15px] lg:pb-4 border border-white border-opacity-15 rounded-full pl-8 pr-7 gap-3 lg:hover:bg-white duration-500">
			<p
				className={`text-base text-white group-hover:text-black lg:group-hover:font-medium ${fontWeightClass}`}
			>
				{text}
			</p>
			<ArrowRightIcon className="h-4 w-4 text-white group-hover:text-black" />
		</button>
	);
};

export default SecondaryButton;
