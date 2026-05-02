import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
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
      <div className="grid grid-cols-1 gap-6 rounded-[8px] border border-white/10 bg-[#080810] p-4 text-white md:grid-cols-2 md:p-6">
        <div>
          <PhotoSection data={data} />
        </div>
        <div>
          <span className="text-sm text-[#9bdfff]">{data.category}</span>
          <h1
            className={cn([
              integralCF.className,
              "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize text-white",
            ])}
          >
            {data.title}
          </h1>
          <div className="flex items-center mb-3 sm:mb-3.5">
            <Rating
              initialValue={data.rating}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-white/10"
              size={25}
              readonly
            />
            <span className="text-white text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0">
              {data.rating.toFixed(1)}
              <span className="text-white/60">/5</span>
            </span>
          </div>
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            <span className="font-bold text-white text-2xl sm:text-[32px]">
              {currency}
              {discountedPrice.toFixed(2)}
            </span>
            {(data.discount.percentage > 0 || data.discount.amount > 0) && (
              <span className="font-bold text-white/35 line-through text-2xl sm:text-[32px]">
                {currency}
                {data.price.toFixed(2)}
              </span>
            )}
            {data.discount.percentage > 0 ? (
              <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#9bdfff]/10 text-[#9bdfff]">
                {`-${data.discount.percentage}%`}
              </span>
            ) : (
              data.discount.amount > 0 && (
                <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#9bdfff]/10 text-[#9bdfff]">
                  {`-${currency}${data.discount.amount}`}
                </span>
              )
            )}
          </div>
          <p className="text-sm sm:text-base text-white/65 mb-5 leading-6">
            {data.description}
          </p>
          <div className="mb-5 grid gap-3 rounded-[8px] border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70 sm:grid-cols-2">
            <div>
              <span className="mb-1 block font-medium text-white">Material</span>
              <p>{data.material}</p>
            </div>
            <div>
              <span className="mb-1 block font-medium text-white">Care</span>
              <p>{data.care}</p>
            </div>
          </div>
          <hr className="h-[1px] border-t-white/10 mb-5" />
          <ColorSelection data={data} />
          <hr className="h-[1px] border-t-white/10 my-5" />
          <SizeSelection data={data} />
          <div className="my-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
              <h2 className="mb-2 text-sm font-bold text-white">
                Discreet Packaging
              </h2>
              <p className="text-sm leading-6 text-white/60">
                Your order will be prepared in plain outer packaging for
                privacy.
              </p>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
              <h2 className="mb-2 text-sm font-bold text-white">
                Hygiene Returns Notice
              </h2>
              <p className="text-sm leading-6 text-white/60">
                For hygiene reasons, intimate apparel can only be returned if
                unopened, unworn and in its original packaging, unless faulty.
              </p>
            </div>
          </div>
          <hr className="hidden md:block h-[1px] border-t-white/10 my-5" />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;
