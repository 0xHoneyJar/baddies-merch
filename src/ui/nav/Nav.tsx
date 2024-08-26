import * as Commerce from "commerce-kit";
import Image from "next/image";
import { CartSummaryNav } from "@/ui/nav/CartSummaryNav";
import { SeoH1 } from "@/ui/SeoH1";
import { SearchNav } from "@/ui/nav/SearchNav";
import { NavMenu } from "@/ui/nav/NavMenu";
import { YnsLink } from "@/ui/YnsLink";

export const Nav = async () => {
	const { config } = await Commerce.contextGet();

	return (
		<header
			className="mt-4 w-3/4 rounded-full border border-[#BBBBBB] bg-[#FFFFFF50] p-3 px-6 backdrop-blur-xl"
			style={{ boxShadow: "0px 14px 16.9px 0px rgba(114, 114, 114, 0.03)" }}
		>
			<div className="mx-auto flex max-w-7xl flex-col items-start justify-between sm:flex-row sm:flex-wrap sm:items-center md:flex-nowrap">
				<YnsLink href="/">
					{/* <SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">{config.nav.title}</SeoH1> */}
					<Image src="/baddies_logo.png" alt="" width={48} height={48} />
				</YnsLink>

				<div className="flex flex-row items-center justify-center gap-4">
					<NavMenu links={config.nav.links} />
					<div className="flex items-center justify-start gap-x-6">
						{config.nav.searchBar.show && <SearchNav />}
					</div>
					<div
						className="cursor-pointer rounded-full border border-[#FFFFFF30] bg-gradient-to-b from-[#FF87BB] to-[#F1A7C7] px-5 py-1 font-medium tracking-tight text-white"
						style={{ boxShadow: "0px 0px 0px 2px #F1A7C7, 0px 2px 4px 0px #FF9EC8" }}
					>
						Explore
					</div>
				</div>
			</div>
		</header>
	);
};
