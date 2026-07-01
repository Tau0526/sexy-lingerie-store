import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import { allProductsData } from "@/data/products";
import ShopFilters from "@/components/shop-page/ShopFilters";
import ShopHero from "@/components/shop-page/ShopHero";
import ShopProductCard from "@/components/shop-page/ShopProductCard";
import Link from "next/link";
import { ProductCategory } from "@/types/product.types";

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
    label: "Hair Care",
    value: "hair-care",
    matches: (category, title) =>
      category.toLowerCase().includes("hair") ||
      title.toLowerCase().includes("hair"),
  },
  { label: "Accessories", value: "accessories", category: "Accessories" },
  {
    label: "Noir Lace",
    value: "noir-lace",
    matches: (_category, title) => title.toLowerCase().includes("black"),
  },
  { label: "Soft Sleepwear", value: "soft-sleepwear", category: "Sleepwear" },
  {
    label: "Private Edit",
    value: "private-edit",
    matches: () => true,
  },
];

const visibleFilterValues = [
  "all",
  "lingerie-sets",
  "hair-care",
  "accessories",
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
  "hair-care": "hair-care",
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
  const visibleFilters = collectionFilters
    .filter((filter) => visibleFilterValues.includes(filter.value))
    .map((filter) => ({
      label: filter.label,
      value: filter.value,
      href: getFilterHref(filter, selectedSort),
    }));
  const heroProduct = allProductsData[0];

  return (
    <main className="silk-page overflow-x-hidden bg-moonlite-ivory pb-20 text-moonlite-espresso sm:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-moonlite-border/60 pt-5 sm:pt-6 lg:pt-7">
          <BreadcrumbShop />
        </div>

        <ShopHero
          imageSrc={heroProduct.srcUrl}
          imageAlt={heroProduct.srcAlt ?? `${heroProduct.title} product image`}
        />

        <ShopFilters
          filters={visibleFilters}
          selectedFilterValue={selectedFilter.value}
          productCount={products.length}
          totalCount={allProductsData.length}
        />

        {products.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {products.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-[#E8D8C7] bg-[#FBF7F0] px-5 py-12 text-center">
            <p className="text-sm leading-7 text-moonlite-taupe">
              This edit is being prepared. Explore the full Moonlite collection
              while new pieces are added.
            </p>
            <Link
              href="/shop"
              className="moonlite-link mt-4 inline-flex text-sm font-medium text-moonlite-espresso"
            >
              View all pieces
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}
