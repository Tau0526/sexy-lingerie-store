import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import { allProductsData } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";
import Link from "next/link";
import { ProductCategory } from "@/types/product.types";
import { cn } from "@/lib/utils";

const categories: Array<ProductCategory | "All"> = [
  "All",
  "Lingerie Sets",
  "Sleepwear",
  "Slips & Chemises",
  "Costumes",
  "Accessories",
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price Low", value: "low-price" },
  { label: "Price High", value: "high-price" },
];

const getCategoryHref = (category: ProductCategory | "All", sort: string) => {
  const params = new URLSearchParams();
  if (category !== "All") params.set("category", category);
  if (sort !== "featured") params.set("sort", sort);

  return `/shop${params.toString() ? `?${params.toString()}` : ""}`;
};

const getSortHref = (
  sort: string,
  category: ProductCategory | "All"
) => {
  const params = new URLSearchParams();
  if (category !== "All") params.set("category", category);
  if (sort !== "featured") params.set("sort", sort);

  return `/shop${params.toString() ? `?${params.toString()}` : ""}`;
};

export default function ShopPage({
  searchParams,
}: {
  searchParams?: { category?: string; sort?: string };
}) {
  const selectedCategory = categories.includes(
    searchParams?.category as ProductCategory
  )
    ? (searchParams?.category as ProductCategory)
    : "All";
  const selectedSort = searchParams?.sort ?? "featured";
  const filteredProducts =
    selectedCategory === "All"
      ? allProductsData
      : allProductsData.filter(
          (product) => product.category === selectedCategory
        );
  const products = [...filteredProducts].sort((first, second) => {
    if (selectedSort === "low-price") return first.price - second.price;
    if (selectedSort === "high-price") return second.price - first.price;
    return first.id - second.id;
  });

  return (
    <main className="silk-page pb-24 text-[#3D2E26]">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="border-t border-[#9C7548]/18 pt-5 sm:pt-6">
          <BreadcrumbShop />
        </div>

        <section className="moonlite-reveal relative mb-10 overflow-hidden border-b border-[#9C7548]/18 px-0 py-10 sm:py-14">
          <div className="absolute right-0 top-10 hidden h-32 w-32 border border-[#9C7548]/18 md:block" />
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <span className="mb-3 block text-xs uppercase tracking-[0.24em] text-[#9C7548]">
                Moonlite Studio collection
              </span>
              <h1 className="mb-4 max-w-3xl text-3xl font-medium leading-tight text-[#3D2E26] md:text-5xl">
                Shop Moonlite Studio
                <span className="block font-serif italic text-[#9C7548]">
                  A refined edit of intimate essentials
                </span>
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-[#3D2E26]/62 sm:text-base">
                Elegant intimate pieces designed for confidence, comfort and quiet
                allure. Curated for slow evenings, discreet delivery and a softer
                kind of confidence.
              </p>
            </div>
            <div className="border-l border-[#9C7548]/26 bg-[#F2EADC]/42 px-5 py-4">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-[#3D2E26]/48">
                Boutique note
              </span>
              <p className="font-serif text-xl italic leading-8 text-[#3D2E26]/78">
                Curated pieces for quiet confidence.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-start">
          <div className="flex w-full flex-col space-y-7">
            <div className="flex flex-col gap-5 border border-[#9C7548]/14 bg-[#F2EADC]/34 px-4 py-5 shadow-[0_18px_60px_rgba(42,24,32,0.04)] sm:px-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-[#9C7548]">
                    01 / Collection
                  </span>
                  <h2 className="text-2xl font-medium text-[#3D2E26] md:text-[32px]">
                    Explore the Collection
                  </h2>
                  <span className="mt-2 block text-sm text-[#3D2E26]/55">
                    Showing {products.length} of {allProductsData.length} pieces
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border border-[#9C7548]/14 bg-[#E8DECD]/42 p-1">
                {sortOptions.map((option) => (
                  <Link
                    key={option.value}
                    href={getSortHref(option.value, selectedCategory)}
                    className={cn([
                      "px-3 py-2 text-sm transition-all duration-300",
                      selectedSort === option.value
                        ? "bg-[#F2EADC] text-[#3D2E26] shadow-[0_8px_22px_rgba(42,24,32,0.06)]"
                        : "text-[#3D2E26]/58 hover:bg-[#F2EADC]/60 hover:text-[#9C7548]",
                    ])}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto border-y border-[#9C7548]/14 py-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={getCategoryHref(category, selectedSort)}
                  className={cn([
                    "shrink-0 border px-4 py-2 text-sm transition-all duration-300",
                    selectedCategory === category
                      ? "border-[#9C7548]/55 bg-[#2A1820] text-[#F2EADC]"
                      : "border-[#9C7548]/14 bg-[#F2EADC]/28 text-[#3D2E26]/62 hover:border-[#9C7548]/45 hover:bg-[#F2EADC]/70 hover:text-[#9C7548]",
                  ])}
                >
                  {category}
                </Link>
              ))}
            </div>

            <div className="grid w-full grid-cols-1 gap-x-8 gap-y-14 xs:grid-cols-2 md:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} theme="dark" />
              ))}
            </div>

            <section className="grid gap-3 border-t border-[#9C7548]/18 pt-8 sm:grid-cols-3">
              {[
                "Discreet UK Packaging",
                "Refined Boutique Edit",
                "Carefully Selected Pieces",
              ].map((item, index) => (
                <div
                  key={item}
                  className="border border-[#9C7548]/14 bg-[#F2EADC]/32 px-5 py-5"
                >
                  <span className="mb-3 block text-[11px] uppercase tracking-[0.22em] text-[#9C7548]">
                    0{index + 2}
                  </span>
                  <h3 className="text-base font-medium text-[#3D2E26]">
                    {item}
                  </h3>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
