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
		<button className="group flex w-fit">
			<div className="flex items-center justify-center pt-[11px] pb-[13px] bg-white rounded-full px-6">
				<p
					className={`text-sm leading-none text-black font-medium ${fontWeightClass}`}
				>
					{text}
				</p>
			</div>
			<div className="flex items-center justify-center -ml-1 pt-[11px] pb-[13px] px-3 bg-white rounded-full">
				<ArrowTopRightIcon className="h-4 w-4 text-black group-hover:rotate-45 duration-300" />
			</div>
		</button>
	);
};

export default SecondaryButtonDesktop;
