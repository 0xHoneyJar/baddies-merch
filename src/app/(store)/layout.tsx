import "@/app/globals.css";
import * as Commerce from "commerce-kit";
import Image from "next/image";
import { Nav } from "@/ui/nav/Nav";
import { JsonLd, accountToWebsiteJsonLd } from "@/ui/JsonLd";
import { TooltipProvider } from "@/ui/shadcn/tooltip";
import { Footer } from "@/ui/footer/Footer";

export default async function StoreLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	const accountResult = await Commerce.accountGet();
	const logoLink =
		accountResult?.logo?.links?.data.find((link) => !link.expired) ||
		(accountResult?.logo?.id ? await Commerce.fileGet(accountResult.logo.id) : null);

	return (
		<div className="relative flex flex-col items-center justify-center">
			<Image src="/bg_clouds.png" alt="" fill className="absolute inset-0 z-0" />
			<div className="relative z-10 flex size-full flex-col items-center justify-center">
				<Nav />
				<TooltipProvider>
					<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-6 sm:px-6 lg:px-8">
						{children}
						{modal}
					</main>
					<Footer />
				</TooltipProvider>
				<JsonLd
					jsonLd={accountToWebsiteJsonLd({
						account: accountResult?.account,
						logoUrl: logoLink?.url,
					})}
				/>
			</div>
		</div>
	);
}
