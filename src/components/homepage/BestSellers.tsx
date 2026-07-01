"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WishlistButton from "@/components/common/WishlistButton";
import { allProductsData } from "@/data/products";
import { Product } from "@/types/product.types";

const bestSellerSlugs = [
  "black-lace-moonlit-set",
  "blue-lace-moonlit-bodysuit",
  "red-lace-lattice-mini-dress",
  "blue-lace-halter-bodysuit",
  "black-floral-lace-bodysuit",
  "black-sheer-lace-chemise",
  "blue-lace-dusk-set",
  "black-lace-lattice-mini-dress",
  "red-floral-lace-bodysuit",
  "black-diamond-mesh-bodysuit",
  "black-lace-halter-bodysuit",
];

const bestSellers = bestSellerSlugs
  .map((slug) => allProductsData.find((product) => product.slug === slug))
  .filter((product): product is Product => Boolean(product));

const colourHexMap: Record<string, string> = {
  black: "#111111",
  blue: "#4B6F9B",
  red: "#B91C1C",
  ivory: "#F5EFE6",
  cream: "#F5EFE6",
  nude: "#D8C2A8",
};

const getSwatchColour = (name: string, code: string) => {
  const hexFromClass = code.match(/#(?:[0-9a-fA-F]{3}){1,2}/)?.[0];

  if (hexFromClass) return hexFromClass;

  return colourHexMap[name.toLowerCase()] ?? "#9C7548";
};

const BestSellers = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: carousel.clientWidth * (direction === "left" ? -0.85 : 0.85),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative mx-auto max-w-frame px-4 pb-12 pt-8 text-center sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12 xl:px-0">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-lg font-medium uppercase tracking-[0.28em] text-moonlite-espresso sm:text-xl">
          BEST SELLERS
        </h2>
        <span className="mx-auto mt-4 block h-px w-20 bg-moonlite-bronze/60" />
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Scroll best sellers left"
          onClick={() => scrollCarousel("left")}
          className="absolute left-2 top-[42%] z-[2] hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-moonlite-border/70 bg-moonlite-card/88 text-moonlite-bronze shadow-moonlite-card transition-colors hover:border-moonlite-bronze hover:bg-moonlite-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory sm:flex xl:-left-5"
        >
          <ChevronLeft size={18} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Scroll best sellers right"
          onClick={() => scrollCarousel("right")}
          className="absolute right-2 top-[42%] z-[2] hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-moonlite-border/70 bg-moonlite-card/88 text-moonlite-bronze shadow-moonlite-card transition-colors hover:border-moonlite-bronze hover:bg-moonlite-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory sm:flex xl:-right-5"
        >
          <ChevronRight size={18} strokeWidth={1.5} />
        </button>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-5"
        >
          {bestSellers.map((product) => (
            <article
              key={product.slug}
              className="group relative min-w-0 shrink-0 basis-[72%] snap-start xs:basis-[58%] sm:basis-[45%] md:basis-[calc((100%_-_2rem)/3)] lg:basis-[calc((100%_-_6.25rem)/6)]"
            >
              <WishlistButton
                productKey={product.slug}
                productId={product.id}
                productAliases={[String(product.id)]}
                productTitle={product.title}
                className="absolute right-3 top-3 z-[2] h-8 w-8 border-moonlite-border/70 bg-moonlite-card/82 shadow-[0_8px_18px_rgba(61,46,38,0.08)]"
              />
              <Link
                href={`/shop/product/${product.id}/${product.slug}`}
                className="block min-w-0 outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
                aria-label={`View ${product.title}`}
              >
                <div className="relative mb-4 flex aspect-[4/5] min-h-[170px] items-center justify-center overflow-hidden rounded-md bg-[#F8F1E8] px-4 py-5 transition duration-500 group-hover:bg-[#F4E9DC] xs:min-h-[190px] sm:min-h-[230px] sm:px-5 sm:py-6 lg:min-h-[250px]">
                  <Image
                    src={product.srcUrl}
                    alt={product.srcAlt ?? `${product.title} product image`}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 16vw"
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.035] sm:p-5"
                  />
                </div>

                <h3 className="min-h-12 text-center text-sm font-medium leading-6 text-moonlite-espresso">
                  {product.title}
                </h3>
                <p className="mt-1 text-center text-sm text-moonlite-taupe">
                  {"\u00a3"}
                  {product.price.toFixed(2)}
                </p>
                <div className="mt-3 flex justify-center gap-2">
                  {product.colors.slice(0, 3).map((color) => (
                    <span
                      key={color.name}
                      className="h-2.5 w-2.5 rounded-full border border-moonlite-border/70"
                      style={{
                        backgroundColor: getSwatchColour(color.name, color.code),
                      }}
                      title={color.name}
                    />
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
