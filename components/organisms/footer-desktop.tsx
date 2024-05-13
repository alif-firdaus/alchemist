import Link from "next/link";
import Image from "next/image";

// Import Components //
import MainButton from "../atoms/main-button";
import FooterMarquee from "../molecules/footer-marquee";

// Import Assets //
import logo from "@/assets/images/img-logo.webp";

export default function FooterDesktop() {
	return (
		<>
			<div className="hidden lg:block">
				<section className="bg-darkgrey lg:px-sectionpxlg 2xl:px-sectionpx2xl pt-28">
					<div className="w-full">
						<h1 className="text-4xl lg:text-[54px] lg:leading-[1.15] text-center mt-7 lg:mt-10 text-white">
							Turning your ideas
							<br /> into{" "}
							<span className="text-secondary">
								real-life
							</span>{" "}
							products
							<br />
							is my calling
						</h1>
						<div className="mt-14 flex justify-center">
							<Link
								href="https://calendly.com/aliffirdaus-discussion/project-discussion"
								target="_blank"
								rel="noopener noreferrer"
							>
								<MainButton
									text="Schedule a call"
									bgColor=""
									textColor=""
									fontWeight=""
								/>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
