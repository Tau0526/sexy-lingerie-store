"use client";

import Image from "next/image";
import Link from "next/link";
import WishlistButton from "@/components/common/WishlistButton";
import { allProductsData } from "@/data/products";
import { useWishlist, WishlistItem } from "@/hooks/useWishlist";
import { Product } from "@/types/product.types";

type SavedWishlistEntry = {
  item: WishlistItem;
  product: Product;
};

const getProductForWishlistItem = (item: WishlistItem) =>
  allProductsData.find(
    (product) =>
      product.slug === item.slug ||
      product.id === item.productId ||
      String(product.id) === item.slug
  );

const colourFallbacks: Record<string, string> = {
  black: "#111111",
  blue: "#4B6F9B",
  red: "#B91C1C",
  ivory: "#F5EFE6",
  cream: "#F5EFE6",
  nude: "#D8C2A8",
};

const getSwatchColour = (name?: string, value?: string) => {
  const hexFromValue = value?.match(/#(?:[0-9a-fA-F]{3}){1,2}/)?.[0];

  if (hexFromValue) return hexFromValue;
  if (!name) return undefined;

  return colourFallbacks[name.toLowerCase()] ?? "#9C7548";
};

const WishlistClient = () => {
  const { isReady, wishlistItems } = useWishlist();
  const savedEntries = wishlistItems
    .map((item): SavedWishlistEntry | undefined => {
      const product = getProductForWishlistItem(item);

      return product ? { item, product } : undefined;
    })
    .filter((entry): entry is SavedWishlistEntry => Boolean(entry));

  return (
    <main className="silk-page overflow-x-hidden pb-24 text-moonlite-espresso">
      <div className="mx-auto max-w-frame px-4 xl:px-0">
        <section className="moonlite-reveal border-b border-moonlite-bronze/18 py-14 sm:py-20">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-moonlite-bronze">
            Moonlite Studio
          </span>
          <h1 className="mb-5 text-4xl font-medium leading-tight md:text-5xl">
            Wishlist
          </h1>
          <p className="max-w-2xl text-base leading-7 text-moonlite-espresso/64">
            Save pieces you are considering, then return when you are ready to
            enquire.
          </p>
        </section>

        {!isReady ? (
          <section className="py-14">
            <p className="text-sm uppercase tracking-[0.18em] text-moonlite-taupe">
              Loading wishlist
            </p>
          </section>
        ) : savedEntries.length > 0 ? (
          <section className="grid gap-x-5 gap-y-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {savedEntries.map(({ item, product }) => {
              const productHref = `/shop/product/${product.id}/${product.slug}`;
              const enquiryParams = new URLSearchParams({
                product: product.slug,
                title: product.title,
              });
              const swatchColour = getSwatchColour(
                item.selectedColorName,
                item.selectedColorValue
              );

              if (item.selectedSize) enquiryParams.set("size", item.selectedSize);
              if (item.selectedColorName) {
                enquiryParams.set("color", item.selectedColorName);
              }

              return (
                <article
                  key={item.key}
                  className="group relative flex h-full min-w-0 flex-col border border-moonlite-border/70 bg-moonlite-card/72 p-3 text-center transition-colors duration-300 hover:border-moonlite-bronze/55"
                >
                  <WishlistButton
                    productKey={product.slug}
                    productId={product.id}
                    productAliases={[String(product.id)]}
                    productTitle={product.title}
                    selectedSize={item.selectedSize}
                    selectedColorName={item.selectedColorName}
                    selectedColorValue={item.selectedColorValue}
                    className="absolute right-5 top-5 z-[3] h-8 w-8"
                  />
                  <Link
                    href={productHref}
                    className="flex min-w-0 flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
                  >
                    <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-md bg-[#F8F1E8]">
                      <Image
                        src={product.srcUrl}
                        width={295}
                        height={298}
                        className="h-full w-full object-contain p-5 transition-transform duration-700 group-hover:scale-[1.025]"
                        alt={product.srcAlt ?? `${product.title} product image`}
                        priority
                      />
                    </div>
                    <span className="mb-2 text-[11px] uppercase tracking-[0.18em] text-moonlite-taupe">
                      {product.category}
                    </span>
                    <h2 className="min-h-12 text-base font-medium leading-6 text-moonlite-espresso">
                      {product.title}
                    </h2>
                    <span className="mt-2 text-sm text-moonlite-taupe">
                      {"\u00a3"}
                      {product.price.toFixed(2)}
                    </span>
                  </Link>

                  <div className="mt-4 space-y-2 border-t border-moonlite-border/60 pt-4 text-left text-xs leading-5 text-moonlite-taupe">
                    {item.selectedColorName || item.selectedSize ? (
                      <>
                        {item.selectedColorName ? (
                          <div className="flex min-w-0 items-center justify-between gap-3">
                            <span className="font-medium uppercase tracking-[0.12em]">
                              Color
                            </span>
                            <span className="flex min-w-0 items-center gap-2 text-moonlite-espresso">
                              {swatchColour ? (
                                <span
                                  className="h-2.5 w-2.5 shrink-0 rounded-full border border-moonlite-border"
                                  style={{ backgroundColor: swatchColour }}
                                  aria-hidden="true"
                                />
                              ) : null}
                              <span className="truncate">
                                {item.selectedColorName}
                              </span>
                            </span>
                          </div>
                        ) : null}
                        {item.selectedSize ? (
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-medium uppercase tracking-[0.12em]">
                              Size
                            </span>
                            <span className="text-moonlite-espresso">
                              {item.selectedSize}
                            </span>
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <p className="text-center uppercase tracking-[0.12em]">
                        Saved piece
                      </p>
                    )}
                  </div>

                  <Link
                    href={`/contact?${enquiryParams.toString()}`}
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-sm border border-moonlite-bronze/70 px-4 text-xs font-medium uppercase tracking-[0.12em] text-moonlite-bronze transition-colors duration-300 hover:border-moonlite-hover hover:bg-moonlite-cream hover:text-moonlite-hover"
                  >
                    Enquire now
                  </Link>
                </article>
              );
            })}
          </section>
        ) : (
          <section className="flex min-h-[340px] flex-col items-center justify-center border-y border-moonlite-bronze/18 px-3 py-14 text-center">
            <span className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-moonlite-bronze">
              Your wishlist is waiting.
            </span>
            <h2 className="mb-4 text-2xl font-medium">
              Save your favourite Moonlite pieces.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-moonlite-taupe sm:text-base">
              Save your favourite Moonlite pieces and return to them anytime.
            </p>
            <Link
              href="/shop"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-sm border border-moonlite-bronze bg-moonlite-bronze px-7 text-sm font-medium uppercase tracking-[0.12em] text-moonlite-ivory transition-all duration-300 hover:border-moonlite-hover hover:bg-moonlite-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
            >
              Explore the collection
            </Link>
          </section>
        )}
      </div>
    </main>
  );
};

export default WishlistClient;
