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
  const rawLabel = data.tag ?? (data.isNew ? "New In" : "");
  const label = rawLabel === "New In" ? "Moonlite edit" : rawLabel;

  return (
    <Link
      href={`/shop/product/${data.id}/${data.slug}`}
      className={cn([
        "group flex h-full flex-col border border-transparent bg-transparent pb-1 transition-all duration-500 ease-out hover:border-[#9C7548]/30",
        isDark
          ? "text-[#3D2E26]"
          : "text-[#3D2E26]",
      ])}
    >
      <div
        className={cn([
          "relative aspect-[4/5] w-full overflow-hidden bg-[#E8DECD]",
          isDark ? "bg-[#E8DECD]" : "bg-[#E8DECD]",
        ])}
      >
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(242,234,220,0)_58%,rgba(42,24,32,0.22))] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
        {label && (
          <span className="absolute left-3 top-3 z-[2] border border-[#9C7548]/22 bg-[#F2EADC]/82 px-2.5 py-1 font-serif text-[11px] italic text-[#9C7548] backdrop-blur">
            {label}
          </span>
        )}
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-95"
          alt={data.srcAlt ?? `${data.title} product image`}
          priority
        />
        <span className="absolute bottom-3 right-3 z-[2] translate-y-2 border-b border-[#F2EADC]/70 pb-1 text-[11px] uppercase tracking-[0.18em] text-[#F2EADC] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          View piece
        </span>
      </div>
      <div className="flex flex-1 flex-col px-1 pt-4">
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
            "relative w-fit text-base font-medium leading-tight after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#9C7548] after:transition-all after:duration-500 group-hover:after:w-full xl:text-lg",
            isDark ? "text-[#3D2E26]" : "text-[#3D2E26]",
          ])}
        >
          {data.title}
        </strong>
        <p className="mt-2 text-sm leading-6 text-[#3D2E26]/56">
          Lace · Adjustable fit · Discreet packaging
        </p>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-[#9C7548]/14 pt-3">
          <span
            className={
              isDark
                ? "text-base font-medium text-[#3D2E26]"
                : "text-base font-medium text-[#3D2E26]"
            }
          >
            {currency}
            {data.price.toFixed(2)}
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-[#9C7548]/78 transition-colors duration-300 group-hover:text-[#9C7548]">
            Explore piece
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
