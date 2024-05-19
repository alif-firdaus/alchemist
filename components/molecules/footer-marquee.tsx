import Marquee from "react-fast-marquee";

// Import Icons //
import { CheckIcon } from "@radix-ui/react-icons";

export default function FooterMarquee() {
	return (
		<Marquee
			direction="right"
			speed={30}
			className="flex flex-shrink-0 h-fit whitespace-nowrap items-center"
		>
			<div className="flex items-center justify-center gap-2 mx-5">
				<CheckIcon className="w-5 h-auto text-grey" />
				<p className="text-base text-white font-light">Collaborative</p>
			</div>
			<div className="flex items-center justify-center gap-2 mx-5">
				<CheckIcon className="w-5 h-auto text-grey" />
				<p className="text-base text-white font-light">
					Result-oriented
				</p>
			</div>
			<div className="flex items-center justify-center gap-2 mx-5">
				<CheckIcon className="w-5 h-auto text-grey" />
				<p className="text-base text-white font-light">Team Player</p>
			</div>
			<div className="flex items-center justify-center gap-2 mx-5">
				<CheckIcon className="w-5 h-auto text-grey" />
				<p className="text-base text-white font-light">
					Pixel Perfectionist
				</p>
			</div>

			<div className="flex items-center justify-center gap-2 mx-5">
				<CheckIcon className="w-5 h-auto text-grey" />
				<p className="text-base text-white font-light">Collaborative</p>
			</div>
			<div className="flex items-center justify-center gap-2 mx-5">
				<CheckIcon className="w-5 h-auto text-grey" />
				<p className="text-base text-white font-light">
					Result-oriented
				</p>
			</div>
			<div className="flex items-center justify-center gap-2 mx-5">
				<CheckIcon className="w-5 h-auto text-grey" />
				<p className="text-base text-white font-light">Team Player</p>
			</div>
			<div className="flex items-center justify-center gap-2 mx-5">
				<CheckIcon className="w-5 h-auto text-grey" />
				<p className="text-base text-white font-light">
					Pixel Perfectionist
				</p>
			</div>
		</Marquee>
	);
}
