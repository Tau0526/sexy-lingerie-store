import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
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
    <main className="bg-[#F2EADC] pb-24 text-[#3D2E26]">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="border-t border-[#9C7548]/18 pt-5 sm:pt-6">
          <BreadcrumbShop />
        </div>

        <section className="mb-10 border-b border-[#9C7548]/18 px-0 py-10 sm:py-14">
          <span className="mb-3 block text-xs uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1 className="mb-4 text-3xl font-medium leading-tight text-[#3D2E26] md:text-5xl">
            Shop Moonlite Studio
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-[#3D2E26]/62 sm:text-base">
            Elegant intimate pieces designed for confidence, comfort and quiet
            allure.
          </p>
        </section>

        <div className="flex items-start md:space-x-8">
          <aside className="hidden min-w-[220px] max-w-[220px] border-r border-[#9C7548]/14 pr-6 md:block">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.22em] text-[#3D2E26]/50">Refine</span>
            </div>
            <Filters />
          </aside>

          <div className="flex w-full flex-col space-y-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-medium text-[#3D2E26] md:text-[32px]">
                    Explore the Collection
                  </h2>
                  <span className="mt-2 block text-sm text-[#3D2E26]/55">
                    Showing {products.length} of {allProductsData.length} pieces
                  </span>
                </div>
                <MobileFilters />
              </div>

              <div className="flex flex-wrap gap-5">
                {sortOptions.map((option) => (
                  <Link
                    key={option.value}
                    href={getSortHref(option.value, selectedCategory)}
                    className={cn([
                      "border-b py-1 text-sm transition-colors",
                      selectedSort === option.value
                        ? "border-[#9C7548] text-[#3D2E26]"
                        : "border-transparent text-[#3D2E26]/58 hover:border-[#9C7548]/45 hover:text-[#9C7548]",
                    ])}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex gap-5 overflow-x-auto border-y border-[#9C7548]/14 py-4 md:flex">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={getCategoryHref(category, selectedSort)}
                  className={cn([
                    "shrink-0 border-b py-1 text-sm transition-colors",
                    selectedCategory === category
                      ? "border-[#9C7548] text-[#3D2E26]"
                      : "border-transparent text-[#3D2E26]/58 hover:border-[#9C7548]/45 hover:text-[#9C7548]",
                  ])}
                >
                  {category}
                </Link>
              ))}
            </div>

            <div className="grid w-full grid-cols-1 gap-x-7 gap-y-12 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
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
