"use client";

import { MouseEvent } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/hooks/useWishlist";

type WishlistButtonProps = {
  productKey: string;
  productId?: number;
  productAliases?: string[];
  productTitle: string;
  selectedSize?: string;
  selectedColorName?: string;
  selectedColorValue?: string;
  className?: string;
  labelClassName?: string;
  showLabel?: boolean;
};

const WishlistButton = ({
  productKey,
  productId,
  productAliases = [],
  productTitle,
  selectedSize,
  selectedColorName,
  selectedColorValue,
  className,
  labelClassName,
  showLabel = false,
}: WishlistButtonProps) => {
  const { isSaved, toggleWishlist } = useWishlist(productKey, productAliases, {
    productId,
    selectedSize,
    selectedColorName,
    selectedColorValue,
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    toggleWishlist();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isSaved}
      aria-label={
        isSaved
          ? `Remove ${productTitle} from wishlist`
          : `Save ${productTitle} to wishlist`
      }
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-moonlite-border/80 bg-moonlite-card/88 text-moonlite-bronze shadow-[0_8px_18px_rgba(61,46,38,0.08)] backdrop-blur transition-all duration-300 hover:border-moonlite-bronze hover:bg-moonlite-cream hover:text-moonlite-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory",
        isSaved && "border-moonlite-bronze bg-moonlite-cream text-moonlite-hover",
        className
      )}
    >
      <Heart
        size={16}
        strokeWidth={1.7}
        fill={isSaved ? "currentColor" : "none"}
      />
      {showLabel && (
        <span
          className={cn(
            "text-xs font-medium uppercase tracking-[0.12em]",
            labelClassName
          )}
        >
          {isSaved ? "Saved" : "Save to wishlist"}
        </span>
      )}
    </button>
  );
};

export default WishlistButton;
