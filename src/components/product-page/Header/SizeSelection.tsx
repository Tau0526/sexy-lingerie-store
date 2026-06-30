"use client";

import { setSizeSelection } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product.types";
import React, { useEffect } from "react";

const SizeSelection = ({ data }: { data: Product }) => {
  const { sizeSelection } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  const sizes = data.sizes;

  useEffect(() => {
    dispatch(setSizeSelection(""));
  }, [data.id, dispatch]);

  return (
    <div className="flex flex-col">
      <span className="mb-4 text-sm text-moonlite-taupe sm:text-base">
        Choose size
      </span>
      <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:items-center lg:gap-3">
        {sizes.map((size, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              "min-h-11 min-w-12 rounded-sm border border-moonlite-border/80 bg-moonlite-card/60 px-4 text-sm text-moonlite-espresso transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-moonlite-bronze/65 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moonlite-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory lg:px-6 lg:text-base",
              sizeSelection === size &&
                "border-moonlite-bronze bg-moonlite-bronze font-medium text-moonlite-ivory",
            ])}
            onClick={() => dispatch(setSizeSelection(size))}
            aria-pressed={sizeSelection === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
