import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
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
    <main className="bg-[#05050a] pb-20 text-white">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="border-t border-white/10 pt-5 sm:pt-6">
          <BreadcrumbShop />
        </div>

        <section className="mb-8 rounded-[8px] border border-white/10 bg-[#0b0b14] px-5 py-8 shadow-[0_20px_80px_rgba(21,20,40,0.35)] sm:px-8">
          <span className="mb-3 block text-sm text-[#9bdfff]">
            Moonlite Studio
          </span>
          <h1 className="mb-3 text-3xl font-bold leading-tight md:text-5xl">
            Shop Moonlite Studio
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
            Elegant intimate pieces designed for confidence, comfort and quiet
            allure.
          </p>
        </section>

        <div className="flex items-start md:space-x-5">
          <aside className="hidden min-w-[275px] max-w-[275px] rounded-[8px] border border-white/10 bg-[#0b0b14] px-5 py-5 md:block md:px-6">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">Filters</span>
              <FiSliders className="text-2xl text-[#9bdfff]" />
            </div>
            <Filters />
          </aside>

          <div className="flex w-full flex-col space-y-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold md:text-[32px]">
                    Explore the Collection
                  </h2>
                  <span className="mt-2 block text-sm text-white/55">
                    Showing {products.length} of {allProductsData.length} pieces
                  </span>
                </div>
                <MobileFilters />
              </div>

              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                  <Link
                    key={option.value}
                    href={getSortHref(option.value, selectedCategory)}
                    className={cn([
                      "rounded-full border px-4 py-2 text-sm transition-all",
                      selectedSort === option.value
                        ? "border-[#9bdfff] bg-[#9bdfff] text-[#05050a]"
                        : "border-white/10 text-white/65 hover:border-[#9bdfff]/60 hover:text-white",
                    ])}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 md:hidden">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={getCategoryHref(category, selectedSort)}
                  className={cn([
                    "shrink-0 rounded-full border px-4 py-2 text-sm",
                    selectedCategory === category
                      ? "border-[#8b7cf6] bg-[#8b7cf6] text-white"
                      : "border-white/10 bg-white/5 text-white/70",
                  ])}
                >
                  {category}
                </Link>
              ))}
            </div>

            <div className="grid w-full grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} theme="dark" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
