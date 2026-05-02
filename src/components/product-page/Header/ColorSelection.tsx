"use client";

import {
  Color,
  setColorSelection,
} from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product.types";
import React, { useEffect } from "react";

const ColorSelection = ({ data }: { data: Product }) => {
  const { colorSelection } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  const colorsData: Color[] = data.colors;

  useEffect(() => {
    dispatch(setColorSelection({ name: "", code: "" }));
  }, [data.id, dispatch]);

  return (
    <div className="flex flex-col">
      <span className="mb-4 text-sm text-[#3D2E26]/70 sm:text-base">
        Select colour
      </span>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {colorsData.map((color, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              "flex min-h-11 items-center gap-2 rounded-sm border border-[#9C7548]/28 bg-[#F2EADC]/45 px-3 text-sm text-[#3D2E26] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#9C7548]/65 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2EADC] sm:px-4",
              colorSelection.name === color.name &&
                "border-[#2A1820] bg-[#E8DECD] text-[#2A1820]",
            ])}
            onClick={() => dispatch(setColorSelection(color))}
            aria-pressed={colorSelection.name === color.name}
          >
            <span
              className={cn(
                color.code,
                "h-3.5 w-3.5 rounded-full border border-[#3D2E26]/20 saturate-50"
              )}
              aria-hidden="true"
            />
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
