// Import Icons //
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

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
		<button className="group flex w-fit items-center justify-center pt-3 pb-[14px] border border-white border-opacity-15 rounded-full pl-[26px] pr-[22px] gap-[10px] hover:bg-white duration-500 ease-in-out">
			<p
				className={`text-sm text-white group-hover:text-black group-hover:font-medium ${fontWeightClass}`}
			>
				{text}
			</p>
			<ArrowTopRightIcon className="h-4 w-4 text-white group-hover:text-black group-hover:rotate-45 duration-300" />
		</button>
	);
};

export default SecondaryButtonDesktop;
