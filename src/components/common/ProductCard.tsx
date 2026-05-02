import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
  theme?: "light" | "dark";
};

const ProductCard = ({ data, theme = "light" }: ProductCardProps) => {
  const currency = "\u00a3";
  const isDark = theme === "dark";
  const discountedPrice =
    data.discount.percentage > 0
      ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
      : data.discount.amount > 0
      ? data.price - data.discount.amount
      : data.price;

  return (
    <Link
      href={`/shop/product/${data.id}/${data.slug}`}
      className="flex flex-col items-start aspect-auto"
    >
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
        />
      </div>
      <strong
        className={isDark ? "text-white xl:text-xl" : "text-black xl:text-xl"}
      >
        {data.title}
      </strong>
      <div className="flex items-end mb-1 xl:mb-2">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span
          className={
            isDark
              ? "text-white text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0"
              : "text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0"
          }
        >
          {data.rating.toFixed(1)}
          <span className={isDark ? "text-white/55" : "text-black/60"}>/5</span>
        </span>
      </div>
      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        <span
          className={
            isDark
              ? "font-bold text-white text-xl xl:text-2xl"
              : "font-bold text-black text-xl xl:text-2xl"
          }
        >
          {currency}
          {discountedPrice}
        </span>
        {(data.discount.percentage > 0 || data.discount.amount > 0) && (
          <span
            className={
              isDark
                ? "font-bold text-white/35 line-through text-xl xl:text-2xl"
                : "font-bold text-black/40 line-through text-xl xl:text-2xl"
            }
          >
            {currency}
            {data.price}
          </span>
        )}
        {data.discount.percentage > 0 ? (
          <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#9bdfff]/10 text-[#9bdfff]">
            {`-${data.discount.percentage}%`}
          </span>
        ) : (
          data.discount.amount > 0 && (
            <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#9bdfff]/10 text-[#9bdfff]">
              {`-${currency}${data.discount.amount}`}
            </span>
          )
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
