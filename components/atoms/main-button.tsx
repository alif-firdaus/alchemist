// Import Icons //
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

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
			className={`${bgColorClass} group flex w-fit items-center justify-center pt-[9px] pb-[11px] lg:pt-3 lg:pb-[14px] rounded-full pl-6 pr-5 lg:pl-[30px] lg:pr-[26px] gap-[10px] lg:hover:bg-[#6431F5] lg:hover:gap-3 lg:duration-300`}
		>
			<p className={`text-base ${textColorClass} ${fontWeightClass}`}>
				{text}
			</p>
			<ArrowTopRightIcon className="h-4 w-4 text-white lg:group-hover:rotate-45 lg:duration-300" />
		</button>
	);
};

export default MainButton;
