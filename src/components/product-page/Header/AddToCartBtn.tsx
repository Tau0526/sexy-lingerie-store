"use client";

import { addToCart } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { Product } from "@/types/product.types";
import React, { useState } from "react";

const AddToCartBtn = ({ data }: { data: Product & { quantity: number } }) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");
  const { sizeSelection, colorSelection } = useAppSelector(
    (state: RootState) => state.products
  );

  const handleAddToBag = () => {
    if (!sizeSelection) {
      setMessage("Please select a size.");
      return;
    }

    if (!colorSelection.name) {
      setMessage("Please select a colour.");
      return;
    }

    dispatch(
      addToCart({
        id: data.id,
        name: data.title,
        category: data.category,
        srcUrl: data.srcUrl,
        price: data.price,
        attributes: [sizeSelection, colorSelection.name],
        discount: data.discount,
        quantity: data.quantity,
      })
    );
    setMessage("Added to your bag.");
  };

  return (
    <div className="ml-3 flex w-full flex-col sm:ml-5">
      <button
        type="button"
        className="h-11 w-full rounded-sm bg-[#2A1820] text-sm font-medium text-[#F2EADC] transition-colors hover:bg-[#3D2E26] sm:text-base md:h-[52px]"
        onClick={handleAddToBag}
      >
        Add to Bag
      </button>
      {message && (
        <span
          className="mt-2 text-xs text-[#6F2F2B]"
          role={message.startsWith("Added") ? "status" : "alert"}
        >
          {message}
        </span>
      )}
    </div>
  );
};

export default AddToCartBtn;
