// Import Icons //
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface TextButtonProps {
	text: string;
	textColor?: string;
	fontWeight?: string;
}

const TextButton = ({ text, textColor, fontWeight }: TextButtonProps) => {
	const textColorClass = textColor ? `text-${textColor}` : "text-white";
	const fontWeightClass = fontWeight ? `font-${fontWeight}` : "";

	return (
		<button className="group flex w-fit items-center justify-center pt-[9px] pb-[11px] lg:pt-[14px] lg:pb-4 gap-[10px] lg:hover:gap-3 lg:duration-300">
			<p className={`text-base ${textColorClass} ${fontWeightClass}`}>
				{text}
			</p>
			<ArrowTopRightIcon className="h-4 w-4 text-white lg:group-hover:rotate-45 lg:duration-300" />
		</button>
	);
};

export default TextButton;
