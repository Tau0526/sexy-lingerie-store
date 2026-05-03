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
  const categoryFilter = collectionFilters.find(
    (filter) => filter.category === searchParams?.category
  );
  const selectedFilter =
    collectionFilters.find((filter) => filter.value === searchParams?.edit) ??
    categoryFilter ??
    collectionFilters[0];
  const selectedSort = searchParams?.sort ?? "featured";
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
    <main className="silk-page overflow-hidden pb-24 text-[#3D2E26]">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="border-t border-[#9C7548]/18 pt-5 sm:pt-6">
          <BreadcrumbShop />
        </div>

        <section className="moonlite-reveal relative mb-8 overflow-hidden border-b border-[#9C7548]/18 bg-[#F2EADC]/38 py-9 sm:py-12 lg:py-14">
          <div className="absolute right-7 top-8 hidden h-24 w-px bg-[#9C7548]/24 md:block" />
          <div className="absolute right-7 top-8 hidden h-px w-24 bg-[#9C7548]/24 md:block" />
          <div className="grid gap-7 px-5 sm:px-7 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <span className="mb-3 block text-[11px] uppercase tracking-[0.24em] text-[#9C7548]">
                01 / Collection
              </span>
              <h1 className="mb-4 max-w-3xl text-4xl font-medium leading-[1.05] text-[#3D2E26] md:text-6xl">
                The Moonlite Collection
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-[#3D2E26]/68 sm:text-base">
                A curated edit of lace pieces designed for softness, confidence
                and intimate evenings. Pamper Yourself, Embrace Your Desires.
              </p>
            </div>
            <div className="border-l border-[#9C7548]/26 bg-[#E8DECD]/34 px-5 py-4">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-[#9C7548]">
                Curated Intimates
              </span>
              <p className="font-serif text-xl italic leading-8 text-[#3D2E26]/76">
                Delicate lace, quiet confidence and discreet UK delivery.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-start">
          <div className="flex w-full flex-col space-y-7">
            <div className="flex flex-col gap-5 border-y border-[#9C7548]/16 bg-[#E8DECD]/20 px-1 py-5 sm:px-0 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-[#9C7548]">
                    The Edit
                  </span>
                  <h2 className="text-2xl font-medium text-[#3D2E26] md:text-[32px]">
                    Explore the Pieces
                  </h2>
                  <span className="mt-2 block text-sm text-[#3D2E26]/55">
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
                      "border-b pb-1 text-sm transition-all duration-300",
                      selectedSort === option.value
                        ? "border-[#9C7548] text-[#3D2E26]"
                        : "border-transparent text-[#3D2E26]/52 hover:border-[#9C7548]/45 hover:text-[#3D2E26]",
                    ])}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>

            <nav
              className="flex gap-5 overflow-x-auto border-b border-[#9C7548]/14 pb-4"
              aria-label="Collection filters"
            >
              {collectionFilters.map((filter) => (
                <Link
                  key={filter.value}
                  href={getFilterHref(filter, selectedSort)}
                  className={cn([
                    "shrink-0 border-b py-2 text-sm transition-all duration-300",
                    selectedFilter.value === filter.value
                      ? "border-[#9C7548] text-[#3D2E26]"
                      : "border-transparent text-[#3D2E26]/55 hover:border-[#9C7548]/45 hover:text-[#3D2E26]",
                  ])}
                >
                  {filter.label}
                </Link>
              ))}
            </nav>

            {products.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-x-8 gap-y-14 xs:grid-cols-2 md:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} theme="dark" />
                ))}
              </div>
            ) : (
              <div className="border-y border-[#9C7548]/16 bg-[#F2EADC]/30 px-5 py-10 text-center">
                <p className="text-sm leading-7 text-[#3D2E26]/62">
                  This edit is being prepared. Explore the full Moonlite
                  collection while new pieces are added.
                </p>
                <Link
                  href="/shop"
                  className="moonlite-link mt-4 inline-flex text-sm font-medium text-[#3D2E26]"
                >
                  View all pieces
                </Link>
              </div>
            )}

            <section className="border-y border-[#9C7548]/18 bg-[#E8DECD]/24 px-5 py-8 sm:px-6">
              <div className="mb-6 max-w-2xl">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-[#9C7548]">
                  Service Notes
                </span>
                <h2 className="text-2xl font-medium text-[#3D2E26]">
                  Fit & Care
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#3D2E26]/62">
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
                  className="border-t border-[#9C7548]/18 pt-5"
                >
                  <span className="mb-3 block text-[11px] uppercase tracking-[0.22em] text-[#9C7548]">
                    0{index + 1}
                  </span>
                  <h3 className="text-base font-medium text-[#3D2E26]">
                    {item.title}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#3D2E26]/58">
                    {item.text}
                  </p>
                  <Link
                    href={item.href}
                    className="moonlite-link mt-4 inline-flex text-sm font-medium text-[#3D2E26]"
                  >
                    {item.link} -&gt;
                  </Link>
                </div>
              ))}
              </div>
            </section>

            <section className="bg-[#2A1820] px-5 py-9 text-[#F2EADC] sm:px-8 sm:py-10">
              <span className="mb-3 block text-[11px] uppercase tracking-[0.22em] text-[#C9A28F]">
                Collection Note
              </span>
              <h2 className="max-w-2xl text-2xl font-medium sm:text-3xl">
                A Quiet Edit of Moonlit Pieces
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#F2EADC]/72 sm:text-base">
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
