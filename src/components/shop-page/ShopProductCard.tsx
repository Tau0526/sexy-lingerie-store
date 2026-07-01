import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import WishlistButton from "@/components/common/WishlistButton";

type ShopProductCardProps = {
  product: Product;
};

const colorFallbacks: Record<string, string> = {
  white: "#F5EFE6",
  ivory: "#F5EFE6",
  cream: "#F5EFE6",
  black: "#111111",
  blue: "#4B6F9B",
  red: "#B91C1C",
  burgundy: "#5B2538",
  plum: "#5B2538",
  green: "#047857",
  emerald: "#047857",
  nude: "#D8C2A8",
  beige: "#D8C2A8",
  gold: "#B08A55",
  grey: "#A8A29E",
  gray: "#A8A29E",
};

const getSwatchColor = (name: string, code: string) => {
  const hexFromCode = code.match(/#(?:[0-9a-fA-F]{3}){1,2}/)?.[0];

  if (hexFromCode) return hexFromCode;

  return colorFallbacks[name.toLowerCase()] ?? "";
};

const ShopProductCard = ({ product }: ShopProductCardProps) => {
  const productHref = `/shop/product/${product.id}/${product.slug}`;
  const visibleColors = product.colors
    .map((color) => ({
      ...color,
      swatchColor: getSwatchColor(color.name, color.code),
    }))
    .filter((color) => color.swatchColor)
    .slice(0, 4);

  return (
    <article className="group relative flex h-full overflow-hidden rounded-[18px] border border-[#E6D6C6] bg-[#FFFBF5] transition-all duration-300 hover:-translate-y-0.5 hover:border-moonlite-bronze/45">
      <WishlistButton
        productKey={product.slug}
        productAliases={[String(product.id)]}
        productTitle={product.title}
        className="absolute right-3 top-3 z-[2] h-9 w-9"
      />
      <Link
        href={productHref}
        className="flex h-full w-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3E9DA]">
          {product.isNew && (
            <span className="absolute left-3 top-3 z-[1] rounded-full border border-[#E6D6C6] bg-[#FFFBF5]/90 px-2.5 py-1 text-[9px] uppercase leading-none tracking-[0.16em] text-moonlite-bronze backdrop-blur-[2px]">
              New
            </span>
          )}
          <Image
            src={product.srcUrl}
            alt={product.srcAlt ?? `${product.title} product image`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 375px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </div>

        <div className="flex flex-1 flex-col items-center bg-[#FFFBF5] px-4 py-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.22em] text-moonlite-taupe/78">
            {product.category}
          </span>
          <h2 className="mt-1.5 font-serif text-[16px] font-normal leading-5 text-moonlite-espresso transition-colors duration-300 group-hover:text-moonlite-bronze">
            {product.title}
          </h2>

          {visibleColors.length > 0 && (
            <div className="mt-2.5 flex items-center justify-center gap-2">
              {visibleColors.map((color) => (
                <span
                  key={color.name}
                  title={color.name}
                  className="h-2.5 w-2.5 rounded-full border border-moonlite-border/85 shadow-[0_0_0_1px_rgba(255,251,245,0.9)] sm:h-3 sm:w-3"
                  style={{ backgroundColor: color.swatchColor }}
                />
              ))}
            </div>
          )}

          <span className="mt-2.5 text-sm font-medium text-moonlite-espresso">
            {"\u00a3"}
            {product.price.toFixed(2)}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ShopProductCard;
