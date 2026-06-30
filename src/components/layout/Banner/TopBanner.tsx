"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const TopBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="border-b border-moonlite-gold/20 bg-moonlite-espresso px-2 py-1.5 text-center text-moonlite-ivory sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto">
        <p className="text-[10px] font-medium uppercase leading-4 tracking-[0.18em] text-moonlite-ivory/92 sm:text-[11px]">
          FREE UK DELIVERY OVER £50 | 100% DISCREET PACKAGING
        </p>
        <Button
          variant="ghost"
          className="absolute right-0 top-1/2 hidden h-fit w-fit -translate-y-1/2 p-1 text-moonlite-ivory/70 hover:bg-transparent hover:text-moonlite-champagne sm:flex"
          size="icon"
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close announcement banner"
        >
          <Image
            priority
            src="/icons/times.svg"
            height={13}
            width={13}
            alt=""
            className="opacity-70"
          />
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
