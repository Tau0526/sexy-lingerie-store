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
    dispatch(setColorSelection({ name: "", code: "" }));
  }, [data.id, dispatch]);

  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base text-[#3D2E26]/62 mb-4">
        Select Colour
      </span>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {colorsData.map((color, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              color.code,
              "rounded-full w-11 sm:w-12 h-11 sm:h-12 flex items-center justify-center border border-[#9C7548]/28",
              colorSelection.name === color.name && "ring-1 ring-[#9C7548] ring-offset-2 ring-offset-[#F2EADC]",
            ])}
            onClick={() => dispatch(setColorSelection(color))}
            aria-label={color.name}
          >
            {colorSelection.name === color.name && (
              <IoMdCheckmark className="text-base text-[#F2EADC]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
