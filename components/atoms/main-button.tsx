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
		<button className="group flex w-fit">
			<div
				className={`${bgColorClass} flex items-center justify-center pt-[11px] pb-[13px] lg:pt-[14px] lg:pb-4 rounded-full px-6 lg:px-7 lg:group-hover:bg-[#6431F5] lg:duration-300`}
			>
				<p
					className={`text-base leading-none ${textColorClass} ${fontWeightClass}`}
				>
					{text}
				</p>
			</div>
			<div
				className={`${bgColorClass} items-center justify-center -ml-[2px] lg:-ml-[6px] lg:group-hover:ml-0 pt-[11px] pb-[13px] lg:pt-[14px] lg:pb-4 px-3 lg:px-4 rounded-full lg:group-hover:bg-[#6431F5] lg:duration-300`}
			>
				<ArrowTopRightIcon className="h-4 w-4 text-white lg:group-hover:rotate-45 lg:duration-300" />
			</div>
		</button>
	);
};

export default MainButton;
