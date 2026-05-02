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
      <span className="mb-4 text-sm text-[#3D2E26]/70 sm:text-base">
        Choose size
      </span>
      <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:items-center lg:gap-3">
        {sizes.map((size, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              "min-h-11 min-w-12 rounded-sm border border-[#9C7548]/28 bg-[#F2EADC]/45 px-4 text-sm text-[#3D2E26] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#9C7548]/65 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2EADC] lg:px-6 lg:text-base",
              sizeSelection === size &&
                "border-[#2A1820] bg-[#2A1820] font-medium text-[#F2EADC]",
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
