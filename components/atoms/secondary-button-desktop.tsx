// Import Icons //
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface SecondaryButtonDesktopProps {
	text: string;
	fontWeight?: string;
}

const SecondaryButtonDesktop = ({
	text,
	fontWeight,
}: SecondaryButtonDesktopProps) => {
	const fontWeightClass = fontWeight ? `font-${fontWeight}` : "";

	return (
		<button className="group flex w-fit items-center justify-center pt-[10px] pb-3 border border-white border-opacity-15 rounded-md pl-[26px] pr-[22px] gap-3 duration-300">
			<p
				className={`text-[15px] text-white group-hover:text-secondary ${fontWeightClass}`}
			>
				{text}
			</p>
			<ArrowRightIcon className="h-4 w-4 text-white group-hover:text-secondary" />
		</button>
	);
};

export default SecondaryButtonDesktop;
