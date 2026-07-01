"use client";

import React from "react";
import WishlistButton from "@/components/common/WishlistButton";
import { Product } from "@/types/product.types";
import EnquireNowBtn from "./EnquireNowBtn";
import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";

const ProductEnquirySection = ({ data }: { data: Product }) => {
  const { colorSelection, sizeSelection } = useAppSelector(
    (state: RootState) => state.products
  );

  return (
    <div className="fixed bottom-0 left-0 z-10 w-full border-t border-moonlite-border/70 bg-moonlite-ivory/96 p-3 backdrop-blur sm:p-4 md:relative md:border-none md:bg-transparent md:p-0 md:backdrop-blur-0">
      <div className="mx-auto grid w-full max-w-frame gap-3 sm:grid-cols-[1fr_auto] md:max-w-none">
        <EnquireNowBtn
          data={data}
          selectedSize={sizeSelection}
          selectedColorName={colorSelection.name}
        />
        <WishlistButton
          productKey={data.slug}
          productId={data.id}
          productAliases={[String(data.id)]}
          productTitle={data.title}
          selectedSize={sizeSelection}
          selectedColorName={colorSelection.name}
          selectedColorValue={colorSelection.code}
          showLabel
          className="h-12 w-full self-end rounded-sm px-5 sm:w-auto md:h-[52px]"
          labelClassName="whitespace-nowrap"
        />
      </div>
    </div>
  );
};

export default ProductEnquirySection;
