import Link from "next/link";

// Import Components //
import SecondaryButtonDesktop from "@/components/atoms/secondary-button-desktop";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbSeparator,
	BreadcrumbLink,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function Petaniweb() {
	return (
		<>
			<section className="px-sectionpxsm lg:px-sectionpxlg 2xl:px-sectionpx2xl pt-32 lg:pt-48 pb-44 lg:pb-48">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbSeparator />

						<BreadcrumbItem>
							<BreadcrumbLink href="/#case-studies">
								Case Studies
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbSeparator />

						<BreadcrumbItem>
							<BreadcrumbPage>PetaniWeb</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="flex flex-col w-full mt-14">
					<h3 className="text-3xl bg-clip-text bg-gradient-to-br from-white from-10% to-[#949494] text-transparent">
						PetaniWeb
					</h3>
					<p className="text-grey text-base lg:text-[19px] font-light leading-[1.7] mt-[26px] lg:mt-10">
						Cupcake ipsum dolor sit amet pie jelly beans danish
						topping. Cake ice cream dessert caramels sugar plum
						lemon drops pastry. Liquorice tart fruitcake powder
						lollipop chocolate jujubes. Dessert jujubes soufflé
						sesame snaps oat cake. Bonbon cheesecake chupa chups
						lemon drops cake macaroon.
					</p>

					<div className="w-fit mt-[38px]">
						<Link
							href="https://petaniweb.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SecondaryButtonDesktop text="Live Website" />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
