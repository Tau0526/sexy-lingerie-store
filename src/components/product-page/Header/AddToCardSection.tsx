"use client";

import CartCounter from "@/components/ui/CartCounter";
import React, { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { Product } from "@/types/product.types";

const AddToCardSection = ({ data }: { data: Product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full items-start justify-between border-t border-[#9C7548]/18 bg-[#F2EADC]/96 p-4 backdrop-blur sm:justify-start md:relative md:border-none md:bg-transparent md:p-0 md:backdrop-blur-0">
      <CartCounter
        onAdd={setQuantity}
        onRemove={setQuantity}
        className="border-[#9C7548]/32 bg-[#E8DECD]/72 text-[#3D2E26]"
      />
      <AddToCartBtn data={{ ...data, quantity }} />
    </div>
  );
};

export default AddToCardSection;
