import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

type ProductCardProps = {
  data: Product;
  theme?: "light" | "dark";
};

const ProductCard = ({ data, theme = "light" }: ProductCardProps) => {
  const isDark = theme === "dark";
  const rawLabel = data.tag ?? (data.isNew ? "New In" : "");
  const label = rawLabel === "New In" ? "Moonlite edit" : rawLabel;
  const currency = "\u00a3";

  return (
    <Link
      href={`/shop/product/${data.id}/${data.slug}`}
      className={cn([
        "group flex h-full min-w-0 flex-col bg-transparent pb-1 text-center outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory",
        isDark ? "text-[#3D2E26]" : "text-[#3D2E26]",
      ])}
    >
      <div
        className={cn([
          "relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-md bg-[#F8F1E8] transition-colors duration-500 group-hover:bg-[#F4E9DC]",
          isDark ? "bg-[#F7F0E7]" : "bg-[#F7F0E7]",
        ])}
      >
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(250,247,241,0)_58%,rgba(61,46,38,0.08))] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
        {label && (
          <span className="absolute left-3 top-3 z-[2] border border-[#D8B98A]/52 bg-[#FAF7F1]/84 px-2.5 py-1 font-serif text-[11px] italic text-[#9C7548] backdrop-blur">
            {label}
          </span>
        )}
        <span className="absolute right-3 top-3 z-[2] flex h-8 w-8 items-center justify-center rounded-full bg-moonlite-card/84 text-moonlite-bronze shadow-[0_8px_18px_rgba(61,46,38,0.08)] backdrop-blur">
          <Heart size={15} strokeWidth={1.6} />
        </span>
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="h-full w-full object-contain p-5 transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-95"
          alt={data.srcAlt ?? `${data.title} product image`}
          priority
        />
        <span className="absolute bottom-3 right-3 z-[2] translate-y-2 border-b border-moonlite-bronze/70 pb-1 text-[11px] uppercase tracking-[0.18em] text-moonlite-bronze opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          View piece
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center px-1">
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
            "relative min-h-12 text-center text-base font-medium leading-6 after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[#9C7548] after:transition-all after:duration-500 group-hover:after:w-full xl:text-lg",
            isDark ? "text-[#3D2E26]" : "text-[#3D2E26]",
          ])}
        >
          {data.title}
        </strong>
        <span className="mt-2 text-sm text-moonlite-taupe">
          {currency}
          {data.price.toFixed(2)}
        </span>
        <div className="mt-3 flex justify-center gap-2">
          {data.colors.slice(0, 3).map((color) => (
            <span
              key={color.name}
              className={cn(
                "h-2.5 w-2.5 rounded-full border border-moonlite-border/70",
                color.code
              )}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
