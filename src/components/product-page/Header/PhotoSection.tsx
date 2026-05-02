"use client";

import { Product } from "@/types/product.types";
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
    <div className="flex flex-col-reverse lg:flex-row lg:space-x-3.5">
      {data?.gallery && data.gallery.length > 0 && (
        <div className="flex w-full items-center justify-center space-x-3 overflow-x-auto pb-1 lg:max-h-[530px] lg:w-fit lg:flex-col lg:justify-start lg:space-x-0 lg:space-y-3.5 lg:overflow-y-auto lg:pb-0 lg:pr-1">
          {data.gallery.map((photo, index) => (
            <button
              key={index}
              type="button"
              className="aspect-square w-full max-w-[111px] shrink-0 overflow-hidden border border-[#9C7548]/14 bg-[#E8DECD] max-h-[106px] xl:max-w-[152px] xl:max-h-[167px] xl:min-h-[167px]"
              onClick={() => setSelected(photo)}
              aria-label={`Show ${
                data.galleryAlts?.[index] ?? `${data.title} gallery image ${index + 1}`
              }`}
            >
              <Image
                src={photo}
                width={152}
                height={167}
                className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-85"
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

      <div className="flex items-center justify-center bg-[#E8DECD] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">
        <Image
          src={selected}
          width={444}
          height={530}
          className="w-full h-full object-cover"
          alt={selectedAlt}
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default PhotoSection;
