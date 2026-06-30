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

const colourHexMap: Record<string, string> = {
  black: "#1F1A17",
  blue: "#2F5F96",
  red: "#7F2732",
  white: "#F4EFE7",
  ivory: "#F2EADC",
  pink: "#C9A28F",
  purple: "#6D5872",
};

const getSwatchColour = (color: Color) => {
  const hexFromClass = color.code.match(/#(?:[0-9a-fA-F]{3}){1,2}/)?.[0];

  if (hexFromClass) return hexFromClass;

  return colourHexMap[color.name.toLowerCase()] ?? "#9C7548";
};

const ColorSelection = ({ data }: { data: Product }) => {
  const { colorSelection } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  const colorsData: Color[] = data.colors;
  const selectedColorName = colorSelection.name;

  useEffect(() => {
    dispatch(setColorSelection({ name: "", code: "" }));
  }, [data.id, dispatch]);

  return (
    <div className="flex flex-col">
      <span className="mb-4 text-sm text-moonlite-taupe sm:text-base">
        Select colour
      </span>
      <div
        className="flex flex-wrap items-center gap-3"
        role="radiogroup"
        aria-label="Select colour"
      >
        {colorsData.map((color) => {
          const isSelected = selectedColorName === color.name;
          const swatchColour = getSwatchColour(color);

          return (
            <button
              key={color.name}
              type="button"
              className={cn([
                "flex h-11 w-11 items-center justify-center rounded-full border border-moonlite-border/80 bg-moonlite-card/60 p-1 transition-all duration-300 ease-out hover:scale-105 hover:border-moonlite-bronze/70 hover:shadow-[0_8px_22px_rgba(47,33,27,0.08)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moonlite-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory",
                isSelected &&
                  "border-moonlite-bronze bg-moonlite-cream shadow-[0_8px_24px_rgba(47,33,27,0.08)] ring-1 ring-moonlite-bronze/70 ring-offset-2 ring-offset-moonlite-ivory",
              ])}
              onClick={() => dispatch(setColorSelection(color))}
              aria-label={`Select colour ${color.name}`}
              aria-checked={isSelected}
              role="radio"
              title={color.name}
            >
              <span
                className="h-full w-full rounded-full border border-moonlite-espresso/18"
                style={{ backgroundColor: swatchColour }}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
      {selectedColorName && (
        <span className="mt-3 text-xs text-moonlite-taupe">
          Selected: {selectedColorName}
        </span>
      )}
    </div>
  );
};

export default ColorSelection;
