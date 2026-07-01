import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShopFilterOption = {
  label: string;
  value: string;
  href: string;
};

type ShopFiltersProps = {
  filters: ShopFilterOption[];
  selectedFilterValue: string;
  productCount: number;
  totalCount: number;
};

const dropdownLabels = ["SIZE", "COLOR", "PRICE"];

const ShopFilters = ({
  filters,
  selectedFilterValue,
}: ShopFiltersProps) => {
  return (
    <section className="mb-7 border-y border-[#E4D4C4] py-4 lg:mb-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <nav
          className="flex flex-wrap gap-2"
          aria-label="Collection filters"
        >
          {filters.map((filter) => (
            <Link
              key={filter.value}
              href={filter.href}
              className={cn(
                "inline-flex h-9 shrink-0 items-center rounded-full border px-4 text-sm leading-none transition-colors duration-300",
                selectedFilterValue === filter.value
                  ? "border-moonlite-bronze bg-moonlite-bronze text-moonlite-ivory"
                  : "border-[#E4D4C4] bg-transparent text-moonlite-espresso hover:border-moonlite-bronze/70 hover:bg-moonlite-card/60"
              )}
            >
              {filter.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {dropdownLabels.map((label) => (
            <button
              key={label}
              type="button"
              className="inline-flex h-9 min-w-[86px] items-center justify-center gap-2 rounded-full border border-[#E4D4C4] bg-transparent px-4 text-xs font-medium leading-none tracking-[0.18em] text-moonlite-espresso transition-colors duration-300 hover:border-moonlite-bronze/70 hover:bg-moonlite-card/60"
            >
              {label}
              <ChevronDown size={14} strokeWidth={1.6} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopFilters;
