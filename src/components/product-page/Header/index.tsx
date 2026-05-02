import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import AddToCardSection from "./AddToCardSection";

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
      <div className="grid grid-cols-1 gap-8 border-b border-[#9C7548]/18 pb-10 text-[#3D2E26] md:grid-cols-2 md:gap-12">
        <div>
          <PhotoSection data={data} />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-[#9C7548]">{data.category}</span>
          <h1
            className={cn([
              integralCF.className,
              "text-2xl md:text-[40px] md:leading-[44px] mt-3 mb-4 capitalize font-normal text-[#3D2E26]",
            ])}
          >
            {data.title}
          </h1>
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-6">
            <span className="text-xl font-normal text-[#3D2E26]/78 sm:text-2xl">
              {currency}
              {discountedPrice.toFixed(2)}
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#3D2E26]/64 mb-6 leading-7">
            {data.description}
          </p>
          <div className="mb-6 grid gap-3 border-l border-[#9C7548]/35 bg-[#E8DECD]/70 p-4 text-sm text-[#3D2E26]/62 sm:grid-cols-2">
            <div>
              <span className="mb-1 block font-medium text-[#3D2E26]">Material</span>
              <p>{data.material}</p>
            </div>
            <div>
              <span className="mb-1 block font-medium text-[#3D2E26]">Care</span>
              <p>{data.care}</p>
            </div>
          </div>
          <hr className="h-[1px] border-t-[#9C7548]/18 mb-5" />
          <ColorSelection data={data} />
          <hr className="h-[1px] border-t-[#9C7548]/18 my-5" />
          <SizeSelection data={data} />
          <div className="my-5 grid gap-3 sm:grid-cols-2">
            <div className="bg-[#E8DECD] p-4">
              <h2 className="mb-2 text-sm font-medium text-[#3D2E26]">
                Discreet Packaging
              </h2>
              <p className="text-sm leading-6 text-[#3D2E26]/62">
                Your order will be prepared in plain outer packaging for
                privacy.
              </p>
            </div>
            <div className="bg-[#E8DECD] p-4">
              <h2 className="mb-2 text-sm font-medium text-[#3D2E26]">
                Hygiene Returns Notice
              </h2>
              <p className="text-sm leading-6 text-[#3D2E26]/62">
                For hygiene reasons, intimate apparel can only be returned if
                unopened, unworn and in its original packaging, unless faulty.
              </p>
            </div>
          </div>
          <hr className="hidden md:block h-[1px] border-t-[#9C7548]/18 my-5" />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;
