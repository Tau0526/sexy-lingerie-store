"use client";

import { Product } from "@/types/product.types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const PhotoSection = ({ data }: { data: Product }) => {
  const [selected, setSelected] = useState<string>(data.gallery?.[0] ?? data.srcUrl);
  const selectedIndex = data.gallery?.findIndex((photo) => photo === selected) ?? -1;
  const selectedAlt =
    selectedIndex >= 0
      ? data.galleryAlts?.[selectedIndex] ?? `${data.title} gallery image ${selectedIndex + 1}`
      : data.srcAlt ?? `${data.title} product image`;

  return (
    <div className="flex flex-col-reverse gap-3 lg:flex-row lg:gap-4">
      {data?.gallery && data.gallery.length > 0 && (
        <div className="flex w-full items-center justify-start gap-3 overflow-x-auto pb-1 lg:max-h-[600px] lg:w-fit lg:flex-col lg:justify-start lg:overflow-y-auto lg:pb-0 lg:pr-1">
          {data.gallery.map((photo, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                "aspect-square w-[78px] shrink-0 overflow-hidden rounded-md border bg-moonlite-cream transition-all duration-500 ease-out hover:border-moonlite-bronze/55 hover:opacity-90 sm:w-[96px] lg:w-[104px] xl:w-[118px]",
                selected === photo
                  ? "border-moonlite-bronze ring-1 ring-moonlite-bronze/35"
                  : "border-moonlite-border/70"
              )}
              onClick={() => setSelected(photo)}
              aria-label={`Show ${
                data.galleryAlts?.[index] ?? `${data.title} gallery image ${index + 1}`
              }`}
            >
              <Image
                src={photo}
                width={152}
                height={167}
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                alt={
                  data.galleryAlts?.[index] ??
                  `${data.title} gallery image ${index + 1}`
                }
                priority
              />
            </button>
          ))}
        </div>
      )}

      <div className="relative mb-3 flex min-h-[340px] w-full items-center justify-center overflow-hidden rounded-md border border-moonlite-border/70 bg-[#F8F1E8] sm:min-h-[500px] md:w-full lg:mb-0 lg:min-h-[600px]">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_15%,rgba(255,251,245,0.42),transparent_42%),linear-gradient(180deg,transparent_70%,rgba(47,33,27,0.05))]" />
        <Image
          key={selected}
          src={selected}
          width={444}
          height={530}
          className="h-full w-full object-contain p-4 moonlite-reveal sm:p-6"
          alt={selectedAlt}
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default PhotoSection;
