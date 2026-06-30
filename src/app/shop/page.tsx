import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import { allProductsData } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";
import Link from "next/link";
import { ProductCategory } from "@/types/product.types";
import { cn } from "@/lib/utils";

type CollectionFilter = {
  label: string;
  value: string;
  category?: ProductCategory;
  matches?: (category: ProductCategory | "All", title: string) => boolean;
};

const collectionFilters: CollectionFilter[] = [
  { label: "All", value: "all" },
  { label: "Lingerie Sets", value: "lingerie-sets", category: "Lingerie Sets" },
  {
    label: "Noir Lace",
    value: "noir-lace",
    matches: (_category, title) => title.toLowerCase().includes("black"),
  },
  { label: "Soft Sleepwear", value: "soft-sleepwear", category: "Sleepwear" },
  { label: "Accessories", value: "accessories", category: "Accessories" },
  {
    label: "Private Edit",
    value: "private-edit",
    matches: () => true,
  },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price Low", value: "low-price" },
  { label: "Price High", value: "high-price" },
];

const categoryAliases: Record<string, CollectionFilter["value"]> = {
  "lingerie-sets": "lingerie-sets",
  "lace-bodysuits": "lingerie-sets",
  "sheer-bodysuits": "lingerie-sets",
  "black-bodysuits": "noir-lace",
  "crotchless-bodysuits": "lingerie-sets",
  "soft-neutrals": "private-edit",
  "slips-chemises": "soft-sleepwear",
  "satin-nightwear": "soft-sleepwear",
  robes: "soft-sleepwear",
  "lounge-sleep": "soft-sleepwear",
  nightwear: "soft-sleepwear",
  "sexy-dresses": "private-edit",
  "mini-dresses": "private-edit",
  "lace-dresses": "private-edit",
  "date-night": "private-edit",
  "after-dark": "private-edit",
  "boudoir-accessories": "accessories",
  stockings: "accessories",
  garters: "accessories",
  "gift-sets": "accessories",
  "care-accessories": "accessories",
};

const getCategoryFilter = (category?: string) => {
  if (!category) return undefined;

  const decodedCategory = decodeURIComponent(category);
  const aliasedValue = categoryAliases[decodedCategory.toLowerCase()];

  return collectionFilters.find(
    (filter) =>
      filter.value === aliasedValue ||
      filter.category?.toLowerCase() === decodedCategory.toLowerCase()
  );
};

const getFilterHref = (filter: CollectionFilter, sort: string) => {
  const params = new URLSearchParams();
  if (filter.value !== "all") params.set("edit", filter.value);
  if (sort !== "featured") params.set("sort", sort);

  return `/shop${params.toString() ? `?${params.toString()}` : ""}`;
};

const getSortHref = (
  sort: string,
  filterValue: string
) => {
  const params = new URLSearchParams();
  if (filterValue !== "all") params.set("edit", filterValue);
  if (sort !== "featured") params.set("sort", sort);

  return `/shop${params.toString() ? `?${params.toString()}` : ""}`;
};

export default function ShopPage({
  searchParams,
}: {
  searchParams?: { category?: string; edit?: string; sort?: string };
}) {
  const categoryFilter = getCategoryFilter(searchParams?.category);
  const selectedFilter =
    collectionFilters.find((filter) => filter.value === searchParams?.edit) ??
    categoryFilter ??
    collectionFilters[0];
  const selectedSort = sortOptions.some(
    (option) => option.value === searchParams?.sort
  )
    ? searchParams?.sort ?? "featured"
    : "featured";
  const filteredProducts =
    selectedFilter.value === "all"
      ? allProductsData
      : allProductsData.filter((product) => {
          if (selectedFilter.matches) {
            return selectedFilter.matches(product.category, product.title);
          }

          return product.category === selectedFilter.category;
        });
  const products = [...filteredProducts].sort((first, second) => {
    if (selectedSort === "low-price") return first.price - second.price;
    if (selectedSort === "high-price") return second.price - first.price;
    return first.id - second.id;
  });

  return (
    <main className="silk-page overflow-x-hidden pb-20 text-moonlite-espresso sm:pb-24">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="border-t border-moonlite-border/60 pt-5 sm:pt-6">
          <BreadcrumbShop />
        </div>

        <section className="moonlite-reveal relative mb-8 overflow-hidden border-y border-moonlite-border/60 bg-moonlite-card/40 py-9 sm:py-12 lg:py-14">
          <div className="absolute right-7 top-8 hidden h-24 w-px bg-moonlite-bronze/24 md:block" />
          <div className="absolute right-7 top-8 hidden h-px w-24 bg-moonlite-bronze/24 md:block" />
          <div className="grid gap-7 px-5 sm:px-7 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <span className="mb-3 block text-[11px] uppercase tracking-[0.24em] text-moonlite-bronze">
                MOONLITE EDIT
              </span>
              <h1 className="mb-4 max-w-3xl text-4xl font-medium leading-[1.05] text-moonlite-espresso md:text-6xl">
                The Collection
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-moonlite-taupe sm:text-base">
                Explore refined intimate pieces designed for confidence,
                comfort and quiet luxury.
              </p>
            </div>
            <div className="border-l border-moonlite-bronze/26 bg-moonlite-cream/45 px-5 py-4">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-moonlite-bronze">
                Curated Intimates
              </span>
              <p className="font-serif text-xl italic leading-8 text-moonlite-espresso/76">
                Delicate lace, quiet confidence and discreet UK delivery.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-start">
          <div className="flex w-full flex-col space-y-7">
            <div className="flex flex-col gap-5 border-y border-moonlite-border/60 bg-moonlite-cream/24 px-4 py-5 sm:px-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-moonlite-bronze">
                    The Edit
                  </span>
                  <h2 className="text-2xl font-medium text-moonlite-espresso md:text-[32px]">
                    Explore the Pieces
                  </h2>
                  <span className="mt-2 block text-sm text-moonlite-taupe">
                    Showing {products.length} of {allProductsData.length} pieces
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {sortOptions.map((option) => (
                  <Link
                    key={option.value}
                    href={getSortHref(option.value, selectedFilter.value)}
                    className={cn([
                      "rounded-full border px-4 py-2 text-sm transition-all duration-300",
                      selectedSort === option.value
                        ? "border-moonlite-bronze bg-moonlite-bronze text-moonlite-ivory"
                        : "border-moonlite-border/70 bg-moonlite-card/54 text-moonlite-taupe hover:border-moonlite-bronze/60 hover:text-moonlite-espresso",
                    ])}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>

            <nav
              className="flex gap-3 overflow-x-auto border-b border-moonlite-border/60 pb-4"
              aria-label="Collection filters"
            >
              {collectionFilters.map((filter) => (
                <Link
                  key={filter.value}
                  href={getFilterHref(filter, selectedSort)}
                  className={cn([
                    "shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-300",
                    selectedFilter.value === filter.value
                      ? "border-moonlite-bronze bg-moonlite-bronze text-moonlite-ivory"
                      : "border-moonlite-border/70 bg-moonlite-card/54 text-moonlite-taupe hover:border-moonlite-bronze/60 hover:text-moonlite-espresso",
                  ])}
                >
                  {filter.label}
                </Link>
              ))}
            </nav>

            {products.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-x-5 gap-y-12 xs:grid-cols-2 md:grid-cols-3 lg:gap-x-7">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} theme="dark" />
                ))}
              </div>
            ) : (
              <div className="border-y border-moonlite-border/60 bg-moonlite-card/42 px-5 py-10 text-center">
                <p className="text-sm leading-7 text-moonlite-taupe">
                  This edit is being prepared. Explore the full Moonlite
                  collection while new pieces are added.
                </p>
                <Link
                  href="/shop"
                  className="moonlite-link mt-4 inline-flex text-sm font-medium text-moonlite-espresso"
                >
                  View all pieces
                </Link>
              </div>
            )}

            <section className="border-y border-moonlite-border/60 bg-moonlite-cream/28 px-5 py-8 sm:px-6">
              <div className="mb-6 max-w-2xl">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-moonlite-bronze">
                  Service Notes
                </span>
                <h2 className="text-2xl font-medium text-moonlite-espresso">
                  Fit & Care
                </h2>
                <p className="mt-2 text-sm leading-7 text-moonlite-taupe">
                  Size guidance, discreet delivery and delicate lace care for
                  every Moonlite piece.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Find Your Fit",
                  text: "A simple size guide to help you choose with confidence.",
                  link: "View Size Guide",
                  href: "/size-guide",
                },
                {
                  title: "Discreet UK Delivery",
                  text: "Plain outer packaging prepared for privacy.",
                  link: "Shipping Details",
                  href: "/shipping",
                },
                {
                  title: "Delicate Care",
                  text: "Hand wash cold and lay flat to dry.",
                  link: "Care & Returns",
                  href: "/returns",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="border-t border-moonlite-border/60 pt-5"
                >
                  <span className="mb-3 block text-[11px] uppercase tracking-[0.22em] text-moonlite-bronze">
                    0{index + 1}
                  </span>
                  <h3 className="text-base font-medium text-moonlite-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-moonlite-taupe">
                    {item.text}
                  </p>
                  <Link
                    href={item.href}
                    className="moonlite-link mt-4 inline-flex text-sm font-medium text-moonlite-espresso"
                  >
                    {item.link} -&gt;
                  </Link>
                </div>
              ))}
              </div>
            </section>

            <section className="border-y border-moonlite-border/60 bg-moonlite-card/42 px-5 py-9 text-moonlite-espresso sm:px-8 sm:py-10">
              <span className="mb-3 block text-[11px] uppercase tracking-[0.22em] text-moonlite-bronze">
                Collection Note
              </span>
              <h2 className="max-w-2xl text-2xl font-medium sm:text-3xl">
                A Quiet Edit of Moonlit Pieces
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-moonlite-taupe sm:text-base">
                A refined selection of intimate lace pieces designed for
                softness, discretion and quiet confidence. Each Moonlite Studio
                piece is chosen to feel personal, polished and gently alluring.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
