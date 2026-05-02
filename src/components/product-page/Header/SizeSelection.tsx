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
    if (!sizes.includes(sizeSelection)) {
      dispatch(setSizeSelection(sizes[0]));
    }
  }, [dispatch, sizeSelection, sizes]);

  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base text-white/60 mb-4">
        Choose Size
      </span>
      <div className="flex flex-wrap items-center gap-2 lg:gap-3">
        {sizes.map((size, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              "min-w-12 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white/75 transition-all lg:px-6 lg:text-base",
              sizeSelection === size &&
                "border-[#9bdfff] bg-[#9bdfff] font-medium text-[#05050a]",
            ])}
            onClick={() => dispatch(setSizeSelection(size))}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
