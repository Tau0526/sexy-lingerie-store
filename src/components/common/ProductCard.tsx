import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import { cn } from "@/lib/utils";

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
  const label = data.tag ?? (data.isNew ? "New In" : "Best Seller");

  return (
    <Link
      href={`/shop/product/${data.id}/${data.slug}`}
      className={cn([
        "group flex h-full flex-col overflow-hidden rounded-[8px] border transition-all duration-300",
        isDark
          ? "border-white/10 bg-[#0b0b12] hover:border-[#8b7cf6]/50"
          : "border-black/10 bg-white hover:border-[#8b7cf6]/40",
      ])}
    >
      <div
        className={cn([
          "relative w-full aspect-[4/5] overflow-hidden",
          isDark ? "bg-[#151421]" : "bg-[#f2eff7]",
        ])}
      >
        <span className="absolute left-3 top-3 z-[1] rounded-full border border-white/15 bg-[#11101a]/80 px-3 py-1 text-[11px] font-medium text-[#d8d2ff] backdrop-blur">
          {label}
        </span>
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          alt={data.title}
          priority
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span
          className={cn([
            "mb-2 text-xs uppercase",
            isDark ? "text-[#9bdfff]" : "text-[#5f55c8]",
          ])}
        >
          {data.category}
        </span>
        <strong
          className={cn([
            "text-base leading-tight xl:text-lg",
            isDark ? "text-white" : "text-black",
          ])}
        >
          {data.title}
        </strong>
      <div className="mt-3 flex items-end">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName={isDark ? "fill-white/10" : "fill-gray-100"}
          size={16}
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
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className={
            isDark
              ? "font-bold text-white text-xl"
              : "font-bold text-black text-xl"
          }
        >
          {currency}
          {discountedPrice.toFixed(2)}
        </span>
        {(data.discount.percentage > 0 || data.discount.amount > 0) && (
          <span
            className={
              isDark
                ? "font-bold text-white/35 line-through text-base"
                : "font-bold text-black/40 line-through text-base"
            }
          >
            {currency}
            {data.price.toFixed(2)}
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
      </div>
    </Link>
  );
};

export default ProductCard;
