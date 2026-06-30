import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
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
    <section className="max-w-frame mx-auto px-4 text-center xl:px-0">
      <motion.p
        initial={{ y: "28px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-moonlite-bronze"
      >
        {title === "New Collection" ? "01 / New Collection" : "02 / Moonlite Edit"}
      </motion.p>
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([
          isDark ? "text-moonlite-espresso" : "text-moonlite-espresso",
          "mb-4 text-lg font-medium uppercase leading-tight tracking-[0.28em] md:text-xl",
        ])}
      >
        {title}
      </motion.h2>
      <span className="mx-auto mb-10 block h-px w-20 bg-moonlite-bronze/60 md:mb-12" />
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
          className="mb-8 w-full md:mb-10"
        >
          <CarouselContent className="space-x-5 sm:space-x-8">
            {data.map((product) => (
              <CarouselItem
                key={product.id}
                className="w-full max-w-[205px] pl-0 sm:max-w-[300px]"
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
                "moonlite-link inline-block w-full rounded-sm border px-[54px] py-4 text-sm font-medium transition-colors sm:w-[218px] sm:text-base",
              ])}
            >
              View Collection
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProductListSec;
