// Import Icons //
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface MainButtonProps {
	text: string;
	bgColor?: string;
	textColor?: string;
	fontWeight?: string;
}

const MainButton = ({
	text,
	bgColor,
	textColor,
	fontWeight,
}: MainButtonProps) => {
	const bgColorClass = bgColor ? bgColor : "bg-primary";
	const textColorClass = textColor ? `text-${textColor}` : "text-white";
	const fontWeightClass = fontWeight ? `font-${fontWeight}` : "";

	return (
		<button
			className={`${bgColorClass} flex w-full lg:w-fit items-center justify-center pt-3 lg:pt-[14px] pb-[15px] lg:pb-4 rounded-full pl-8 pr-7 gap-3 lg:hover:bg-[#6431F5] lg:duration-300`}
		>
			<p className={`text-base ${textColorClass} ${fontWeightClass}`}>
				{text}
			</p>
			<ArrowRightIcon className="h-4 w-4 text-white" />
		</button>
	);
};

export default MainButton;
