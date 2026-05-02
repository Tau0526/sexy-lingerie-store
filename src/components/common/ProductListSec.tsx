import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import Link from "next/link";

type ProductListSecProps = {
  title: string;
  data: Product[];
  viewAllLink?: string;
  theme?: "light" | "dark";
};

const ProductListSec = ({
  title,
  data,
  viewAllLink,
  theme = "light",
}: ProductListSecProps) => {
  const isDark = theme === "dark";

  return (
    <section className="max-w-frame mx-auto text-center">
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([
          integralCF.className,
          isDark ? "text-[#3D2E26]" : "text-[#3D2E26]",
          "text-[32px] md:text-5xl mb-10 md:mb-16 capitalize font-normal",
        ])}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mb-8 md:mb-10"
        >
          <CarouselContent className="mx-4 xl:mx-0 space-x-5 sm:space-x-7">
            {data.map((product) => (
              <CarouselItem
                key={product.id}
                className="w-full max-w-[198px] sm:max-w-[295px] pl-0"
              >
                <ProductCard data={product} theme={theme} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {viewAllLink && (
          <div className="w-full px-4 sm:px-0 text-center">
            <Link
              href={viewAllLink}
              className={cn([
                isDark
                  ? "border-[#9C7548]/35 text-[#3D2E26] hover:border-[#9C7548] hover:text-[#9C7548]"
                  : "border-[#9C7548]/24 text-[#3D2E26] hover:border-[#9C7548] hover:text-[#9C7548]",
                "w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-sm transition-colors font-medium text-sm sm:text-base",
              ])}
            >
              View All
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProductListSec;
