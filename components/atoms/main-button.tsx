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
			className={`${bgColorClass} flex w-full items-center justify-center pt-3 pb-[15px] rounded-md pl-8 pr-7 gap-3`}
		>
			<p className={`text-base ${textColorClass} ${fontWeightClass}`}>
				{text}
			</p>
			<ArrowRightIcon className="h-4 w-4 text-white" />
		</button>
	);
};

export default MainButton;
