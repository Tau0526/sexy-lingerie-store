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
import { IoMdCheckmark } from "react-icons/io";

const ColorSelection = ({ data }: { data: Product }) => {
  const { colorSelection } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  const colorsData: Color[] = data.colors;

  useEffect(() => {
    if (!colorsData.some((color) => color.name === colorSelection.name)) {
      dispatch(setColorSelection(colorsData[0]));
    }
  }, [colorSelection.name, colorsData, dispatch]);

  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base text-white/60 mb-4">
        Select Colour
      </span>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {colorsData.map((color, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              color.code,
              "rounded-full w-11 sm:w-12 h-11 sm:h-12 flex items-center justify-center border border-white/20",
            ])}
            onClick={() => dispatch(setColorSelection(color))}
            aria-label={color.name}
          >
            {colorSelection.name === color.name && (
              <IoMdCheckmark className="text-base text-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
