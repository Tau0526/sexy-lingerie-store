import { cn } from "@/lib/utils";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto border-y border-[#9C7548]/18 px-0 pb-2 pt-10 text-center md:pt-16">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([
            "mb-8 text-[30px] font-medium capitalize leading-tight text-[#3D2E26] md:mb-14 md:text-[44px]",
          ])}
        >
          Shop By Category
        </motion.h2>
        <p className="mx-auto -mt-8 mb-10 max-w-xl text-sm leading-7 text-[#3D2E26]/58 md:-mt-10">
          Editorial edits for lace, sleepwear and private finishing details.
        </p>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-4 flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0 md:h-[270px] lg:h-[300px]"
        >
          <DressStyleCard
            title="Lingerie Sets"
            url="/shop?category=Lingerie+Sets"
            className="h-[190px] bg-[linear-gradient(90deg,rgba(42,24,32,0.42),rgba(42,24,32,0.04)),url('/images/dress-style-1.png')] md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px]"
          />
          <DressStyleCard
            title="Sleepwear"
            url="/shop?category=Sleepwear"
            className="h-[190px] bg-[linear-gradient(90deg,rgba(42,24,32,0.42),rgba(42,24,32,0.04)),url('/images/dress-style-2.png')] md:max-w-[684px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 md:h-[270px] lg:h-[300px]"
        >
          <DressStyleCard
            title="Slips & Chemises"
            url="/shop?category=Slips+%26+Chemises"
            className="h-[190px] bg-[linear-gradient(90deg,rgba(42,24,32,0.42),rgba(42,24,32,0.04)),url('/images/dress-style-3.png')] md:max-w-[684px]"
          />
          <DressStyleCard
            title="Accessories"
            url="/shop?category=Accessories"
            className="h-[190px] bg-[linear-gradient(90deg,rgba(42,24,32,0.42),rgba(42,24,32,0.04)),url('/images/dress-style-4.png')] md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px]"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
