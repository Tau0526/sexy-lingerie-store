import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import ProductEnquirySection from "./ProductEnquirySection";

const Header = ({ data }: { data: Product }) => {
  const currency = "\u00a3";
  const discountedPrice =
    data.discount.percentage > 0
      ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
      : data.discount.amount > 0
      ? data.price - data.discount.amount
      : data.price;

  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-0 pb-4 text-moonlite-espresso md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-6 lg:px-8">
        <div className="moonlite-reveal-delay">
          <PhotoSection data={data} />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-moonlite-bronze">
            {data.category}
          </span>
          <h1 className="mb-4 mt-3 text-3xl font-medium capitalize leading-tight text-moonlite-espresso md:text-[44px]">
            {data.title}
          </h1>
          <div className="mb-6 flex items-center space-x-2.5 sm:space-x-3">
            <span className="text-xl font-normal text-moonlite-espresso/78 sm:text-2xl">
              {currency}
              {discountedPrice.toFixed(2)}
            </span>
          </div>
          <p className="mb-6 text-sm leading-7 text-moonlite-taupe sm:text-base">
            {data.description}
          </p>
          {data.longDescription && (
            <p className="mb-6 text-sm leading-7 text-moonlite-taupe sm:text-base">
              {data.longDescription}
            </p>
          )}
          <div className="mb-6 grid gap-3 border-l border-moonlite-bronze/35 bg-moonlite-cream/54 p-4 text-sm text-moonlite-taupe transition-colors duration-500 hover:bg-moonlite-cream/74 sm:grid-cols-2">
            <div>
              <span className="mb-1 block font-medium text-moonlite-espresso">
                Material
              </span>
              <p>{data.material}</p>
            </div>
            <div>
              <span className="mb-1 block font-medium text-moonlite-espresso">
                Care
              </span>
              <p>{data.care}</p>
            </div>
          </div>
          <hr className="mb-5 h-[1px] border-t-moonlite-border/60" />
          <ColorSelection data={data} />
          <hr className="my-5 h-[1px] border-t-moonlite-border/60" />
          <SizeSelection data={data} />
          <hr className="my-5 hidden h-[1px] border-t-moonlite-border/60 md:block" />
          <ProductEnquirySection data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;
