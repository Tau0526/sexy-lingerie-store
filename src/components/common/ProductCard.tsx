import React from "react";
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
  const label = data.tag ?? (data.isNew ? "New In" : "");

  return (
    <Link
      href={`/shop/product/${data.id}/${data.slug}`}
      className={cn([
        "group flex h-full flex-col transition-colors duration-300",
        isDark
          ? "text-[#3D2E26]"
          : "text-[#3D2E26]",
      ])}
    >
      <div
        className={cn([
          "relative w-full aspect-[4/5] overflow-hidden bg-[#E8DECD]",
          isDark ? "bg-[#E8DECD]" : "bg-[#E8DECD]",
        ])}
      >
        {label && (
          <span className="absolute left-3 top-3 z-[1] bg-[#F2EADC]/80 px-2 py-1 font-serif text-[11px] italic text-[#9C7548] backdrop-blur">
            {label}
          </span>
        )}
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="w-full h-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-88"
          alt={data.title}
          priority
        />
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <span
          className={cn([
            "mb-2 text-[11px] uppercase tracking-[0.18em]",
            isDark ? "text-[#3D2E26]/48" : "text-[#3D2E26]/48",
          ])}
        >
          {data.category}
        </span>
        <strong
          className={cn([
            "w-fit text-base font-medium leading-tight transition-all xl:text-lg group-hover:underline group-hover:decoration-[#9C7548] group-hover:decoration-[0.5px] group-hover:underline-offset-4",
            isDark ? "text-[#3D2E26]" : "text-[#3D2E26]",
          ])}
        >
          {data.title}
        </strong>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span
          className={
            isDark
              ? "text-sm font-normal text-[#3D2E26]/70"
              : "text-sm font-normal text-[#3D2E26]/70"
          }
        >
          {currency}
          {discountedPrice.toFixed(2)}
        </span>
      </div>
      </div>
    </Link>
  );
};

export default ProductCard;
