// Import Icons //
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface SecondaryButtonProps {
	text: string;
	fontWeight?: string;
}

const SecondaryButton = ({ text, fontWeight }: SecondaryButtonProps) => {
	const fontWeightClass = fontWeight ? `font-${fontWeight}` : "";

	return (
		<button className="flex w-full items-center justify-center pt-3 pb-4 border border-white border-opacity-15 rounded-md pl-8 pr-7 gap-3">
			<p className={`text-base text-white ${fontWeightClass}`}>{text}</p>
			<ArrowRightIcon className="h-4 w-4 text-white" />
		</button>
	);
};

export default SecondaryButton;
