// Import Components //
import ContactForm from "@/components/organisms/contact-form";

export default function Connect() {
	return (
		<section className="px-sectionpxsm lg:px-sectionpxlg 2xl:px-sectionpx2xl pt-32 lg:pt-48 pb-44 lg:pb-48">
			<div className="flex flex-col items-start justify-center">
				<div className="bg-secondary py-[5px] lg:py-[6px] px-4 flex items-center justify-center w-fit gap-[6px] rounded-full">
					<p className="text-sm font-medium tracking-tight text-black">
						Connect
					</p>
				</div>
				<h1 className="text-5xl lg:text-[90px] lg:leading-[1.10] mt-[34px] lg:mt-11 text-white">
					Pixel crafter
					<br />
					at your service
				</h1>
			</div>

			<div className="w-full h-[1px] bg-white bg-opacity-15 mt-12 lg:mt-[70px] mb-11 lg:mb-20"></div>

			<div className="w-full flex flex-col lg:flex-row lg:justify-between">
				<div className="w-full flex flex-col lg:pr-28">
					<h3 className="text-xl lg:text-2xl text-white font-light leading-[1.6] lg:leading-[1.62]">
						<span className="text-grey">Whether it&apos;s</span> a
						project discussion, sharing session,{" "}
						<span className="text-grey">or just</span> a casual
						conversation,{" "}
						<span className="text-grey">
							I&apos;ve got your back!
						</span>
					</h3>
					<div className="flex flex-col gap-1 lg:gap-2 mt-14 lg:mt-20">
						<p className="text-base lg:text-lg text-grey font-light">
							Hate contact forms?
						</p>
						<h4 className="text-lg lg:text-xl text-white font-light">
							aliffirdaus@petaniweb.com
						</h4>
					</div>
				</div>
				<div className="w-full mt-12 lg:mt-0">
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
