"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShopFilterOption = {
  label: string;
  value: string;
  href: string;
};

export type ShopDropdownOption = ShopFilterOption;

type ShopFiltersProps = {
  filters: ShopFilterOption[];
  selectedFilterValue: string;
  sizeOptions: ShopDropdownOption[];
  selectedSize?: string;
  colorOptions: ShopDropdownOption[];
  selectedColor?: string;
  priceOptions: ShopDropdownOption[];
  selectedSort: string;
  clearFiltersHref: string;
  hasDetailFilters: boolean;
  productCount: number;
  totalCount: number;
};

type DropdownGroupProps = {
  id: "size" | "color" | "price";
  label: string;
  buttonLabel: string;
  options: ShopDropdownOption[];
  selectedValue?: string;
  isOpen: boolean;
  onOpen: (id: "size" | "color" | "price") => void;
  onClose: () => void;
  align?: "left" | "right";
};

const priceLabels: Record<string, string> = {
  featured: "Featured",
  "low-price": "Low to High",
  "high-price": "High to Low",
};

const DropdownGroup = ({
  id,
  label,
  buttonLabel,
  options,
  selectedValue = "all",
  isOpen,
  onOpen,
  onClose,
  align = "right",
}: DropdownGroupProps) => (
  <div
    className="relative inline-flex min-w-0"
    onMouseEnter={() => onOpen(id)}
    onMouseLeave={onClose}
    onKeyDown={(event) => {
      if (event.key === "Escape") onClose();
    }}
  >
    <button
      type="button"
      onClick={() => (isOpen ? onClose() : onOpen(id))}
      className={cn(
        "inline-flex h-9 min-w-[86px] max-w-[calc(100vw-2rem)] cursor-pointer items-center justify-center gap-2 rounded-full border border-[#E4D4C4] bg-transparent px-4 text-xs font-medium leading-none tracking-[0.14em] text-moonlite-espresso transition-colors duration-300 hover:border-moonlite-bronze/70 hover:bg-moonlite-card/60 focus-visible:border-moonlite-bronze/80 focus-visible:bg-moonlite-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory",
        isOpen && "border-moonlite-bronze/80 bg-moonlite-card/70"
      )}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      aria-label={`${label} filter`}
    >
      <span className="truncate">{buttonLabel}</span>
      <ChevronDown
        size={14}
        strokeWidth={1.6}
        aria-hidden="true"
        className={cn(
          "transition-transform duration-300",
          isOpen && "rotate-180"
        )}
      />
    </button>
    <div
      className={cn(
        "absolute top-full z-20 w-max min-w-[160px] max-w-[min(18rem,calc(100vw-2rem))] pt-2 transition-all duration-200",
        align === "left" ? "left-0" : "right-0",
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      )}
      role="menu"
      aria-label={`${label} options`}
    >
      <div className="max-h-[300px] overflow-y-auto rounded-2xl border border-[#E4D4C4] bg-[#FFFBF6] py-2 shadow-[0_18px_45px_rgba(64,37,24,0.14)]">
        <div className="px-3 pb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-moonlite-taupe">
          {label}
        </div>
        {options.map((option) => {
          const isSelected = option.value === selectedValue;

          return (
            <Link
              key={option.value}
              href={option.href}
              className={cn(
                "block px-3 py-2 text-sm transition-colors duration-200",
                isSelected
                  ? "bg-moonlite-card text-moonlite-espresso"
                  : "text-moonlite-taupe hover:bg-moonlite-card/70 hover:text-moonlite-espresso"
              )}
              aria-current={isSelected ? "true" : undefined}
              role="menuitem"
              onClick={onClose}
            >
              {option.label}
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

const ShopFilters = ({
  filters,
  selectedFilterValue,
  sizeOptions,
  selectedSize,
  colorOptions,
  selectedColor,
  priceOptions,
  selectedSort,
  clearFiltersHref,
  hasDetailFilters,
  productCount,
  totalCount,
}: ShopFiltersProps) => {
  const [openDropdown, setOpenDropdown] = useState<
    "size" | "color" | "price" | null
  >(null);
  const selectedColorLabel = colorOptions.find(
    (option) => option.value === selectedColor
  )?.label;
  const sizeButtonLabel = selectedSize ? `SIZE: ${selectedSize}` : "SIZE";
  const colorButtonLabel = selectedColorLabel
    ? `COLOR: ${selectedColorLabel}`
    : "COLOR";
  const priceButtonLabel =
    selectedSort === "featured"
      ? "PRICE"
      : `PRICE: ${priceLabels[selectedSort] ?? "Featured"}`;

  return (
    <section className="mb-7 border-y border-[#E4D4C4] py-4 lg:mb-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
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

          {hasDetailFilters ? (
            <Link
              href={clearFiltersHref}
              className="inline-flex h-9 items-center text-xs font-medium uppercase tracking-[0.14em] text-moonlite-taupe transition-colors duration-300 hover:text-moonlite-espresso"
            >
              Clear filters
            </Link>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-wrap gap-2 lg:justify-end">
          <DropdownGroup
            id="size"
            label="Size"
            buttonLabel={sizeButtonLabel}
            options={sizeOptions}
            selectedValue={selectedSize ?? "all"}
            isOpen={openDropdown === "size"}
            onOpen={(id) => setOpenDropdown(id)}
            onClose={() => setOpenDropdown(null)}
            align="left"
          />
          <DropdownGroup
            id="color"
            label="Color"
            buttonLabel={colorButtonLabel}
            options={colorOptions}
            selectedValue={selectedColor ?? "all"}
            isOpen={openDropdown === "color"}
            onOpen={(id) => setOpenDropdown(id)}
            onClose={() => setOpenDropdown(null)}
          />
          <DropdownGroup
            id="price"
            label="Price"
            buttonLabel={priceButtonLabel}
            options={priceOptions}
            selectedValue={selectedSort}
            isOpen={openDropdown === "price"}
            onOpen={(id) => setOpenDropdown(id)}
            onClose={() => setOpenDropdown(null)}
          />
        </div>
      </div>
      <p className="mt-3 text-xs text-moonlite-taupe">
        Showing {productCount} of {totalCount} pieces
      </p>
    </section>
  );
};

export default ShopFilters;
