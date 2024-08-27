import Image from "next/image";
import type { Metadata } from "next/types";
import * as Commerce from "commerce-kit";
import { ProductList } from "@/ui/products/productList";
import { CategoryBox } from "@/ui/CategoryBox";
import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";
import { YnsLink } from "@/ui/YnsLink";
import { publicUrl } from "@/env.mjs";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });
	const { config } = await Commerce.contextGet();

	return (
		<main>
			<div className="mb-8 flex w-full flex-col items-center justify-center py-12">
				<div className="flex flex-col items-center gap-4">
					<h1
						className="relative font-americans text-8xl text-white"
						style={{
							textShadow: `
								-1px -1px 0 #f4B1CC,
								0   -1px 0 #f4B1CC,
								1px -1px 0 #f4B1CC,
								-1px  0   0 #f4B1CC,
								1px  0   0 #f4B1CC,
								-1px  1px 0 #f4B1CC,
								0    1px 0 #f4B1CC,
								1px  1px 0 #f4B1CC,
								2px  2px 0 #f4B1CC,
								3px  3px 0 #f4B1CC
							`,
						}}
					>
						<span className="relative z-10 font-americans">
							Bera <span className="font-americans text-[#1E1E1E]">Baddies</span>
						</span>
					</h1>
					<p className="w-2/3 max-w-[100%] text-center text-xl text-white">
						Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunc vulp utate libero et
						velit in
					</p>
					<YnsLink
						className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
						href={config.hero.button.path}
					>
						{config.hero.button.label}
					</YnsLink>
				</div>
			</div>
			<div className="mb-4 flex w-full flex-row items-center justify-center space-x-3">
				<p
					className="text-2xl font-semibold"
					style={{
						background: "linear-gradient(270deg, #F66999 39.06%, #FFB5B7 100%)",
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					Bera Baddies
				</p>
				<Image src="/baddie.png" alt="" width={44} height={44} />
				<p className="text-2xl font-medium text-white">Lorem ipsum dolor sit amet</p>
			</div>
			<div className="relative grid h-[48rem] w-full grid-cols-3 gap-4 rounded-xl border border-[#F2F2F2] bg-[#FFFFFF20] p-4">
				<div className="absolute left-1/2 top-[-2px] h-px w-3/4 -translate-x-1/2 bg-white"></div>
				<div className="col-span-2 w-full rounded-xl border border-[#EEEEEE] bg-white"></div>
				<div className="col-span-1 w-full rounded-xl border border-[#EEEEEE] bg-white"></div>
				<div className="col-span-1 w-full rounded-xl border border-[#EEEEEE] bg-white"></div>
				<div className="col-span-2 w-full rounded-xl border border-[#EEEEEE] bg-white"></div>
				<Image
					src="/blue_glow.png"
					alt=""
					fill
					className="absolute inset-0 z-[-1] object-contain object-bottom"
				/>
			</div>
			{/* {config.hero.show && (
				<section className="rounded bg-neutral-100 py-8 sm:py-12">
					<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
						<div className="max-w-md space-y-4">
							<h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
								{config.hero.title}
							</h2>
							<p className="text-pretty text-neutral-600">{config.hero.description}</p>
							<YnsLink
								className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
								href={config.hero.button.path}
							>
								{config.hero.button.label}
							</YnsLink>
						</div>
						<Image
							alt={config.hero.image.alt}
							loading="eager"
							priority={true}
							className="rounded"
							height={450}
							width={450}
							src={config.hero.image.src}
							style={{
								objectFit: "cover",
							}}
							sizes="(max-width: 640px) 70vw, 450px"
						/>
					</div>
				</section>
			)} */}

			{/* <ProductList products={products} />
			{config.categorySection.show && (
				<section className="w-full py-8">
					<div className="grid gap-8 lg:grid-cols-2">
						{[
							{ categorySlug: "accessories", src: AccessoriesImage },
							{ categorySlug: "apparel", src: ApparelImage },
						].map(({ categorySlug, src }) => (
							<CategoryBox key={categorySlug} categorySlug={categorySlug} src={src} />
						))}
					</div>
				</section>
			)} */}
		</main>
	);
}
